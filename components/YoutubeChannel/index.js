import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard';

const youtubeRSSFeed =
  'https://api.rss2json.com/v1/api.json?rss_url=https://youtube.com/feeds/videos.xml?channel_id=UCGVsk63iG0S0pDEqxHIXKAQ';

export default function YoutubeChannel() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(youtubeRSSFeed, { headers: { Accept: 'application/json' } })
      .then((res) => res.json())
      .then((data) => data.items.filter((item) => item.title.length > 0))
      .then((newVideos) => newVideos.slice(0, 10))
      .then((videos) => setVideos(videos))
      .catch((error) => console.log(error));
  }, []);
  return videos.length > 0 ? (
    <Section>
      {videos.map(({ title, link, thumbnail, description }) => (
        <VideoCard
          key={title}
          videoLink={link}
          thumbnailUrl={thumbnail}
          title={title}
          description={description}
        />
      ))}
    </Section>
  ) : (
    <></>
  );
}

const Section = styled.section`
  height: 60vh;
  ${(props) => props.theme.breakpoints.up('md')} {
    height: 90vh;
  }
  padding: 0 1rem;
  display: grid;
  align-items: center;
  // grid-auto-columns: max-content;
  // grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  width: 100%;
  overflow-x: auto;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  background: ${({ theme }) => theme.palette.secondary.dark};
`;
