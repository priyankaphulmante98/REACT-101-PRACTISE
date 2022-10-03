
export default function BookCard({img, year, title, author, price}) {
  return (
    <div data-testid='book-card' style={{
      margin: "auto",
      boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      backgroundColor: "pink",
      textAlign: "center",
      padding:"22px",
      width:"302px",
      borderRadius:"20px",
      marginTop: "12px"
    }}>
       <img src={img} alt={title} width="200px" height="250px"/>
        <b><div data-testid='book-card-title'>{title}<span>({year})</span></div></b>
        <div data-testid='book-card-author'>{author}</div>
        <div data-testid='book-card-price'>Price: {price} Rs</div>
    </div>
  )
}

