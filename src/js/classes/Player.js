class Player {
    constructor(props){
        this.width = props.width
        this.height = props.height
        this.speed = props.speed
        this.color = props.color
        this.position = {
            x: props.position.x,
            y: props.position.y
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.heightJump = 100
        this.gravity = 0.5
    }

    //kinematic equation physic
    // heightJump = vi^2 / (2 * gravitasi)
    // vi = sqrt(2 * g * h)

    movement(direction) {
        console.log(this.speed);
        switch (direction) {
            case "ArrowUp":
                this.velocity.y = -Math.sqrt(2 * this.gravity * this.heightJump) + this.speed
                break;
            case "ArrowRight":
                this.velocity.x = 1 + this.speed
                break;
            case "ArrowLeft":
                this.velocity.x = -1 - this.speed
                break;
            default:
                this.velocity.y = 1
                
                break;
        }
    }

    update(){
        const bottomWall = canvas.height -this.height

        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (player.position.y > bottomWall) {
            this.position.y = bottomWall
        
        }
        if (enemy.position.y > bottomWall) {
            this.position.y = bottomWall
        
        }
    }
    create(){
        board.fillStyle = this.color
        board.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}