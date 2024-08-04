import { Typography } from "antd";
import styles from "./DashBoard.module.scss";

const { Title } = Typography;

export function DashBoard2() {
    return (
        <div className={styles.container}>
            <Title level={3}>This is Dash Board 2</Title>
        </div>
    );
}
