import { Slider as SliderComponent } from "@mantine/core";
import { useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <SliderComponent
        value={value}
        onChange={setValue}
        labelAlwaysOn
        style={{ width: "400px" }}
      />
    </>
  );
};

export default Slider;
