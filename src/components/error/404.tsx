import { layoutUrl } from "@/routes/urls";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export function Error404() {
    const navigate = useNavigate();

    const handleGoHome = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        navigate(layoutUrl);
    };

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button onClick={handleGoHome} type="primary" key="console">
                    Go Home
                </Button>
            }
        />
    );
}
