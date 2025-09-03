const valorConta = 100;
const percentualGorjeta = 10;

const valorGorjeta = valorConta * (percentualGorjeta/100);


const valorTotal = valorConta + valorGorjeta;

console.log(`O valor a ser pago é R$${valorTotal}, sendo R$${valorConta} da conta e R$${valorGorjeta} de uma gorjeta de ${percentualGorjeta}%.`)
