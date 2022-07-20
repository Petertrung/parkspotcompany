import React from "react";
import Footer from "../components/layout/footer/Footer";
import Navbar from "../components/layout/header/Navbar";
import Layout from "../components/layout/Layout";
import VideoPromo from "../components/promo/VideoPromo";
import PageHeader from "../components/team/PageHeader";
import TeamMember from "../components/team/TeamMember";
import TestimonialTwo from "../components/testimonial/TestimonialTwo";
import { teams } from "../data";
import { useParams } from "react-router-dom";

export default function TeamDetails() {
  let { userId } = useParams();
  let user = teams.find((x) => x.id.toString() === userId);
  return (
    <Layout>
      <Navbar darkBg user={user} />
      <PageHeader HeaderTitle="Our Team" PageTitle="Our Team" />
      <TeamMember user={user} />
      <VideoPromo user={user} />
      <TestimonialTwo user={user} />
      <Footer />
    </Layout>
  );
}
