import Home from "./pages/Home";

import Preloader from "./components/preloder/Preloader";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>

      {!loading && <Home />}
    </>
  );
}

export default App;
