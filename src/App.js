import React, { useState } from 'react';
import Logo from './components/header/Logo';
import ThemeToggle from './components/ThemeToggle';
import './styles/app.css';
import Menu from './components/menu';
import Img from './components/img';
import Pagination from './components/pag/Pagin';

const App = () => {
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="app">
      <Logo />
      <ThemeToggle />
      <Menu />
      <Img />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
