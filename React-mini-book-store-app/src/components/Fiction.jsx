import data from "../fiction.json"
import BookCard from "./BookCard";

export default function Fiction() {
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Books</h1>

      <div className="books-container" 
      style={{
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "auto",
        margin: "auto",
        justifyContent: "center",
        gap: "32px"
      
      }}>
        {/* Map all Fictional Books here */}

        {data.map((item) => (
          <BookCard {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
}
