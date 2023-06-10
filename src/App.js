import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Layout from "./pages/Layout";
import Ingredients from "./pages/Ingredients";
import MealPlans from "./pages/MealPlans";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import ShoppingList from "./pages/ShoppingList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="meal-plans" element={<MealPlans />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="shopping-list" element={<ShoppingList />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
