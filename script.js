const calculator = `
Pilih Menu:
1. Penjumlahan
2. Penguranngan
3. Pembagian
4. Perkalian
5. Pangkat 2
6. Akar Pangkat 2
7. Akar Pangkat 3`;
const menu = prompt(calculator);
console.log(menu);

switch (menu) {
  case '1':
    penjumlahan();
    break;
  case '2':
    pengurangan();
    break;
  case '3':
    pembagian();
    break;
  case '4':
    perkalian();
    break;
  case '5':
    pangkat2();
    break;
  case '6':
    akarPangkat2();
    break;
  case '7':
    akarPangkat3();
    break;
  default:
    alert('Masukan anda tidak terdapat pada menu');
}

const penjumlahan = () => {
    let angkaPertama = parseInt(prompt("Masukkan angka pertama"));
    let angkaKedua = parseInt(prompt("Masukkan angka kedua"));

    let hasil = angkaPertama + angkaKedua;

    alert(`Hasil penjumlahan antara ${angkaPertama} dan ${angkaKedua} adalah ${hasil}`)
}

function pengurangan() {}

function pembagian() {}

function perkalian() {}

// add by Helmi Effendi
function pangkat2() {
  const num = prompt('Input number for squared : ');
  const result = parseInt(num) * parseInt(num);
  alert(`${num} Squared is ${result}`);
}

function akarPangkat2() {}

function akarPangkat3() {}
