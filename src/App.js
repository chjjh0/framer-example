import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

export const containerStyle = {
  width: 150,
  height: 150,
  borderRadius: 30,
  backgroundColor: "rgba(255,255,255,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

export const childrenStyle = {
  width: 80,
  height: 80,
  borderRadius: 15,
  backgroundColor: "#fff",
};

function App() {
  const [isVisible, setVisible] = useState(true);
  const [isVisible2, setVisible2] = useState(true);
  const [[page, direction], setPage] = useState([0, 0]);
  console.log("direction: ", direction);
  console.log("page: ", page);

  return (
    <div className="appContainer">
      <motion.div
        className="motionContainer"
        style={containerStyle}
        onTap={() => setVisible(!isVisible)}
      >
        {/* 초기 렌더링시 initial 비활성화 */}
        <AnimatePresence initial>
          {isVisible && (
            <motion.div
              style={childrenStyle}
              initial={{ opacity: 0, scale: 0.7, backgroundColor: "yellow" }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0, backgroundColor: "purple" }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div style={containerStyle} onTap={() => setVisible2(!isVisible2)}>
        <AnimatePresence onExitComplete={() => console.log("isVisible2 끝")}>
          {isVisible2 && (
            <div>
              <motion.div
                style={childrenStyle}
                initial={{ opacity: 0, scale: 0.7, backgroundColor: "yellow" }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0, backgroundColor: "purple" }}
              />
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
