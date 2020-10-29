namespace SpriteKind {
    export const balloon = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.destroy()
    balloon = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 8 . . . . . . . 
        . . . . . . 8 8 9 8 8 . . . . . 
        . . . . . 8 9 9 9 9 9 8 . . . . 
        . . . . 8 9 9 8 8 8 9 9 8 . . . 
        . . . . 8 9 8 8 9 9 8 9 8 . . . 
        . . . 8 9 9 8 8 8 9 8 9 9 8 . . 
        . . . . 8 9 8 8 8 8 8 9 8 . . . 
        . . . . 8 9 9 8 8 8 9 9 8 . . . 
        . . . . . 8 9 9 9 9 9 8 . . . . 
        . . . . . . 8 8 9 8 8 . . . . . 
        . . . . . . . . 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.balloon)
    balloon.setKind(SpriteKind.balloon)
    balloon.x += -50
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.vx = 40
    balloon.vy = -50
    balloon.ay = 40
})
sprites.onOverlap(SpriteKind.balloon, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
    for (let index = 0; index < 50; index++) {
        xDirection = randint(0, 50)
        yDirection = randint(0, 50)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . . 9 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, sprite, xDirection, yDirection)
        projectile.setFlag(SpriteFlag.Ghost, true)
        projectile.ay = 40
    }
    sprite.destroy()
})
let projectile: Sprite = null
let yDirection = 0
let xDirection = 0
let balloon: Sprite = null
scene.setBackgroundColor(13)
let block = sprites.create(img`
    ..............ffffff....
    .............f2feeeeff..
    ............f222feeeeff.
    .......cc...feeeeffeeef.
    .......cdc.fe2222eeffff.
    .......cddcf2effff222ef.
    ........cddcffeeefffffff
    .........cddce44fbe44eff
    ..........cdceddf14d4eef
    ..........cccdeddd4eeef.
    ...........edd4e44eeff..
    ............ee442222f...
    .............f2e2222f...
    .............f224444f...
    ..............ffffff....
    ................fff.....
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
block.x += 50
balloon = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 8 . . . . . . . 
    . . . . . . 8 8 9 8 8 . . . . . 
    . . . . . 8 9 9 9 9 9 8 . . . . 
    . . . . 8 9 9 8 8 8 9 9 8 . . . 
    . . . . 8 9 8 8 9 9 8 9 8 . . . 
    . . . 8 9 9 8 8 8 9 8 9 9 8 . . 
    . . . . 8 9 8 8 8 8 8 9 8 . . . 
    . . . . 8 9 9 8 8 8 9 9 8 . . . 
    . . . . . 8 9 9 9 9 9 8 . . . . 
    . . . . . . 8 8 9 8 8 . . . . . 
    . . . . . . . . 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.balloon)
balloon.setKind(SpriteKind.balloon)
balloon.x += -50
