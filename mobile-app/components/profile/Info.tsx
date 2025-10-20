import COLORS from '@/app/utilities/theme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from '../ui/icon-symbol';
import ImageComponent from '../ui/Image';

type ProfileInfoProps = {
  name: string;
  onBack: ()=> void;
  avatarUrl: string | null;
  username: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  bio?: string | null;
  isOwner: boolean
}

const ProfileInfoComponent: React.FC<ProfileInfoProps> = ({
  name = 'name',
  onBack,
  avatarUrl,
  username = 'username',
  postsCount = 0,
  followersCount = 0,
  followingCount = 0,
  bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi vel tincidunt fermentum...',
  isOwner = false
}) => {
  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <View style={{flexDirection: 'row',alignItems:'center'}}>
          <TouchableOpacity
            onPress={onBack}
          >
            <IconSymbol size={24} name="arrow.backward" color={COLORS.light.black} />
          </TouchableOpacity>
          <Text style={styles.username}>{username}</Text>
        </View>
        <IconSymbol size={24} name="gear" color={COLORS.light.black} />
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <ImageComponent
          size={80}
          source={avatarUrl && { uri: avatarUrl}}
          style={styles.avatar}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{postsCount}</Text>
              <Text style={styles.statLabel}>posts</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{followersCount}</Text>
              <Text style={styles.statLabel}>followers</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{followingCount}</Text>
              <Text style={styles.statLabel}>following</Text>
            </View>
          </View>
          
        </View>
      </View>
      <Text style={styles.bio}>
        {bio}
      </Text>
      <View style={styles.actions}>
        {isOwner ? 
        <TouchableOpacity style={[styles.button, { backgroundColor: '#000' }]}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={[styles.button, { backgroundColor: '#000' }]}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>}
        {!isOwner  && <TouchableOpacity style={[styles.button, { backgroundColor: '#000' }]}>
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>}
        <TouchableOpacity style={styles.shareButton}>
          <IconSymbol size={20} name="shared.with.you" color={COLORS.light.black} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileInfoComponent;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  username: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '8'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    width: '80%',
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontWeight: '700',
    fontSize: 16,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  bio: {
    marginTop: 10,
    color: '#444',
    lineHeight: 18,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
    gap: '4'
  },
  button: {
    flex: 1,
    backgroundColor: '#000',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  shareButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
})