import React, { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  // get random videos
  useEffect(() => {
    const getRandomVideos = async () => {
      const res = await axios.get(`/videos/${type}`);

      setVideos(res.data);
    };

    getRandomVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => {
        return <Card key={video._id} video={video} />;
      })}
    </Container>
  );
};

export default Home;
