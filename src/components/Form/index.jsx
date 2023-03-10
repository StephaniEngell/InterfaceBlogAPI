import React from "react";
import { Button, Input } from "@mui/material";
import { TextButton } from "./styles";

const Form = ({ handleSubmit, post, setPost, cancelEdit }) => {
  console.log(post);
  return (
    <form onSubmit={handleSubmit}>
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
          value={post?.title}
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
          value={post?.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          style={{
            width: "100%",
            background: "#fff",
            padding: "10px",
          }}
        />
        <Button type="submit" color="primary" variant="contained">
          <TextButton>{post?.id ? "Editar post" : "Cadastrar post"}</TextButton>
        </Button>
        {post?.id && (
          <Button
            type="button"
            color="primary"
            variant="contained"
            onClick={cancelEdit}
          >
            <TextButton>Cancelar Edição</TextButton>
          </Button>
        )}
      </div>
    </form>
  );
};

export default Form;
