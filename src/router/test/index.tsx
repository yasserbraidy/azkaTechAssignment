import TestPage from "../../pages/Test";
import ProtectedRoute from "../protected";

const testRoutes = [
  {
    element: (
      <ProtectedRoute
        element={<TestPage />}
        // requiredPermissions={["view company"]}
      />
    ),
      path: "test",
  },
];
export default testRoutes;
