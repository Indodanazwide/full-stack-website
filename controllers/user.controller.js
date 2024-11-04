import db from '../database/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

/*

name VARCHAR(50) NOT NULL,
surname VARCHAR(50) NOT NULL,
username VARCHAR(50) UNIQUE NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
role ENUM('admin', 'customer', 'staff') DEFAULT 'customer',
password CHAR(60) NOT NULL

*/

export const signup = async (req, res) => {
    const { name, surname, username, email, role, password } = req.body

    try {
        if (!['admin', 'staff', 'customer'].includes(role)) {
            return res.status(400).json({ error: 'Invalid user role' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const [user] = await db.execute('INSERT INTO User (name, surname, username, email, role, password) VALUES (?, ?, ?, ?, ?, ?)', [name, surname, username, email, role, hashedPassword])

        const token = jwt.sign({id: user.insertId, role: role }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.status(201).json({
            message: 'User created successfully',
            token,
            id: user.insertId,
            role: role
        })

    } catch (error) {

        if (error.code == 'ER_DUP_ENTRY') {
            res.status(409).json({ error: 'Username or email already exists' })
        } else {
            console.error(error)
            res.status(500).json({ error: `Error occured while signing up the user ${error}` })
        }
    }
}

export const login = async (req, res) => {

    const { email, password } = req.body

    try {

        const [result] = await db.execute('SELECT * FROM User WHERE email = ?', [email])

        if (result.length === 0) {
            return res.status(401).json({ error: 'Invalid username' });
        }

        const user = result[0]

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h'})

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                surname: user.surname,
                username: user.username,
                email: user.email,
                role: user.role
            }
        })
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: `Error occured while logging the user ${error}` })
    }
}

export const getProfile = async (req, res) => {
    const { id } = req.params;  // Assuming `id` is passed as a URL parameter

    try {
        const [result] = await db.execute('SELECT id, name, surname, username, email, role FROM User WHERE id = ?', [id]);

        if (result.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(result[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while retrieving the profile: ${error}` });
    }
};

export const updateProfile = async (req, res) => {
    const { id } = req.params;
    const { name, surname, username, email } = req.body;

    try {
        const [result] = await db.execute(
            'UPDATE User SET name = ?, surname = ?, username = ?, email = ? WHERE id = ?',
            [name, surname, username, email, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ error: 'Username or email already exists' });
        } else {
            console.error(error);
            res.status(500).json({ error: `Error occurred while updating the profile: ${error}` });
        }
    }
};

export const deleteProfile = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.execute('DELETE FROM User WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while deleting the user: ${error}` });
    }
};

