import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './App.css';

function ItemDetail({match}) {
    const { id: id } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            const response = await fetch(`https://cwb-server.herokuapp.com/api/v1/posts/${id}`)
            const data = await response.json();
            setItem(data.item);

        }
        fetchItem();
    }, [match]);
    const [item, setItem] = useState({})
    
    return (
        <div >
            <h1>{item && item.title ? item.title : <p>Loading...</p>}</h1>
            <p>
                {item.content}
            </p>
        </div>
    );
}

export default ItemDetail;
