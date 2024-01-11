import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "./Crud.css";

function Crud() {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            // key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            //   key: 'age',
        },
        {
            title: 'Action',
            dataIndex: '',

            render: () => <a>Delete</a>,
        },
    ]
    const List = [
        {
            id: 1,
            name: "Toyoto",
            price: "30000"

        },
        {
            id: 2,
            name: "Suzuki",
            price: "40000"
        },
        {
            id: 3,
            name: "Tata",

            price: "50000"
        },

    ]

    const [lists, setList] = useState(List)


    return (
        <>
            <h1>Crud Operations</h1>
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => (
                        <p
                            style={{
                                margin: 0,
                            }}
                        >
                            {record.description}
                        </p>
                    ),
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                }}
                dataSource={lists}
            />

        </>



    )
}

function Addlist({ setList }) {
    function handlesubmit(event) {
        const nam = event.target.elements.name.value;
        const pric = event.target.element.price.value;
        const newlist={
            nam, pric
        }
    }
    return (
        <>



        </>
    )
}
export default Crud;
