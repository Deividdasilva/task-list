import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  Container,
  Header,
  Icon,
  Title,
  TitleWrapper,
  SearchInputWrapper,
  SearchInput,
  NotesContainer,
  SectionTitle,
  NotesGrid,
} from './Dashboard.styles';
import Note from '../Note/Note';
import AddNoteCard from '../AddNoteCard/AddNoteCard';
import api from '../../services/api';
import ColorPicker from '../ColorPicker/ColorPicker';

interface Task {
  id: string;
  title: string;
  description: string;
  favorite: boolean;
  color: string;
}

const Dashboard: React.FC = () => {
  const [favoriteTasks, setFavoriteTasks] = useState<Task[]>([]);
  const [otherTasks, setOtherTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchColor, setSearchColor] = useState<string>('');
  const [isFavoriteFilter, setIsFavoriteFilter] = useState<boolean>(false);

  useEffect(() => {
    const fetchTasks = async (): Promise<void> => {
      try {
        const response = await api.get('/api/tasks');
        const allTasks: Task[] = response.data;
        
        // Separar tarefas favoritas e outras tarefas
        const favorites = allTasks.filter(task => task.favorite);
        const others = allTasks.filter(task => !task.favorite);
        
        setFavoriteTasks(favorites);
        setOtherTasks(others);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error fetching tasks:', error.message);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      }
    };

    fetchTasks();
  }, []);

  // Função de filtragem de tarefas
  const filterTasks = (tasks: Task[]): Task[] => {
    return tasks.filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (searchColor === '' || task.color === searchColor) && 
      (!isFavoriteFilter || task.favorite)
    );
  };

  // Função para alternar o filtro de favorito
  const toggleFavoriteFilter = (): void => {
    setIsFavoriteFilter(prevState => !prevState);
  };

  // Função para lidar com a seleção de cor
  const handleColorSelect = (color: string): void => {
    setSearchColor(color);
  };

  const filteredFavoriteTasks = filterTasks(favoriteTasks);
  const filteredOtherTasks = filterTasks(otherTasks);

  return (
    <Container>
      <Header>
        <Icon src="/corenotes-icon.png" alt="CoreNotes Icon" />
        <TitleWrapper>
          <Title>CoreNotes</Title>
        </TitleWrapper>
        <SearchInputWrapper>
          <SearchInput
            placeholder="Pesquisar notas..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)} // Atualiza o termo de busca
          />
          <FaSearch className="search-icon" />
          <div onClick={toggleFavoriteFilter} style={{ cursor: 'pointer', marginLeft: '10px' }}>
            {isFavoriteFilter ? (
              <StarIcon style={{ color: '#FFD700' }} />
            ) : (
              <StarBorderIcon style={{ color: '#808080' }} />
            )}
          </div>
          <ColorPicker onSelectColor={handleColorSelect} />
        </SearchInputWrapper>
      </Header>
      <NotesContainer>
        <AddNoteCard />
        <SectionTitle>Favoritas</SectionTitle>
        <NotesGrid>
          {filteredFavoriteTasks.length > 0 ? (
            filteredFavoriteTasks.map(task => (
              <Note
                key={task.id}
                id={task.id}
                title={task.title}
                content={task.description}
                favorite={task.favorite}
                color={task.color}
              />
            ))
          ) : (
            <p>Nenhuma nota favorita encontrada.</p>
          )}
        </NotesGrid>
        <SectionTitle>Outras</SectionTitle>
        <NotesGrid>
          {filteredOtherTasks.length > 0 ? (
            filteredOtherTasks.map(task => (
              <Note
                key={task.id}
                id={task.id}
                title={task.title}
                content={task.description}
                favorite={task.favorite}
                color={task.color}
              />
            ))
          ) : (
            <p>Nenhuma outra nota encontrada.</p>
          )}
        </NotesGrid>
      </NotesContainer>
    </Container>
  );
};

export default Dashboard;
