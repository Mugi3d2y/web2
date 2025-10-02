import { Router } from "express"
import { readAllTexts } from "../services/texts"

const router = Router();


router.get("/",(req, res) =>{
    const texts = readAllTexts(req.query.level as string);

    return res.json(texts);
});

export default router;