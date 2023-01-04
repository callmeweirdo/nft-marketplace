import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// ? react navigation imports
// import { CreateStacNavigator } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// ? fonts import
import { useFonts } from "expo-font";

// ? Screen Imports
import Home from "./Screens/Home";
import Details from "./Screens/Details";

// ? setting up the navigation
const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  const [loaded] = useFonts({
    IneterBold: require("./assets/fonts/Inter-Bold.ttf"),
    IneterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    IneterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    IneterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    IneterLight: require("./assets/fonts/Inter-Light.ttf"),
  });
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default App;
