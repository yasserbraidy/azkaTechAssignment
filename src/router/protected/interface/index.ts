export default interface ProtectedRouteProps {
    element: React.ReactNode;
    requiredPermissions?: Array<string>,
    isParent?: boolean,
}
export type RouteType = {
    element: JSX.Element;
    path: string;
};