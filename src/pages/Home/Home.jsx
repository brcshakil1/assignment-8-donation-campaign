import { useLoaderData } from "react-router-dom";
import DonationCampaigns from "../../components/DonationCampaigns/DonationCampaigns";
import Banner from "../../components/Banner/Banner";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [filterDonationCampaign, setFilterDonationCampaign] = useState([]);
  const donationCampaigns = useLoaderData();

  const handleFilter = (value) => {
    const valueToLower = value.toLowerCase();

    const filterCampaign = donationCampaigns.filter((campaign) => {
      const categoryToLower = campaign.category.toLowerCase();
      return categoryToLower === valueToLower;
    });

    if (!filterCampaign.length) {
      toast("Not Found");
    }
    setFilterDonationCampaign(filterCampaign);
  };

  useEffect(() => {
    setFilterDonationCampaign(donationCampaigns);
  }, [donationCampaigns]);

  return (
    <div>
      <ToastContainer />
      <Banner handleFilter={handleFilter} />
      <DonationCampaigns donationCampaigns={filterDonationCampaign} />
    </div>
  );
};

export default Home;
