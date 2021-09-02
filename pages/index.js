import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LocationComponent from '../components/LocationComponent';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Insurances from '../components/Insurances';
import fetchApi from '../lib/fetchApi';
import Seo from '../components/Seo';

export default function Home({ homepage }) {
  const { seo } = homepage;
  return (
    <Container>
      <Seo
        title={seo.metaTitle}
        description={seo.metaDescription}
        shareImage={process.env.NEXT_PUBLIC_CMS_MEDIA_URL + seo.shareImage.url}
      />
      <main>
        {/* <BannerContainer> */}
        <HeroSection />
        {/* </BannerContainer> */}
      </main>
      <Insurances />
      <Services />
      <Testimonials />
      <LocationComponent />
      <Footer></Footer>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const homepage = await fetchApi('/homepage');
  return {
    props: { homepage }, // will be passed to the page component as props
  };
}

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

const BannerContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  height: 50vh;
  position: relative;
`;
