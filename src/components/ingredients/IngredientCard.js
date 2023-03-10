import React, { useState } from "react";
import styled from "styled-components";
import IngredientModal from "./IngredientModal";

const Card = styled.div`
  border-radius: 1rem;
  padding: 0.5rem;
  border: 3px solid red;
  max-width: 100%;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
`;

const Picture = styled.img`
  border: 3px solid #d3d3d3;
  border-radius: 1rem;
  aspect-ratio: 1/1;
  height: 100px;
`;

const IngredientName = styled.p`
  margin: 0.5rem 1rem;
`;

const IngredientCard = (data) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <Picture href={data?.imageUrl} />
        <IngredientName>{data?.name || "Cheese"}</IngredientName>
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
