import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    img: "./images/The Alchemist.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    id: 1,
  },
  {
    img: "./images/It Starts with Us.jpg",
    title: "It Starts with Us: A Novel",
    author: "Colleen Hoover",
    id: 2,
  },
];
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}
const Book = function (props) {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4> {author}</h4>
      {children}
      {/* children prop - special prop whose children their children */}
      <button onClick={handleButtonClick}>Click me</button>
    </article>
  );
};
const handleButtonClick = () => {
  alert("button clicked!");
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

//**** ****/

//Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones - James Clear
//https://m.media-amazon.com/images/I/41I4UMuFv3L._SY445_SX342_.jpg

//
//https://m.media-amazon.com/images/I/51VC+Vru96L._SY445_SX342_.jpg

//The Alchemist - Paulo Coelho
//https://m.media-amazon.com/images/I/51bVNTqHFlL._SY522_.jpg

//Iron Flame - Rebecca Yarros
//https://m.media-amazon.com/images/I/912fTvsUKLL._SY522_.jpg
