import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import imagePath from "@/src/constants/imagePath";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate_to_welcome = () =>{
    router.push('/(auth)/lang_select')
  }

  let loading_timeout = () =>{
    setIsLoading(true)
    setTimeout(navigate_to_welcome,3000)
  }
  useEffect(() => {
   setTimeout(loading_timeout,2000)
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image
          source={imagePath.logo}
          style={styles.logo_style}
          resizeMode="contain"
        />
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(48)} color={"#0CCC83"} />
            <Text style={styles.loading_text}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.from_text}>from</Text>
            <View style={{flexDirection:"row", flex:1, alignItems:"center", gap:7}}>
              <Image source={imagePath.meta_logo} style={styles.meta} resizeMode="contain"/>
              <Text style={styles.facebook_text}>Meta</Text>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
  },
  header: {},
  body: {
    alignItems: "center",
    gap: verticalScale(10),
  },
  logo_style: {
    height: moderateScale(80),
    width: moderateScale(80),
  },
  loading_text: {
    marginTop: verticalScale(10),
    fontSize: moderateScale(15),
  },
  footer: {
    height: verticalScale(70),
    alignItems: "center",
    // backgroundColor:"red",
    justifyContent: "flex-end",
  },
  from_text: {
    fontSize: moderateScale(14),
    color: "gray",
  },
  meta:{
    height:moderateScale(20),
    width:moderateScale(20)
  },
  facebook_text: {
    fontSize: moderateScale(20),
  },
});

export default Auth;
