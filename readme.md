# init pnpm

pnpm init

# init git

git init

# .gitignore

node_modules
dist
build

# folder structure

Create an apps and packages folder within pnpm-mono

# create workspace

pnpm-workspace.yaml

## pnpm-workspace.yaml

packages:

# executable/launchable applications

    - 'apps/\*'

# all packages in subdirs of packages/ and components/

    - 'packages/\*'

## create react app

go to apps folder and create your app, we will do it with
npx create-react-app my-react-app --template typescript

Usually, in a monorepo you want to run commands from the root of the repository to not have to constantly switch between folders.
pnpm --filter <package-name> <command>

make sure you add have "name": "my-react-app"

## start your app

pnpm --filter my-react-app start

now you should be able to see your app up and running

# Create a Shared UI library

cd packages
create shared-ui folder

go to shared-ui folder and
initialize your package with
pnpm init
and lets ajust it a bit, make sure you have name, and you can also set it as private since you will not publish it to npm
{
"private": true,
"name": "shared-ui",
"description": "",
"main": "dist/index.js",
"scripts": {
"build": "rimraf dist && tsc",
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC",
"dependencies": {
"react": "^18.2.0"
},
"devDependencies": {
"rimraf": "^5.0.1"
}
}

## initialize your react library

return to your root folder and run
pnpm add --filter shared-ui react
pnpm add typescript -D -w

## create your first component

Our first component will be a very simple Button component. So let's create one:
// packages/shared-ui/Button.tsx
import React from "react";

export function Button(props: any) {
return <button onClick={() => props.onClick()}>{props.children}</button>;
}
export default Button;

// packages/shared-ui/index.tsx
export \* from './Button';

## build your library

To create the desired compilation output create a packages/shared-ui/tsconfig.json file with the following configuration.
{
"compilerOptions": {
"jsx": "react-jsx",
"allowJs": true,
"esModuleInterop": true,
"allowSyntheticDefaultImports": true,
"module": "commonjs",
"outDir": "./dist",
"target": "es5",
"lib": ["es2015", "dom"]
},
"include": ["."],
"exclude": ["dist", "node_modules", "**/*.spec.ts"]
}

add rimraf to build your library on windows
pnpm add --filter shared-ui rimraf -D
change:
"scripts": {
"build": "rimraf dist && tsc"
}

## build command:

pnpm --filter shared-ui build

## add workspace to your app

pnpm add shared-ui --filter my-react-app --workspace

## remove eslint from your app

pnpm --filter my-react-app uninstall eslint
and remove eslintConfig from your package.json

## Add prettier in the root

pnpm i prettier -D -w

- .prettierrc

## Add eslint in the root

pnpm add -w -D eslint

- .eslintrc.json
- .eslintrc-base.json

## start your app

pnpm --filter my-react-app start

your app is now up and running.

go ahead and add Button to your app.tsx
