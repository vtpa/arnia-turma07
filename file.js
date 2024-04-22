const fs = require('fs');

const conteudo = { 
  title: "Título", 
  content: 'Conteúdo a ser gravado no arquivo'
};

fs.writeFile('arquivo2.txt', JSON.stringify(conteudo, null, 2), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Arquivo gravado com sucesso!');
});