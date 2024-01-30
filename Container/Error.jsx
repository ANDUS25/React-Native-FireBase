import React from "react";
import { Text } from "react-native";

const Error = ({data}) => {
  return <Text className='text-red-500 text-xl'>{data}</Text>;
};

export default Error;
