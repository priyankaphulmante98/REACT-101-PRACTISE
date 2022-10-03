import data from "../nonfiction.json"
import BookCard from "./BookCard";
export default function NonFiction() {
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container" 
      style={{
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "auto",
        margin: "auto",
            // backgroundColor: "red",
        justifyContent: "center",
        gap: "32px"
      }}>
        {/* Display all Non-Fiction books here */}

        {data.map((item) => (
          <BookCard {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
}
