import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";
import CatCard from "../../components/catCard/CatCard";
import { cards } from "../../data";
import FeatureVideo from "../../components/FeatureVideo/FeatureVideo";
import FeatureBusiness from "../../components/FeatureBusiness/FeatureBusiness";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <FeatureVideo />
      <FeatureBusiness />
    </div>
  );
};

export default Home;
