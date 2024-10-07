import express from 'express';
import VisitanteController from '@controllers/visitantes';

const router = express.Router();

router.get('/', VisitanteController.getHello);
router.post('/', VisitanteController.postHello);

export default router;
