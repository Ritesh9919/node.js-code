
const fs = require("node:fs")


// reading file
 //1. synchronously
const data = fs.readFileSync("./file.txt", "utf-8")
console.log(data)
// 2. asynchronously
const output = fs.readFile("./file.txt", "utf-8", (err, data)=> {
  console.log(data)
})

// Write file
// 1. synchronous
  fs.writeFileSync("read.txt", "Hello")
  // 2. asynchronous
  fs.writeFile("test.txt", "Ritesh Maurya", (err)=> {
    if(err) {
    console.error(err)
    }else{
        console.log("File written")
    }
  })
