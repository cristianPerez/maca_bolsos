import TopBar from "./components/TopBar.jsx";
import Hero from "./components/Hero.jsx";
import VideoDemo from "./components/VideoDemo.jsx";
import Gallery from "./components/Gallery.jsx";
import Results from "./components/Results.jsx";
import Pains from "./components/Pains.jsx";
import Offer from "./components/Offer.jsx";
import WhatYouGet from "./components/WhatYouGet.jsx";
import Mentor from "./components/Mentor.jsx";
import Community from "./components/Community.jsx";
import Guarantee from "./components/Guarantee.jsx";
import Faq from "./components/Faq.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";
import SocialProof from "./components/SocialProof.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-crema font-sans text-negro-cafe">
      <TopBar />
      <Hero />
      <VideoDemo />
      <Gallery />
      <Results />
      <Pains />
      <Offer />
      <WhatYouGet />
      <Mentor />
      <Community />
      <Guarantee />
      <Faq />
      <FinalCta />
      <Footer />
      <SocialProof />
    </div>
  );
}
