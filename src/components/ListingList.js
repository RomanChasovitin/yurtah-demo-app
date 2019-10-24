import React from "react";
import { connect } from "react-redux";

import Loader from "./Loader";
import ListingItem from "./ListingItem";

const ListingList = ({ isLoading, listings, touched }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (!touched && !listings.length) {
    return <span>Please, request amount of Listings :)</span>;
  }

  if (!listings.length && !isLoading) {
    return <span>Not Found :(</span>;
  }

  return (
    <div className="listing-list">
      {listings.map(listing => (
        <ListingItem key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    listings: state.listing.listings,
    isLoading: state.listing.isLoading,
    touched: state.listing.touched
  };
};

export default connect(
  mapStateToProps,
  null
)(ListingList);
