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

function perbaruiLahan(lahan) {
    for (let i = 0; i < lahan.length; i++) {
        let baris = lahan[i];
        let total_petak = baris.length;
        let subur = 0;

        for (let j = 0; j < total_petak; j++) {
            if (baris[j] === "subur") subur++;
        }

        if (subur / total_petak < 0.5) {
            for (let j = 0; j < total_petak; j++) {
                baris[j] = "kering";
            }
        }
    }
    return lahan;
}

function hitungPetakSubur(lahan) {
    let petak_subur = 0;
    for (let i = 0; i < lahan.length; i++) {
        for (let j = 0; j < lahan[i].length; j++) {
            if (lahan[i][j] === "subur") petak_subur++;
        }
    }
    return petak_subur;
}

function cekKelayakanCuaca(weatherData) {
    return (
        weatherData.temperature >= 20 && weatherData.temperature <= 30 &&
        weatherData.humidity >= 50 &&
        weatherData.windSpeed <= 15
    );
}

export { lahan, weatherData, perbaruiLahan, hitungPetakSubur, cekKelayakanCuaca };
