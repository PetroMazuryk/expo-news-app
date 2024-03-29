import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Loading } from "../components/Loading";
import imgDefault from "../assets/imgDefault.jpg";

export const FullPostScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const { id, title } = route.params;

  useEffect(() => {
    setIsLoading(true);
    navigation.setOptions({
      title,
    });
    axios
      .get("https://642f4410b289b1dec4b00ecd.mockapi.io/api/v1/articles/" + id)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Помилка", "Невлалося отримати статтю");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.postImage}
        source={!data.imageUrl ? imgDefault : { uri: data.imageUrl }}
      />
      <Text style={styles.postText}>{data.text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  postImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  postTitle: {
    fontSize: 18,
    lineHeight: 24,
  },
});
