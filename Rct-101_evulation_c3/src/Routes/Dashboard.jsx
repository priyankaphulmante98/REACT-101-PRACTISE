import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { AppContext } from "../Context/AppContext";
import RestaurantTable from "../Components/RestaurantTable";
import Pagination from "../Components/Pagination";

function Dashboard() {
  const { logoutUser, authState } = useContext(AppContext);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [show,setShow]=useState(1)
  const [filterBy,setFilterBy]=useState("")
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    getData()
  }, [page,filterBy]);

  const getData=()=>{
    setLoading(true);

    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10&filter=${filterBy}`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setData(res.data);
        setShow(res.totalPages);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div>
        <select data-testid="filter-box" value={filterBy} onChange={(e)=>setFilterBy(e.target.value)}>
          <option value="">All</option>
          <option value="fine_dining">Fine Dining</option>
          <option value="ethnic">Ethnic</option>
          <option value="fast_food">Fast Food</option>
          <option value="cafe">Cafe</option>
          <option value="casual_dining">Casual Dining</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
       { isloading && <Loader />}
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
        <RestaurantTable data={data} />
      </div>
      <br />
      <div data-testid="pagination-container">{/* Pagination */}
      <Pagination currentPage={page} handlePageChange={(value)=>setPage(value)} totalPages={show}/>
      </div>
    </div>
  );
}

export default Dashboard;
