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
  width: 90%;
  padding: 4px;
  margin: auto;
`;

export const Block = styled.div`
 
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  margin: 15px auto;
  border-radius: 8px;
  box-shadow: 1px 1px 8px 0px tomato;
`;

export const ButtonRegForm = styled.button`
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
