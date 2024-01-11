import { Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image, message, Button, Anchor, Input, Space } from "antd";
import { LoginOutlined, WechatOutlined, CaretRightOutlined, UserOutlined, LockOutlined } from '@ant-design/icons'
import "./Registration.css";


function Login() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = React.useState(false);


    const handlemailchange = (value) => {
        setEmail(value);
    };
    const handlpasswordchange = (value) => {
        setPassword(value);
    };
    const handlesave = (value) => {
        const data = {
            Email: Email,
            Password: Password
        }

        const url = 'https://localhost:7259/api/UserReg/Login';
        axios.post(url, data).then(() => {
            if (Response.data == "User not found.") {
                message.error("User not found ,Please do Sign Up!")


            }
            else {

                message.success("Login Successfull");
                window.location.href = "/home";

            }


        })
    };

    return (
        <>
        
            <div className="whole-div"> 
                <div className="form-border">
                    <div className="formfield">
                        <div className="heading" >{<WechatOutlined className="icon-alignment" />}Login Here </div>

                        <Input type="text" size="large" className="email-class" placeholder="Enter Email" prefix={<UserOutlined />} onChange={(e) => handlemailchange(e.target.value)} />
                        <br></br>

                        <Space direction="horizontal">
                            <Input.Password

                                placeholder="Enter Password"
                                className="email-class"
                                prefix={<LockOutlined />}
                                size="large"

                                onChange={(e) => handlpasswordchange(e.target.value)}
                                visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                            />
                        </Space>

                        <br></br>
                        <Button className="button" onClick={() => handlesave()} icon={<LoginOutlined />}>Log In</Button>
                        <p className="reg-link"  >Need an Account? {<CaretRightOutlined />}  <a href="/registartion" className="reg-link"   > Sign Up </a></p>

                    </div>
                </div>
                <div className="image">
                    < Image
                        preview={false}
                        src=".\candidate-list-talent-acquisition-human-resources-find-employee-job-applicant-user-interface-design-menu-element-website-flat-design-modern-ill-2K55KK8.jpg" />

                </div>
            </div>
        </>
    )

}

export default Login;
