import { createBrowserRouter, Navigate } from "react-router-dom";
import {
    contentdashboard1Url,
    contentdashboard2Url,
    homeUrl,
    layoutUrl,
    signinUrl,
} from "./urls";
import { ErrorBoundaryPage } from "@/components/error/boundary-error";
import { DashBoard1, DashBoard2, Home, Layout } from "@/modules";

interface RouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
    const user = true;
    return user ? <>{children}</> : <Navigate to={signinUrl} replace />;
};

export const routerConfig = createBrowserRouter([
    {
        path: layoutUrl,
        element: <Layout />,
        errorElement: (
            <ProtectedRoute>
                <Layout>
                    <ErrorBoundaryPage />
                </Layout>
            </ProtectedRoute>
        ),
        children: [
            {
                path: homeUrl,
                element: <Home />,
            },
            {
                path: contentdashboard1Url,
                element: <DashBoard1 />,
            },
            {
                path: contentdashboard2Url,
                element: <DashBoard2 />,
            },
        ],
    },
]);
