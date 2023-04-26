import React from "react";
import {
  InstantSearch,
  Configure,
  Hits,
  SearchBox,
  Stats,
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch";
import { Hit } from "../../molecules/hit";
import PostCard from "../../organisms/post-card";

const algolia = {
  appId: "5PPF4WL1B8",
  searchOnlyApiKey: "59a677707c2fd7a53aa70000db39a18c",
  indexName: "uaumotors_blog",
};

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);

export function AdvancedSearch() {
  // force focus on search input
  React.useEffect(() => {
    const searchInput = document.querySelector(".ais-SearchBox-input") as any;

    if (searchInput) {
      searchInput.autoFocus = true;
      searchInput.focus();
      setTimeout(() => {
        searchInput.focus();
      }, 500);
    }
  }, []);
  return (
    <div className="form-search">
      <InstantSearch indexName={algolia.indexName} searchClient={searchClient}>
        <Configure hitsPerPage={12} />
        <SearchBox
          aria-label="Search here"
          translations={{ placeholder: "Search here..." }}
        />

        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} results in ${timeSpentMs}ms 🚀 `;
            },
          }}
        />

        <PostCard>
          <Hits hitComponent={Hit} />
        </PostCard>
      </InstantSearch>
    </div>
  );
}
