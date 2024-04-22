// Estudando sobre buffers

const buf = Buffer.from('Olá, mundo!', 'utf8');
console.log(buf[0]); // Saída: 79
console.log(buf.toString('utf8')); // Saída: Olá, mundo!