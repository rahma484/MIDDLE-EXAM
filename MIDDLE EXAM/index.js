import { lahan, weatherData, perbaruiLahan, hitungPetakSubur, cekKelayakanCuaca } from './lahan.js';

const lahanDiproses = perbaruiLahan(lahan);
const totalSubur = hitungPetakSubur(lahanDiproses);
const cocok = cekKelayakanCuaca(weatherData);
const petakDitanami = cocok ? totalSubur : 0;

console.log("total petak subur:", totalSubur);
console.log("total petak yang ditanami:", petakDitanami);

if (!cocok) {
    console.log("cuaca tidak cocok untuk bercocok tanam");
} else {
    console.log("cuaca cocok untuk bercocok tanam, sehingga tidak ada peringatan.");
}
