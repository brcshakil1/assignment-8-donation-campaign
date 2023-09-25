import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationFromLS } from "../../utility/localStorage";
import Donation from "../../components/Donation/Donation";

const AllDonation = () => {
  const [allDonations, setAllDonations] = useState([]);
  const [donationLength, setDonationLength] = useState(4);
  const donationsCampaigns = useLoaderData();
  console.log(allDonations);

  useEffect(() => {
    const donationIds = getDonationFromLS();

    const allTheDonations = donationsCampaigns.filter((donations) =>
      donationIds.includes(donations.id)
    );

    setAllDonations(allTheDonations);
  }, [donationLength, donationsCampaigns]);

  console.log(donationLength);

  return (
    <div className="my-10 md:mb-20">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {allDonations.slice(0, donationLength).map((donation) => (
          <Donation key={donation.id} donation={donation} />
        ))}
      </div>
      {donationLength > 4 && (
        <div
          className={`flex justify-center mt-10 ${
            donationLength === allDonations.length && "hidden"
          }`}
        >
          <button
            onClick={() => setDonationLength(allDonations.length)}
            className="bg-green-600 rounded-md py-3 px-6 text-white font-semibold"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default AllDonation;
