import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button, Rate } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useRoute} from "@react-navigation/native";


export default function Screen1({navigation }) {
  const route = useRoute();
  const selectedColor = route.params?.selectedColor || "Đỏ";
  const [productInfo, setProductInfo] = useState({});

  const info = {
    Đỏ: {
      img: require("../assets/vs_red.png"),
      price: "1.790.000đ",
    },
    Xanh: {
      img: require("../assets/vs_blue.png"),
      price: "1.590.000đ",
    },
    Đen: {
      img: require("../assets/vs_black.png"),
      price: "1.990.000đ",
    },
    Bạc: {
      img: require("../assets/vs_silver.png"),
      price: "1.890.000đ",
    },
  };
  useEffect(() => {
    setProductInfo(info[selectedColor]);
  }, [selectedColor]);


  return (
    <View style={styles.container}>
      <View style={styles.body1}>
        <Image
          source={productInfo.img}
          style={{ width: 301, height: 361, flexShrink: 0 }}
        ></Image>
        <Text style={{ fontSize: 18, fontWeight: 400, paddingTop: 10 }}>
          Điện thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>

        <View
          style={{
            flex: 0.5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: 350,
            padding: 4,
          }}
        >
          <Rate style={{ fontSize: 23 }} defaultValue={5} />
          <Text style={{ fontSize: 18, fontWeight: 400 }}>
            (Xem 828 đánh giá)
          </Text>
        </View>

        <View
          style={{
            flex: 0.5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: 350,
            padding: 4,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 700, marginLeft: -35 }}>
          {productInfo.price}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              textDecorationLine: "line-through",
              textDecorationWidth: 10,
              textDecorationColor: "black",
              color: "gray",
              marginTop: 5,
            }}
          >
            {productInfo.price}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: 150,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#FA0000",
              fontStyle: "normal",
              marginLeft: -115,
            }}
          >
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <Image
            source={require("../assets/Group1.png")}
            style={{ width: 20, height: 20, marginLeft: -70 }}
          ></Image>
        </View>

        <View
          style={{ flex: 2, padding: 1, flexDirection: "row" }}
        >
          <TouchableOpacity 
            style={{
              flexDirection: "row",
              width: 330,
              height:35,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "black",
              fontSize: 16,
              fontWeight: 600,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate('Screen2')}
          >
            4 MÀU-CHỌN MÀU
            <RightOutlined style={{ fontSize: 20, marginRight: -30 }} />
          </TouchableOpacity >
        </View>
        <View style={{ flex: 3, marginTop:30}}>
          <Button
            style={{
              width: 330,
              height: 50,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "black",
              fontSize: 18,
              fontWeight: 700,
              backgroundColor: 'red',
              color: 'white',
            }}
          >
            CHỌN MUA
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 800,
    width: '100%',
  },
  body1: {
    flex: 5,
    alignItems: "center",
    paddingTop: 10,
    width: '100%',
  },
});
