import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Text from "../components/Text/Text";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "./../../theme/colors";
import { PLANET_DATA } from "../data/planet-list";
import { spacing } from "./../../theme/spacing";

export default function HomeScreen({ navigation }) {
  const [list, setList] = useState(PLANET_DATA)
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { planet: item })}
        style={styles.item}
      >
        <View style={{ flexDirection: "row" }}>
          {/* <View style={[styles.circle, { backgroundColor: item.color }]}></View> */}
          <Image style={styles.circle} source={{uri: item.image}} />
          <Text preset="h4" style={styles.itemName}>
            {item.name}
          </Text>
        </View>
        <AntDesign name="rightcircle" size={16} color={colors.white} />
      </TouchableOpacity>
    );
  };
  const searchFilter=(text)=>{
    const filterList = PLANET_DATA.filter((item)=>{
      const itemName = item.name.toLowerCase()
      const userTyped = text.toLowerCase()
      return itemName.indexOf(userTyped) > -1
    })
    setList(filterList)
  }
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <TextInput
        placeholder="Type Planet Name"
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={(text)=> searchFilter(text)}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: Platform.OS === "android" ? 15 : 0,
  },
  list: {
    padding: spacing[5],
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[4],
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 15,
  },
  separator: {
    borderBottomColor: colors.grey,
    borderWidth: .5,
  },
  searchInput: {
    padding: spacing[4],
    borderBottomColor: colors.grey,
    color: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5]
  }
});
