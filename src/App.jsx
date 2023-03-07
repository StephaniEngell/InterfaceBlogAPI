import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/post";
import AddPost from "./components/post/AddPost";
import EdditPost from "./components/Post/EdditPost";
import { Container } from "./styles";


const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0,3)))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: name,
        body: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    console.log(id)
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onPut = async ( name, email) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
      method: 'PUT',
      body: JSON.stringify(updatedItem),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        setItems(items.map(item => item.id === updatedItem.id ? data : item));
        setShowEditModal(false);
      });
  };

  useEffect(() => {
 
  },[])

  return (
    <div className="App">
      <br />
      <AddPost onAdd={onAdd} />
      <Container>
        {users.map((user) => (
          <Post
            id={user.id}
            key={user.id}
            name={user.title}
            image={"https://images.unsplash.com/photo-1678005051371-94fc2c21ef4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}
            onDelete={onDelete}
          />
        ))}
      </Container>
    </div>
  );
};

export default App;