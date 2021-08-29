import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LocationComponent from '../components/LocationComponent';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <Container>
      <main>
        {/* <BannerContainer> */}
        <HeroSection />
        {/* </BannerContainer> */}
      </main>
      <Services />
      <Testimonials />
      <LocationComponent />
      <Footer></Footer>
    </Container>
  );
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
