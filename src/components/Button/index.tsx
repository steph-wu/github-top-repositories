import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

type Props = {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
};

type ButtonProps = {
  hidden?: boolean;
}

const Button: React.FC<Props> = ({ label, onClick, isDisabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={isDisabled}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${theme.primary};
  border-radius: 40px;
  border: 0;
  width: 120px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 125%;
  font-size: 14px;
  padding: 16px;

  ${props => props.disabled && css`
    opacity: 30%;
  `}

  &:hover {
    cursor: pointer; 
  }
`;

export default Button;