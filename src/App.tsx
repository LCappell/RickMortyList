import React, { FC } from 'react';
import './styles/main.css';
import ListPage from './Pages/ListPage';
import CharacterPage from './Pages/CharacterPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Home Routes */}
          <Route path='/' element={<ListPage />} />
          <Route path='/:id' element={<ListPage />} />
          {/* Character Routes */}
          <Route path='/character-info' element={<CharacterPage />} />
          <Route path='/:id/character-info' element={<CharacterPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
