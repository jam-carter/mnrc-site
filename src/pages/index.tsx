import Header from '../components/Header';
import MainBanner from "@/components/landingPageComponents/MainBanner";
import IntroBlock from "@/components/landingPageComponents/IntroBlock";
import AffiliateClubBlock from "@/components/landingPageComponents/AffiliateClubBlock";
import RoomSectionBlock from "@/components/landingPageComponents/RoomSectionBlock";
import MembershipBlock from "@/components/landingPageComponents/MembershipBlock";
import SponsersBlock from "@/components/landingPageComponents/SponsersBlock";
import ContactUsBlock from "@/components/landingPageComponents/ContactUsBlock";
import FooterBlock from "@/components/FooterBlock";
import HomePageHeader from "@/components/landingPageComponents/homePageHeader";

// Colour Pallette: jet - #363537, 'white' - #fbfef9, crimson - #d62839


function App() {
    return (
        <div>
            <HomePageHeader />
            <MainBanner />
            <IntroBlock />
            <AffiliateClubBlock />
            <RoomSectionBlock />
            <MembershipBlock />
            <SponsersBlock />
            <ContactUsBlock />
            <FooterBlock />
        </div>
    );
}

export default App;

//maybe all the rooms on the main page, but have this component to swap between them
//link https://mui.com/material-ui/react-tabs/
