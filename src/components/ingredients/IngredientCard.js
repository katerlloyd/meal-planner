import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IngredientModal from "./IngredientModal";
import Picture from "./Picture";

const Card = styled.div`
  border-radius: 0.75rem;
  padding: 0.5rem;
  border: 1px solid lightgray;
  max-width: 100%;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  box-shadow: 0px 0px 10px 0px lightgray;

  :hover {
    box-shadow: 0px 0px 10px 0px gray;
    transform: scale(1.05);
  }
`;

const IngredientName = styled.p`
  margin: 0.5rem 1rem;
`;

const IngredientCard = ({ data, isAModalOpen, setIsAModalOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiStatus, setApiStatus] = useState({ error: false, loading: false });
  // const [image, setImage] = useState(require("../../images/placeholder.jpg"));

  useEffect(() => {
    if (isModalOpen) {
      setIsAModalOpen(true);
    } else {
      setIsAModalOpen(false);
    }
  }, [isModalOpen]);

  // useEffect(() => {
  //   try {
  //     setImage(require("../../images/" + data?.image));
  //   } catch (e) {
  //     setApiStatus({ ...{ error: true } });
  //   }
  // }, [data]);

  return (
    <>
      <Card
        onClick={() => {
          if (!isAModalOpen) {
            setIsModalOpen(true);
          }
        }}
      >
        <Picture {...data} />
        <IngredientName>{data?.name}</IngredientName>
      </Card>

      {isModalOpen && (
        <IngredientModal
          {...{ data, isModalOpen, setIsModalOpen }}
        ></IngredientModal>
      )}
    </>
  );
};

export default IngredientCard;
