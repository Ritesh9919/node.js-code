const fs = require("node:fs/promises")


async function readFile(){
    try {
        const data = await fs.readFile("./test.txt", "utf-8")
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
readFile()