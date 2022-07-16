import React from "react";
import { Routes, Route } from "react-router-dom";
import ComingSoon from "../components/others/ComingSoon";
import NotFound from "../components/others/NotFound";
import ThankYou from "../components/others/ThankYou";
import Home from "../themes/index/Home";
import TeamDetails from "../pages/TeamDetails";
import Faq from "../pages/Faq";
import ScrollToTop from "./ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
