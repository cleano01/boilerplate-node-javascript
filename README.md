# OCTOPUS-BOILERPLATE-NODE.JS-JAVASCRIPT

Simple API to style base code with Node with JavaScript.

## Requirements

---

- Node.js version:

  > NODE.JS >= 16.16.0

- Npm version:

  > NPM >= 8.18.0

- .Env:

  > Rename the "env.example" file to ".env" and enter the settings.

- .Settings.json.example:
  > Copy the content of file "settings.json.example" to your
  > "settings.json" in Visual Studio Code.

## Visual Studio Code

---

- Install the following plugins in your Visual Studio Code:

  > 1. Dracula Official -> Theme for Visual Studio Code.
  > 2. Material Icon theme -> Theme of icon for Visual Studio Code.
  > 3. EditorConfig -> Pattern style for code.
  > 4. ESLint -> Pattern style for code.
  > 5. Prettier -> Pattern style for code.

## Installation

---

- In the project directory, execute the command below:
  > npm i

## Execution

---

- In the project directory, execute the command below:

  > npm run dev

- In the project directory, execute (to prodution) the command below:

  > npm run start

- In the project directory, execute the command below to run the tests:
  > npm test

## Docker

---

- To run docker in local development mode, first be in the project directory, then run:

  > docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:16 bash

- After running docker, let's go inside the project in the container:

  > cd usr/src/app

- Inside the project in the container, we run the following command:

  > npm i

- After installing the project dependencies, we run the project, with the command:

  > npm run dev
