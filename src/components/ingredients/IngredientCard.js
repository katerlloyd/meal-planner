import React, { useState } from "react";
import styled from "styled-components";
import IngredientModal from "./IngredientModal";

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

const Picture = styled.img`
  border: 1px solid lightgray;
  border-radius: 0.75rem;
  aspect-ratio: 1/1;
  height: 100px;
`;

const IngredientName = styled.p`
  margin: 0.5rem 1rem;
`;

const IngredientCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const image = data?.image;

  return (
    <>
      <Card
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <Picture src={require("../../images/" + image)} alt={data?.name} />
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
