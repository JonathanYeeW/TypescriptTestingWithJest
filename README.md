## Testing with Jest in a Typescript Project

The purpose of this project is to provide a barebones example of how to get started with Jest Testing in a TypeScript project folliwng the "Using Babel" section of the [jestjs.io](https://jestjs.io/docs/getting-started#using-babel) documentation.

### 1. Create your project and setup the `package.json`
   `yarn init -y`

### 2. install your dependencies

`yarn add jest typescript`

### 3. install your dev-dependencies

`yarn add --dev babel-jest @babel/core @babel/preset-env @types/jest @babel/preset-typescript`

### 4. setup your tsconfig.json. Make sure the following keys are set:

`yarn tsc --init`

- `"typeRoots": ["./src/types", "node_modules/@types"]`
- `"types": ["jest"]`

### 5. initialize your jest.config.js 
You can select the default for all questions except "Which provider should be used to instrument code for coverage", select bable. Note that the default is v8.

`yarn jest --init`

### 6. create your babel.config.js
copy/paste contents from [documentation](https://jestjs.io/docs/getting-started#using-typescript-via-babel)

`touch babel.config.js` 

### 7. Run your tests!

`yarn test`
