import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  margin-bottom: 15px;
`;

export const Block = styled.div`
  border: 4px solid purple;
  width: 500px;
  margin: 0 auto;
`;

export const ButtonLoginForm = styled.button`
  width: 100px;
  margin-top: 10px;
  margin-left: auto;
  margin-bottom: 20px;
  margin-right: auto;
  background: #abcec300;

  &:hover,
  :focus {
    background-color: #6aa290;
  }
`;
