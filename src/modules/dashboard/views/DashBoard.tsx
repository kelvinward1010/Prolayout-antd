import { Typography } from "antd";
import styles from "./DashBoard.module.scss";

const { Title } = Typography;

export function DashBoard() {
    return (
        <div className={styles.container}>
            <Title level={3}>DashBoard</Title>
        </div>
    );
}
