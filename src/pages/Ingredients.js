import IngredientCard from "../components/ingredients/IngredientCard";
import styled from "styled-components";
import data from "../mockData/ingredientsData.json";

const IngredientsContainer = styled.div`
  display: flex;
  // grid-template-columns: repeat(6, 1fr);
  border-radius: 1rem;
  gap: 1rem;
`;

const Ingredients = () => {
  return (
    <>
      <h1>Ingredients</h1>
      <IngredientsContainer>
        {data?.ingredients?.map((card) => {
          return <IngredientCard data={card} />;
        })}
      </IngredientsContainer>
    </>
  );
};

export default Ingredients;
