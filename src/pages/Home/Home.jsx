import { useLoaderData } from "react-router-dom";
import DonationCampaigns from "../../components/DonationCampaigns/DonationCampaigns";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const donationCampaigns = useLoaderData();
  return (
    <div>
      <Banner />
      <DonationCampaigns donationCampaigns={donationCampaigns} />
    </div>
  );
};

export default Home;
