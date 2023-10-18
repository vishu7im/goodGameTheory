import { Router } from "express";
import {
  createBook,
  readBook,
  updateBook,
  delBook,
} from "../controllers/main.js";

const router = Router();

router.post("/book", createBook);
router.get("/book", readBook);
router.put("/book", updateBook);
router.delete("/book", delBook);

export default router;
