import { Route, Routes } from "react-router-dom";
import { Home, Details } from "../views";
import PublicLayout from "../layouts/PublicLayout";

const Stack = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Details />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Stack;
