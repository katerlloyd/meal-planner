import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Layout from "./pages/Layout";
import Ingredients from "./pages/Ingredients";
import Recipes from "./pages/Recipes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;