import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  border: 1px solid lightgray;
  border-radius: 0.75rem;
  aspect-ratio: 1 / 1;
  height: 150px;
  object-fit: cover;
`;

const Picture = ({ className, data }) => {
  // worked when was just data without {} and className but styling didn't work
  console.log(data, "data");
  const [apiStatus, setApiStatus] = useState({ error: false, loading: false });
  const [image, setImage] = useState(require("../../images/default.jpg"));

  useEffect(() => {
    try {
      setImage(require("../../images/" + data?.image));
    } catch (e) {
      setApiStatus({ ...{ error: true } });
    }
  }, [data]);

  return <Image src={image} alt={data?.name} className={className} />;
};

export default Picture;
