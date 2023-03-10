// Third-party imports
import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";
// Local imports
import {
  HeaderPost,
  ContentBody,
  Heading,
  Text,
  FooterPost,
  Content,
} from "./styles";

function ListPost({ posts, onDelete, onEdit }) {
  return (
    posts.length > 0 &&
    posts.map((post) => (
      <Content>
        <HeaderPost />
        <ContentBody>
          <Heading>{post.title}</Heading>
          <Text>{post.body}</Text>
        </ContentBody>

        <FooterPost>
          <button
            onClick={() => onEdit(post)}
            style={{ border: "none", background: "#fff" }}
          >
            <FaPen size={20} color="#878787" />
          </button>
          <button
            id="delete"
            onClick={() => onDelete(post.id)}
            style={{ border: "none", background: "#fff" }}
          >
            <FaTrash size={20} color="#878787" />
          </button>
        </FooterPost>
      </Content>
    ))
  );
}

export default ListPost;
