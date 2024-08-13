import styled from 'styled-components';

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
`;

export const ModalLabel = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 5px;
`;

export const ModalTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 5px;
  height: 100px;
`;

export const ModalButton = styled.button`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CloseButton = styled.button`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  background-color: #dc3545;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #c82333;
  }
`;
