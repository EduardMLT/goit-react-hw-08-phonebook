import styled from 'styled-components';

export const Contaner = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.p`
  font-weight: 700;
`;

export const ButtonUserMenu = styled.button`
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