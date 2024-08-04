import { lazyLoad } from "@/utils/loadable";

export const Layout = lazyLoad(
    () => import("./app/Layout"),
    (module) => module.Layout,
);

export const Home = lazyLoad(
    () => import("./home/views/Home"),
    (module) => module.Home,
);

export const DashBoard = lazyLoad(
    () => import("./dashboard/views/DashBoard"),
    (module) => module.DashBoard,
);
