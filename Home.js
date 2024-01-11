import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined ,UsergroupAddOutlined,MessageOutlined,LogoutOutlined,DashboardOutlined} from '@ant-design/icons';
import "./Home.css";
import { icons } from "antd/es/image/PreviewGroup";


const { Header, Content, Footer, Sider } = Layout;

// const [Email, setEmail] = useState('');
const Home = () => {
    useEffect(() => {

        console.log("mounted ")
    }, [])
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    //   const handlemailchange = (value) => {
    //     setEmail(value);
    // };
const dashboard = () => {
    window.location.href = ('./dashboard')
}
const logoutmethod=()=>{
    window.location.href=('./')
}

    return (
        <>

            <Header className="top-navbar">
                {/* <div className="demo-logo" /> */}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(1).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: <UserOutlined />,

                            //label: `nav ${key}`,
                        };
                    })}
                    className="top-navbar"
                    // style={{display: "flex",justifyContent: "end"}}
                />
                
            </Header>


            <Layout className="side-navbar">
                <Sider
                    theme="light"
                    mode="inline"

                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    {/* <div className="demo-logo-vertical" /> */}
                    <Menu
                        mode="inline"
                        items={[
                            {
                                key: "1",
                                label: "DashBoard",
                                icon: <DashboardOutlined />,
                                onClick: dashboard,
                            },,
                            {
                                key: "2",
                                label: "Let's Connect",
                                icon: < UsergroupAddOutlined/>,
                                // onClick: gotoconnect,
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
                                icon: <LogoutOutlined /> ,
                                onClick:logoutmethod,
                            }
                            ]}
                    />
                </Sider>

            </Layout>
        </>
    )
}
export default Home;