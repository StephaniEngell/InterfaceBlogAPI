import React, { useState } from "react";
import { ModalWrapper, ModalContent, Form, Input, Button } from "./styles";

function Edit(props) {
  const [formState, setFormState] = useState(props.item);

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formState);
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <Form onSubmit={handleSubmit}>
          <label>
            Nome:
            <Input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Descrição:
            <textarea
              name="description"
              value={formState.description}
              onChange={handleChange}
            ></textarea>
          </label>
          <Button type="submit">Salvar</Button>
          <Button onClick={props.onClose}>Cancelar</Button>
        </Form>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Edit;
