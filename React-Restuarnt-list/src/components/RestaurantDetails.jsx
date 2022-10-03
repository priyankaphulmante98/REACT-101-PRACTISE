// import data from given data.json
import { useState } from "react";
import data from "../data.json";
import { RestaurantCard } from "./RestaurantCard";

// const initState = {};
const RestaurantDetails = () => {
  const [cards, setards] = useState(data);
  const [sortByCost, setSortByCost] = useState(null);
  const [filterByRating, setFilterByRating] = useState(0);


  const sortBy = (a, b) => {
    if (sortByCost === null) {
      return null;
    }

    if (sortByCost === "asc") {
      return a.cost_for_two - b.cost_for_two;
    }
    if (sortByCost === "desc") {
      return b.cost_for_two - a.cost_for_two;
    }
  };

  const filterCondition=({rating})=>{
    return rating >= filterByRating
  }
 
  return (
    <>
      <h1>RestaurantDetails</h1>
      {/* rating buttons */}
      {[4, 3, 2, 1, 0].map((item,id) => {
        return (
          <button key={id} onClick={()=>setFilterByRating(item)} data-testid={`rating-${item}`}>
            {item === 0 ? "All" : `${item} and above`}
          </button>
        );
      })}
      {/* payment methods */}
      {["card", "cash", "upi", "all"].map((item,id) => {
        return <button key={id} data-testid={`filter-${item}`}>{item}</button>;
      })}
      {["asc", "desc"].map((item,id) => {
        return <button key={id} data-testid={`sortBy-${item}`} onClick={()=>setSortByCost(item)} >{item}</button>;
      })}
      {
        // map through the restaurant data and render Restaurant cards
        cards && cards?.filter(filterCondition).sort(sortBy).map((data,id)=>{
          return <RestaurantCard key={id} data={data}  />
        })
        
      }
    </>
  );
};
export { RestaurantDetails };

