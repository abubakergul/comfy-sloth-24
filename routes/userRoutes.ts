import express from "express";
const router = express.Router();
import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authentication";
import {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
} from "../controllers/userController";

router
  .route("/")
  .get(authenticateUser, authorizePermissions("admin"), getAllUsers);

router.route("/showMe").get(authenticateUser, showCurrentUser);
router.route("/:id").get(authenticateUser, getSingleUser);

export default router;
