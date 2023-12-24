// image route here

import express from 'express';
import { allArtical, postArtical } from '../controllers/articalController.js';


const router = express.Router();

router.get('/articals', allArtical)
router.post('/articals', postArtical)


export default router