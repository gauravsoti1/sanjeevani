import React from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
// import LocationComponent from '../components/LocationComponent';
// import Services from '../components/Services';
import Testimonials from "../components/Testimonials";
// import Insurances from '../components/Insurances';
import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import Skeleton from "@material-ui/lab/Skeleton";
import YoutubeChannel from "../components/YoutubeChannel";
// import useInView from 'react-cool-inview';
const LocationComponent = dynamic(
  () => import("../components/LocationComponent"),
  {
    ssr: false,
    // loading: () => <Skeleton variant="rect" animation="wave" height={300} />,
  }
);

const Empanelment = dynamic(() => import("../components/Empanelment"), {
  loading: () => <Skeleton variant="rect" animation="wave" height={300} />,
});

const Insurances = dynamic(() => import("../components/Insurances"), {
  loading: () => <Skeleton variant="rect" animation="wave" height={300} />,
});

const Services = dynamic(() => import("../components/Services"), {
  loading: () => <Skeleton variant="rect" animation="wave" height={300} />,
});

export default function Home(props) {
  // const { observe, inView } = useInView({
  //   onEnter: ({ unobserve }) => unobserve(), // only run once
  // });
  // const { seo } = homepage;
  return (
    <Container>
      <Seo
        title="Sanjeevani Super Speciality Hospital"
        description="Sanjeevani Plus Hospital is one of the leading specialty orthopedics units running successfully for over a decade. We offer planned orthopedics surgery to people locally, nationally and internationally."
        shareImage="/logo.png"
      />
      <main>
        <HeroSection />
      </main>
      <Empanelment />
      <Insurances />
      <YoutubeChannel />
      <Services />
      <Testimonials />
      <LocationComponent />
      {/* <div ref={observe}>{inView && <LocationComponent />}</div> */}
      {/* <Footer></Footer> */}
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
`;
