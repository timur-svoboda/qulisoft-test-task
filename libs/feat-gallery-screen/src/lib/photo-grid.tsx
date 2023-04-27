import { View, StyleSheet, FlatList } from "react-native";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";
import { GetGalleryPhotosResult } from "@qulisoft-test-task/data-gallery-api";
import { Message } from "@qulisoft-test-task/ui-message";
import { PhotoCard } from "./photo-card";
import { Footer } from "./footer";

export type PhotoGridProps = {
  isLoading: boolean;
  isError: boolean;
  data: GetGalleryPhotosResult[0][] | undefined;
  onEndReached: () => void;
};

export const PhotoGrid = (props: PhotoGridProps) => {
  const { isLoading, isError, data, onEndReached } = props;

  const isSmallMobile = useMediaQuery({
    maxWidth: 479,
  });

  const isMobile = useMediaQuery({
    minWidth: 480,
    maxWidth: 767,
  });

  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1023,
  });

  let numColumns: number;
  if (isSmallMobile) {
    numColumns = 1;
  } else if (isMobile) {
    numColumns = 2;
  } else if (isTablet) {
    numColumns = 3;
  } else {
    numColumns = 4;
  }

  if (isError) {
    return <Message>Oops, an error happened</Message>;
  }

  if (!isLoading && (!data || data.length === 0)) {
    return <Message>There are no photos</Message>;
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      numColumns={numColumns}
      key={numColumns}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.7}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <PhotoCard photo={item} />
        </View>
      )}
      ListFooterComponent={<Footer />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 20,
  },
});
