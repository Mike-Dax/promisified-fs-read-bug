const fs = require("fs");
const { promisify } = require("util");
const fsReadAsync = promisify(fs.read);

async function main() {
  const fd = fs.openSync("./test.txt");
  const buffer = Buffer.alloc(16);
  const ret = await fsReadAsync(fd, buffer, 0, 4, null);

  console.log(ret);

  console.log(buffer.toString());
}

main();
