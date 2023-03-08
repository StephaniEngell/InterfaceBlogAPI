import { Button, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post";
import AddPost from "./components/Post/AddPost";
import { ContentForm } from "./components/Post/AddPost/styles";
import EdditPost from "./components/Post/EdditPost";
import { TextButton } from "./components/Post/styles";
import { Container } from "./styles";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    id: null,
    title: "",
    body: "",
  });

  // Fetch posts on JSONPlaceholder API
  const fetchPosts = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err);
      });
  };
  // Delete posts
  const handleDeletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
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

  const handleSelectToEdit = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost({
          id: data.id,
          title: data.title,
          body: data.body,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    // TODO: Add post to JSONPlaceholder API
    e.preventDefault();

    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: post.title,
        body: post.body,
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
        setPosts([data, ...posts]);
      })
      .catch((err) => {
        console.log(err);
      });

    // await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
    //   method: "PUT",
    //   body: JSON.stringify(updatedItem),
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setItems(
    //       items.map((item) => (item.id === updatedItem.id ? data : item))
    //     );
    //     setShowEditModal(false);
    //   });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Container>
        <ContentForm onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Input
              placeholder="Título"
              name="titulo"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              style={{
                width: "100%",
                height: "50px",
                background: "#fff",
                padding: "10px",
              }}
            />
            <textarea
              placeholder="Subtítulo"
              name="subtitulo"
              value={post.body}
              onChange={(e) => setPost({ ...post, body: e.target.value })}
              style={{ width: "100%", height: "50px", background: "#fff" }}
            />
            <Button type="submit" color="primary" variant="contained">
              <TextButton>Cadastrar post</TextButton>
            </Button>
          </div>
        </ContentForm>
      </Container>

      <Container>
        {posts.map((post) => (
          <Post
            id={post.id}
            key={post.id}
            title={post.title}
            body={post.body}
            onDelete={handleDeletePost}
            onEdit={handleSelectToEdit}
          />
        ))}
      </Container>
    </div>
  );
};

export default App;
