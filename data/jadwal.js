const PELABUHAN = [

  {
    pelabuhan_id: "B-1",
    pelabuhan_nama: 'Bakauheni', 
  },

  {
    pelabuhan_id: "B-2",
    pelabuhan_nama: 'Merak',
  },

  {
    pelabuhan_id: "B-3",
    pelabuhan_nama: 'Tanjung Priok',
  },
  {
    pelabuhan_id: "B-4",
    pelabuhan_nama: 'Panjang',
  },
  {
    pelabuhan_id: "B-5",
    pelabuhan_nama: 'Surabaya',
  },

 
];




const KELAS = [
{
  kelas_id: "E-1",
  
  jenis_kelas:'Ekonomi',
},
{
  Kelas_id:'E-2',
  jenis_kelas: 'Executive',
},
{
  Kelas_id:'E-3',
  jenis_kelas: 'Bisnis',

},
];



  
const JADWAL = [

  {
    jadwal_id: "J-1",
    pelabuhan_id_keberangkatan: "B-1",
    pelabuhan_id_kedatangan: "B-2",
    
    kelas_id: "E-1",
    jam: "12.00",
    tanggal: "1",
    jumlah:"1"
  },

  {
    jadwal_id: "J-2",
    pelabuhan_id_keberangkatan: "B-1",
    pelabuhan_id_kedatangan: "B-3",
   
    kelas_id: "E-2",
    jam: "12.00",
    tanggal: "2",
    jumlah:"2"
  },

  {
    jadwal_id: "J-3",
    pelabuhan_id_keberangkatan: "B-1",
    pelabuhan_id_kedatangan: "B-4",
   
    kelas_id: "E-2",
    jam: "07.00",
    tanggal: "4",
    jumlah:"1"
  },


  {
    jadwal_id: "J-4",
    pelabuhan_id_keberangkatan: "B-2",
    pelabuhan_id_kedatangan: "B-2",
   
    kelas_id: "E-3",
    jam: "15.00",
    tanggal: "3",
    jumlah:"2"
  },


  {
    jadwal_id: "J-5",
    pelabuhan_id_keberangkatan: "B-2",
    pelabuhan_id_kedatangan: "B-1",
   
    kelas_id: "E-3",
    jam: "07.00",
    tanggal: "5",
    jumlah:"1"
  },


];
  
export {PELABUHAN, JADWAL,KELAS};