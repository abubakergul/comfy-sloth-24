import { UnauthenticatedError } from "../errors";

const checkPermissions = (
  requestUser: { name: string; userId: string; role: string },
  resourceUserId: string
) => {
  if (requestUser.role === "admin") return;
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new UnauthenticatedError("Not authorized to access this route");
};
export default checkPermissions;
