// image route here

import express from 'express';
import { allTerms } from '../controllers/termsController.js';


const router = express.Router();

router.get('/terms', allTerms)


export default router