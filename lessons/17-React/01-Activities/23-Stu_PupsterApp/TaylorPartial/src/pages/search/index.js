import React from 'react';

function Search(props) {
  return (
      <div className="Search">
          This is the search page. You are searching for {props.match.params.searchTerm}.
      </div>
  );
}

export default Search;