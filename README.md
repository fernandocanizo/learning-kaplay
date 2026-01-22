# Chrome Dino Clone

Except it's not a Dino, and I haven't even check the game before to see
mechanics to clone.

No, this is the code from [Kaplayjs
tutorial](https://kaplayjs.com/docs/guides/creating_your_first_game/), with some
slight changes I did as I went through the tutorial.

Currently done in 25 commits, but I may add some more changes in the future,
when I learn more.

## Folder structure

- `src` - source code for your kaplay project
- `dist` - distribution folder, contains your index.html, built js bundle and static assets


## Development

```sh
$ pnpm run dev
```

will start a dev server at Vite's configured port (probably http://localhost:3001).

## Distribution

```sh
$ pnpm run build
```

will build your js files into `dist/`

```sh
$ pnpm run zip
```

will build your game and package into a .zip file, you can upload to your server or itch.io / newground etc.
