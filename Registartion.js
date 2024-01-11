import React, { useEffect, useState } from "react";
import axios from "axios";
import { Result, message,Button } from "antd";
import {UserAddOutlined,WechatOutlined,CaretRightOutlined} from '@ant-design/icons'
import "./Registration.css";


function Registartion(){
const[FirstName,setFirstName]=useState('');
const[LastName,setLastName]=useState('');
const[Email,setEmail]=useState('');
const[Password,setPassword]=useState('');


const handlefirstnamechange=(value)=>{
    setFirstName(value);

};
 const handlelastnamechange=(value)=>{
    setLastName(value);
};
const handlemailchange=(value)=>{
    setEmail(value);
};
const handlpasswordchange=(value)=>{
    setPassword(value);
};
const handlesave=(value)=>{
    const data={
        FirstName:FirstName,
        LastName:LastName,
        Email:Email,
        Password:Password
   }

const url='https://localhost:7259/api/UserReg/RegUser';
axios.post(url,data).then(()=>{
    
    message.success("Registartion Successfull");
})
};
console.log(FirstName);

    return (
        <div className="whole-div">
        <div className="form-border1">
            <div  className="formfield">
    <div ><WechatOutlined  className="icon-alignment"/>Registration </div>
    <br></br>
    <label>First Name</label>
    <input type="text" className="email-class" placeholder="Enter Firstname"   onChange={(e)=>handlefirstnamechange(e.target.value)}/>
    <br></br>
    <label>Last Name</label>
    <input type="text" className="email-class" placeholder="Enter LastName"   onChange={(e)=>handlelastnamechange(e.target.value)}/>
    <br></br>
    <label>Email</label>
    <input type="text" className="email-class" placeholder="Enter Email"  onChange={(e)=>handlemailchange(e.target.value)}/>
    <br></br>
    <label>Password</label>
    <input type="text" className="email-class" placeholder="Enter Password"  onChange={(e)=>handlpasswordchange(e.target.value)}/>
    <br></br>
    <Button  className="button"  onClick={()=>handlesave()} icon={<UserAddOutlined />}>Sign Up</Button>
    <p className="reg-link"  >Already a User? {<CaretRightOutlined/>}  <a  href="/"    > Login In </a></p>
    </div>
    </div>
    </div>
       
    )

}
 export default Registartion;