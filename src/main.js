const fs = require('fs/promises');
const path = require('path');

async function main() {
  try {
    const args = process.argv.slice(2);
    const inputDir = path.resolve(args[0]);
    const outputDir = path.resolve(args[1]);
    for (const file of await fs.readdir(inputDir)) {
      const data = await fs.readFile(path.join(inputDir, file), 'utf8');

      console.log(data);
      setTimeout(data => {
        console.log(`Timeout for ${data} sec(s)`);
        fs.writeFile(path.join(outputDir, file), `Timeout for ${data} sec(s)`, 'utf8');
      }, 1000 * data, data);
    }
    } catch (err) {
      console.log(err);
    }
}

main();
