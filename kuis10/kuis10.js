$(document).ready(function() {
    $('button').click(function() {
        if($('input').val().length == 0) {
            return swal('', 'Mohon masukkan nama negara terlebih dahulu', 'warning');
          }
        var countryName = $('input').val().toLowerCase();

        $.ajax({
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
                if(res.response.length == 0) {
                    return swal('Data tidak ditemukan', 'Pastikan nama negara yang dituliskan benar', 'warning');
                }
                var data = res.response[0].cases;
            
                $('.active-case').text(data.active);
                $('.critical-case').text(data.critical);
                $('.new-case').text(data.new);
                $('.recovered').text(data.recovered);
                $('.total').text(data.total);
                
            var newCountryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);
            $('.nama-negara').text(newCountryName);
            
            $('.card-statistik').show();}
        });
    })
});