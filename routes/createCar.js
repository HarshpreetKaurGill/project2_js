import express from 'express';

import Car from '../models/car.js';
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const { name, price, description, category, stock } = req.body;
        if (!name || !price || !description|| !category || !stock ) {
            return res.status(400).json({ message: 'All fields are required.' });
        }
        const newCar = new Car({
            name,
            price,
            description,
            category,
            stock
        });
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
