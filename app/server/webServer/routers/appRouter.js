import express from 'express';

const router = express.Router();

router.use(loggerWare);

export default router;
