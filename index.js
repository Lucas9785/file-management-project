import fileManager  from'./fileManager.js';
import realineSync  from'readline-sync';
import path  from'path';
import url, { fileURLToPath } from 'url';  

async function  main() {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const baseDir = path.join(__dirname, 'arquivos');
    fileManager.createDirectory(baseDir)
    try {
        while (true) {
            console.log("\nMenu:")
            console.log("1. Criar arquivo")
            console.log("2. Listar arquivos")
            console.log("3. Ler arquivo")
            console.log("4. Escrever arquivo")
            console.log("5. Deletar arquivo")
            console.log("6. Sair")

            const choice = realineSync.question("Escolha uma opção: ");
       
            switch (choice) {
                case '1':
                    const fileName = realineSync.question("Digite o nome do arquivo: ");
                    const fileContent = realineSync.question("Digite o conteúdo do arquivo: ");

                    const createFilePath = path.join(baseDir, fileName)
                    const fileMessage = await fileManager.createFile(createFilePath, fileContent);
                    console.log(fileMessage);
                    break;

                case '2':
                    const files = await fileManager.listFiles(baseDir);
                    console.log("arquivos no diretório:",files);
                    break;
                case '3':
                    const readFileName = realineSync.question("Digite o nome do arquivo para ler: ");
                    const readFilePath = path.join(baseDir, readFileName);
                    const content = await fileManager.readFile(readFilePath);
                    console.log("Conteudo do arquivo:",content);
                    break;
                case '4':
                    const writeFileName = realineSync.question("Digite o nome do arquivo para escrever: ");
                    const writeFilePath = path.join(baseDir, writeFileName);
                    const newContent = realineSync.question("Digite o conteúdo a ser arquivo: ");
                    const message = await fileManager.writeFile(writeFilePath, newContent); 
                    console.log(message);
                    break;
                case '5':
                    const deleteFileName = realineSync.question("Digite o nome do arquivo para deletar: ");
                    const deleteFilePath = path.join(baseDir, deleteFileName);
                    const messageDelete = await fileManager.deleteFile(deleteFilePath);

                    console.log(messageDelete);
                    break;
                case '6':
                    console.log("Saindo...");
                    return;
                default:
                    console.log("Opção inválida, tente novamente.");

            }
        }
    }catch (error) {
        console.error("Erro:", error.message);
    }            
    
}


main();