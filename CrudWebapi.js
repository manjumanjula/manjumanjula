import React, { useEffect, useState } from "react";
import { Fragment } from "react";

import 'bootstrap';
import { Container, Table } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import Item from "antd/es/list/Item";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Button, Result } from "antd";
import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import axios from "axios";

const CRUD = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState([]);
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[IsActive,setIsActive]=useState(0);

    const[editname,seteditName]=useState("");
    const[editprice,seteditPrice]=useState("");
    const[editIsActive,seteditIsActive]=useState(0);


    const empdata = [

        {
            id: 1,
            name: "Toyoto",
            price: "30000",
            IsActive:1

        },
        {
            id: 2,
            name: "Suzuki",
            price: "40000",
            IsActive:1
        },
        {
            id: 3,
            name: "Tata",
            price: "50000",
            IsActive:1
        },

    ]


    // const columns = [
    //     {
    //         title: 'Name',
    //         dataIndex: 'name',
    //         // key: 'name',
    //         render: (text) => <a>{text}</a>,
    //     },
    //     {
    //         title: 'Price',
    //         dataIndex: 'price',
    //         //   key: 'age',
    //     },
    //     {
    //         title: 'Action',
    //         dataIndex: '',

    //         render: () => <div>
    //             <a onClick={(title) => handleDelete(title)}> Delete  </a>

    //             <a onClick={(title) => handeleedit(title)}> Edit </a>
    //         </div>
    //         // render:()=><a>Edit</a>,
    //     },
    // ]

    useEffect(() => {
       getData();
    })
    const handeleEdit = (id) => {
        setShow(true)

    }
    const handleDelete = (id) => {
        if (window.confirm("Are you Sure") == true) {

        }
        alert(id)
    }

    const handleUpdate=()=>{

    }

    const getData=()=>{
        axios.get('https://localhost:7018/api/ReactTesting/getmethod').then((Result)=>{setData(Result.data)})
        .catch((error)=>{
            console.log(error);

        })

    }

    const handleChange=(e)=>{
        if(e.target.checked){
            setIsActive(1);
        }
        else{
            setIsActive(0);
        }
    }
    const handleEditChange=(e)=>{
        if(e.target.checked){
            seteditIsActive(1);
        }
        else{
            seteditIsActive(0);
        }
    }

    const handleSave=()=>{
        const url='https://localhost:7018/api/ReactTesting';
        const data={
            'name':name,
            'price':price,
            'isactive':IsActive
        }

        axios.post(url,data).
        then((Result)=>{
            getData();
        })
    }

    
    return (
        <>
            <Fragment>
<Container>

<Row>

    <Col><input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e)=>
    setName(e.target.value)}/>  </Col>
    <Col><input type="text" className="form-control" placeholder="Enter Price" value={price} onChange={(e)=>
    setPrice(e.target.value)}/></Col>
    <Col><input type="checkbox" checked={IsActive===1 ? true:false}
    onChange={(e)=>handleChange(e) }value={IsActive}
    />
    <label>IsActive</label>
    </Col>
    <Col>
    <Button  className="btn btn-primary" onClick={()=>handleSave()}> save changes</Button>
    </Col>
</Row>

</Container>
<br></br>
       <Table stripped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th width="170">ID</th>
                            <th width="170">Name</th>
                            <th width="170">Price</th>
                            <th width="170">IsActive</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.length > 0 ?
                                data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.IsActive}</td>
                                            <td colSpan={2}><button className="btn btn-primary" onClick={() => handeleEdit(item.id)}>Edit</button> &nbsp
                                                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }) :
                                "loading...."
                        }

                    </tbody>
                </Table>
              <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
<Modal.Body>Modify or Update employee

<Row>
    <Col><input type="text" className="form-control" placeholder="Enter Name" value={editname} onChange={(e)=>
    seteditName(e.target.value)}/>  </Col>
    <Col><input type="text" className="form-control" placeholder="Enter Price" value={editprice} onChange={(e)=>
    seteditPrice(e.target.value)}/></Col>
     <Col><input type="checkbox" checked={IsActive===1 ? true:false}
    onChange={(e)=>handleEditChange(e) }value={IsActive}
  
    
    />
    <label>IsActive</label>
    </Col>
    
</Row>
</Modal.Body>
<Modal.Footer>
    <Button varient="secondary" onClick={handleClose}>Close</Button>
<Button varient="primary" onClick={()=>handleSave()}>Save changes</Button>


</Modal.Footer>
     </Modal>
            </Fragment>

        </>

    )

}
export default CRUD;