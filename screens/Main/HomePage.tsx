import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import React from "react";
import SortDropdown from "../../components/ui/SortDropdown";
import BrowseTasks from "../../components/BrowseTasks";

const HomePage = ({ navigation }) => {
  const width1 = Dimensions.get("window").width;
  console.log(width1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <SortDropdown />
          <SortDropdown />
          <SortDropdown />
        </ScrollView>
      </View>
      <View style={styles.body}>
        <BrowseTasks navigation={navigation} />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: { flex: 1 },
  header: { marginLeft: 20, backgroundColor: "white" },
});
