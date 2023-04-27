import {
  StyleSheet,
  Image,
  View,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { GetFullPhotoResult } from "@qulisoft-test-task/data-gallery-api";

type PhotoProps = {
  photo: GetFullPhotoResult | undefined;
};

export const Photo = (props: PhotoProps) => {
  const { photo } = props;

  const { height: screenHeight } = useWindowDimensions();
  const headerHeight = useHeaderHeight();
  return (
    <View style={{ ...styles.container, height: screenHeight - headerHeight }}>
      <ActivityIndicator style={styles.indicator} size="large" />
      {photo && (
        <Image
          style={styles.image}
          source={{ uri: photo.urls.full }}
          alt={photo.description}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  indicator: {
    position: "absolute",
    left: "50%",
    top: "50%",
    marginLeft: -18,
    marginTop: -18,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
