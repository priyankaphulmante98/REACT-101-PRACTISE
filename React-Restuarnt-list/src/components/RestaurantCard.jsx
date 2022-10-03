import React from "react";

// add styling on your own just giving you the template
const RestaurantCard = ({data}) => {
  const {restaurantName,image,categories,min,cost_for_one,rating,votes,reviews,payment,cost_for_two,is_favorite,id}=data
  return (
    <div data-testid="card-item" 
    style={{
     
      margin: "auto",
      boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      backgroundColor: "pink",
      textAlign: "center",
      padding:"22px",
      width:"302px",
      borderRadius:"20px",
      marginTop: "12px",
      gridTemplateColumns: "1fr 1fr 1fr",
      display:"grid",
      
      
    }}>
      <div>
        <div><img 
         style={{
          width:"300px",
          height:"200px",
          borderRadius:"20px",
          display:"grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto",
          margin: "auto",
          justifyContent: "center",
          gap: "32px"
        
        }}
        src={image} alt="rstoimg" /></div>
        <div>
          <h3 data-testid="card-title"></h3>
          {/* add all other rest details */}
          {restaurantName}
          {categories}
          <p>₹{cost_for_two}</p>
          <p>₹{cost_for_one}</p>
          <p>{min}</p>
          
        </div>
        <div>
          <div data-testid="card-rating">{rating}</div>
          {/* votes etc.. */}
          <h3>Votes:{votes}</h3>
          <h3>reviews:{reviews}</h3>
          
        </div>
      </div>
    </div>
  );
};
export { RestaurantCard };
