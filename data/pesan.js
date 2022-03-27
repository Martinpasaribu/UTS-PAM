


import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


import { FontAwesome5,FontAwesome, Ionicons, Fontisto } from '@expo/vector-icons';

import { PELABUHAN, JADWAL,KELAS } from '../data/jadwal';


import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';



const pesan = ({navigation, route}) => {

  function NoFlight() {
    return (        
      <Text style={styles.empty}>Hasil Pencarian Tidak Ditemukan</Text>  
    );
  }


  function ListJadwal(result){
    return (
      <FlatList style={styles.flat}

     

        data = {result}
        renderItem = {({item}) => (
          <View style={styles.flat}>
          
          <Text style={styles.head_title2}>Kapalzy</Text>

          <Text style={styles.top_text1}> Kuota Tersedia (10000)</Text>
          <Text style={styles.top_text2}> Rincian Tiket</Text>

                 
          <View style={styles.card_item}>
         
          
          
            <View style={styles.top_item}>


            
              
                <Text style={styles.top_text12}>

                {PELABUHAN.find(src => src.pelabuhan_id == item.pelabuhan_id_keberangkatan).pelabuhan_nama}  {'     >      '}  {PELABUHAN.find(sub => sub.pelabuhan_id === item.pelabuhan_id_kedatangan).pelabuhan_nama}

                </Text>  
                <Text style={styles.top_text13}> Jadwal Masuk Pelabuhan</Text>
              
             

            </View>

            <View style={styles.bottom_item}>

             

              <Text style={styles.bottom_item_right}> Tanggal : {JADWAL.find(src => src.tanggal === item.tanggal).tanggal} </Text>
              <Text style={styles.bottom_item_right}> {JADWAL.find(src => src.jam === item.jam).jam}  WIB</Text>
              <Text style={styles.bottom_item_right}> Layanan</Text>
              <Text style={styles.bottom_item_right}> {JADWAL.find(src => src.kelas_id === item.kelas_id).jenis_kelas} </Text>
              <Text style={styles.bottom_item_right2}> ---------------------------------------------------------</Text>
              <Text style={styles.bottom_item_right2} > Dewasa x {JADWAL.find(src => src.jumlah === item.jumlah).jumlah} </Text>
            </View>
          
          </View>

          <Text style={styles.top_text4}> </Text>  
          <Text style={styles.top_text5}>Total                     Rp. {JADWAL.find(src => src.jumlah === item.jumlah).jumlah*65000}</Text>  

          <View style={styles.head_tombol_item}>




  

       

          </View>

          
          </View>

          
        )}
        keyExtractor={item => item.jadwal_id}

      />
    );
  }


  function CardList(){

    if (route.params.keberangkatan === '' || route.params.tujuan === '' || route.params.tanggal=== '' || route.params.kelas=== '' || route.params.jumlah === ''|| route.params.jam=== '')
    {
        return NoFlight();
    }
    
    else
    {
      const depature = PELABUHAN.find(id => id.pelabuhan_nama.toLowerCase() === route.params.keberangkatan.toLowerCase()).pelabuhan_id;
      const arrival = PELABUHAN.find(id => id.pelabuhan_nama.toLowerCase() === route.params.tujuan.toLowerCase()).pelabuhan_id;
      
      
      const result = JADWAL.filter(id => id.pelabuhan_id_keberangkatan.toLowerCase() === depature.toLowerCase() && id.pelabuhan_id_kedatangan.toLowerCase() === arrival.toLowerCase() && id.tanggal === route.params.tanggal.toLowerCase()&&  id.jam === route.params.jam.toLowerCase());


      let card_list = (result.length >= 1) ? ListJadwal(result) : NoFlight();

      return card_list;
    }
  }

  return (

    <View style={styles.container} >

      <View style={styles.header_list}>

        <View style={styles.head_item}>
        
        </View>

      </View>

      <View style={styles.card}>                  
        <CardList/>
      </View>
      <View style={styles.card_item3}>
      <TouchableOpacity onPress={ () => navigation.goBack() }>
      <Text style={styles.button_text}>Kembali</Text>
      </TouchableOpacity>
     
      </View>


      <View style={styles.card_item2}>
      <TouchableOpacity onPress={ () => navigation.navigate('pesan') }>
      <Text style={styles.button_text2}>Pesan</Text>
      </TouchableOpacity>

   
      </View>


      <View style={styles.bottom_navigation}>



      <TouchableOpacity style={styles.nav_menu} onPress={ () => navigation.goBack() }>
          <FontAwesome name="home" size={30} color="#0d5794" /> 
          <Text style={styles.nav_text}>Beranda</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nav_menu} onPress={ () => navigation.navigate('layar2')}>
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














  return (

    <View style={styles.container} >

      <View style={styles.header_list}>

        <View style={styles.head_item}>
        
        </View>

      </View>

    
      <View style={styles.card_item3}>
      <TouchableOpacity onPress={ () => navigation.goBack() }>
      <Text style={styles.button_text}>Kembali</Text>



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
  
    button_text:{
      textAlign: 'center',
      paddingTop: '6%',
      fontSize: 18,
      color: 'blue',
      fontWeight: 'bold',
    },
    button_text2:{
      textAlign: 'center',
    
      marginTop: '6%',
      fontSize: 18,
      left: '13%',
      marginRight: '24%',
      color: 'white',
      fontWeight: 'bold',
    },
  
  
  
    flat:{
      backgroundColor: 'white',
      width: '90%',
      height: '71%',
     marginTop: '-10%',
     marginBottom: '1%',
     
      alignSelf: 'center',
      
     
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
  
    container:{
      flex: 1,
      backgroundColor: '#dcdcdc',
      
  
    },
  
    header_list:{
      width: '100%',
      height: '23%',
      backgroundColor: '#dcdcdc',
      borderBottomLeftRadius: 10.,
      borderBottomRightRadius: 10,
    },
  
    head_tombol_item:{
      textAlign: 'center',
      paddingTop: '34%',
      left: '10%',
      fontSize: 30,
      color: 'white',
    
      fontWeight: 'bold'
    },
  
  
    head_item:{
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'space-between',
      marginLeft: '5%',
      marginRight: '5%',
      marginTop: '15%'
    },
  
    head_title2:{
      alignSelf: 'center',
      fontSize:28,
      color: '#4682B4',
      marginTop: '14%',
      fontWeight: 'bold',
    },
  
    title_list:{
      alignContent: 'center',
      alignItems: 'center',
      marginTop: '8%'
    },
  
    list_title:{
      color: 'white',
      fontSize: 20,
      marginTop:2,
    },
  
    footer:{
      position: 'absolute',
      marginTop:'10%',
      bottom: 20,
      width: '100%'
    },
  
    copyright:{ 
      color: '#828282',
      textAlign: 'center',
      fontSize: 15,
    },
  
    card:{ 
      marginTop: '2%',
      alignItems: 'center',
      marginHorizontal:'2%'
    },
  
    card_item:{
      right: '5%',
      
      backgroundColor: '#dcdcdc',
      height: '100%',
      width: '98%',
      marginTop: "10%",
      marginBottom: "6%",
      marginHorizontal: 19,
      marginVertical: 40,
      
    },
    card_item2:{
      backgroundColor: 'blue',
      
      height: '6%',
      left: '47%',
      right: '-34%',
      width: '34%',
      marginTop: "-24%",
      marginBottom: "12%",
      marginLeft: '7%',
      marginHorizontal: 2,
      marginVertical: 1,
      
    },
  
    card_item3:{
      backgroundColor: '#dcdcdc',
      borderColor: 'blue',
      height: '6%',
      right: '-11%',
      width: '34%',
      marginTop: "-19%",
      marginBottom: "12%",
      marginHorizontal: 2,
      marginVertical: 1,
      
    },
  
    top_text1:{
      fontSize:12,
      marginTop: "10%",
      fontWeight: 'bold',
    },
    top_text2:{
      fontSize:14,
      marginTop: "5%",
      fontWeight: 'bold',
    },
    top_text3:{
      fontSize:14,
      marginTop: "20%",
      fontWeight: 'bold',
    },
    top_text4:{
      fontSize:14,
      marginTop: "5%",
      fontWeight: 'bold',
    },
  
    top_text5:{
      fontSize:23,
      marginBottom: "2%",
      marginTop: "-11%",
      fontWeight: 'bold',
    },
  
    top_item:{
      marginLeft: '4%',
      marginTop: '4%',
    },
  
    top_text:{
      fontSize: 20,
      fontWeight: 'bold',
    },
  
    top_text13:{
      fontSize: 15,
      marginTop: '1%',
      fontWeight: 'bold',
      marginBottom: '8%',
    },
  
    top_text12:{
      fontSize: 18,
      marginTop: '1%',
      fontWeight: 'bold',
      marginBottom: '8%',
    },
  
    
  
    bottom_item_left:{
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: '4%',
    },
  
    bottom_item_right:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '20%',
   marginLeft: '4%',
        fontSize: 15,
        marginTop: '3%',
        color: 'black'
    },
    bottom_item_right2:{
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: '5%',
      fontSize: 15,
      marginTop: '-1%',
      color: 'black'
  },
  
  
  
    left_text:{
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: '2%'
    },
    
    empty:{
      fontSize:18,
      marginTop:'50%'
    },
  
} 
);

export default pesan;