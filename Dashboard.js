import React, { useState } from "react";
import "./Dashboard.css";
import Sider from "antd/es/layout/Sider";
import Home from "./Home";
import { Container } from "react-bootstrap";
import { Content, Header } from "antd/es/layout/layout";
import { Layout, Rate } from "antd";
import Topnavbar from "./Topnavbar";
import Sidenavbar from "./Sidenavbar";
import { WechatOutlined } from '@ant-design/icons';
const Dashboard = () => {

    const [activity, setActivity] = useState("")
    const [listdata, setlistData] = useState([])
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
  

    const SetAct = (e) => {
        setActivity(e.target.value)
    }
    console.log(activity)

    function addActivity() {
        setlistData([...listdata, activity])

    }
    const handleInputChange = (e) => {
        setInput(e.target.value);
      };
    
      const handleSendMessage = () => {
        if (input.trim() === '') return;
    
        // Update the messages with the user's input
        setMessages([...messages, { text: input, isUser: true }]);
        setInput('');
    
        // Simulate the chatbot's response after a delay
        setTimeout(() => {
          const response = "Hello! I'm a simple chatbot.";
          setMessages([...messages, { text: response, isUser: false }]);
        }, 1000);
      };

    return (

        <>
            <Layout  style={{ backgroundColor: "white", height: "100vh", display: "flex", overflow: "hidden" }}>
            <Sidenavbar />
            <Layout>
                <Header className="topnavbar">
                    <Topnavbar />
                  </Header>
                     
                      <Content style={{ backgroundColor: "white" }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className="cards-style">
                                <h4>Connections</h4>
                                <p>500</p>
                            </div>
                            <div className="cards-style">
                                <h4>Requests</h4>
                                <p>120</p>
                            </div>
                            <div className="cards-style">

                                <h4 WechatOutlined >Total</h4>
                                <p>1400</p>

                            </div>
                            <div className="cards-style">
                                <h4>Ratings</h4>
                                <Rate defaultValue={4} />

                            </div>
                        </div>
                        <div>

                        </div>
{/* 
                        <div className="chatbot-container" >
                    <p style={{font:"bold"}}>Ask your Questions!</p>
                    <div   style={{ display: "flex", justifyContent: "end" }}>
                       
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
    </div> */}
                   
                    </Content>
         
   </Layout>
   </Layout>
        </>
    )
}
export default Dashboard;