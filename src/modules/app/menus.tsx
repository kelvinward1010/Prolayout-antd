import {
    contentdashboard1Url,
    contentdashboard2Url,
    dashboardUrl,
    homeUrl,
} from "@/routes/urls";
import { AppstoreOutlined, HomeFilled, SmileFilled } from "@ant-design/icons";

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
        routes: [
            {
                path: contentdashboard1Url,
                name: "Content dashboard 1",
                icon: <SmileFilled />,
            },
            {
                path: contentdashboard2Url,
                name: "Content dashboard 2",
                icon: <SmileFilled />,
            },
        ],
    },
];
