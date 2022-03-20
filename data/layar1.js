import React from 'react';
import {Text,View,TextInput,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
import image from '../image/putih.png'

const layar1 = ({navigation}) => {
    const [otw, onChangeotw] = React.useState('');
    const [end, onChangeend] = React.useState('');
    const [tanggal, onChangeTanggal] = React.useState('');

    const cariData = () => {
      navigation.navigate('layar2',{
        keberangkatan : otw,
        tujuan : end,
        waktu : tanggal,
      })
    }

    return (
        <ImageBackground source={image} style={{flex: 1}}>
            <View style={{backgroundColor: '#00a000', paddingVertical: 10, textAlign: 'center', flexDirection: "row", justifyContent: 'center'}}>
                <Text style={{fontSize: 28, fontWeight: 'bold', alignItems: 'center', textAlign: 'center', color: "white", fontFamily: "Chocin"}}>Mari Hiling.id</Text>
            </View>

            <Text style={styles.teksDiBox}>Lokasi Keberangkatan</Text>
            <TextInput 
            style={styles.inputteks} 
            
            onChangeText={(text) => onChangeotw(text)}
            value={otw}
            />

            <Text style={styles.teksDiBox}>Lokasi Tujuan</Text>
            <TextInput 
            style={styles.inputteks} 
             
            onChangeText={(text) => onChangeend(text)}
            value={end}
            />    
            
            <Text style={styles.teksDiBox}>Tanggal Keberangkatan</Text>
            <TextInput 
            style={styles.inputteks} 
            placeholder='2022-08-10 atau 2022-08-11'
            onChangeText={(text) => onChangeTanggal(text)}
            value={tanggal}
            />

            <TouchableOpacity onPress={cariData} style={{marginTop: 40, height: 35, backgroundColor: '#ff8c00', marginHorizontal: 40, borderRadius: 25}}>
                <Text style={{justifyContent: 'center', textAlign: 'center', color: 'white', fontSize: 20}}>Cari</Text>
            </TouchableOpacity>

            <Text style={{fontSize: 10, fontWeight: 'bold', alignItems: 'center', textAlign: 'center', color: 'white', marginTop: 350}}>Copyright by Martin Pasaribu 119140122</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    inputteks: {
        backgroundColor: 'white', borderRadius: 3, borderWidth: 1, marginHorizontal: 40, height: 30, marginTop: 5
    },
    teksDiBox: {
        color: 'black', fontSize: 20, fontWeight: 'bold', marginLeft: 40, marginTop: 35, fontFamily: "Cochin"
    },
});

export default layar1;