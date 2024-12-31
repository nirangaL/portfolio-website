import { useEffect } from "react";
import "./App.css";
import { Pages } from "./components/pages/Pages";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1800 });
    AOS.refresh();
  });
  return (
    <>
      <Pages />
    </>
  );
}

export default App;
