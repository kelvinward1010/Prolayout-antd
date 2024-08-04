import { lazyLoad } from "@/utils/loadable";

export const Layout = lazyLoad(
    () => import("./app/Layout"),
    (module) => module.Layout,
);

export const Home = lazyLoad(
    () => import("./home/views/Home"),
    (module) => module.Home,
);

export const DashBoard1 = lazyLoad(
    () => import("./dashboard/views/DashBoard1"),
    (module) => module.DashBoard1,
);

export const DashBoard2 = lazyLoad(
    () => import("./dashboard/views/DashBoard2"),
    (module) => module.DashBoard2,
);
