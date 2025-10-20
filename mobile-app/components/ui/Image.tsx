import COLORS from '@/app/utilities/theme';
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { ImageStyle, Image as RNImage, StyleProp, StyleSheet } from 'react-native';

type ImageComponentProps = {
  source?: any; // can be require() or { uri: string }
  size?: number;
  style?: StyleProp<ImageStyle>;
  resizeMode?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  fallbackSource?: any;
};

const ImageComponent: React.FC<ImageComponentProps> = ({
  source,
  size = 80,
  style,
  resizeMode = 'cover',
  fallbackSource = require('../../assets/images/icon.png'),
}) => {
  const resolvedSource = source || fallbackSource;
  const [ratio, setRatio] = useState<number | null>(null)

  useEffect(() => {
    if (source?.uri) {
      RNImage.getSize(
        source.uri,
        (width, height) => setRatio(width / height),
        () => setRatio(1)
      )
    }
  }, [source])
  return (
    <Image
      source={resolvedSource}
      style={[
        styles.imageStyle,
        { width: size, height: size },
        style,
      ]}
      contentFit={resizeMode}
      transition={300}
    />
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  imageStyle: {
    backgroundColor: COLORS.light.background, // placeholder background
  },
});
