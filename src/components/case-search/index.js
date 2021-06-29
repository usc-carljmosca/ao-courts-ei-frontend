import React from 'react';
import { navigate } from 'gatsby';

const CaseSearch = ({}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const query = data.get('search');
    if (query.toLowerCase().includes('carpenter')) {
      navigate('/docket-entry/');
    }
  };

  return (
    <section aria-label="Big search component">
      <h2>Find Cases</h2>
      <form className="usa-search" role="search" onSubmit={handleSubmit}>
        <label className="usa-sr-only" htmlFor="search-field-en-big">
          Search
        </label>
        <input
          className="usa-input"
          id="search-field-en-big"
          type="search"
          name="search"
        />
        <button className="usa-button" type="submit">
          <span className="usa-search__submit-text">Search</span>
        </button>
      </form>
    </section>
  );
};

export default CaseSearch;
