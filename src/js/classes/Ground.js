class Ground {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color

        console.log({width});
        console.log({height});
        console.log({color});
        console.log('ground siap di buat');
    }

    create() {
        board.fillStyle = this.color
        board.fillRect(0, 0, this.width, this.height)
    }
}