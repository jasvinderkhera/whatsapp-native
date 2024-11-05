import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import OTPInput from "@codsod/react-native-otp-input";
import { router } from 'expo-router';

const Verify_OTP = () => {
  const [otp, setOTP] = useState("");
  const NavigateBackToOTP = () =>{
    router.push('/otp')
  }
  return (
    <SafeAreaView>
      <View style={styles.top_container}>
      <TouchableOpacity onPress={NavigateBackToOTP}>
      <AntDesign name="arrowleft" size={22} color="black" />
      </TouchableOpacity>
      <Text style={styles.otpText}>Enter OTP Code</Text>
      </View>
      <View style={styles.mid_container}>
      <Text style={styles.otpSentText}>Code has been sent to +91 11******44</Text>
      <OTPInput length={4} onOtpComplete={(txt: string) => setOTP(txt)} inputStyle={styles.inputStyle}/>
      <Text style={styles.otpSentText}>Resend code in <Text style={{color:"green"}}>56</Text> s</Text>
      </View>

      <View style={styles.top_container}>
        <TouchableOpacity style={styles.verifyBtn}>
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Verify_OTP

const styles = StyleSheet.create({
  top_container:{
    paddingHorizontal:20,
    paddingTop:30,
    flexDirection:"row",
    alignItems:"center",
    gap:20
  },
  otpText:{
    fontSize:20,
    fontWeight:"500"
  },
  mid_container:{
    alignItems:"center",
    marginTop:160,
  },
  otpSentText:{
    paddingVertical:30
  },
  inputStyle:{
    borderColor:"black",
    borderRadius:15,
    height:50,
    width:60
  },
  verifyBtn:{
    backgroundColor:"#0CCC83",
    height:45,
    width:320,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:25
  },
  verifyText:{
    color:"white",
    fontSize:18
  }
})