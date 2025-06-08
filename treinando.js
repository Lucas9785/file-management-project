const fs = require('fs');
const path = require('path');

const listarArquivos = fs.readdir(__dirname, (err,files) => {
    if (err) {
        console.error('Erro ao ler o diretório:', err);
        return;
    }
    console.log('Arquivos no diretório:', files);
});
console.log(variavel);
