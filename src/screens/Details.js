import {
  Image,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView
} from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import Text from "../components/Text/Text";
import { colors } from "../../theme/colors";
import PlanetHeader from "../components/PlanetHeader";
import { spacing } from "./../../theme/spacing";
import PlanetSection from "./PlanetSection";

export default function Details({ navigation, route }) {
  const planet = route.params.planet;
  const { name, description, image, source, position, velocity, distance } =
    planet;
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} title={planet.name} />
      <ScrollView>
        <Image source={{ uri: image }} style={styles.imageView} />
        <View style={styles.detailsView}>
          <Text style={styles.name} preset="h1">
            {name}
          </Text>
          <Text style={styles.description}>{description}</Text>
          <View style={{ marginTop: 10 }}>
            <Text>
              Source:{" "}
              <Pressable onPress={() => Linking.openURL(source)}>
                <EvilIcons
                  name="external-link"
                  size={24}
                  color={colors.lightGreen}
                />
              </Pressable>
            </Text>
          </View>
        </View>
        <View style={{height: 40}} />
        <PlanetSection title="Position" value={position} />
        <PlanetSection title="Velocity" value={velocity} />
        <PlanetSection title="Distance" value={distance} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: Platform.OS === "android" ? 15 : 0,
  },
  imageView: {
    padding: spacing[5],
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 400,
  },
  detailsView: {
    marginTop: spacing[2],
    marginHorizontal: spacing[6],
  },
  name: {
    textAlign: "center",
    textTransform: "uppercase",
  },
  description: {
    paddingTop: spacing[5],
    textAlign: "justify",
    lineHeight: spacing[6],
  },
});
