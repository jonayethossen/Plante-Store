import AboutBloomingOasis from "../components/AboutBloomingOasis";
import CuratedCollection from "../components/CuratedCollection";
import ExplorePlants from "../components/ExplorePlants";
import Hero from "../components/Hero/HeroPart";
import PlantCareGuides from "../components/PlantCareGuides";
import PlantMatchmaker from "../components/PlantMatchmaker";
import PopularHouseplants from "../components/PopularHouseplants";

export default function Home() {
  return (
    <>
      <Hero />
      <PlantMatchmaker />
      <ExplorePlants />
      <PopularHouseplants />
      <CuratedCollection />
      <PlantCareGuides />
      <AboutBloomingOasis />
    </>
  );
}
