import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Header, AddPhoto, Gap, TextInputVN, VehicleDesc, Button } from '../../components'
import { fonts } from '../../assets'

const VehicleDetails = (props) => {
  const {bayar="1.312.100", date="26 Januari 2020"} = props
  return (
    <ScrollView style={{width: '100%'}}>
      <View style={styles.container}>
        <Header title="Rincian Kendaraan" />
        <View style={styles.content}>
          <Text style={styles.text1}>Foto Kendaraan</Text>
          <View style={styles.addPhoto}>
            <AddPhoto title="Foto Pertama" />
            <AddPhoto title="Foto Kedua" />
            <AddPhoto title="Foto Ketiga" />
          </View>
          <View style={styles.containerJumlah}>
            <View style={styles.descJumlah}>
              <Text style={styles.textDesc}>JUMLAH YANG HARUS DIBAYAR</Text>
            </View>
            <Gap height={4} />
            <View style={styles.jumlah}>
              <Text style={styles.rp}>Rp</Text>
              <Text style={styles.rp} >{bayar}</Text>
            </View>
          </View>
          <Gap height={4}/>
          <View style={styles.containerPayBefore}>
            <View style={styles.payBefore}>
              <Text style={styles.descPayBefore}>Pembayaran sebelum</Text>
            </View>
            <Gap width={4} />
            <View style={styles.date}>
              <Text style={styles.descPayBefore}>{date}</Text>
            </View>
          </View>
          <View style={styles.vehiclesDesc}>
            <Text style={styles.titleVN} >Nama Kendaraan</Text>
            {/* Disini harusnya pake gap height 11px,
                mar karna dari text input so ada dpe padding,
                jadi nda se pake tu gap, karena mo dapa lia
                terlalu jao jarak antara text diatas dengan
                text input dibawah */}
            <TextInputVN />
          </View>
          <Gap height={20}/>
          <View style={styles.containerAllDesc}>
            <View style={styles.containerDesc}>
              <VehicleDesc title="NOMOR MESIN" content="HGAI 7588976" />
              <Gap height={20} />
              <VehicleDesc title="TAHUN PEMBUATAN" content="2016" />
              <Gap height={20} />
              <VehicleDesc title="TYPE:" content="HSGD" />
            </View>
            <View style={styles.containerDesc}>
              <VehicleDesc title="NOMOR POLISI" content="DB 1848 C" />
              <Gap height={20} />
              <VehicleDesc title="MASA BERLAKU STNK" content="25 MEI 2023" />
              <Gap height={20} />
              <VehicleDesc title="SERI" content="HGA163" />
            </View>
          </View>
          <Gap height={11} />
          <View style={styles.button} >
            <Button label="Simpan" />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default VehicleDetails

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF',
    },
    content: {
      flex:1,
      padding: 24
    },
    button: {
      alignItems: 'center',
    },
    text1: {
      fontFamily: fonts.Poppins.semibold,
      fontSize: 18,
      color: '#585858',
      marginBottom: 15,
    },
    addPhoto: {
      flexDirection: 'row',
      justifyContent: 'space-between'
      //disini harusnya pake paddingRight: 47 (kalau ikut figma)
      //tapi nanti nda ada space/ tu box bku tempel
    },
    containerJumlah: {
      marginTop: 44,
    },
    descJumlah: {
      height: 33,
      backgroundColor: '#F3F2F2',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textDesc: {
      fontFamily: fonts.Poppins.medium,
      fontSize: 14,
      color: '#585858'
    },
    jumlah: {
      height: 33,
      backgroundColor: '#F3F2F2',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 17,
      paddingRight: 27,
    },
    rp: {
      fontFamily: fonts.Poppins.medium,
      fontSize: 18,
      color: '#585858'
    },
    payBefore: {
      width: 117,
      height: 15,
      backgroundColor: '#F3F2F2',
      borderBottomLeftRadius: 5,
      alignItems: 'center'
    },
    descPayBefore: {
      fontFamily: fonts.Poppins.medium,
      fontSize: 9,
      color: '#585858'
    },
    containerPayBefore: {
      flexDirection: 'row'
    },
    date: {
      width: 224,
      height: 15,
      backgroundColor: '#F3F2F2',
      borderBottomRightRadius: 5,
      alignItems: 'center'
    },
    titleVN: {
      fontFamily: fonts.Poppins.medium,
      fontSize: 18,
      color: '#585858',
    },
    vehiclesDesc: {
      marginTop: 32,
    },
    containerAllDesc: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
})