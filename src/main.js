import kaplay from "kaplay"
import "kaplay/global"

kaplay()

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

onClick(() => addKaboom(mousePos()))

onKeyPress("space", () => {
  player.jump()
})
