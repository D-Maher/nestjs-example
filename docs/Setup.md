## Project Setup
Below are the steps that were followed to get this project to the point of a running
server with a route that returns "Hello World!".

NestJS-specific steps are outlined in the
[NestJS docs](https://docs.nestjs.com/first-steps…).

> [!NOTE]
> This project uses `pnpm` as the package manager to explore an alternative to
> `npm` and `yarn`.

1. Install Node.js and `pnpm` via asdf (versions specified in .tool-versions)

   ```sh
   asdf install
   ```

2. If this is your first time using `pnpm` installed via asdf, you may need to
   run the following command to set up your `pnpm` environment

    ```sh
    pnpm setup
    ```

3. Install Nest CLI globally

    ```sh
    pnpm add -g @nestjs/cli
    ```

4. Run `nest new` command to generate new application
    > [!NOTE]
    > You do not need to run this to get the application running; that's
    > already been done to get us here. 🙂

    ```sh
    nest new --strict nestjs-example
    ```

    - Using `--strict` flag to use TypeScript’s
      [stricter](https://www.typescriptlang.org/tsconfig#strict) feature set
