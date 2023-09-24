import React from "react";
import { useParams } from "react-router-dom";

const DonationDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>details</h1>
    </div>
  );
};

export default DonationDetails;
