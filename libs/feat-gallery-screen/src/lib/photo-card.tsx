import { StyleSheet, Linking } from "react-native";
import { Text, Card } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { GetGalleryPhotosResult } from "@qulisoft-test-task/data-gallery-api";
import { NavigationProp } from "./types";

type PhotoCardProps = {
  photo: GetGalleryPhotosResult[0];
};

export const PhotoCard = (props: PhotoCardProps) => {
  const { photo } = props;
  const navigation = useNavigation<NavigationProp>();

  return (
    <Card containerStyle={styles.container}>
      <Card.Image
        source={{ uri: photo.urls.small }}
        alt={photo.description ?? ""}
        style={styles.image}
        onPress={() => navigation.navigate("SinglePhoto", { id: photo.id })}
      />
      <Text style={styles.author}>
        Author:{" "}
        <Text
          style={styles.authorLink}
          onPress={() => Linking.openURL(photo.user.links.html)}
        >
          {photo.user.username}
        </Text>
      </Text>
      <Text>Description: {photo.description ?? "No description"}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    margin: 0,
  },
  image: {
    marginBottom: 20,
  },
  author: {
    marginBottom: 8,
  },
  authorLink: {
    color: "blue",
  },
});
