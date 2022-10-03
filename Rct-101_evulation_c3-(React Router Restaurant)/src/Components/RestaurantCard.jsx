import { Link } from "react-router-dom";

export default function RestaurantCard({name,rating,type,price,id}) {
  return (

    <tr data-testid="item" key={id}>
      <td>
        <Link to={`/restaurants/${id}`} data-testid="name">{name}</Link>
      </td>
      <td data-testid="rating">{rating}</td>
      
      <td data-testid="type">{type=="fine_dining" && "Fine Dining"}
      {type=="ethnic" && "Ethnic"}
      {type=="fast_food" && "Fast Food"}
      {type=="cafe" && "Cafe"}
      {type=="casual_dining" && "Casual Dining"}
      
      </td>
      <td data-testid="price">{price}</td>
    </tr>
  );
}
