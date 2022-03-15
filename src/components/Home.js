import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_LIST_OF_COUNTRIES = gql`
  {
    countries {
      name
      capital
      emoji
    }
  }
`;
function Home() {
  const { data, loading, error } = useQuery(QUERY_LIST_OF_COUNTRIES);

  return (
    <div className="home">
      <h1>List of Countries</h1>
      <div className="listOfCountries">
        {loading && <h3>Data is Loading....</h3>}
        {error && <h3>{error.message}</h3>}
        {data &&
          data.countries.map((country, key) => {
            return (
              <div key={key}>
                <h2>
                  {country.name} {country.emoji}
                </h2>
                <h4>{country.capital}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
