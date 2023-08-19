const getVegetables = "SELECT * FROM vegetables";
const getVegetableById = "SELECT * FROM vegetables WHERE id = $1";
const addVegetable = "INSERT INTO vegetables (id,name,rating) VALUES($1,$2,$3)";
const updateVegetable = "UPDATE * FROM vegetables SET (id,name,rating) VALUES($1,$2,$3)";
const deleteVegetable = "DELETE * FROM vegetables WHERE id = $1";

module.exports = {
    getVegetables,
    getVegetableById,
    addVegetable,
    updateVegetable,
    deleteVegetable,
};