const readline = require('readline');

// Membuat interface untuk input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function hitungAkarPangkat2(x) {
    if (x < 0) {
        console.log("Tidak bisa input bilangan negatif");
    } else if (x % 2 !== 0) {
        console.log("Tidak bisa input bilangan ganjil");
    } else {
        const akar = Math.sqrt(x);
        console.log(`Akar pangkat 2 dari ${x} adalah ${akar}`);
    }
}

// Masukan input
rl.question("Masukkan angka: ", (input) => {
    const x = parseFloat(input);
    hitungAkarPangkat2(x);
    rl.close();
});
