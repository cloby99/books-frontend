import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Book() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [availability, setAvailability] = useState("");

  const { id } = useParams();
  const navigator = useNavigate();

  const [errors, setErrors] = useState({
    name: "",
    author: "",
    ISBN: "",
    genre: "",
    language: "",
    availability: "",
  });

  useEffect(() => {
    if (id) {
      getBookData(id);
    }
  }, [id]);

  const getBookData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/book/${id}`);
      const { name, author, ISBN, genre, language, availability } = response.data;
      setName(name);
      setAuthor(author);
      setISBN(ISBN);
      setGenre(genre);
      setLanguage(language);
      setAvailability(availability);
    } catch (error) {
      console.error(error);
    }
  };

  const saveOrUpdateBook = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const book = { name, author, ISBN, genre, language, availability };

      try {
        if (id) {
          await axios.put(`http://localhost:8080/book/${id}`, book);
        } else {
          await axios.post("http://localhost:8080/book", book);
        }
        navigator("/books");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (!name.trim()) {
      errorsCopy.name = "Name is required";
      valid = false;
    } else {
      errorsCopy.name = "";
    }

    if (!author.trim()) {
      errorsCopy.author = "Author is required";
      valid = false;
    } else {
      errorsCopy.author = "";
    }

    if (!ISBN.trim()) {
      errorsCopy.ISBN = "ISBN is required";
      valid = false;
    } else {
      errorsCopy.ISBN = "";
    }

    if (!genre.trim()) {
      errorsCopy.genre = "Genre is required";
      valid = false;
    } else {
      errorsCopy.genre = "";
    }

    if (!language.trim()) {
      errorsCopy.language = "Language is required";
      valid = false;
    } else {
      errorsCopy.language = "";
    }

    if (!availability.trim()) {
      errorsCopy.availability = "Availability is required";
      valid = false;
    } else {
      errorsCopy.availability = "";
    }

    setErrors(errorsCopy);
    return valid;
  };

  const pageTitle = () => {
    return id ? <h2 className="text-center my-4">Update Book</h2> : <h2 className="text-center my-4">Add Book</h2>;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  placeholder="Enter Book Name"
                  name="name"
                  value={name}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Author:</label>
                <input
                  type="text"
                  placeholder="Enter Author Name"
                  name="author"
                  value={author}
                  className={`form-control ${errors.author ? "is-invalid" : ""}`}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                {errors.author && <div className="invalid-feedback">{errors.author}</div>}
              </div>
              <div className="form-group mb-3">
                <label className="form-label">ISBN:</label>
                <input
                  type="text"
                  placeholder="Enter ISBN"
                  name="ISBN"
                  value={ISBN}
                  className={`form-control ${errors.ISBN ? "is-invalid" : ""}`}
                  onChange={(e) => setISBN(e.target.value)}
                />
                {errors.ISBN && <div className="invalid-feedback">{errors.ISBN}</div>}
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Genre:</label>
                <input
                  type="text"
                  placeholder="Enter Genre"
                  name="genre"
                  value={genre}
                  className={`form-control ${errors.genre ? "is-invalid" : ""}`}
                  onChange={(e) => setGenre(e.target.value)}
                />
                {errors.genre && <div className="invalid-feedback">{errors.genre}</div>}
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Language:</label>
                <input
                  type="text"
                  placeholder="Enter Language"
                  name="language"
                  value={language}
                  className={`form-control ${errors.language ? "is-invalid" : ""}`}
                  onChange={(e) => setLanguage(e.target.value)}
                />
                {errors.language && <div className="invalid-feedback">{errors.language}</div>}
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Availability:</label>
                <input
                  type="text"
                  placeholder="Enter Availability"
                  name="availability"
                  value={availability}
                  className={`form-control ${errors.availability ? "is-invalid" : ""}`}
                  onChange={(e) => setAvailability(e.target.value)}
                />
                {errors.availability && <div className="invalid-feedback">{errors.availability}</div>}
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-success" onClick={saveOrUpdateBook}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
