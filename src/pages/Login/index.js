import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { fonts } from '../../assets'
import { IMGBapenda } from '../../assets'
import React from 'react'
import { Button, Gap, TextInput, Footer } from '../../components'

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Gap height={20} />
      <Image source={IMGBapenda} />
      <Gap height={51} />
      <Text style={styles.title}>SELAMAT DATANG</Text>
      <Text style={styles.subtitle}>Aplikasi Pengingat Pembayaran Pajak</Text>
      <Gap height={53} />
      <TextInput title='Email' />
      <Gap height={26}/>
      <TextInput title='Password' />
      <View style={styles.checkboxLine}>
        <View style={styles.checkboxWrapper}>
          <CheckBox />
          <Text style={styles.checkboxText1}>ingat</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.checkboxText2}>Lupa password?</Text>
        </TouchableOpacity>
      </View>
      <Gap height={41} />
      <Button label='Masuk' />
      <Gap height={10} />
      <View style={styles.regisWrapper}>
        <Text style={styles.qregis}>Belum memiliki akun? </Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.regis}>Daftar</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: fonts.Poppins.semibold,
    fontSize: 36,
    color: '#9A0000',
  },
  subtitle: {
    fontFamily: fonts.Poppins.regular,
    fontSize: 17,
    color: '#9A0000',
    marginTop: -10,
  },
  checkboxText1: {
    color: '#2E2E2E',
    fontSize: 12,
    marginTop: 7,
    marginLeft: 8
  },
  checkboxText2: {
    color: '#2E2E2E',
    fontSize: 12,
    marginTop: 7
  },
  checkboxWrapper: {
    flexDirection: 'row',
  },
  checkboxLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
    marginTop: 10,
  },
  regisWrapper: {
    flexDirection: 'row'
  },
  qregis: {
    fontFamily: fonts.Poppins.medium,
    fontSize: 14,
    color: '#2E2E2E',
  },
  regis: {
    fontFamily: fonts.Poppins.bold,
    fontSize: 14,
    color: '#2E2E2E',
  }
})