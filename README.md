# datarock-tennis-assessment

Hey there! I spent a few hours coding this together. Hopefully it provides you with enough information to gauge my coding ability/style 😊

# If I Had More Time

- Fully flesh out unit tests (currently only a few written due to time limitations)
- Re-write everything to be pure functions (I decided to mutate to vastly simplify the API interface instead of passing and returning `match` constantly)
- Add libraries such as `prettier` to make the codebase look nicer

# Setup/Run Application

- Install Node.js version 20.9.0 (https://nodejs.org/en)
- `npm install` (install Node.js dependencies)
- `npm run start` (play a random match with 100 rounds)
- `npm run dev` (play a random match with 100 rounds, it'll just reload when you change code)
- `npm run test` (run tests)

# Initial Pre-code Planning

- Create Github repository
- Import `dius_tennis.md` to project
- Initialise project with basic Node.js template:
  - `npm init -y`
- Install relevant dependencies:
  - `npm install -D typescript ts-node ts-node-dev jest ts-jest @types/jest` (TypeScript + Jest)
- Initialise TypeScript:
  - `npx tsc --init`
- Initialise Jest:
  - `npx ts-jest config:init`
- Amend `package.json` to run main script + unit tests:
  - `npx ts-node-dev ./src/main.ts`
- Add basic `.gitignore`
- First commit!

# Example Random Round

```
~/c/p/datarock-tennis-assessment ❯❯❯ npm run dev

> datarock-tennis-assessment@1.0.0 dev
> npx ts-node-dev --respawn ./src/main.ts

[INFO] 09:23:31 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.3.3)
0-0, 15-0
0-0, 15-15
0-0, 30-15
0-0, 30-30
0-0, 45-30
1-0, 0-0
1-0, 15-0
1-0, 15-15
1-0, 15-30
1-0, 30-30
1-0, 45-30
2-0, 0-0
2-0, 0-15
2-0, 0-30
2-0, 15-30
2-0, 30-30
2-0, 45-30
3-0, 0-0
3-0, 0-15
3-0, 0-30
3-0, 0-45
3-0, 15-45
3-0, 30-45
3-0, Deuce
3-0, Advantage john
3-1, 0-0
3-1, 0-15
3-1, 0-30
3-1, 0-45
3-1, 15-45
3-2, 0-0
3-2, 15-0
3-2, 15-15
3-2, 30-15
3-2, 30-30
3-2, 45-30
4-2, 0-0
4-2, 0-15
4-2, 0-30
4-2, 0-45
4-2, 15-45
4-2, 30-45
4-3, 0-0
4-3, 0-15
4-3, 15-15
4-3, 30-15
4-3, 45-15
5-3, 0-0
5-3, 15-0
5-3, 30-0
5-3, 30-15
5-3, 45-15
5-3, 45-30
5-3, Deuce
5-3, Advantage john
6-3, 0-0
6-3, 0-15
6-3, 15-15
6-3, 15-30
6-3, 15-45
6-4, 0-0
6-4, 0-15
6-4, 0-30
6-4, 15-30
6-4, 15-45
6-4, 30-45
6-5, 0-0
6-5, 15-0
6-5, 15-15
6-5, 30-15
6-5, 30-30
6-5, 30-45
6-6, 0-0
6-6, 0-15
6-6, 15-15
6-6, 15-30
6-6, 15-45
6-7, 0-0
6-7, 0-15
6-7, 15-15
6-7, 15-30
6-7, 15-45
6-7, 30-45
0-0, 0-0
0-0, 15-0
0-0, 30-0
0-0, 30-15
0-0, 30-30
0-0, 30-45
0-0, Deuce
0-0, Advantage peter
0-1, 0-0
0-1, 15-0
0-1, 30-0
0-1, 30-15
0-1, 45-15
1-1, 0-0
1-1, 15-0
1-1, 15-15
1-1, 30-15
```