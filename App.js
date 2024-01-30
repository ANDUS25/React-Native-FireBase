import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import Welcome from "./Components/Welcome.jsx";
import useAuth from "./hook/useAuth.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  const { user } = useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
