const { Router } = require("express");
const controller = require('./controller')

const router = Router();

router.get('/', controller.getVegetables);
router.get('/:id', controller.getVegetableById);
router.post('/', controller.addVegetable);
router.put('/', controller.updateVegetable);
router.delete('/', controller.deleteVegetable);

/*router.get('/', (req, res) => {
    res.send("using api route");
})
*/

module.exports = router;
