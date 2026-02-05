import kaplay from "kaplay"
import "kaplay/global"

kaplay({
  debugKey: "d"
})

loadRoot("./") // A good idea for Itch.io publishing later
loadSprite("bean", "sprites/bean.png")

scene("home", () => {
  add([
    text("Press ENTER to play"),
    pos(center()),
    anchor("center"),
    scale(2),
    color(0, 0, 255),
  ])

  onKeyPress("enter", () => go("game"))
})

scene("game", () => {
  setGravity(1600)
  let score = 0

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

  const scoreLabel = add([
    text(`Score: ${score}`),
    pos(width() - 400, 24),
    color(255, 0, 0),
  ])

  const spawnTree = () => {
    add([
      "tree",
      rect(48, rand(30, 90)),
      area(),
      body({ isStatic: true }),
      outline(4),
      pos(width(), height() - 48),
      anchor("botleft"),
      color(255, 180, 255),
      move(LEFT, 480),
    ])

    wait(rand(0.5, 1.5), () => {
      spawnTree()
    })
  }

  spawnTree()

  onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump()
    }
  })

  player.onCollide("tree", () => {
    addKaboom(player.pos)
    shake()
    wait(0.5, () => {
      go("gameOver", score)
    })
  })

  onUpdate(() => {
    score += 1
    scoreLabel.text = String(score)
  })
})

scene("gameOver", (score: number) => {
  add([
    text("Game Over"),
    pos(center()),
    scale(2),
    anchor("center"),
    color(255, 0, 0),
  ])

  add([
    text(`Final score: ${score}`),
    pos(width() / 2, height() / 2 + 80),
    scale(2),
    anchor("center"),
    color(255, 0, 0),
  ])

  onKeyPress("enter", () => go("game"))
})

go("home")
