import DivisionSection from "./DivisionSection";
import HeroSection from "./HeroSection";
import HomePartners from "./HomePartners";
import StatsInfo from "./StatsInfo";
import WhoWeAre from "./WhoWeAre";

export default function Home(){
    return(
        <>
            <HeroSection />
            <StatsInfo />
            <hr className="m-0"/>
            <WhoWeAre />
            <DivisionSection />
            <HomePartners />
        </>
    )
}