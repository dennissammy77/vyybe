import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, TextStyle } from 'react-native';
import React from 'react';
 import { Formik } from 'formik';
import COLORS from '@/components/utilities/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import typography from '@/components/utilities/typography';
import {ToastService} from '@/components/utilities/toast';
import ImageComponent from '@/components/ui/Image';
import PageWrapper from '@/components/ui/pageWrapper';

const Manage = () => {
  const user = {name: 'sam',email:'email',profilePictureUrl:'https://i.pinimg.com/1200x/cd/e5/ff/cde5ffa3f38b28b41b4f62a0da599fee.jpg'};

  return (
    <PageWrapper>
      <ScrollView style={{marginTop:-32}}>
        <Formik
          initialValues={{ email: '', username: '', mobile: '', bio:'',location:'' }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
            <View >
              <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                <ImageComponent size={160} style={{borderRadius:24,position:'relative'}} source={{uri: user.profilePictureUrl!}} />
              </TouchableOpacity>
              <View style={styles.input_group}>
                <Text style={[styles.input_label,typography.subTitle0]}>username</Text>
                <TextInput
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  style={styles.input}
                  placeholder='john'
                  placeholderTextColor={COLORS.light.gray80}
                />
              </View>
              <View style={styles.input_group}>
                <Text style={[styles.input_label,typography.subTitle0]}>email</Text>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={styles.input}
                  placeholder='john@gmail.com'
                  placeholderTextColor={COLORS.light.gray80}
                />
              </View>
              <View style={styles.input_group}>
                <Text style={[styles.input_label,typography.subTitle0]}>mobile</Text>
                <TextInput
                  onChangeText={handleChange('mobile')}
                  onBlur={handleBlur('mobile')}
                  value={values.mobile}
                  style={styles.input}
                  placeholder='+254759233322'
                  placeholderTextColor={COLORS.light.gray80}
                />
              </View>
              <View style={styles.input_group}>
                <Text style={[styles.input_label,typography.subTitle0]}>bio</Text>
                <TextInput
                  onChangeText={handleChange('bio')}
                  onBlur={handleBlur('bio')}
                  value={values.bio}
                  style={[styles.input,styles.text_area]}
                  placeholderTextColor={COLORS.light.gray80}
                  multiline={true}
                  numberOfLines={4}
                  placeholder={"Enter your Bio..."}
                />
              </View>
              <View style={styles.input_group}>
                <Text style={[styles.input_label,typography.subTitle0]}>location</Text>
                <TextInput
                  onChangeText={handleChange('location')}
                  onBlur={handleBlur('location')}
                  value={values.location}
                  style={styles.input}
                  placeholder='Juja,Kenya'
                  placeholderTextColor={COLORS.light.gray80}
                />
              </View>
              <TouchableOpacity 
                onPress={()=>{ToastService.showInfo('Still no functionality is added');}} 
                style={[styles.save_button,isSubmitting && styles.saving_button]}
              >
                {isSubmitting ? <Text style={[styles.save_label]}>Saving...</Text> : <Text style={styles.save_label}>Save</Text>}
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </PageWrapper>
  )
};

const styles = StyleSheet.create({
  input_group: {
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.light.gray30,
    borderRadius: 8,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    borderColor: COLORS.light.gray60,
    borderWidth: 1,
  },
  input_label: {
    fontSize: 16,
    fontWeight: "600"
  },
  text_area: {
    height: 100,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top'
  },
  save_button: {
    height: 50,
    backgroundColor: COLORS.light.primary,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  saving_button: {
    backgroundColor: COLORS.light.gray60,
  },
  save_label: {
    color: COLORS.light.white,
    ...typography.subTitle0 as TextStyle
  },
})

export default Manage;