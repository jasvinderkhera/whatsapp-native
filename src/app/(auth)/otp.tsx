import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { moderateScale } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";
import CountryPicker from "react-native-country-picker-modal";
import { router, Router } from "expo-router";
import colors from "@/src/constants/colors";

const Otp = () => {
  const [visible, setVisible] = useState(false);
  const [country, setCountry] = useState("India");
  const [code, setCode] = useState("91");
  const [number, setNumber] = useState("");
  const NavigateToVerify = () => {
    router.push("/verify_otp");
  };
  return (
    <SafeAreaView>
      <View style={styles.topContainer}>
        <Text style={styles.topText}></Text>
        <Text style={styles.topText}>Enter your phone number</Text>
        <SimpleLineIcons name="options-vertical" size={15} color="gray" />
      </View>
      <View style={styles.midContainer}>
        <Text>
          WhatsApp will need to verify your phone number.
          <Text style={{ color: colors.whatsAppGreen }}> What's</Text>
        </Text>
        <Text style={styles.linkTag}>my number?</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.country}
          onPress={() => setVisible(true)}
        >
          <Text></Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 17 }}>{country}</Text>
          </TouchableOpacity>
          <AntDesign name="caretdown" size={12} color="green" />
        </TouchableOpacity>
      </View>
      <View style={styles.phoneContainer}>
        <View style={styles.countryCode}>
          <Text style={{ fontSize: 15 }}>+</Text>
          <Text style={styles.countryInput}>{code}</Text>
        </View>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={setNumber}
          maxLength={10}
          keyboardType="numeric" // This ensures the keyboard is suitable for number input
          placeholder="phone number"
        />
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "gray" }}>Carrier charges may apply</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.agreeBtn} onPress={NavigateToVerify}>
          <Text style={styles.agreeText}>NEXT</Text>
        </TouchableOpacity>
      </View>
      {visible && (
        <CountryPicker
          visible={visible}
          onClose={() => setVisible(false)}
          onSelect={(e: any) => {
            setCountry(e.name);
            setCode(e.callingCode[0]);
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  topText: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.whatsAppGreen,
  },
  midContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 30,
    paddingHorizontal: 5,
  },
  linkTag: {
    color: colors.whatsAppGreen,
  },
  country: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 220,
    borderColor: colors.whatsAppGreen,
    borderBottomWidth: 1,
    marginTop: 15,
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  phoneContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  countryCode: {
    height: 40,
    width: 60,
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.whatsAppGreen,
    borderBottomWidth: 1,
  },
  countryInput: {
    paddingHorizontal: 8,
    paddingLeft: 10,
    fontSize: 16,
  },
  input: {
    height: 40,
    width: 150,
    borderColor: colors.whatsAppGreen,
    borderBottomWidth: 1,
    marginBottom: 16,
    fontSize: 16,
  },
  lang_container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 20,
  },
  show: {
    position: "absolute",
    bottom: -185,
    right: -75,
    height: 200,
    width: 150,
    overflow: "scroll",
    paddingBottom: 50,
    backgroundColor: "#ddd",
    zIndex: 1,
  },
  hide: {
    display: "none",
  },
  lang_box: {
    paddingVertical: 10,
    paddingLeft: 40,
  },
  langFont: {
    fontSize: 16,
  },
  agreeBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(40),
    width: moderateScale(80),
    backgroundColor: colors.whatsAppGreen,
    borderRadius: 5,
    marginTop: 160,
  },
  agreeText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
});
