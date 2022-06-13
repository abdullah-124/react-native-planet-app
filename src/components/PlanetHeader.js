import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Text from "./Text/Text";
import { spacing } from "../../theme/spacing";
import { colors } from "../../theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PlanetHeader({ backBtn, title }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
        <TouchableOpacity
          style={{ marginRight: spacing[4] }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Text preset="h2">The {title ? title : "Planets"}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: spacing[6],
    borderBottomWidth: 0.2,
    borderColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
});
