import { StyleSheet, Text, View, Image } from "react-native";
import { client } from "../lib/appwrite";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo/Dragon Den Logo Black.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.small}>Sous Chef</Text>
      <Text style={styles.title}>Order Queue</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  logo: {
    width: 120,
    height: 40,
    marginBottom: 16,
  },

  title: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
  },

  text: {
    color: "#000000",
    fontSize: 24,
  },

  small: {
    color: "#444444",
    fontSize: 16,
  },
});
