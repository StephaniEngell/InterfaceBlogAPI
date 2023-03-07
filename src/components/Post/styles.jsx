import styled from "styled-components";

export const Content = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: #9d9c9c;
  width: 430px;
  border-radius: 50px;
  overflow: hidden;
`;

export const HeaderPost = styled.div`
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: 50px;
  padding: 10px 20px;
`;

export const ButtonCreatePost = styled.button`
  background-color: transparent;
  border: none;

  :hover {
    cursor: pointer;
  }
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

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 5px;
  width: 100px;
  margin-bottom: 10px;

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const TextButton = styled.h2`
  font-size: 12px;
  color: #fff;
`;

export const TextContainer = styled.h2`
  color: #fff;
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

export const ContentImage = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 30px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);
  margin: 20px 0;
  border: none;
`;

export const ContentIcons = styled.div`
  :hover {
    cursor: pointer;
  }
`;
