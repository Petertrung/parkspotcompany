import Contact from "../../components/contact/Contact";
import FeatureImgThree from "../../components/features/FeatureImgThree";
import Footer from "../../components/layout/footer/Footer";
import Navbar from "../../components/layout/header/Navbar";
import Layout from "../../components/layout/Layout";
import Promo from "../../components/promo/Promo";
import VideoPromoTwo from "../../components/promo/VideoPromoTwo";
import Screenshot from "../../components/screenshot/Screenshot";
import Team from "../../components/team/Team";
import Hero from "./Hero";

export default function HomeFour() {
  return (
    <Layout>
      <Navbar darkBg />
      <Hero />
      <Promo />
      <FeatureImgThree />
      <VideoPromoTwo />
      <Screenshot />
      <Team bgColor="gray-light-bg" />
      <Contact bgColor />
      <Footer />
    </Layout>
  );
}
