import { BrowserRouter } from "react-router-dom";
import { useInitPokemonList } from "./context/utils";
import Stack from "./routes";

function App() {
  useInitPokemonList();

  return (
    <BrowserRouter>
      <Stack />
    </BrowserRouter>
  );
}

export default App;
