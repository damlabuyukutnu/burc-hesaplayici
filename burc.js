let ay= prompt('Doğduğunuz ay nedir?');
let gun= Number(prompt('Doğduğunuz gün nedir?'));

let burc= (ay=== 'Ocak' && gun >= 1 && gun <= 20) || (ay === 'Aralık' && gun >= 22 && gun <= 31) ? 'Oğlak' :
          (ay=== 'Şubat' && gun >= 1 && gun <= 19) || (ay === 'Ocak' && gun >= 21 && gun <= 31) ? 'Kova' :
          (ay=== 'Mart' && gun >= 1 && gun <= 20) || (ay === 'Şubat' && gun >= 20 && gun <= 29) ? 'Balık' :
          (ay=== 'Nisan' && gun >= 1 && gun <= 20) || (ay === 'Mart' && gun >= 21 && gun <= 31) ? 'Koç' :
          (ay=== 'Mayıs' && gun >= 1 && gun <= 21) || (ay === 'Nisan' && gun >= 21 && gun <= 30) ? 'Boğa' :
          (ay=== 'Haziran' && gun >= 1 && gun <= 21) || (ay === 'Mayıs' && gun >= 22 && gun <= 31) ? 'İkizler' :
          (ay=== 'Temmuz' && gun >= 1 && gun <= 22) || (ay === 'Haziran' && gun >= 22 && gun <= 30) ? 'Yengeç' :
          (ay=== 'Ağustos' && gun >= 1 && gun <= 23) || (ay === 'Temmuz' && gun >= 23 && gun <= 31) ? 'Aslan' :
          (ay=== 'Eylül' && gun >= 1 && gun <= 23) || (ay === 'Ağustos' && gun >= 24 && gun <= 31) ? 'Başak' :
          (ay=== 'Ekim' && gun >= 1 && gun <= 23) || (ay === 'Eylül' && gun >= 24 && gun <= 30) ? 'Terazi' :
          (ay=== 'Kasım' && gun >= 1 && gun <= 22) || (ay === 'Ekim' && gun >= 24 && gun <= 31) ? 'Akrep' :
          (ay=== 'Aralık' && gun >= 1 && gun <= 21) || (ay === 'Kasım' && gun >= 23 && gun <= 30) ? 'Yay' :
          

console.log(`Merhaba ${burc} burcusunuz.`)  



