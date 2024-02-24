import axios from "axios";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Alert,
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "../components/Post";
import { Loading } from "../components/Loading";

export const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchPost = () => {
    setIsLoading(true);
    axios
      .get("https://642f4410b289b1dec4b00ecd.mockapi.io/api/v1/articles")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Помилка", "Невлалося отримати статті");
        alert("Помилка при отриманні статей");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(fetchPost, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPost} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullPost", {
                id: item.id,
                title: item.title,
              })
            }
          >
            <Post
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
