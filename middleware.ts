import { withAuth } from "next-auth/middleware";

export default withAuth;

export const config = {
  matcher: ["/buy/:id*", "/sell/:id*", "/rent/:id*"],
};
