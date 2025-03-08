import { Router } from "express";
import {
  evalGetDetailView,
  evalResult,
  evaluateTest,
  listEvals,
  newEvaluation,
} from "../controller/beta.controller.js";
import { authProtected2 } from "../middleware/authProtected.js";
import betaUpload from "../middleware/multer.middleware.js";

const betaRouter = Router();

betaRouter.post("/eval/list-all", authProtected2, listEvals);

betaRouter.post(
  "/eval/new",
  betaUpload.fields([
    { name: "Q", maxCount: 1 },
    { name: "M", maxCount: 1 },
    { name: "A", maxCount: 1 },
  ]),
  newEvaluation
);

// Add delete route directly here instead of importing
betaRouter.post("/eval/delete", authProtected2, async (req, res) => {
  try {
    const { testId } = req.body;
    // Add your delete logic here
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

betaRouter.post("/eval/view", authProtected2, evalGetDetailView);
betaRouter.post("/eval/evaluate", authProtected2, evaluateTest);
betaRouter.post("/eval/result", authProtected2, evalResult);

export default betaRouter;
