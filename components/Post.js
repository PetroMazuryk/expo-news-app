import { StyleSheet, View, Image, Text } from "react-native";

const tranclateTitle = (str) => {
  if (str.length > 50) {
    return str.substring(0, 50) + "...";
  }
  return str;
};

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <View style={styles.post}>
      <Image style={styles.img} source={{ uri: imageUrl }} />
      <View style={styles.postDetails}>
        <Text style={styles.postTitle}>{tranclateTitle(title)}</Text>
        <Text style={styles.postData}>{createdAt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
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
    flex: 1,
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
