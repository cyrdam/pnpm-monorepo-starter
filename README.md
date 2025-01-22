# pnpm monorepo starter

This is a simple monorepo starter template for [pnpm](https://pnpm.io/).

This monorepo has a basic structure with multiple react apps as examples.

## Requirements

Check out [package.json](./package.json) file for the engines settings.

## Installation

Expected that `pnpm` is installed globally.

```shell
pnpm install
```

## Running packages

```shell
pnpm run dev
```

This will run a [recursive run](https://pnpm.io/cli/run#--recursive--r) script within the packages folder to serve the webpack servers with react apps.

## Further additions (optional)

As a simple starter, this template can have multiple extensions included that might be helpful with projects:

- git commit linting
- version control of packages
- automatic release documentation

This might come in the future into this repository.
