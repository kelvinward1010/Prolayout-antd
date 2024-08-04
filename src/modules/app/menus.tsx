import { dashboardUrl, homeUrl } from "@/routes/urls";
import { AppstoreOutlined, HomeFilled } from "@ant-design/icons";

export const defaultMenus = [
    {
        path: homeUrl,
        name: "Home",
        icon: <HomeFilled />,
    },
    {
        path: dashboardUrl,
        name: "Dash board",
        icon: <AppstoreOutlined />,
    },
];
