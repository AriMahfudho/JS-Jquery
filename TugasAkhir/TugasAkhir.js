$(document).ready(function() {

    $('button').css('background-color', 'blue'); // DOM manipulation mengubah warna asli tombol dari orange ke blue

    $('input').on("dblclick", function() { // jquery event double click
        swal("Anda meng-klik sebanyak 2 kali");
    });
    function formatNumber(number) {
        if (isNaN(number) || number == null) {
            return 0;
        } else {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }}
    
    
    $('button').click(function() { //function
        if($('input').val().length == 0) {
            return swal('', 'Mohon masukkan nama negara terlebih dahulu', 'warning');
          }
        var countryName = $('input').val().toLowerCase(); //variable
        swal({
            title: "",
            text: "Mencari data . . .",
            icon: "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",
            button: false
          });
        $.ajax({ //Ajax
            "url" : "https://covid-193.p.rapidapi.com/statistics",
            "method": "GET",
            "data":{
                country: countryName,
            },
            "headers" : {
                "X-RapidAPI-Host" : "covid-193.p.rapidapi.com",
                "X-RapidAPI-Key" : "bb47ab0e2fmsh1007f193d525d47p141331jsn843a3e62319f"
            },
            success : function(res) {
                if (res.response.length == 0) {
                    return swal('','Aduhhh ! Data yang kamu cari tidak ada.' , 'warning'); // kondisi ketika user memasukkan data yang tidak ada. Contoh inputan : arab
                    
                }

                var data = res.response[0].cases;
                $(".active-case").text(formatNumber(data.active));
                $(".critical-case").text(formatNumber(data.critical));
                $(".new-case").text(formatNumber(data.new));
                $(".recovered").text(formatNumber(data.recovered));
                
            var newCountryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);
            $('.nama-negara').text(newCountryName);
            
            $('.card-statistik').show();

            swal.close()
        }
        });

    })
});