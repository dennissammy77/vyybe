import ProfileInfoComponent from '@/components/profile/Info';
import MasonryGrid from '@/components/profile/MasonryGrid';
import PageWrapper from '@/components/ui/pageWrapper';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import COLORS from '../utilities/theme';
import typography from '../utilities/typography';

const images = [
  {uri: 'https://i.pinimg.com/1200x/7c/0c/80/7c0c80f60ac1d575d6fd21f5cf152a55.jpg'},
  {uri: 'https://i.pinimg.com/736x/f5/83/b2/f583b2973d910ed42808b38a3f99fb56.jpg'},
  {uri: 'https://i.pinimg.com/1200x/cd/e5/ff/cde5ffa3f38b28b41b4f62a0da599fee.jpg'},
  {uri: 'https://i.pinimg.com/1200x/7c/0c/80/7c0c80f60ac1d575d6fd21f5cf152a55.jpg'},
  {uri: 'https://i.pinimg.com/736x/f5/83/b2/f583b2973d910ed42808b38a3f99fb56.jpg'},
  {uri: 'https://i.pinimg.com/1200x/cd/e5/ff/cde5ffa3f38b28b41b4f62a0da599fee.jpg'}
  // require('@/assets/images/icon.png'),
  // require('@/assets/images/icon.png'),
  // require('@/assets/onboarding/onboarding 3.png'),
  // require('@/assets/images/icon.png'),
  // require('@/assets/images/icon.png'),
  // require('@/assets/onboarding/onboarding 3.png'),
  // require('@/assets/images/icon.png'),
  // require('@/assets/onboarding/onboarding 4.png'),
  // require('@/assets/images/icon.png'),
];
const { width, height: HEIGHT } = Dimensions.get('window');

const ProfileScreen = () => {
  return (
    <PageWrapper>
      <ProfileInfoComponent 
        isOwner={true}
      />
      <MasonryGrid
        data={images}
        renderItem={({ item }) => <MasonryImage uri={item.uri} />}
        renderEmptyComponent={() => {
          return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={typography.h7}>No images found</Text>
            </View>
          )
        }}
      />

      {/* <MasonryList
        data={images}
        numColumns={2}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageCard}>
            <Image source={item} style={styles.image} />
            <Ionicons name="bookmark-outline" size={18} color="#fff" style={styles.bookmarkIcon} />
          </View>
        )}
      /> */}


      {/* Floating Tool Buttons */}
      {/* <View style={styles.floatingTools}>
        <TouchableOpacity style={styles.toolButton}>
          <Ionicons name="grid-outline" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolButton}>
          <Ionicons name="cart-outline" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolButton}>
          <Ionicons name="options-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View> */}

    </PageWrapper>
  );
};

const MasonryImage = ({ uri }: { uri: string }) => {
  const [ratio, setRatio] = useState(1)

  return (
    <View style={styles.imageCard}>
      <Image
        source={{ uri }}
        style={[styles.image, { aspectRatio: ratio }]}
        contentFit="cover"
        onLoad={({ source }) => {
          if (source?.width && source?.height) {
            setRatio(source.width / source.height)
          }
        }}
        transition={200}
      />
    </View>
  )
}

const CARD_WIDTH = (width - 40) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light.background,
    padding: 16
  },
  imageCard: {
    borderRadius: 16,
    overflow: 'hidden',
    margin: 4,
    position: 'relative',
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  bookmarkIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  floatingTools: {
    position: 'absolute',
    right: 15,
    bottom: HEIGHT/ 2,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 8,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  toolButton: {
    padding: 10,
  },
});

export default ProfileScreen;
