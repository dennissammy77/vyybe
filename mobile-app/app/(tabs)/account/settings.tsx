import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '@/components/utilities/theme';
import typography from '@/components/utilities/typography';
import ImageComponent from '@/components/ui/Image';
import { useRouter } from 'expo-router';
import { AuthUtils } from '@/app/modules/auth/service';
import { useDispatch } from 'react-redux';
import { logout } from '@/app/modules/auth/reducers/authSlice';

const Settings = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = {name: 'sam',email:'email',profilePictureUrl:'https://i.pinimg.com/1200x/cd/e5/ff/cde5ffa3f38b28b41b4f62a0da599fee.jpg'};
  
  const handleLogout=async()=>{
    const res = await AuthUtils.signOutUser();
    if (res){
      dispatch(logout());
      console.log("User logged out")
      router.push("/(auth)");
    }
  }
  return (
    <ScrollView>
      {/* General settings */}
      <View style={styles.sectionContainer}>
        <Text style={[typography.bodyLarge,styles.sectionTitle]}>General</Text>
        <View style={styles.row}>
          <ImageComponent size={76} style={{borderRadius:38}} source={{uri: user.profilePictureUrl!}} />
          <View style={{ marginHorizontal: 16 }}>
            <Text style={[typography.h8, { color: COLORS.light.black }]}>{user.name! ?? "user"}</Text>
            <Text style={[typography.bodyLarge, { color: COLORS.light.gray70 }]}>{user.email! ?? "user@email.com"}</Text>
            <TouchableOpacity 
              style={styles.editProfileButton} 
              onPress={() => router.push("/(tabs)/account/manage")}
            >
              <Text style={{fontWeight:"800"}}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Forgot password */}
      <View style={styles.sectionContainer}>
        <Text style={[typography.bodyLarge,styles.sectionTitle]}>Support and Infomation</Text>
        <View style={styles.row}>
          <Text style={[typography.body, { marginBottom: 4, }]}>Contact us </Text>
        </View>
        <View style={styles.row}>
          <Text style={[typography.body, { marginBottom: 4, }]}>Faqs</Text>
        </View>
        <View style={styles.row}>
          <Text style={[typography.body, { marginBottom: 4, }]}>Terms of use </Text>
        </View>
        <View style={styles.row}>
          <Text style={[typography.body, { marginBottom: 4, }]}>Privacy policy </Text>
        </View>
      </View>
      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={[typography.bodyLarge, { color: COLORS.light.white }]}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: COLORS.light.white,
    borderRadius: 16,
    elevation: 10,
    shadowColor: COLORS.light.shadowColor,
    padding: 16,
    marginVertical: 4
  },
  sectionTitle: {
    fontWeight:'600',
    color: COLORS.light.gray70
  },
  row:{
    flexDirection: "row",
    alignItems: "center"
  },
  editProfileButton:{
    borderWidth:1,
    borderColor:COLORS.light.gray60,
    borderRadius:8,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop:6
  },
  logoutButton:{
    backgroundColor:COLORS.light.primary,
    borderRadius: 16,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop:6
  },
})

export default Settings