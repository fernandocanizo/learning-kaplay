import kaplay from "kaplay"
import "kaplay/global"

kaplay({
  debugKey: "d"
})

loadRoot("./") // A good idea for Itch.io publishing later
loadSprite("bean", "sprites/bean.png")

setGravity(1600)

const player = add([sprite("bean"), pos(30, 600), area(), body()])

add([
  // platform
  rect(width(), 48),
  pos(0, height() - 48),
  outline(4),
  area(),
  body({ isStatic: true }),
  color(127, 200, 255),
])

loop(1, () => {
  const h = [30, 60, 90]
  const index = Math.floor(Math.random() * h.length)

  add([
    "tree",
    rect(48, h[index]),
    area(),
    body({ isStatic: true }),
    outline(4),
    pos(width(), height() - 48),
    anchor("botleft"),
    color(255, 180, 255),
    move(LEFT, 480),
  ])
})

onKeyPress("space", () => {
  if (player.isGrounded()) {
    player.jump()
  }
})

player.onCollide("tree", () => {
  addKaboom(player.pos)
  shake()
})
