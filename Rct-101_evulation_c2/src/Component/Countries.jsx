import LoadingIndicator from "./LoadingIndicator";

import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

export const getCountries = ({ page = 1, limit = 10 }) => {
  return fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=${limit}`
  ).then((res) => {
    return res.json();
  });
};

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [page, setCurrent] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalpage] = useState("");

  useEffect(() => {
    handleFetchData();
  }, [page, limit]);

  const handleFetchData = async () => {
    try {
      setLoading(true);
      const data = await getCountries({ page, limit });
      // console.log(data.data)
      setCountries(data.data);
      setTotalpage(data.totalPages);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.log("err");
    }
  };

  const onChange = (current) => {
    setCurrent(page + current);
  };

  if (loading) return <LoadingIndicator />;

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Countries Card */}
        {countries.map((e) => (
          <CountriesCard
            key={e.id}
            country={e.country}
            population={e.population}
          />
        ))}
      </div>
      <div>
        {/* Pagination */}
        <Pagination
          totalPages={totalPages}
          onChange={onChange}
          current={page}
        />
      </div>
    </div>
  );
}
