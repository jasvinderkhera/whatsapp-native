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
import { moderateScale, verticalScale } from "react-native-size-matters";
import colors from "@/src/constants/colors";
import { router } from "expo-router";

const LanguageSelect = () => {
  const [press, setPress] = useState("english");
  const navigate_to_terms = () =>{
    router.push('/(auth)/terms_agree')
  }
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
          <Text style={{ paddingTop: 15 }}>
            Choose your language to get started
          </Text>
        </View>
      </View>
      <ScrollView style={styles.btns}>
        <View style={styles.btn_container}>
          <TouchableOpacity onPress={() => setPress("english")}>
            <View style={styles.btn}>
              <View
                style={
                  press === "english" ? styles.selectedBtn : styles.unSelected
                }
              ></View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.lang}>English</Text>
            <Text>(device's language)</Text>
          </View>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity onPress={() => setPress("afrikaans")}>
            <View style={styles.btn}>
              <View
                style={
                  press === "afrikaans" ? styles.selectedBtn : styles.unSelected
                }
              ></View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.lang}>Afrikaans</Text>
            <Text>Afrikaans</Text>
          </View>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity onPress={() => setPress("Albanian")}>
            <View style={styles.btn}>
              <View
                style={
                  press === "Albanian" ? styles.selectedBtn : styles.unSelected
                }
              ></View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.lang}>Shqip</Text>
            <Text>Albanian</Text>
          </View>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity onPress={() => setPress("Turkish")}>
            <View style={styles.btn}>
              <View
                style={
                  press === "Turkish" ? styles.selectedBtn : styles.unSelected
                }
              ></View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.lang}>Azarbaycan dili</Text>
            <Text>Turkish</Text>
          </View>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity onPress={() => setPress("Hindi")}>
            <View style={styles.btn}>
              <View
                style={
                  press === "Hindi" ? styles.selectedBtn : styles.unSelected
                }
              ></View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.lang}>हिन्दी</Text>
            <Text>Hindi</Text>
          </View>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity onPress={() => setPress("Marathi")}>
            <View style={styles.btn}>
              <View
                style={
                  press === "Marathi" ? styles.selectedBtn : styles.unSelected
                }
              ></View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.lang}>मराठी</Text>
            <Text>Marathi</Text>
          </View>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity onPress={() => setPress("Bangla")}>
            <View style={styles.btn}>
              <View
                style={
                  press === "Bangla" ? styles.selectedBtn : styles.unSelected
                }
              ></View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.lang}>বাংলা</Text>
            <Text>Bangla</Text>
          </View>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity onPress={() => setPress("Telugu")}>
            <View style={styles.btn}>
              <View
                style={
                  press === "Telugu" ? styles.selectedBtn : styles.unSelected
                }
              ></View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.lang}>తెలుగు</Text>
            <Text>Telugu</Text>
          </View>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity onPress={() => setPress("Tamil")}>
            <View style={styles.btn}>
              <View
                style={
                  press === "Tamil" ? styles.selectedBtn : styles.unSelected
                }
              ></View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.lang}>தமிழ்</Text>
            <Text>Tamil</Text>
          </View>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity onPress={() => setPress("Gujarati")}>
            <View style={styles.btn}>
              <View
                style={
                  press === "Gujarati" ? styles.selectedBtn : styles.unSelected
                }
              ></View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.lang}>ગુજરાતી</Text>
            <Text>Gujarati</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.nextArw}>
       <TouchableOpacity onPress={navigate_to_terms}>
       <Image source={imagePath.arrowRight} style={styles.arrow}/>
       </TouchableOpacity>
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
    height: 100,
    width: 230,
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
  },
  btn_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingBottom: verticalScale(15),
  },
  btn: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedBtn: {
    height: 12,
    width: 12,
    backgroundColor: colors.whatsAppGreen,
    borderRadius: 50,
  },
  unSelected: {},
  lang: {
    fontSize: 15,
    fontWeight: "condensedBold",
  },
  btns: {
    paddingHorizontal: 25,
    paddingVertical: 30,
    height: 460,
    overflow: "scroll",
  },
  nextArw: {
    position: "absolute",
    bottom: 40,
    right: 40,
    padding: 15,
    backgroundColor: "#0CCC83",
    borderRadius: 50,
  },
  arrow:{
    height:25,
    width:25
  }
});

export default LanguageSelect;
