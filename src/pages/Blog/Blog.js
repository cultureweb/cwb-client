import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  useEffect(() => {
    fetchItems();
  }, [])
  const [items, setItems] = useState([])
  const fetchItems = async () => {
    const data = await fetch('https://cwb-server.herokuapp.com/api/v1/posts');
    const items = await data.json();
    console.log({ items })
    setItems(items)
  }
 
  return (
    <div >
      <h1>Blog Page</h1>
      {items.map(item => (
        <h3 key={item.id}>
        <Link to={`/blog/${item.id}`}> {item.title} </Link>
        </h3>
      )
      
      )}

    </div>
  );
}

export default Blog;
