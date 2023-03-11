import IngredientCard from "../components/ingredients/IngredientCard";
import styled from "styled-components";
import data from "../mockData/ingredientsData.json";

const IngredientsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Ingredients = () => {
  return (
    <>
      <h1>Ingredients</h1>
      <IngredientsContainer>
        {data?.ingredients?.map((card, index) => {
          return <IngredientCard data={card} key={index} />;
        })}
      </IngredientsContainer>
    </>
  );
};

export default Ingredients;
