import React, { useState } from 'react';
import { StyleSheet, Picker,Text, View, TouchableOpacity, TextInput, SafeAreaView, Alert } from 'react-native';
import { FontAwesome5,FontAwesome, Fontisto, Octicons} from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';




const layar1 = ({navigation}) => {

  const [Keberangkatan, SetKeberangkatan] = useState('');
  const [Tujuan, SetTujuan] = useState('');
  const [Tanggal, SetTanggal] = useState('');
  const [Jam, SetJam] = useState('');
  const [Kelas, SetKelas] = useState('');
  const [Jumlah, SetJumlah] = useState('');

  const button = () => {

    if (Keberangkatan === '' || Tujuan === '' || Tanggal === '' || Kelas === '' ||Jam === '' || Jumlah === '')
    {
      Alert.alert("Input Error")
    }

    else
    {
      navigation.navigate('layar2',{ keberangkatan : Keberangkatan, tujuan : Tujuan, tanggal : Tanggal,jam : Jam, kelas : Kelas, jumlah : Jumlah })
    }
    
  }

  return(
      
    <View style={styles.container}>
        
        <View style={styles.header}>

            

            

        </View>

        <View style={styles.form_input}>
        <Text style={styles.head_title}>Kapalzy</Text>

           

      
           
        <SafeAreaView style={styles.input_2}>
        <Text style={styles.input_title}>Pelabuhan Awal</Text>
            <SafeAreaView style={styles.box1}>
            <FontAwesome5 style={styles.form_logo} name="ship" size={15.5} color="#7ca84d" />   
                        
                <Picker
                selectedValue={Keberangkatan}
                onValueChange={(value) => SetKeberangkatan(value)}
                mode="dropdown" 
                
                style={{ height: 40, width: 250 }}
               
                    
                    >
                    <Picker.Item label="- Pilih Pelabuhan Keberangkatan" value="Unknown"  
                    />
                    <Picker.Item label="Bakauheni" value="Bakauheni"  
                    />
                    <Picker.Item label="Merak" value="Merak"   
                    />
                    <Picker.Item label="Tanjung Priok" value="Tanjung Periok"   
                    />
                    <Picker.Item label="Panjang" value="Panjang"   
                    />
                    <Picker.Item label="Surabaya" value="Surabaya"   
                    />
                    
                </Picker>
                </SafeAreaView>
                </SafeAreaView>
               

            

            <SafeAreaView style={styles.input_2}>

                <Text style={styles.input_title}>Pelabuhan Tujuan</Text>

                <SafeAreaView style={styles.box1}>
                    <FontAwesome5 style={styles.form_logo} name="ship" size={15.5} color="#7ca84d" />
                    

                    <Picker
                    selectedValue={Tujuan}
                    onValueChange={(value) => SetTujuan(value)}
                    mode="dropdown" 
                    
                    style={{ height: 40, width: 250 }}
                   
                        
                        >
                        <Picker.Item label="- Pilih Pelabuhan Tujuan" value="Unknown"  
                        />
                        <Picker.Item label="Bakauheni" value="Bakauheni"  
                        />
                        <Picker.Item label="Merak" value="Merak"   
                        />
                        
                        <Picker.Item label="Tanjung Priok" value="Tanjung Priok"   
                        />
                        <Picker.Item label="Panjang" value="Panjang"   
                        />
                        <Picker.Item label="Surabaya" value="Surabaya"   
                        />

                    </Picker>

            </SafeAreaView>



            </SafeAreaView>

            <SafeAreaView style={styles.input_3}>

                <Text style={styles.input_title}>Kelas Layanan</Text>

                <SafeAreaView style={styles.box1}>
                    <Fontisto style={styles.form_logo} name="persons" size={20} color="#7ca84d" />
                    
                    
                    
                    <Picker
                    selectedValue={Kelas}
                    onValueChange={(value) => SetKelas(value)}
                    mode="dropdown" 
                    
                    style={{ height: 40, width: 250 }}
                   
                        
                        >
                        <Picker.Item label="- Pilih Layanan" value="Unknown"  
                        />
                        <Picker.Item label="Executive" value="Bakauheni"  
                        />
                        <Picker.Item label="Ekonomi" value="Ekonomi"   
                        />
                        <Picker.Item label="Bisnis" value="Bisnis"   
                        />
                        
                    </Picker>
                    



                </SafeAreaView>

            </SafeAreaView>

            
            <SafeAreaView style={styles.input_3}>

                <Text style={styles.input_title}>Tanggal Masuk Pelabuhan</Text>

                <SafeAreaView style={styles.box1}>
                    <Fontisto style={styles.form_logo} name="calendar" size={20} color="#7ca84d" />
                    
                    <Picker
                    selectedValue={Tanggal}
                    onValueChange={(value) => SetTanggal(value)}
                    mode="dropdown" 
                    
                    style={{ height: 40, width: 250 }}
                   
                        
                        >
                        <Picker.Item label="- Pilih Tanggal " value="Unknown"  
                        />
                        <Picker.Item label="1" value="1"  
                        />
                        <Picker.Item label="2" value="2"   
                        />
                          
                        <Picker.Item label="3" value="3"   
                        /><Picker.Item label="4" value="4"   
                        /><Picker.Item label="5" value="5"   
                        /><Picker.Item label="6" value="6"   
                        /><Picker.Item label="7" value="7"   
                        /><Picker.Item label="8" value="8"   
                        /><Picker.Item label="9" value="9"   
                        /><Picker.Item label="10" value="10"   
                        /><Picker.Item label="12" value="11"   
                        /><Picker.Item label="13" value="12"   
                        /><Picker.Item label="14" value="13"   
                        /><Picker.Item label="15" value="14"   
                        /><Picker.Item label="16" value="15"   
                        /><Picker.Item label="17" value="16"   
                        /><Picker.Item label="18" value="17"   
                        /><Picker.Item label="19" value="18"   
                        /><Picker.Item label="20" value="19"   
                        /><Picker.Item label="21" value="20"   
                        /><Picker.Item label="22" value="21"   
                        /><Picker.Item label="23" value="22"   
                        /><Picker.Item label="24" value="23"   
                        /><Picker.Item label="25" value="24"   
                        /><Picker.Item label="26" value="25"   
                        /><Picker.Item label="27" value="26"   
                        /><Picker.Item label="28" value="27"   
                        /><Picker.Item label="29" value="29"   
                        /><Picker.Item label="30" value="30"   
                        /><Picker.Item label="31" value="31"   
                        />
                        
                    </Picker>


                </SafeAreaView>

            </SafeAreaView>
            
            <SafeAreaView style={styles.input_3}>

                <Text style={styles.input_title}>Jam Masuk Pelabuhan</Text>

                <SafeAreaView style={styles.box1}>
                    <Fontisto style={styles.form_logo} name="clock" size={20} color="#7ca84d" />
                    
                    

                    <Picker
                    selectedValue={Jam}
                    onValueChange={(value) => SetJam(value)}
                    mode="dropdown" 
                    
                    style={{ height: 40, width: 250 }}
                   
                        
                        >
                        <Picker.Item label="- Pilih Jam Masuk" value="Unknown"  
                        />
                        <Picker.Item label="07.00" value="07.00"  
                        />
                        <Picker.Item label="09.00" value="09.00"   
                        />
                        <Picker.Item label="12.00" value="12.00"   
                        />
                        <Picker.Item label="15.00" value="15.00"   
                        />
                        
                    </Picker>
                    
                </SafeAreaView>

            </SafeAreaView>

            <SafeAreaView style={styles.input_3}>

                

                <SafeAreaView style={styles.box1}>
                    
                    
                    <TextInput 
                        style={styles.text_input} 
                        placeholderTextColor={'#dcdcdc'} 
                        placeholder=' Jumlah Orang  '
                        onChangeText={(int) => SetJumlah(int)}
                        value={Jumlah}
                    />
                </SafeAreaView>

            </SafeAreaView>

            

            <TouchableOpacity style={styles.button} onPress={button}>
            
                <Text style={styles.button_text}>Buat Tiket</Text>
                <FontAwesome5 style={styles.form_logocari} name="search"  size={18} color="#7ca84d" />

            </TouchableOpacity>

        </View>

        <View style={styles.footer}> 
            <Text style={styles.copyright}>Copyright Martin Pasaribu </Text>
        </View>

        
        <View style={styles.bottom_navigation}>

        <TouchableOpacity style={styles.nav_menu} onPress={ () => navigation.navigate('Beranda')}>
            <FontAwesome name="home" size={30} color="#0d5794" /> 
            <Text style={styles.nav_text}>Beranda</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.nav_menu} onPress={ () => navigation.navigate('Pesanan')}>
            <FontAwesome name="book" size={30} color="#0d5794" />
            <Text style={styles.nav_text}>Pesanan Saya</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.nav_menu} onPress={ () => navigation.navigate('Pembatalan')}>
            <MaterialCommunityIcons name="file-cancel" size={30} color="#0d5794" />
            <Text style={styles.nav_text}>Pembatalan</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.nav_menu}>
            <Feather name="menu" size={30} color="#0d5794" /> 
            <Text style={styles.nav_text}>Lainnya</Text>
        </TouchableOpacity>
  
    </View>


    </View>
  )
}

const styles = StyleSheet.create({


  bottom_navigation:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    backgroundColor: '#f2f2f2',
    width: '100%',
    height: '7  %',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 2,
    borderColor: '#cfcfcf',
},


  container:{
    flex: 1,
    backgroundColor: '#DCDCDC',
  },

  header:{
    width: '100%',
    height: '60%',
    backgroundColor: '#DCDCDC',
    borderBottomLeftRadius: 10.,
    borderBottomRightRadius: 10,
  },

  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },

  header_list:{
    width: '100%',
    height: '23%',
    backgroundColor: '#7ca84d',
    borderBottomLeftRadius: 10.,
    borderBottomRightRadius: 10,
  },

  head_item:{
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginLeft: '8%',
    marginRight: '8%',
    marginTop: '18%'
  },

  head_title:{
    alignSelf: 'center',
    marginTop: '2%',
    fontSize:35,
    color: '#4682B4',
    fontWeight: 'bold',
  },

  head_title2:{
    alignSelf: 'center',
    fontSize:40,
    color: 'white',
  },

  title_list:{
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '8%'
  },

  list_title:{
    color: 'white',
    fontSize: 20,
  },

  form_input:{
    backgroundColor: 'white',
    width: '85%',
    height: '77%',
    borderRadius: 15,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '28%',
    elevation: 3,
  },

  button:{
    marginTop: '-1%',
    backgroundColor: '#e87f0e',
    width: '60%',
    height: 50,
    borderRadius: 5,
    alignSelf: 'center',
  },

  button_text:{
    textAlign: 'center',
    paddingTop: '5%',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },

  input_1:{
    marginLeft: 25,
    marginTop: 18,
    marginBottom: 20,
  },

  input_2:{
    marginLeft: 25,
    marginBottom: 20,
  },

  input_3:{
    marginLeft: 25,
    marginBottom: 20,
  },

  text_input:{
    height: 35,
    width: '87.5%',
    fontWeight: 'bold',
    borderLeftWidth: 1.5,
    borderColor: 'gray',
    paddingLeft: 5,
  },

  input_title:{
    color: '#808080',
    fontSize: 17,
    marginBottom: 4,
    marginTop: 2,
    marginLeft: 2,
  },

  footer:{
    position: 'absolute',
    bottom: 20,
    width: '100%'
  },

  copyright:{ 
    color: '#828282',
    textAlign: 'center',
    fontSize: 15,
  },

  box1:{
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 5,
    width: "92%",
  },

  form_logo:{
    color: '#808080',
    marginLeft: 8,
    marginRight: 8,
    fontWeight: 'bold',
  },

  form_logocari:{
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 25,
    marginRight: 10,
    marginTop: '-9%'
    
  },

  header_item:{
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginLeft: '4%',
    marginRight: '5%',
    marginTop: '15%'
  },

});
  
export default layar1;