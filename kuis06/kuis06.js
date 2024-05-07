// function hideEl() {
//     $("p").hide();
//   }
  
//   function hideClass() {
//     $(".teks").hide();
//   }
  
//   function hideAttr() {
//     $("[href='#']").hide();
//   }

//   function get_data_kelas( id )
// {
//     const kelas = 
//     {
//         id:0, 
//         nama:"", 
//         jml_peserta:0, 
//         jml_peserta_lulus: 0, 
//         jml_peserta_ongoing: 0, 
//         jml_peserta_tidak_lulus: 0
//     };

    
//     const ary_jml_peserta = [100,200,300];
//     const ary_jml_peserta_lulus = [10,20,30];
//     const ary_jml_peserta_ongoing = [20,40,60];
//     const ary_jml_peserta_tidak_lulus = [70,140,210];

//     kelas.id = id;
//     kelas.jml_peserta = ary_jml_peserta[ id - 1 ];
//     kelas.jml_peserta_lulus = ary_jml_peserta_lulus[ id - 1 ];
//     kelas.jml_peserta_ongoing = ary_jml_peserta_ongoing[ id - 1 ];
//     kelas.jml_peserta_tidak_lulus = ary_jml_peserta_tidak_lulus[ id - 1 ];

//     switch (id)
//     {
//         case 1:
//             kelas.nama = "Pemrograman Dasar";
//             break;
//         case 2:
//             kelas.nama = "Pemrograman Berorientasi Objek";
//             break;
//         case 3:
//             kelas.nama = "Pemrograman Game";
//             break;
//         default: 
//             kelas.nama = "Tidak diketahui";
//     }    

//     return kelas;
// }

// const dataKelas = get_data_kelas(2);
// console.log(dataKelas);

// let kelas = get_data_kelas( 1 );
// console.log("ID = " + kelas.id);
// console.log("Nama = " + kelas.nama);
// console.log("Jumlah Peserta = " + kelas.jml_peserta);
// console.log("Jumlah Peserta Lulus = " + kelas.jml_peserta_lulus);
// console.log("Jumlah Peserta OnGoing = " + kelas.jml_peserta_ongoing);
// console.log("Jumlah Peserta Tidak Lulus = " + kelas.jml_peserta_tidak_lulus);
function hideEi() {
    $("h1").hide();
  }
  
  function hideClass() {
    $(".Kelas").hide();
  }
  
  function hideAttr() {
    $("[href]").hide();
  }