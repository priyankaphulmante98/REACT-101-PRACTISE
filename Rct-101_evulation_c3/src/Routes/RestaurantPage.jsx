import Loader from "../Components/Loader";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RestaurantPage() {

  const [card,setCard]=useState({})
  const {id} =useParams()
  const [isloading,setLaoding]=useState(false)

  useEffect(()=>{
    setLaoding(true)
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
    .then(res=>res.json())
    .then((res)=>{
      // console.log(res)
      setCard(res.data)
      setLaoding(false)
    })
  },[id])


  if (isloading) {
    return <Loader />;
  }


  return (
    <div data-testid="restaurant-container">
      <img data-testid="restaurant-image" width={"100%"} alt={card.name} src={card.image} />
      <div>
        <h4 data-testid="restaurant-name">{card.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{card.type=="fine_dining" && "Fine Dining"}
      {card.type=="ethnic" && "Ethnic"}
      {card.type=="fast_food" && "Fast Food"}
      {card.type=="cafe" && "Cafe"}
      {card.type=="casual_dining" && "Casual Dining"}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{card.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{card.number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{card.price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default RestaurantPage;
