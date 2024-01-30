import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 px-10 justify-around bg-blue-500">
      <Text className="text-4xl text-center text-white">
        Let's Get Started !
      </Text>
      <Image
        source={require("../assets/Study.png")}
        alt="Study Image"
        style={{ width: width - 150 }}
        className="self-center"
      />

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text className="bg-slate-900 text-center p-5 rounded-2xl text-2xl hover:text-red-500 text-gray-200 ">
            Sign Up
          </Text>
        </TouchableOpacity>
        <View className="items-center">
          <Text className="text-lg ">
            Already have an account ?
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text className="text-lg text-white"> Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
