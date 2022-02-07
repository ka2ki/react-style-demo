import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- StyledComponents -</STitle>
      <SButton>FIGHT</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #e00;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: blue;
`;

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #abedd8;
    color: #fff;
    cursor: pointer;
  }
`;
