import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://countries.trevorblades.com/",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/search" exact element={<Search />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
