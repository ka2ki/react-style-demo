/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #e00;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css({
    margin: "0",
    color: "blue"
  });

  return (
    <dir css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT</SButton>
    </dir>
  );
};

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
