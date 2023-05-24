function hitungLuas() {
  // Get input value untuk luas
  var sisiLuas = document.getElementById("sisi-luas").value;

  // Perhitungan luas Persegi
  var luas = sisiLuas * sisiLuas;

  // Display Hasil
  document.getElementById("rumus-luas").innerHTML = "L = S x S";
  document.getElementById("perhitungan-luas").innerHTML = "L = "  +sisiLuas + " x " +sisiLuas;
  document.getElementById("output_luas").innerHTML = "L =  " + luas;
}

function hitungKeliling() {
  // Get input value untuk keliling
  var sisiKeliling = document.getElementById("sisi-keliling").value;

  // Perhitungan keliling Persegi
  var keliling = 4 * sisiKeliling;

  // Display Hasil
  document.getElementById("rumus-keliling").innerHTML = "K = 4 x S";
  document.getElementById("perhitungan-keliling").innerHTML = "K = 4 x " +sisiKeliling;
  document.getElementById("output_keliling").innerHTML = "K = " + keliling;
}

function reset() {
  // output reset luas persegi
  document.getElementById("rumus-luas").innerHTML = "";
  document.getElementById("perhitungan-luas").innerHTML = "";
  document.getElementById("sisi-luas").value = "";
  document.getElementById("output_luas").innerHTML = "";
}
  function reset2() {
  // output reset keliling persegi
  document.getElementById("rumus-keliling").innerHTML = "";
  document.getElementById("perhitungan-keliling").innerHTML = "";
  document.getElementById("sisi-keliling").value = "";
  document.getElementById("output_keliling").innerHTML = "";
}


