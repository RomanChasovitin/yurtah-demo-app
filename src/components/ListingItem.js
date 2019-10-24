import React from "react";

const ListingItem = ({ listing }) => {
  const listingImageUrl = listing.objects.find(obj => obj.type === "photo").data.small.jpeg;
  const listingAddress = `${listing.slug} #${listing.apartment_number}`;
  const price = `$ ${listing.price}`;
  return (
    <div className="listing-item">
      <div className="listing-item__image-wrapper">
        <img src={listingImageUrl} alt="" className="listing-item__image" />
      </div>
      <span className="listing-item__address">{listingAddress}</span>
      <span className="listing-item__price">{price}</span>
    </div>
  );
};

export default ListingItem;
