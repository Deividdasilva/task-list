import React, { useState } from 'react';
import styled from 'styled-components';

const colors = ['#ADD8E6', '#90EE90', '#FFD700', '#FFB6C1', '#FF69B4', '#87CEFA', '#9370DB', '#8FBC8F', '#FFA07A', '#D3D3D3'];

const ColorPickerContainer = styled.div`
  position: relative;
`;

const ColorButton = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin: 5px;
`;

const Palette = styled.div`
  position: absolute;
  top: -10px; /* Ajustar a posição vertical */
  left: 40px; /* Ajustar a posição horizontal */
  display: flex;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

interface ColorPickerProps {
  onSelectColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onSelectColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePalette = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ColorPickerContainer>
      <ColorButton onClick={togglePalette} color="#FFF">🎨</ColorButton>
      {isOpen && (
        <Palette>
          {colors.map((color) => (
            <ColorButton key={color} color={color} onClick={() => onSelectColor(color)} />
          ))}
        </Palette>
      )}
    </ColorPickerContainer>
  );
};

export default ColorPicker;
