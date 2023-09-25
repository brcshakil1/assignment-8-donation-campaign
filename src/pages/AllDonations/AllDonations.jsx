import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationFromLS } from "../../utility/localStorage";
import Donation from "../../components/Donation/Donation";

const AllDonation = () => {
  const [allDonations, setAllDonations] = useState([]);
  const donationsCampaigns = useLoaderData();

  useEffect(() => {
    const donationIds = getDonationFromLS();

    const allTheDonations = donationsCampaigns.filter((donations) =>
      donationIds.includes(donations.id)
    );
    setAllDonations(allTheDonations);
  }, [donationsCampaigns]);

  console.log(allDonations);

  return (
    <div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {allDonations.map((donation) => (
          <Donation key={donation.id} donation={donation} />
        ))}
      </div>
    </div>
  );
};

export default AllDonation;
