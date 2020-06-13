let name = prompt('Nama pembeli')
let produk = prompt('produk yang dibeli')

pesan = (name, produk) => `Terima kasih ${name} telah membeli produk  ${produk}`;
alert(pesan(name, produk))
console.log(pesan(name, produk))