import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { fonts } from '../../assets'
import { IMGBapenda } from '../../assets'
import React from 'react'
import { Button, Gap, TextInput, Footer } from '../../components'

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Gap height={20} />
      <Image source={IMGBapenda} />
      <Gap height={51} />
      <Text style={styles.title}>SELAMAT DATANG</Text>
      <Text style={styles.subtitle}>Aplikasi Pengingat Pembayaran Pajak</Text>
      <Gap height={31} />
      <TextInput title='Email' />
      <Gap height={10} />
      <TextInput title='Nomor Handphone' />
      <Gap height={10}/>
      <TextInput title='Password' />
      <Gap height={21} />
      <Button label='Daftar' />
      <Gap height={10} />
      <View style={styles.regisWrapper}>
        <Text style={styles.qregis}>Sudah memiliki akun? </Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.regis}>Login</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  )
}

export default SignUp

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