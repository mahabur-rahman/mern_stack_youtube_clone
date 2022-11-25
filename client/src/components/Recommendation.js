import React from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
  flex: 2;
`;

function Recommendation({ tags }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/tags?tags=${tags}`);

      setVideos(res.data);
      console.log("recommendation: ", res.data);
    };

    fetchVideos();
  }, [tags]);

  return (
    <Container>
      {videos.map((video) => {
        return <Card type="sm" key={video._id} video={video} />;
      })}
    </Container>
  );
}

export default Recommendation;
