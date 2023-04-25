import { StyleSheet, View, ActivityIndicator } from "react-native";

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <ActivityIndicator animating={true} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 40,
  },
});
