import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  NoteContainer,
  NoteHeader,
  NoteTitle,
  NoteContent,
  NoteFooter,
  EditIcon,
  DeleteIcon,
  IconGroup,
} from './Note.styles';
import {
  ModalForm,
  ModalTitle,
  ModalLabel,
  ModalInput,
  ModalTextarea,
  ModalButton,
  CloseButton,
} from './Modal.styles';
import ColorPicker from '../ColorPicker/ColorPicker';
import api from '../../services/api';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface NoteProps {
  id: string;
  title: string;
  content: string;
  color?: string;
  favorite: boolean;
}

const Note: React.FC<NoteProps> = ({
  id,
  title,
  content,
  color = '#FFF',
  favorite,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [noteTitle, setNoteTitle] = useState<string>(title);
  const [noteContent, setNoteContent] = useState<string>(content);
  const [noteColor, setNoteColor] = useState<string>(color);
  const [isFavorite, setIsFavorite] = useState<boolean>(favorite);

  const openModal = (): void => {
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  // Função para salvar a cor no banco de dados
  const updateNoteColor = async (selectedColor: string): Promise<void> => {
    try {
      setNoteColor(selectedColor);
      await api.put(`/api/tasks/${id}`, { color: selectedColor });
      console.log('Note color updated successfully');
    } catch (error) {
      handleError('updating note color', error);
    }
  };

  const handleColorSelect = (color: string): void => {
    updateNoteColor(color);
  };

  const handleUpdateNote = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    try {
      const response = await api.put(`/api/tasks/${id}`, {
        title: noteTitle,
        description: noteContent,
        color: noteColor,
        favorite: isFavorite,
      });
      console.log(response.data);
      closeModal();
      window.location.reload();
    } catch (error) {
      handleError('updating note', error);
    }
  };

  const handleDeleteNote = async (): Promise<void> => {
    try {
      const response = await api.delete(`/api/tasks/${id}`);
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      handleError('deleting note', error);
    }
  };

  const toggleFavorite = async (): Promise<void> => {
    try {
      setIsFavorite((prevState) => !prevState);
      await api.put(`/api/tasks/${id}`, { favorite: !isFavorite });
      window.location.reload();
    } catch (error) {
      handleError('updating favorite status', error);
    }
  };

  const handleError = (action: string, error: unknown): void => {
    if (error instanceof Error) {
      console.error(`Error ${action}:`, error.message);
    } else {
      console.error(`An unexpected error occurred while ${action}:`, error);
    }
  };

  return (
    <>
      <NoteContainer color={noteColor}>
        <NoteHeader>
          <NoteTitle>{noteTitle}</NoteTitle>
          <div onClick={toggleFavorite} style={{ cursor: 'pointer' }}>
            {isFavorite ? (
              <StarIcon style={{ color: '#FFD700' }} />
            ) : (
              <StarBorderIcon style={{ color: '#808080' }} />
            )}
          </div>
        </NoteHeader>
        <NoteContent>{noteContent}</NoteContent>
        <NoteFooter>
          <IconGroup>
            <EditIcon onClick={openModal}>✏️</EditIcon>
            <ColorPicker onSelectColor={handleColorSelect} />
          </IconGroup>
          <DeleteIcon onClick={handleDeleteNote}>❌</DeleteIcon>
        </NoteFooter>
      </NoteContainer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Editar Nota"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ModalTitle>Editar Nota</ModalTitle>
          <CloseButton
            onClick={closeModal}
            style={{ cursor: 'pointer', fontSize: '24px' }}
          >
            &times;
          </CloseButton>
        </div>
        <ModalForm onSubmit={handleUpdateNote}>
          <ModalLabel>
            Título:
            <ModalInput
              type="text"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </ModalLabel>
          <ModalLabel>
            Conteúdo:
            <ModalTextarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: '4px',
                minHeight: '100px',
              }}
            />
          </ModalLabel>
          <ModalButton
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Salvar
          </ModalButton>
        </ModalForm>
      </Modal>
    </>
  );
};

export default Note;
