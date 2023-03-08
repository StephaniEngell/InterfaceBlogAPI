// Third-party imports
import React from "react";
import { FaPen, FaPlusCircle, FaTrash } from "react-icons/fa";
// Local imports
import {
  HeaderPost,
  ContentBody,
  Heading,
  Text,
  FooterPost,
  Content,
  ButtonCreatePost,
} from "./styles";


function Post({ title, body, id, onDelete, onEdit }) {
  return (
    <Content>
      <HeaderPost>
        <ButtonCreatePost>
          <FaPlusCircle size={25} color="#878787" />
        </ButtonCreatePost>
      </HeaderPost>

      <ContentBody>
        <Heading>{title}</Heading>
        <Text>{body}</Text>
      </ContentBody>

      <FooterPost>
        <button
          onClick={() => onEdit(id)}
          style={{ border: "none", background: "#fff" }}
        >
          <FaPen size={20} color="#878787" />
         
        </button>
        <button
          id="delete"
          onClick={() => onDelete(id)}
          style={{ border: "none", background: "#fff" }}
        >
          <FaTrash size={20} color="#878787" />
        </button>
      </FooterPost>
    </Content>
  );
}

export default Post;
