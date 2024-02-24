import axios from "axios";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Alert,
  View,
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "./components/Post";

export default function App() {
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
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
        <Text
          style={{
            marginTop: 15,
          }}
        >
          Завантаженняю...
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPost} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Post
              title={item.title}
              imageUrl={item.imageUrl}
              createAt={item.createAt}
            />
          </TouchableOpacity>
        )}
      />
      {/* {[...items, ...items].map((obj) => (
        <Post
          title={obj.title}
          imageUrl={obj.imageUrl}
          createAt={obj.createAt}
        />
      ))} */}

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
});
