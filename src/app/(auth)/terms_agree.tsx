import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import imagePath from "@/src/constants/imagePath";
import { moderateScale } from "react-native-size-matters";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import colors from "@/src/constants/colors";
import { router } from "expo-router";

const TermsAgree = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("English");

  const navigateToOTP = () => {
    router.push('/otp')
  };

  return (
    <SafeAreaView>
      <View style={styles.bg_container}>
        <Image
          source={imagePath.background}
          resizeMode="cover"
          style={styles.bg_image}
        />
        <View style={styles.overlay}>
          <Text style={styles.overlay_content}>Welcome to WhatsApp</Text>
          <Text style={styles.terms}>
            Read our Privacy Policy. Tap "Agree and Continue" to accept the
            Terms of Service.
          </Text>
        </View>
      </View>
      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.agreeBtn} onPress={navigateToOTP}>
          <Text style={styles.agreeText}>AGREE AND CONTINUE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.selectContainer}>
        <View>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <View style={styles.lang_container}>
              <SimpleLineIcons name="globe" size={22} color={colors.whatsAppGreen} />
              <Text style={styles.lang}>{value}</Text>
              <FontAwesome name="angle-down" size={24} color={colors.whatsAppGreen} />
            </View>
          </TouchableOpacity>
          <ScrollView style={open === true ? styles.show : styles.hide}>
            <View style={styles.lang_box}>
              <TouchableOpacity
                onPress={() => {
                  setValue("English");
                  setOpen(false);
                }}
              >
                <Text style={styles.langFont}>English</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lang_box}>
              <TouchableOpacity
                onPress={() => {
                  setValue("Hindi");
                  setOpen(false);
                }}
              >
                <Text style={styles.langFont}>Hindi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lang_box}>
              <TouchableOpacity
                onPress={() => {
                  setValue("Marathi");
                  setOpen(false);
                }}
              >
                <Text style={styles.langFont}>Marathi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lang_box}>
              <TouchableOpacity
                onPress={() => {
                  setValue("Bangla");
                  setOpen(false);
                }}
              >
                <Text style={styles.langFont}>Bangla</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lang_box}>
              <TouchableOpacity
                onPress={() => {
                  setValue("Tamil");
                  setOpen(false);
                }}
              >
                <Text style={styles.langFont}>Tamil</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg_container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: moderateScale(80),
  },
  overlay: {
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },
  overlay_content: {
    fontSize: moderateScale(25),
  },
  bg_image: {
    height: 230,
    width: 230,
    borderRadius: 230,
    marginBottom: 40,
  },
  terms: {
    paddingTop: 15,
    textAlign: "center",
    color: "gray",
  },
  btn_container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: moderateScale(30),
  },
  agreeBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(40),
    width: moderateScale(220),
    backgroundColor: colors.whatsAppGreen,
    borderRadius: 5,
  },
  agreeText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  selectContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  lang_container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#ddd",
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 20,
  },
  lang: {
    color: colors.whatsAppGreen,
    fontSize: 16,
  },
  show: {
    position: "absolute",
    bottom: 38,
    right: 10,
    height: 200,
    width: 120,
    overflow: "scroll",
    paddingBottom: 50,
    backgroundColor: "#ddd",
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
    color: colors.whatsAppGreen,
  },
});

export default TermsAgree;
