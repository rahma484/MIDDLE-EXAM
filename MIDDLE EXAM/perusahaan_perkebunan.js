const lahan = [
    ["subur", "kering", "subur", "subur"],
    ["tandus", "kering", "kering", "subur"],
    ["subur", "subur", "subur", "kering"]
];

const weatherData = {
    temperature: 28,
    humidity: 55,
    windSpeed: 12
};

for(let i=0; i<lahan.length; i++){
    let baris = lahan[i];
    let total_petak = baris.length;
    let subur= 0;

    for (let j = 0; j<total_petak; j++){
        if(baris[j] === "subur"){
            subur++;
        }
    }
    if(subur / total_petak < 0.5){
        for(let j = 0; j < total_petak; j++){
            baris[j]= "kering";
        }
    }
}

let petak_yang_subur= 0;
for(let i = 0; i < lahan.length; i++){
    for(let j = 0; j < lahan[i].length; j++){
        if(lahan[i][j] === "subur"){
            petak_yang_subur++;
        }
    }
}
let cocok_untuk_tanam =
    weatherData.temperature >= 20 && weatherData.temperature <= 30 &&
    weatherData.humidity >= 50 &&
    weatherData.windSpeed <= 15;

let petak_yang_ditanami = cocok_untuk_tanam ? petak_yang_subur : 0;

console.log("total petak subur: ",petak_yang_subur);
console.log("total petak yang ditanami: ",petak_yang_ditanami);

if(!cocok_untuk_tanam){
    console.log("cuaca tidak cocok untuk bercocok tanam");
}else{
    console.log("cuaca cocok untuk bercocok tanam, sehingga tidak ada peringatan.");   
}

