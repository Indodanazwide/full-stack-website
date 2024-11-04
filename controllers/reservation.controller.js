import db from '../database/db.js'

/*

CREATE TABLE TableEntity (
    id INT PRIMARY KEY AUTO_INCREMENT,
    table_number INT NOT NULL UNIQUE,
    location VARCHAR(50),
    seats INT NOT NULL CHECK (seats > 0)
);

CREATE TABLE Reservation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    table_id INT,  -- Allowing table_id to be NULL for ON DELETE SET NULL
    time DATETIME NOT NULL,
    number_of_people INT CHECK (number_of_people > 0),
    status ENUM('confirmed', 'pending', 'cancelled') DEFAULT 'pending',
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (table_id) REFERENCES TableEntity(id) ON DELETE SET NULL ON UPDATE CASCADE
);

*/

// CRUD table
export const createTable = async (req, res) => {

    const { table_number, location, seats } = req.body

    try {
        
        const [result] = await db.execute('INSERT INTO TableEntity (table_number, location, seats) VALUES (?, ?, ?)', [table_number, location, seats])

        res.status(201).json({
            message: 'Table created successfully',
            tableId: result.insertId
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: `Error occurred while creating the table: ${error}` })
    }

}

export const readTable = async (req, res) => {
    const { id } = req.params

    try {
        const [result] = id
            ? await db.execute('SELECT * FROM TableEntity WHERE id = ?', [id])
            : await db.execute('SELECT * FROM TableEntity')

        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: `Error occurred while reading table(s): ${error}` })
    }
};

export const updateTable = async (req, res) => {
    const { id } = req.params
    const { table_number, location, seats } = req.body

    try {
        const [result] = await db.execute(
            'UPDATE TableEntity SET table_number = ?, location = ?, seats = ? WHERE id = ?',
            [table_number, location, seats, id]
        )

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Table not found' })
        }

        res.status(200).json({ message: 'Table updated successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: `Error occurred while updating the table: ${error}` })
    }
};

export const deleteTable = async (req, res) => {
    const { id } = req.params

    try {
        const [result] = await db.execute('DELETE FROM TableEntity WHERE id = ?', [id])

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Table not found' })
        }

        res.status(200).json({ message: 'Table deleted successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: `Error occurred while deleting the table: ${error}` })
    }
}


// CRUD reservation
export const createReservation = async (req, res) => {
    const { user_id, table_id, time, number_of_people, status } = req.body

    try {
        const [result] = await db.execute(
            'INSERT INTO Reservation (user_id, table_id, time, number_of_people, status) VALUES (?, ?, ?, ?, ?)',
            [user_id, table_id, time, number_of_people, status]
        )

        res.status(201).json({
            message: 'Reservation created successfully',
            reservationId: result.insertId
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: `Error occurred while creating the reservation: ${error}` })
    }
}

export const readReservation = async (req, res) => {
    const { id } = req.params

    try {
        const [result] = id
            ? await db.execute('SELECT * FROM Reservation WHERE id = ?', [id])
            : await db.execute('SELECT * FROM Reservation')

        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: `Error occurred while reading reservation(s): ${error}` })
    }
}

export const updateReservation = async (req, res) => {
    const { id } = req.params
    const { table_id, time, number_of_people, status } = req.body

    try {
        const [result] = await db.execute(
            'UPDATE Reservation SET table_id = ?, time = ?, number_of_people = ?, status = ? WHERE id = ?',
            [table_id, time, number_of_people, status, id]
        )

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Reservation not found' })
        }

        res.status(200).json({ message: 'Reservation updated successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: `Error occurred while updating the reservation: ${error}` })
    }
}

export const deleteReservation = async (req, res) => {
    const { id } = req.params

    try {
        const [result] = await db.execute('DELETE FROM Reservation WHERE id = ?', [id])

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Reservation not found' })
        }

        res.status(200).json({ message: 'Reservation deleted successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: `Error occurred while deleting the reservation: ${error}` })
    }
}