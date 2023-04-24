import IngredientCard from "../components/ingredients/IngredientCard";
import styled from "styled-components";
import data from "../mockData/ingredientsData.json";
import { useState } from "react";

const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

const Add = styled.div`
  display: flex;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  color: white;
  background-color: orange;
  font-weight: bold;
  font-size: 1.75rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px 0px lightgray;
  margin: 0 1rem;

  :hover {
    color: lightgray;
    background-color: black;
    box-shadow: 0px 0px 10px 0px gray;
  }
`;

const IngredientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Ingredients = () => {
  const ingredients = data?.ingredients;
  const [isAModalOpen, setIsAModalOpen] = useState(false);

  const addIngredient = () => {
    console.log("Add ingredient");
  };

  return (
    <>
      <TitleBar>
        <h1>Ingredients</h1>
        <Add
          onClick={() => {
            addIngredient();
          }}
        >
          +
        </Add>
      </TitleBar>
      <IngredientsContainer>
        {ingredients?.map((card, index) => {
          return (
            <IngredientCard
              {...{
                data: card,
                key: index,
                isAModalOpen,
                setIsAModalOpen,
              }}
            />
          );
        })}
      </IngredientsContainer>
    </>
  );
};

export default Ingredients;
