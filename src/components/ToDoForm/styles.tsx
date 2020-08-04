import styled from "styled-components";

export const StyledError = styled.p`
  color: #bf1650;
  margin: 10px 0 0 0;
  padding: 0;

  ::before {
    display: inline;
    content: "⚠ ";
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  font-size: 18px;
`;

export const StyledForm = styled.form`
  margin-top: -1px;
  margin-left: -2px;
  width: 100%;
`;
