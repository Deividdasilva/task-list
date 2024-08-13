import styled from 'styled-components';

export const AddNoteContainer = styled.div`
  background-color: #fff;
  width: 530.52px;
  height: 103.36px;
  padding: 20px;
  border-radius: 3px 0 0 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AddNoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const StarIcon = styled.div<{ isFavorite: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.isFavorite ? '#FFD700' : '#808080')}; /* Dourado ou Cinza */
  font-size: 24px;
`;

export const AddNoteInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;
