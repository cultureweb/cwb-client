import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

//import './App.css';

function ItemDetail({ match }) {

    let id = match && match && match.params.id ? match.params.id : null;
    const [item, setItem] = useState({})
    
    const fetchItem = async () => {
        const response = await fetch(`https://cwb-server.herokuapp.com/api/v1/posts/${id}`)
        const data = await response.json();
        setItem(data.item);
    }

    useEffect(() => {  
        fetchItem();
    }, []);
    
    if (!item) {
        return "loading...";
    }
    
    return (
        <div >
            <h1>{item.title}</h1>
            <p>
                {item.content}
            </p>
        </div>
    );
}

export default ItemDetail;
