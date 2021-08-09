## compile ts file
cd ./basics/00-compilation/
npm i
.\node_modules\.bin\tsc .\using-ts.ts
### compile in watch mode
.\node_modules\.bin\tsc .\using-ts.ts --watch
.\node_modules\.bin\tsc .\using-ts.ts -w

## run a lite server
* npm i lite-server -D
* add line to package.json `"scripts": { "start": "lite-server" },`
* npm run start
