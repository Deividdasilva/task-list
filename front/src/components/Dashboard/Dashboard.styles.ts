import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  align-items: center;

  .search-icon {
    position: absolute;
    right: 10px;
    color: #ccc;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 35px 10px 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const NotesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  width: 100%;
  text-align: left;
  padding-left: 20px;
`;

export const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas para tablets */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* 1 coluna para celulares */
  }
`;