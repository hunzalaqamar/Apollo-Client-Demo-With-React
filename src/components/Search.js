import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const QUERY_SEARCH_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      capital
      emoji
      code
      currency
    }
  }
`;

function Search() {
  const [searchCountry, setSearchCountry] = useState("");
  const [countrySearch, { data, loading, error }] =
    useLazyQuery(QUERY_SEARCH_COUNTRY);
  return (
    <div className="search">
      <div className="inputs">
        <Link to="/">Go Back to Home</Link>
        <input
          type="text"
          placeholder="Enter Country Code (ex. BR)..."
          onChange={(event) => {
            setSearchCountry(event.target.value);
          }}
        />
        <button
          onClick={() => {
            countrySearch({
              variables: { code: searchCountry.toUpperCase() },
              pollInterval: 500, // to sync after some time i.e. 500ms
            });
          }}
        >
          Search it!
        </button>
      </div>

      <div className="searchCountry">
        {error && <h1>Error While Fetching Data</h1>}
        {loading && <h1>Data is Loading...</h1>}
        {data && (
          <div className="countryDisplay">
            <h1>Name: {data.country.name}</h1>
            <h1>Emoji: {data.country.emoji}</h1>
            <h1>Capital: {data.country.capital}</h1>
            <h1>Currency: {data.country.currency}</h1>
            <h1>Country Code: {data.country.code}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
