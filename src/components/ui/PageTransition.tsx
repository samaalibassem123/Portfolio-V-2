import { motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function PageTransition({ children }: Props) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1540);
  }, []);
  if (loading)
    return (
      <motion.div
        className="w-full h-svh text-center bg-black/95  absolute top-0 left-0 z-50 text-6xl text-white backdrop-blur-sm font-manrope flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.p
          initial={{ filter: "blur(0px)" }}
          animate={{ filter: "blur(12px)", opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {children}
        </motion.p>
      </motion.div>
    );
  return null;
}
