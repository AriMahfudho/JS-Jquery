
function cekKawasan(rawanBanjir, rawanLongsor, kawasanIndustri) {
    if (!rawanBanjir && !rawanLongsor && !kawasanIndustri) {
      return true;
    } else {
      return false;
    }
  }
  
  function cekLuas(Tanah, Bangunan) {
    if (Tanah >= 800 && Bangunan >= 400) {
      return true;
    } else {
      return false;
    }
  }
  

  function cekFasilitas(kolamRenang, parkiran, kebun) {
    if (kolamRenang && parkiran && kebun) {
      return true;
    } else {
      return false;
    }
  }
  
  function pilihRumah(rumah) {
    var kawasan = cekKawasan(rumah.rawanBanjir, rumah.rawanLongsor, rumah.kawasanIndustri);
    var luas = cekLuas(rumah.Tanah, rumah.Bangunan);
    var fasilitas = cekFasilitas(rumah.kolamRenang, rumah.parkiran, rumah.kebun);

    if (kawasan && luas && fasilitas) {
      console.log(`Rumah nomer ${rumah.id} memenuhi semua kriteria.`);
    }else {
      console.log(`Rumah nomer ${rumah.id} tidak memenuhi semua kriteria.`);}
  }
  
  var rumah = {
    id: 1,
    rawanBanjir: false,
    rawanLongsor: false,
    kawasanIndustri: false,
    Tanah: 1800,
    Bangunan: 400,
    kolamRenang: true,
    parkiran: true,
    kebun: true
  };
  
  console.log(pilihRumah(rumah));