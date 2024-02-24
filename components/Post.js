import { StyleSheet, View, Image, Text } from "react-native";
export const Post = ({ title, imageUrl, createAt }) => {
  return (
    <View style={styles.post}>
      <Image style={styles.img} source={{ uri: imageUrl }} />
      <View style={styles.postDetails}>
        <Text style={styles.postTitle}>{title}</Text>
        <Text style={styles.postData}>{createAt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    flexDirection: "row",
    padding: 26,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomStyle: "solid",
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
  postDetails: {
    justifyContent: "center",
  },
  postTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  postData: {
    fontSize: 12,
    color: "rgba(0,0,0,0.6)",
    marginTop: 2,
  },
});
