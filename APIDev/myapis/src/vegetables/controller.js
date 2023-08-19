const pool = require('../../db');
const queries = require('./queries');

const getVegetables = (req, res) => {
    //pool.query("SELECT * FROM vegetables", (error, results) => {
    pool.query(queries.getVegetables, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getVegetableById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getVegetableById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addVegetable = (req, res) => {
    const { id, name, rating } = req.body;
    pool.query(queries.addVegetable, [id, name, rating], (error, results) => {
        if (error) throw error;
        res.status(201).send("Vegetable created successfully");
    });
};

const updateVegetable = (req, res) => {
    const { id, name, rating } = req.body;
    pool.query(queries.updateVegetable, [id, name, rating], (error, results) => {
        if (error) throw error;
        res.status(202).send("Vegetable Modified Successfully");
    });
};

const deleteVegetable = (req, res) => {
    const { id, name, rating } = req.body;
    pool.query(queries.deleteVegetable, (error, results) => {
        if (error) throw error;
        res.status(203).send("Vegetable Deleted Successfully");
    });
};

module.exports = {
    getVegetables,
    getVegetableById,
    addVegetable,
    updateVegetable,
    deleteVegetable,
};