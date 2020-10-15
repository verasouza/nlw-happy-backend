import {Router} from 'express';
import OrphanageController from './controllers/OrphanageControllers';

const routes = Router();


routes.post('/orphanages', OrphanageController.create);

export default routes;