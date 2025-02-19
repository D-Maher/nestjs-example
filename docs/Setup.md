## Project Setup
Below are the steps that were followed to get this project to the point of a running
server with a route that returns "Hello World!". You do not need to run `nest
new` to get the application running; that's already been done to get us here. 🙂

NestJS-specific steps are outlined in the
[NestJS docs](https://docs.nestjs.com/first-steps…).

> [!NOTE]
> This project uses `pnpm` as the package manager to explore an alternative to
> `npm` and `yarn`.

1. Installed latest version of Node.js via asdf

    ```sh
    asdf install nodejs 22.14.0
    ```

2. Installed pnpm

    ```sh
    npm i -g pnpm
    ```

3. Installed Nest CLI

    ```sh
    npm i -g @nestjs/cli
    ```

4. Ran `nest new` command to generate new application

    ```sh
    nest new --strict nestjs-example
    ```

    - Using `--strict` flag to use TypeScript’s
      [stricter](https://www.typescriptlang.org/tsconfig#strict) feature set
