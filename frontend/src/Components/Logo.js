import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

const Logo = ({ style }) => {
  return (
    <>
      <Title
        level={1}
        title="todo"
        style={{
          color: "#191716",
          float: "right",
          fontSize: 72,
          padding: 20,
          fontWeight: "bolder",
          ...style,
        }}
      >
        <span style={{ color: "blueviolet" }}>list</span>
        <span style={{ color: "darkmagenta" }}>ed</span>
        <Text style={{ color: "#E6AF2E", fontSize: 84, lineHeight: 0 }}>.</Text>
      </Title>
    </>
  );
};

export default Logo;
