import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1> Adopt Me!</h1>
      <Pet name="Sansa" animal="Dog" breed="pitbul" />
      <Pet name="Nevasca" animal="Dog" breed="ViraCoKe" />
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
