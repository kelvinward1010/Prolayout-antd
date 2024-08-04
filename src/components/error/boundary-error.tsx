import { HttpStatusCode } from "axios";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Error404 } from "./404";
import { Error500 } from "./500";

export function ErrorBoundaryPage(): JSX.Element {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === HttpStatusCode.NotFound) {
            return <Error404 />;
        }
    }

    return <Error500 />;
}
