import React from "react";
import { Button } from "../styles";
import { ContentForm, Input, TextForm, TextButton, Container } from "./styles";

const AddPost = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.titulo.value, e.target.subtitulo.value);
    e.target.titulo.value = "";
    e.target.subtitulo.value = "";
  };

  return (
    <Container>
      <ContentForm onSubmit={handleOnSubmit}>
        <TextForm></TextForm>
        <Input placeholder="Título" name="titulo" />
        <Input placeholder="Subtítulo" name="subtitulo" />
        <Button onSubmit={handleOnSubmit}>
          <TextButton>Add</TextButton>
        </Button>
      </ContentForm>
    </Container>
  );
};

export default AddPost;
