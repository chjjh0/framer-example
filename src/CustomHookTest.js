import { usePresence, AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { containerStyle } from "./App";

export default function CustomHookTest() {
  const [isPresent, safeToRemove] = usePresence();
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    console.log("isPresent: ", isPresent);
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div style={containerStyle} onTap={() => setVisible(!isVisible)}>
          button
        </motion.div>
      )}
    </AnimatePresence>
  );
}
