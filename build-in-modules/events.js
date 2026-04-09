const EventEmitter = require("node:events")

const emitter = new EventEmitter()

emitter.on("order-pizza", (size, toppings)=> {
    console.log(`Order received, baking ${size} pizza with ${toppings}`)
})

emitter.emit("order-pizza", "large", "mashroom");