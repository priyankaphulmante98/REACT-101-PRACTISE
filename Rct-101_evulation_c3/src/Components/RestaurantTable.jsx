import RestaurantCard from "./RestaurantCard";

function RestaurantTable({ data }) {
  // console.log(data)
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {
          data?.map((item) => 
            
              <RestaurantCard
                key={item.id}
                name={item.name}
                rating={item.rating}
                type={item.type}
                price={item.price_starts_from}
                id={item.id}
              />
            
          )}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
