import { Logo } from "@/assets/images";
import {
    DefaultFooter,
    PageContainer,
    ProLayout,
    type MenuDataItem,
    type ProLayoutProps,
} from "@ant-design/pro-layout";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { defaultMenus } from "./menus";
import styles from "./Layout.module.scss";
import "./index.css";
import { GithubOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export type LayoutProps = {
    children?: React.ReactNode;
} & ProLayoutProps;

export const Layout: React.FC<LayoutProps> = (props) => {
    const { children } = props;
    const navigate = useNavigate();

    const loopMenuItem = (menus: any[]): MenuDataItem[] =>
        menus.map(({ icon, routes, ...item }) => ({
            ...item,
            icon: icon,
            children: routes && loopMenuItem(routes),
        }));

    const defaultFooterDom = (
        <DefaultFooter
            copyright={`${new Date().getFullYear()} 蚂蚁集团体验技术部出品`}
            links={[
                {
                    key: "Ant Design Pro",
                    title: "Ant Design Pro",
                    href: "https://pro.ant.design",
                    blankTarget: true,
                },
                {
                    key: "github",
                    title: <GithubOutlined />,
                    href: "https://github.com/ant-design/ant-design-pro",
                    blankTarget: true,
                },
                {
                    key: "Ant Design",
                    title: "Ant Design",
                    href: "https://ant.design",
                    blankTarget: true,
                },
            ]}
        />
    );

    const FormHeader = () => {
        return (
            <div className={styles.containerHeader}>
                <Avatar icon={<UserOutlined />} />
            </div>
        );
    };

    return (
        <ProLayout
            className={styles.containerLayout}
            logo={Logo}
            {...props}
            title="Kaito Kid"
            layout={"mix"}
            menuItemRender={(menuItemProps, defaultDom) => {
                if (
                    !menuItemProps.path ||
                    location.pathname === menuItemProps.path
                ) {
                    return defaultDom;
                }
                return (
                    <a onClick={() => navigate(menuItemProps.path as string)}>
                        {defaultDom}
                    </a>
                );
            }}
            menu={{
                request: async () => loopMenuItem(defaultMenus),
            }}
            breadcrumbRender={(routers = []) => [
                {
                    path: "/",
                },
                ...routers,
            ]}
            itemRender={(route, __, routes, paths) => {
                const first = routes.indexOf(route) === 0;
                return first ? (
                    <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
                ) : (
                    <span>{route.breadcrumbName}</span>
                );
            }}
            headerContentRender={FormHeader}
            footerRender={() => defaultFooterDom}
        >
            <PageContainer>
                <Outlet />
                {children}
            </PageContainer>
        </ProLayout>
    );
};
