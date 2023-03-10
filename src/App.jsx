import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import ListPost from "./components/ListPost";

import { Container } from "./styles";
import "./App.css";

const initialValue = {
  id: null,
  title: "",
  body: "",
};

const headers = { "Content-type": "application/json; charset=UTF-8" };

const App = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(initialValue);
  const baseUrl = "https://jsonplaceholder.typicode.com";

  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch posts on JSONPlaceholder API
  const fetchPosts = async () => {
    await fetch(`${baseUrl}/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err);
      });
  };
  // Delete posts
  const handleDeletePost = async (id) => {
    await fetch(`${baseUrl}/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        setPosts(
          posts.filter((post) => {
            return post.id !== id;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createPost = async () => {
    await fetch(`${baseUrl}/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: post.title,
        body: post.body,
      }),
      headers: headers,
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setPosts([data, ...posts]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePost = async () => {
    fetch(`${baseUrl}/posts/${post?.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...post, userId: 1 }),
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    const newPosts = posts.map((p) => {
      if (p.id === post.id) {
        return {
          ...p,
          ...post,
        };
      }
      return p;
    });
    setPosts(newPosts);
  };

  const handleSubmit = async (e) => {
    // TODO: Add post to JSONPlaceholder API
    e.preventDefault();
    if (post?.id) {
      updatePost();
    }
    createPost();
  };

  const handleSelectToEdit = (post) => setPost(post);

  const cancelEdit = () => setPost(initialValue);

  return (
    <div className="App">
      <Container>
        <Form
          handleSubmit={handleSubmit}
          post={post}
          setPost={setPost}
          cancelEdit={cancelEdit}
        />
      </Container>

      <Container>
        <ListPost
          posts={posts}
          onDelete={handleDeletePost}
          onEdit={handleSelectToEdit}
        />
      </Container>
    </div>
  );
};

export default App;