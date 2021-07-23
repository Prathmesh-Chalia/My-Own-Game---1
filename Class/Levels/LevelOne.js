class LevelOne {

    constructor () {


    }

    start () {

        startButton.visible = false
        Player.visible = true
        Player.x = width / 2
        Player.y = height / 2
        if ( keyDown( LEFT_ARROW ) ) {

            Player.x -= 4

        }

        if ( keyDown( RIGHT_ARROW ) ) {

            Player.x += 4

        }

        if ( keyDown( UP_ARROW ) ) {

            Player.x -= 4

        }

        if ( keyDown( DOWN_ARROW ) ) {

            Player.x += 4

        }

    }

}