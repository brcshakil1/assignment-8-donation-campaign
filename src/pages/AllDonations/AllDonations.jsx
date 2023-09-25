import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationFromLS } from "../../utility/localStorage";
import Donation from "../../components/Donation/Donation";

const AllDonation = () => {
  const [allDonations, setAllDonations] = useState([]);
  const [length, setLength] = useState(4);
  const donationsCampaigns = useLoaderData();

  useEffect(() => {
    const donationIds = getDonationFromLS();

    const allTheDonations = donationsCampaigns.filter((donations) =>
      donationIds.includes(donations.id)
    );

    if (length > 4) {
      setLength(setAllDonations.length);
    }
    setAllDonations(allTheDonations);
  }, [donationsCampaigns]);

  console.log(allDonations);

  return (
    <div className="my-10 md:mb-20">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {allDonations.map((donation) => (
          <Donation key={donation.id} donation={donation} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-green-600 rounded-md py-3 px-6 text-white font-semibold">
          See All
        </button>
      </div>
    </div>
  );
};

export default AllDonation;
