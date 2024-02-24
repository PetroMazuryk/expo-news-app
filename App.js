import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Post } from "./components/Post";

export default function App() {
  return (
    <View style={styles.container}>
      <Post
        title="Test "
        imageUrl="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
        createAt="22.02.2024"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  // post: {
  //   flexDirection: "row",
  //   padding: 26,
  //   borderBottomWidth: 1,
  //   borderBottomColor: "rgba(0,0,0,0.1)",
  //   borderBottomStyle: "solid",
  // },
  // img: {
  //   width: 60,
  //   height: 60,
  //   borderRadius: 12,
  //   marginRight: 12,
  // },
  // postDetails: {
  //   justifyContent: "center",
  // },
  // postTitle: {
  //   fontSize: 14,
  //   fontWeight: "700",
  // },
  // postData: {
  //   fontSize: 12,
  //   color: "rgba(0,0,0,0.6)",
  //   marginTop: 2,
  // },
});
