const canvas = document.querySelector("canvas")
const board = canvas.getContext("2d")

canvas.width = DISPLAY_PIXEL.WIDTH * ASPECT_RATIO.WIDTH
canvas.height = DISPLAY_PIXEL.HEIGHT * ASPECT_RATIO.HEIGHT


const playerProperty = {
    width: 100,
    height: 150,
    speed: 1,
    color: "tomato",
    position:{
        x: canvas.width - 100,
        y: 0 
    }
}
const enemyProperty = {
    width: 100,
    height: 150,
    speed: 1,
    color: "black",
    position:{
        x: canvas.width - 100,
        y: canvas.height - 150 
    }
}

const ground = new Ground(canvas.width, canvas.height, "lightblue")
const player = new Player(playerProperty)
const enemy = new Player(enemyProperty)

ground.create()
player.create()
enemy.create()