import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";

function Search(props) {
  const [wiki, setWiki] = useState({
    search: "Wikipedia",
    title: "",
    description: "",
    url: "",
    error: ""
  });

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "Wikipedia Searcher";

    API.searchTerms(wiki.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setWiki({
          ...wiki,
          title: res.data[1],
          description: res.data[2][0],
          url: res.data[3][0],
          error: ""
        });
      })
      .catch(err => setWiki({ ...wiki, error: err.message }));
  }, []);

  const handleInputChange = event => {
    setWiki({ ...wiki, search: event.target.value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (!wiki.search) {
      return;
    }
    API.searchTerms(wiki.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setWiki({
          ...wiki,
          title: res.data[1],
          description: res.data[2][0],
          url: res.data[3][0],
          error: ""
        });
      })
      .catch(err => setWiki({ ...wiki, error: err.message }));
  };
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert type="danger" style={{ opacity: wiki.error ? 1 : 0, marginBottom: 10 }}>
          {wiki.error}
        </Alert>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          results={wiki.search}
        />
        <SearchResults
          title={wiki.title}
          description={wiki.description}
          url={wiki.url}
        />
      </Container>
    </div>
  );
}

export default Search;
