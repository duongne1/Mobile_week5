import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Screen2() {
  const [selectedColor, setSelectedColor] = useState("Đỏ");
  const navigation = useNavigation();
  const info = {
    Đỏ: {
      img: require("../assets/vs_red.png"),
      color: "Đỏ",
      supplier: "Tiki Tradding",
      price: "1.790.000đ",
    },
    Xanh: {
      img: require("../assets/vs_blue.png"),
      color: "Xanh",
      supplier: "Shoppe Tradding",
      price: "1.590.000đ",
    },
    Đen: {
      img: require("../assets/vs_black.png"),
      color: "Đen",
      supplier: "TikTok Tradding",
      price: "1.990.000đ",
    },
    Bạc: {
      img: require("../assets/vs_silver.png"),
      color: "Bạc",
      supplier: "Lazada Tradding",
      price: "1.890.000đ",
    },
  };

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  const handleSelectColor1 = (color) => {
    setSelectedColor(color);
    navigation.navigate("Screen1", { selectedColor: color });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1.2,
          flexDirection: "row",
          padding: 5,
          alignItems: "center",
          width: "90%",
        }}
      >
        <Image
          source={info[selectedColor].img}
          style={{ width: 100, height: 120, marginLeft: -10 }}
        />
        <View
          style={{
            marginLeft: 20,
            padding: 3,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 450 }}>
            Điện thoại Vsmart Joy 3 <br></br>Hàng chính hãng
          </Text>
          <Text style={{ fontSize: 16 }}>
            Màu:{" "}
            <Text style={{ fontSize: 15, fontWeight: 700 }}>
              {info[selectedColor].color}
            </Text>
          </Text>
          <Text style={{ fontSize: 16 }}>
            Cung cấp bởi{" "}
            <Text style={{ fontSize: 15, fontWeight: 700 }}>
              {info[selectedColor].supplier}
            </Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>
            {info[selectedColor].price}
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 4.5,
          width: "100%",
          backgroundColor: "#C4C4C4",
        }}
      >
        <Text
          style={{
            flex: 0.5,
            fontSize: 19,
            fontWeight: 400,
            padding: 10,
          }}
        >
          Chọn một màu bên dưới:
        </Text>

        <View style={{ flex: 4, alignItems: "center" }}>
          <TouchableOpacity
            style={{
              width: 85,
              height: 80,
              marginBottom: 10,
              backgroundColor: "#C5F1FB",
            }}
            onPress={() => handleSelectColor("Bạc")}
          />
          <TouchableOpacity
            style={{
              width: 85,
              height: 80,
              margin: 10,
              backgroundColor: "#F30D0D",
            }}
            onPress={() => handleSelectColor("Đỏ")}
          />
          <TouchableOpacity
            style={{
              width: 85,
              height: 80,
              margin: 10,
              backgroundColor: "#000000",
            }}
            onPress={() => handleSelectColor("Đen")}
          />
          <TouchableOpacity
            style={{
              width: 85,
              height: 80,
              margin: 10,
              backgroundColor: "#234896",
            }}
            onPress={() => handleSelectColor("Xanh")}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "95%",
              height: 45,
              fontWeight: 700,
              color: "white",
              fontSize: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#CA1536",
              marginTop: 40,
              marginBottom: 10,
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: "#1952E2",
            }}
            onPress={() => handleSelectColor1(selectedColor)}
          >
            XONG
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 680,
    width: "100%",
  },
});
