// importando bibliotecas
import fs  from'fs';


function createDirectory(dirPath) {
    return new Promise((resolve, reject) => {
        // Criando o diretório
        fs.mkdir(dirPath, { recursive: true }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Directory ${dirPath} created successfully.`); 
            }
        });
    })
}

function createFile(filePath, content='') {
    return new Promise((resolve, reject) => {
        // Criando o arquivo
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`File ${filePath} created successfully.`);
            }
        });
    })
}

// Função para listar arquivos em um diretório
function listFiles(dirPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    })
}

// Função para ler o conteúdo de um arquivo
function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

// Função para escrever conteúdo em um arquivo
function writeFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Content written to file ${filePath} successfully.`);
            }
        });
    })
}

// Função para deletar um arquivo
function deleteFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`File ${filePath} deleted successfully.`);
            }
        });
    })
}

export default {
    createDirectory,
    createFile, 
    listFiles, 
    readFile, 
    writeFile, 
    deleteFile}
    ;