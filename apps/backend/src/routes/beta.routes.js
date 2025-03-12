import { Router } from "express";
import {
  deleteEvaluation,
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

// Updated delete route to use the controller function
betaRouter.post("/eval/delete", authProtected2, deleteEvaluation);

betaRouter.post("/eval/view", authProtected2, evalGetDetailView);
betaRouter.post("/eval/evaluate", authProtected2, evaluateTest);
betaRouter.post("/eval/result", authProtected2, evalResult);

export default betaRouter;