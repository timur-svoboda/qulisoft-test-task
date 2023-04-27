import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "@rneui/base";
import { GalleryScreen } from "@qulisoft-test-task/feat-gallery-screen";
import { SinglePhotoScreen } from "@qulisoft-test-task/feat-single-photo-screen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Gallery"
        screenOptions={{
          headerTitle: () => <Text>{""}</Text>,
        }}
      >
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="SinglePhoto" component={SinglePhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
