import React from "react";
import SlotM from "./SlotMac";
const App = () => {
  <SlotM />;
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to
        <span style={{ fontWeight: "bold" }}> Slot machine game</span> 🎰{" "}
      </h1>
      <div className="center_slot">
        <div className="adjust_slot">
          <SlotM x="😄" y="😄" z="😄" />
          <SlotM x="😄" y="😃" z="😄" />
          <SlotM x="🍎" y="🍌" z="🍎" />
          <SlotM x="🏩" y="🤭" z="😠" />
        </div>
      </div>
    </>
  );
};

export default App;
