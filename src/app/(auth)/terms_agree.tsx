import { View, Text, Image, StyleSheet, Button, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import imagePath from "@/src/constants/imagePath";
import { moderateScale, verticalScale } from "react-native-size-matters";
import LinearGradient from "react-native-linear-gradient";

const TermsAgree = () => {
  const [press, setPress] = useState("")
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
        <TouchableOpacity>
          <View style={styles.btn}></View>
        </TouchableOpacity>
          <View>
          <Text style={styles.lang}>English</Text>
          <Text>(device's language)</Text>
          </View>
      </View>
     <View style={styles.btn_container}>
        <TouchableOpacity>
          <View style={styles.btn}></View>
        </TouchableOpacity>
          <View>
          <Text style={styles.lang}>Afrikaans</Text>
          <Text>Afrikaans</Text>
          </View>
      </View>
     <View style={styles.btn_container}>
        <TouchableOpacity>
          <View style={styles.btn}></View>
        </TouchableOpacity>
          <View>
          <Text style={styles.lang}>Shqip</Text>
          <Text>Albanian</Text>
          </View>
      </View>
     <View style={styles.btn_container}>
        <TouchableOpacity>
          <View style={styles.btn}>
            <View style={styles.selectedBtn}></View>
          </View>
        </TouchableOpacity>
          <View>
          <Text style={styles.lang}>Azarbaycan dili</Text>
          <Text>Turkish</Text>
          </View>
      </View>
     <View style={styles.btn_container}>
        <TouchableOpacity>
          <View style={styles.btn}></View>
        </TouchableOpacity>
          <View>
          <Text style={styles.lang}>English</Text>
          <Text>(device's language)</Text>
          </View>
      </View>
     <View style={styles.btn_container}>
        <TouchableOpacity>
          <View style={styles.btn}></View>
        </TouchableOpacity>
          <View>
          <Text style={styles.lang}>English</Text>
          <Text>(device's language)</Text>
          </View>
      </View>
     </ScrollView>
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
    borderTopLeftRadius:180,
    borderTopRightRadius:180
  },
  btn_container:{
    flexDirection:"row",
     alignItems:"center",
    gap:15,
    paddingBottom:verticalScale(15)
  },
  btn:{
    height:20,
    width:20,
    borderWidth:1,
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center"

  },
  selectedBtn:{
    height:12,
    width:12,
    backgroundColor:"green",
    borderRadius:50
  },
  unSelected:{

  },
  lang:{
    fontSize:15,
    fontWeight:"condensedBold"
  },
  btns:{
    paddingHorizontal:25,
    paddingVertical:30
  }
});

export default TermsAgree;
