import React from "react";

import Logo from "../Components/Logo";
import Todos from "../Components/Todos";

const RightScreen = () => {
  return (
    <>
      <Logo />
      <div
        style={{
          paddingTop: 150,
          paddingLeft: 20,
          paddingRight: 20,
          height: "100%",
          // overflowY: "hidden",
        }}
      >
        <Todos />
      </div>
    </>
  );
};

export default RightScreen;
