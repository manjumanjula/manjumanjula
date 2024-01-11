import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, UsergroupAddOutlined, MessageOutlined, LogoutOutlined, DashboardOutlined } from '@ant-design/icons';
import "./Topnavbar.css";
const { Header, Content, Footer, Sider } = Layout;

const Topnavbar = () => {
    return (
        <>
            <div className="navbar">
                <Header>
                    {/* <div>
                        <h2 className="chill-header">Welcome to chill chat</h2>
                    </div> */}
                    {/* <div className="demo-logo" /> */}
                    <Menu

                        // theme="gray"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={new Array(1).fill(null).map((_, index) => {
                            const key = index + 1;
                            return {
                                key,
                                label: <  UserOutlined />,

                                //label: `nav ${key}`,
                            };
                        })}
                        className="top-navbar"



                    />

                </Header>
            </div>


        </>
    )
}
export default Topnavbar;