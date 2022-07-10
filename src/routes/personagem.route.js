const router = require('express').Router();
const controllerPersonagens = require('../controllers/personagem.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/personagem.middlewares');

router.get('/all-personagens', controllerPersonagens.findAllPersonagensController);

router.get('/personagem/:id', validId, controllerPersonagens.findByIdPersonagemController);
router.post(
  '/create-personagem',
  validObjectBody,
  controllerPersonagens.createPersonagemController,
);
router.put(
  '/update-personagem/:id',
  validId,
  validObjectBody,
  controllerPersonagens.updatePersonagemController,
);
router.delete(
  '/delete-personagem/:id',
  validId,
  controllerPersonagens.deletePersonagemController,
);

module.exports = router;
