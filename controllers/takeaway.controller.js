import db from '../database/db.js'

/*

CREATE TABLE Category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE Menu (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    image VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Category(id) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE Takeaway (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    menu_id INT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    status ENUM('ordered', 'prepared', 'delivered', 'cancelled') DEFAULT 'ordered',
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (menu_id) REFERENCES Menu(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Payment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    takeaway_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL CHECK (amount >= 0),
    payment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (takeaway_id) REFERENCES Takeaway(id) ON DELETE CASCADE ON UPDATE CASCADE
);

*/

export const createCategory = async (req, res) => {
    const { name } = req.body;

    try {
        const [result] = await db.execute(
            'INSERT INTO Category (name) VALUES (?)',
            [name]
        );

        res.status(201).json({
            message: 'Category created successfully',
            categoryId: result.insertId
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while creating the category: ${error}` });
    }
};

export const readCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = id
            ? await db.execute('SELECT * FROM Category WHERE id = ?', [id])
            : await db.execute('SELECT * FROM Category');

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while reading category: ${error}` });
    }
};

export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const [result] = await db.execute(
            'UPDATE Category SET name = ? WHERE id = ?',
            [name, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Category not found' });
        }

        res.status(200).json({ message: 'Category updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while updating the category: ${error}` });
    }
};

export const deleteCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.execute('DELETE FROM Category WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Category not found' });
        }

        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while deleting the category: ${error}` });
    }
};

export const createMenuItem = async (req, res) => {
    const { name, image, price, category_id } = req.body;

    try {
        const [result] = await db.execute(
            'INSERT INTO Menu (name, image, price, category_id) VALUES (?, ?, ?, ?)',
            [name, image, price, category_id]
        );

        res.status(201).json({
            message: 'Menu item created successfully',
            menuItemId: result.insertId
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while creating the menu item: ${error}` });
    }
};

export const readMenuItem = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = id
            ? await db.execute('SELECT * FROM Menu WHERE id = ?', [id])
            : await db.execute('SELECT * FROM Menu');

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while reading menu item(s): ${error}` });
    }
};

export const updateMenuItem = async (req, res) => {
    const { id } = req.params;
    const { name, image, price, category_id } = req.body;

    try {
        const [result] = await db.execute(
            'UPDATE Menu SET name = ?, image = ?, price = ?, category_id = ? WHERE id = ?',
            [name, image, price, category_id, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        res.status(200).json({ message: 'Menu item updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while updating the menu item: ${error}` });
    }
};

export const deleteMenuItem = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.execute('DELETE FROM Menu WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        res.status(200).json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while deleting the menu item: ${error}` });
    }
};

export const createTakeaway = async (req, res) => {
    const { user_id, menu_id, quantity, status } = req.body;

    try {
        const [result] = await db.execute(
            'INSERT INTO Takeaway (user_id, menu_id, quantity, status) VALUES (?, ?, ?, ?)',
            [user_id, menu_id, quantity, status]
        );

        res.status(201).json({
            message: 'Takeaway order created successfully',
            takeawayId: result.insertId
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while creating the takeaway order: ${error}` });
    }
};

export const readTakeaway = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = id
            ? await db.execute('SELECT * FROM Takeaway WHERE id = ?', [id])
            : await db.execute('SELECT * FROM Takeaway');

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while reading takeaway order(s): ${error}` });
    }
};

export const updateTakeaway = async (req, res) => {
    const { id } = req.params;
    const { menu_id, quantity, status } = req.body;

    try {
        const [result] = await db.execute(
            'UPDATE Takeaway SET menu_id = ?, quantity = ?, status = ? WHERE id = ?',
            [menu_id, quantity, status, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Takeaway order not found' });
        }

        res.status(200).json({ message: 'Takeaway order updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while updating the takeaway order: ${error}` });
    }
};

export const deleteTakeaway = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.execute('DELETE FROM Takeaway WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Takeaway order not found' });
        }

        res.status(200).json({ message: 'Takeaway order deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while deleting the takeaway order: ${error}` });
    }
};

export const createPayment = async (req, res) => {
    const { user_id, takeaway_id, amount } = req.body;

    try {
        const [result] = await db.execute(
            'INSERT INTO Payment (user_id, takeaway_id, amount) VALUES (?, ?, ?)',
            [user_id, takeaway_id, amount]
        );

        res.status(201).json({
            message: 'Payment created successfully',
            paymentId: result.insertId
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while creating the payment: ${error}` });
    }
};

export const readPayment = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = id
            ? await db.execute('SELECT * FROM Payment WHERE id = ?', [id])
            : await db.execute('SELECT * FROM Payment');

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while reading payment(s): ${error}` });
    }
};

export const updatePayment = async (req, res) => {
    const { id } = req.params;
    const { amount } = req.body;

    try {
        const [result] = await db.execute(
            'UPDATE Payment SET amount = ? WHERE id = ?',
            [amount, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Payment not found' });
        }

        res.status(200).json({ message: 'Payment updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while updating the payment: ${error}` });
    }
};

export const deletePayment = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.execute('DELETE FROM Payment WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Payment not found' });
        }

        res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error occurred while deleting the payment: ${error}` });
    }
};