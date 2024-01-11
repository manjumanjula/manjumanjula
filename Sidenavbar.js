import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, UsergroupAddOutlined, MessageOutlined, LogoutOutlined, DashboardOutlined } from '@ant-design/icons';
import "./Home.css";
import LetsConnect from "./letsConnect";
const { Header, Content, Footer, Sider } = Layout;

const Sidenavbar = () => {

    const dashboard = () => {
        window.location.href = ('./dashboard')
    }
    const letsconnect=()=>{
        window.location.href=('./letsconnect')
    }
    const logoutmethod = () => {
        window.location.href = ('./')
    }

    return (
        <>
            {/* <Layout className="side-navbar"> */}
                <Sider
                    theme="light gray"
                     mode="inline"
                     
                    
                >
                    {/* <div className="demo-logo-vertical" /> */}
                    <Menu
                        mode="inline"
                        height="100%"
                        theme="dark"
                        
                        items={[
                            {
                                key: "1",
                                label: "DashBoard",
                                icon: <DashboardOutlined />,
                                onClick: dashboard,
                            }, ,
                            {
                                key: "2",
                                label: "Let's Connect",
                                icon: < UsergroupAddOutlined />,
                                onClick: letsconnect,
                            },
                            {
                                key: "3",
                                label: "ShareThoughts",
                                icon: <VideoCameraOutlined />
                            },
                            {
                                key: "4",
                                label: "SeeReply",
                                icon: < MessageOutlined />
                            },
                            {
                                key: "5",
                                label: "Logout",
                                icon: <LogoutOutlined />,
                                onClick: logoutmethod,
                            }
                        ]}
                    />
                </Sider>

            {/* </Layout> */}
        </>
    )
}
export default Sidenavbar;