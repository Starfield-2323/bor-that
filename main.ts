sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeLifeBy(-1)
})
browserEvents.onMouseMove(function (x, y) {
    mySprite2.setPosition(x, y)
    browserEvents.setCursorVisible(false)
})
let projectile_2: Sprite = null
let projectile_1: Sprite = null
let projectile: Sprite = null
let mySprite2: Sprite = null
game.showLongText("BOR THAT: by @s.t_a.r.z + @guiasdehei on discord", DialogLayout.Center)
game.showLongText("i got permission from gui so my testicles won't get ripped to shreds", DialogLayout.Full)
game.showLongText("CONTROLS - use your fucking mouse", DialogLayout.Full)
scene.setBackgroundColor(6)
let mySprite3 = sprites.create(img`
    . . . . b b b b . . . . . . . . 
    . b b b b 2 2 b b b b . . . . b 
    b b 2 2 2 2 2 2 2 2 b b . . b b 
    b 2 2 2 2 2 2 2 2 2 2 b . . b b 
    b 2 2 2 2 2 2 2 2 2 2 b b b b b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 b b b b b 
    b 2 2 2 2 2 2 2 2 2 2 b . . b b 
    b b 2 2 2 2 2 2 2 2 b b . . b b 
    . b b b b 2 2 b b b b . . . . b 
    . . . . b b b b . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite3.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
let mySprite4 = sprites.create(img`
    . . . . b b b b . . . . . . . . 
    . b b b b 2 2 b b b b . . . . b 
    b b 2 2 2 2 2 2 2 2 b b . . b b 
    b 2 2 2 2 2 2 2 2 2 2 b . . b b 
    b 2 2 2 2 2 2 2 2 2 2 b b b b b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 b b b b b 
    b 2 2 2 2 2 2 2 2 2 2 b . . b b 
    b b 2 2 2 2 2 2 2 2 b b . . b b 
    . b b b b 2 2 b b b b . . . . b 
    . . . . b b b b . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite4.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
let mySprite5 = sprites.create(img`
    . . . . b b b b . . . . . . . . 
    . b b b b 2 2 b b b b . . . . b 
    b b 2 2 2 2 2 2 2 2 b b . . b b 
    b 2 2 2 2 2 2 2 2 2 2 b . . b b 
    b 2 2 2 2 2 2 2 2 2 2 b b b b b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
    b 2 2 2 2 2 2 2 2 2 2 b b b b b 
    b 2 2 2 2 2 2 2 2 2 2 b . . b b 
    b b 2 2 2 2 2 2 2 2 b b . . b b 
    . b b b b 2 2 b b b b . . . . b 
    . . . . b b b b . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite5.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
mySprite2 = sprites.create(img`
    . . . 5 . . . 
    . . 5 c 5 . . 
    . 5 c c c 5 . 
    5 c c c c c 4 
    . 4 c c c 4 . 
    . . 4 c 4 . . 
    . . . 4 . . . 
    `, SpriteKind.Player)
info.setScore(0)
info.setLife(5)
forever(function () {
    spriteFx.faceToward(mySprite3, mySprite2)
    spriteFx.faceToward(mySprite4, mySprite2)
    spriteFx.faceToward(mySprite5, mySprite2)
})
game.onUpdateInterval(500, function () {
    projectile = sprites.create(img`
        f f 
        f f 
        `, SpriteKind.Projectile)
    projectile.setPosition(mySprite3.x, mySprite3.y)
    projectile_1 = sprites.create(img`
        f f 
        f f 
        `, SpriteKind.Projectile)
    projectile_1.setPosition(mySprite4.x, mySprite4.y)
    projectile_2 = sprites.create(img`
        f f 
        f f 
        `, SpriteKind.Projectile)
    projectile_2.setPosition(mySprite5.x, mySprite5.y)
    spriteutils.setVelocityAtAngle(projectile, spriteutils.angleFrom(mySprite3, mySprite2), 50)
    spriteutils.setVelocityAtAngle(projectile_1, spriteutils.angleFrom(mySprite4, mySprite2), 50)
    spriteutils.setVelocityAtAngle(projectile_2, spriteutils.angleFrom(mySprite5, mySprite2), 50)
})
game.onUpdateInterval(100, function () {
    info.changeScoreBy(1)
    if (info.score() <= 100) {
        info.changeScoreBy(1)
    } else if (info.score() <= 200) {
        info.changeScoreBy(3)
    } else if (info.score() <= 500) {
        info.changeScoreBy(5)
    } else if (info.score() <= 5000) {
        info.changeScoreBy(10)
    } else if (info.score() <= 10000) {
        info.changeScoreBy(30)
    } else if (info.score() <= 100000) {
        info.changeScoreBy(450)
    } else {
    	
    }
})
