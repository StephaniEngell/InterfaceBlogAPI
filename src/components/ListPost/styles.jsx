import styled from "styled-components";

export const Content = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column; // Coloca os itens um abaixo do outro
  background-color: #9d9c9c;
  width: 430px;
  border-radius: 50px; // Bordas arredondadas
  overflow: hidden; // Esconde o texto que passar do tamanho do container
`;

export const HeaderPost = styled.div`
  background-color: #fff; // Cor de fundo
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: 50px;
  padding: 10px 20px;
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #9d9c9c;
  height: 370px;
`;

export const Heading = styled.h2`
  color: #000;
  margin-bottom: 10px;
`;

export const Text = styled.h3`
  color: #fff;
`;

export const FooterPost = styled.div`
  background-color: #fff;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 100%;
  height: 50px;
  padding: 20px;
  display: flex;
  gap: 20px;
  padding: 10px 20px;
`;
