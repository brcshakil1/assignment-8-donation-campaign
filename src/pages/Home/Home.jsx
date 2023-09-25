import { useLoaderData } from "react-router-dom";
import DonationCampaigns from "../../components/DonationCampaigns/DonationCampaigns";
import Banner from "../../components/Banner/Banner";
import { useEffect, useState } from "react";

const Home = () => {
  const [filterDonationCampaign, setFilterDonationCampaign] = useState([]);
  const donationCampaigns = useLoaderData();

  const handleFilter = (value) => {
    if (value === "Health" || value === "health") {
      const health = donationCampaigns.filter(
        (campaign) => campaign.category === "Health"
      );
      setFilterDonationCampaign(health);
    } else if (value === "Education" || value === "education") {
      const education = donationCampaigns.filter(
        (campaign) => campaign.category === "Education"
      );
      setFilterDonationCampaign(education);
    } else if (value === "Clothing" || value === "clothing") {
      const clothing = donationCampaigns.filter(
        (campaign) => campaign.category === "Clothing"
      );
      setFilterDonationCampaign(clothing);
    } else if (value === "Food" || value === "food") {
      const food = donationCampaigns.filter(
        (campaign) => campaign.category === "Food"
      );
      setFilterDonationCampaign(food);
    }
  };

  useEffect(() => {
    setFilterDonationCampaign(donationCampaigns);
  }, [donationCampaigns]);
  console.log(filterDonationCampaign);
  return (
    <div>
      <Banner handleFilter={handleFilter} />
      <DonationCampaigns donationCampaigns={filterDonationCampaign} />
    </div>
  );
};

export default Home;
