import styled from 'styled-components';

export const NoteContainer = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 100%;
  max-width: 390px;
  height: auto;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  @media (max-width: 600px) {
    padding: 15px;
    border-radius: 20px;
  }
`;

export const NoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
`;

export const NoteTitle = styled.h3`
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const StarIcon = styled.div`
  cursor: pointer;
`;

export const NoteContent = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  flex-grow: 1;

  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const NoteFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    gap: 8px;
  }
`;

export const EditIcon = styled.div`
  cursor: pointer;
`;

export const DeleteIcon = styled.div`
  cursor: pointer;
`;
