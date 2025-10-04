import { useEffect, useState } from "react";

import { motion } from "motion/react";

const welcomeText = ["Hi !", "Bonjour!", "Hola!", "Ciao!", "!مرحبا", "你好"];

const AnimatePreloader = {
  initial: {
    y: 0,
  },
  exit: {
    y: "-100svh",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (index === welcomeText.length) return;
    setFade(true);
    const timeout = setTimeout(
      () => {
        setFade(false);
        setIndex((i) => i + 1);
      },
      index === 0 ? 1000 : 350
    );
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <motion.div
      className="loader"
      variants={AnimatePreloader}
      exit={"exit"}
      initial="initial"
    >
      {fade && <p className=" motion-preset-focus ">{welcomeText[index]}</p>}
    </motion.div>
  );
}
