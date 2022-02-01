import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";


export default function Box() {
  return (
    <View
      style={{
        flexDirection: "row",

        alignItems: "center",
        backgroundColor: "#222222",
        padding: 10,
        borderRadius: 10,
        margin: 10,
      }}
    >
      {/* <View
        style={{
          width: "10%",
          flex: 0.2,
          alignItems: "center",
          marginRight: "2%",
        }}
      >
      </View> */}
      <View style={{ width: "40%" }}>
        <Text style={{ color: "white" }}>Euro</Text>
        <Text style={{ color: "white", fontSize: 10 }}>
          Deposit money to your BTC
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          right: 0,
          alignItems: "flex-end",
          marginRight: "4%",
        }}
      >
        <Text style={{ color: "white" }}>$200</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#929292", marginRight: 6 }}>0.1412</Text>
          <Text style={{ color: "#3A9F06" }}>(+12%)</Text>
        </View>
      </View>
    </View>
  );
}
