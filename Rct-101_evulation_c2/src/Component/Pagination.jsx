export default function Pagination({ totalPages, current, onChange }) {
  const prev = (
    <button
      style={{
        height: "30px",
        width: "100px",
        color: "white",
        borderRadius: "10px",
        border: "2 px solid black",
        backgroundColor: "green"
      }}
      data-testid="prev-page"
      disabled={current === 1}
      onClick={() => onChange(-1)}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">{current}</button>;
  const next = (
    <button
      style={{
        height: "30px",
        width: "100px",
        color: "white",
        borderRadius: "10px",
        border: "2 px solid black",
        backgroundColor: "green"
      }}
      data-testid="next-page"
      disabled={current === totalPages}
      onClick={() => onChange(+1)}
    >
      Next
    </button>
  );

  return (
    <div data-testid="page-container">
      <div>
        {prev}
        {currentPage}
        {next}
      </div>
      <div style={{ backgroundColor: "royalblue" }}>
        Total Pages: <b data-testid="total-pages">{totalPages}</b>
      </div>
    </div>
  );
}
