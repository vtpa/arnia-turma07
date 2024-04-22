const fs = require('fs');

fs.readFile('arquivo2.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const dados = JSON.parse(data)
  const binaryData = Buffer.from(data)
  
  console.log(binaryData.map((item) => item))

  console.log(`Title: ${dados.title}`);
  console.log(`Content: ${dados.content}`);
});
