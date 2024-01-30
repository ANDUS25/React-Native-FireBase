import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ChevronLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "react-native-heroicons/solid";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { ErrorContainer } from "../Container/index";
import { auth } from "../config/firebase";

const SignUp = () => {
  // to fill input data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigation = useNavigation();

  // to trigger error
  const [Error, setError] = useState("");

  // password hide and show
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailError = (e) => {
    if (!e.includes("@") || !e.includes(".com")) {
      setError(`It should contain "@" and ".com`);
    } else {
      setError("");
    }
    setEmail(e);
  };

  const handlePasswordError = (e) => {
    if (e.length < 8 || e.length == 1) {
      setError("Length should be at least 8 Char.");
    } else if (e.length == 0 || e.length >= 8) {
      setError("");
    }
    setPassword(e);
  };

  useEffect(() => {}, [Error]);

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <ScrollView>
      <View className="flex-1 bg-white">
        <View>
          <Text
            className="p-5 bg-yellow-300"
            onPress={() => {
              Navigation.goBack();
            }}
          >
            <ChevronLeftIcon color={"#000"} />
          </Text>
          <Image />
        </View>
        <View className=" bg-slate-500 rounded-e-2xl px-9">
          <View className="my-5">
            <Text className="text-xl mb-2">Email</Text>
            <TextInput
              placeholder="Enter Your Email"
              className="bg-gray-400 text-white p-3 rounded-xl text-xl"
              onChangeText={(e) => handleEmailError(e)}
              value={email}
            />
          </View>
          {email && <ErrorContainer data={Error} />}
          <View className="my-5">
            <Text className="text-lg mb-2">Password</Text>
            <View className="flex justify-between flex-row w-full bg-gray-400 p-3 rounded-xl">
              <TextInput
                placeholder="Enter Your Password"
                className="text-white text-xl"
                onChangeText={(e) => handlePasswordError(e)}
                value={password}
                secureTextEntry={showPassword ? true : false}
                maxLength={16}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeIcon size={32} color={"red"} />
                ) : (
                  <EyeSlashIcon size={32} color={"red"} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          {password && <ErrorContainer data={Error} />}
          <View className="my-5">
            <TouchableOpacity onPress={handleSubmit}>
              <Text className="bg-yellow-400 text-center text-2xl p-3 rounded-2xl">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
