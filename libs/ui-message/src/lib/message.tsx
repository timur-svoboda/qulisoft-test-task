import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/base";

export type MessageProps = {
  children: string;
};

export const Message = (props: MessageProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    color: "rgba(0, 0, 0, 0.8)",
  },
});
