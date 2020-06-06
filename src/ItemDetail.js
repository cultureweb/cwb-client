import React, { useState, useEffect } from 'react';
import './App.css';

function ItemDetail({match}) {
    useEffect(() => {
        fetchItem();
    }, []);
    const [item, setItem] = useState({})
    const fetchItem = async() => {
        const response = await fetch(`https://cwb-server.herokuapp.com/api/v1/posts/${match.params.id}`)
        const data = await response.json();
        setItem(data.item);
     
    }
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
