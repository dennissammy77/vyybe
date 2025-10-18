import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../modules/auth/api/auth.api';
import { setUserState } from '../modules/auth/reducers/authSlice';
import { FirebaseAuthUtils } from '../utilities/firebase';
import COLORS from '../utilities/theme';

const slides = [
  {
    id: 1,
    image: require('../../assets/onboarding/onboarding 3.png'),
    title: "Lets get started!",
    description:
      "Turn shopping into an adventure & shop the fun way — connect with stores around you and find your favorites!",
  },
  {
    id: 2,
    image: require('../../assets/onboarding/onboarding 4.png'),
    title: "Discover Stores",
    description:
      "Explore collections and discover local stores with trendy picks just for you!",
  }
];

const { width, height } = Dimensions.get('window');

export default function Login() {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const router = useRouter();

  async function onGoogleButtonPress() {
    try {
      const userToken = await FirebaseAuthUtils.signInWithGoogle();

      if (userToken) {
        const response = await login({ idToken: userToken.idToken });
        console.log("response",response)
        if(!response?.error){
          dispatch(setUserState({
            idToken: userToken.idToken!,
            user: response?.data[0],
          }));
          console.log("userToken",userToken)
          console.log("Server returned:", response?.data);
          router.push("/(tabs)");
        }else{
          await FirebaseAuthUtils.signOutUser()
        }
      }
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };
  const renderItem = ({ item }) => (
    <ImageBackground
      source={item.image}
      style={{ flex: 1, justifyContent: 'flex-end', padding: 20 }}
    >
      <View style={{marginBottom:120}}>
        <Text
          style={{
            color: '#fff',
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            color: '#ddd',
            fontSize: 15,
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 30,
            lineHeight: 22,
          }}
        >
          {item.description}
        </Text>
      </View>
    </ImageBackground>
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
        <Carousel
          ref={carouselRef}
          data={slides}
          renderItem={renderItem}
          width={width}
          height={height}
          onSnapToItem={(index) => setActiveSlide(index)}
          scrollAnimationDuration={2000}
          autoPlay={true}
        />
        <View style={{position: 'absolute',bottom:10,right:0,left:0,zIndex:1000}}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 16 }}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginHorizontal: 5,
                  backgroundColor: i === activeSlide ? '#fff' : '#555',
                }}
              />
            ))}
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffffff',
              marginHorizontal: 30,
              borderRadius: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 12,
              marginBottom: 10,
            }}
            onPress={onGoogleButtonPress}
          >
            <Image
              source={require('../../assets/icons/google.png')}
              style={{ width: 64, height: 32, marginRight: 6}}
            />
            <Text style={{ fontWeight: '600' }}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light.white,
    padding: 16
  }
});