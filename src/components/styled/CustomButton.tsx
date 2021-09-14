import { Button } from "native-base";
import React from "react";

const CustomButton = (props: any) => {
  return <Button bg="#F045B5" _pressed={{ bg: "#02EB35" }} {...props} />;
};

export default CustomButton;
