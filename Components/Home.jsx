import { signOut } from "firebase/auth";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { auth } from "../config/firebase";

const Home = () => {
  const handleSignOut = async () => {
    await signOut(auth);
  };
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-gray-100 text-2xl">
        Hey !!! do your want to{" "}
        <TouchableOpacity className="">
          <Text onPress={handleSignOut} className="text-gray-100 text-2xl">
            Sign Out
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Home;
