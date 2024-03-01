import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";

export default function Login() {
  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{}}>
        <Image
          source={require("../../utils/images/login.jpg")}
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
            borderRadius: 100,
            marginBottom: 20,
          }}
        />
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: Colors.LIGHT,
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Welcome to DownWork
          </Text>
          <Text
            style={{
              color: Colors.SECONDARY,
              fontSize: 15,
              fontWeight: "semibold",
              textAlign: "center",
            }}
          >
            Your one stop app for finding{" "}
            <Text
              style={{
                color: Colors.BLUE,
                fontWeight: "bold",
              }}
            >
              Blue Color
            </Text>{" "}
            Jobs
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.LIGHT,
            marginTop: 30,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: Colors.DARK,
              fontSize: 20,
              fontWeight: "bold",
              padding: 20,
            }}
          >
            Create an account
          </Text>
          <Image
            source={require("../../utils/images/enter.png")}
            style={{
              width: 20,
              height: 20,
              marginLeft: -15,
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
