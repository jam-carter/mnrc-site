import MainBanner from "@/components/landingPageComponents/mainBanner";
import IntroBlock from "@/components/landingPageComponents/introBlock";
import AffiliateClubBlock from "@/components/landingPageComponents/affiliateClubBlock";
import RoomSectionBlock from "@/components/landingPageComponents/roomSectionBlock";
import MembershipBlock from "@/components/landingPageComponents/membershipBlock";
import SponsersBlock from "@/components/landingPageComponents/sponsersBlock";
import ContactUsBlock from "@/components/landingPageComponents/contactUsBlock";
import FooterBlock from "@/components/footerBlock";
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

//link https://mui.com/material-ui/react-tabs/
