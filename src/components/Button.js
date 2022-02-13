import styled from 'styled-components';

export default styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #FFF;
  border-radius: 4px;
  transition: filter 0.2s ease-in;

  if !disabled &:hover {
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(0.4);
  }

  &[disabled] {
    background: #CCCC;
    cursor: default;
    filter: none;
  }
`;
