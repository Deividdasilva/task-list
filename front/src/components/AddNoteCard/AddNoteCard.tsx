import React, { useState } from 'react';
import { AddNoteContainer, AddNoteHeader, AddNoteInput } from './AddNoteCard.styles';
import api from '../../services/api';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const AddNoteCard: React.FC = () => {
  const [noteTitle, setNoteTitle] = useState<string>('');
  const [titleInput, setTitleInput] = useState<string>('');
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleAddNote = async (): Promise<void> => {
    if (noteTitle.trim() !== '') {
      try {
        await api.post('/api/tasks', {
          title: titleInput,
          description: noteTitle,
          favorite: isFavorite,
          color: '#FFFFFF',
        });

        resetForm();
        window.location.reload();
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error adding note:', error.message);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      }
    }
  };

  const resetForm = (): void => {
    setNoteTitle('');
    setTitleInput('');
    setIsFavorite(false);
  };

  const toggleFavorite = (): void => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <AddNoteContainer>
      <AddNoteHeader>
        <input
          type="text"
          placeholder="Título"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          style={{
            fontSize: '18px',
            border: 'none',
            outline: 'none',
            width: '100%',
            padding: '5px 0',
            marginBottom: '10px',
          }}
        />
        <div onClick={toggleFavorite} style={{ cursor: 'pointer' }}>
          {isFavorite ? (
            <StarIcon style={{ color: '#FFD700' }} />
          ) : (
            <StarBorderIcon style={{ color: '#808080' }} />
          )}
        </div>
      </AddNoteHeader>
      <AddNoteInput
        placeholder="Criar nota..."
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddNote()}
      />
    </AddNoteContainer>
  );
};

export default AddNoteCard;

