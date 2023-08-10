# evm-runners-web

### Overview

The web app for the [EVM Runners](https://github.com/ethernautdao/evm-runners-cli) game.
You can get instructions on how to install the game and see the different leaderboards.

It is [live here](https://evmr.sh).

### Run this application yourself

1. Create `env` and then provide a valid auth token. Must be admin to access leadearboard data.

```
$ cp .env.example .env
```

2. Install dependencies

```
$ npm install
```

3. Run as dev

```
$ npm run dev
```

4. Open `http://localhost:3000`

### Run tests

Tests were implemented using `cypress` and can be ran using `npm test`.
