import { Typography } from "antd";
import styles from "./Home.module.scss";

const { Title } = Typography;

export function Home() {
    return (
        <div className={styles.container}>
            <Title level={3}>Home</Title>
        </div>
    );
}
