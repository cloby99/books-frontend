import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import BooksList from "../components/BooksList";
import Book from "../components/Book";

function Home({ isAuthenticated, logoutButton }) {
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>
      <Router>
        <Header logoutButton={logoutButton}/>

        <Routes>
          <Route exact path="/" element={<BooksList />} />
          <Route exact path="/books" element={<BooksList />} />
          <Route exact path="/add-book" element={<Book />} />
          <Route exact path="/update-book/:id" element={<Book />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Home;
