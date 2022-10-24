import React from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";

const Welcome = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
`;
