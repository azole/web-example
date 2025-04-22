# Backend

- Develop by Express and NodeJS
  - node:22
- Server runs at port 3002

## Deploy Steps

Runtime: node:22

````bash

npm i

cp .env.example .env

node src/server.js
```

## API

- GET /
- GET /api/1.0/certifications
- GET /api/1.0/courses
````

## Lint & Prettier

```bash
./node_modules/.bin/eslint . --config eslint.config.js

./node_modules/.bin/prettier --write .
```

## Test

```bash
./node_modules/.bin/mocha "tests/**/*.js" --reporter spec

# Generate HTML reporter
./node_modules/.bin/mocha --reporter mochawesome

# Generate Code Coverage Report
./node_modules/.bin/nyc npm run test
./node_modules/.bin/nyc --reporter=html ./node_modules/.bin/mocha --reporter mochawesome
```
