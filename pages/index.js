import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
// import LocationComponent from '../components/LocationComponent';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Insurances from '../components/Insurances';
import Seo from '../components/Seo';
import dynamic from 'next/dynamic';
import Skeleton from '@material-ui/lab/Skeleton';
import useInView from 'react-cool-inview';

const LocationComponent = dynamic(
  () => import('../components/LocationComponent'),
  { ssr: false }
);

export default function Home(props) {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
  // const { seo } = homepage;
  return (
    <Container>
      <Seo
        title="Sanjeevani Super Speciality Hospital"
        description="Sanjeevani Plus Hospital is one of the leading specialty orthopedics units running successfully for over a decade. We offer planned orthopedics surgery to people locally, nationally and internationally."
        shareImage="/logo.png"
      />
      <main>
        {/* <BannerContainer> */}
        <HeroSection />
        {/* </BannerContainer> */}
      </main>
      <Insurances />
      <Services />
      <Testimonials />
      <div ref={observe}>{inView && <LocationComponent />}</div>
      <Footer></Footer>
    </Container>
  );
}

// export async function getServerSideProps(context) {
//   const homepage = await fetchApi('/homepage');
//   return {
//     props: { homepage }, // will be passed to the page component as props
//   };
// }

const Container = styled.div`
  min-height: 100vh;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background: ${(props) => props.theme.palette.primary.light};
  width: 100%;
  padding: 1rem;
`;
