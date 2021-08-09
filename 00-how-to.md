## compile ts file
cd ./basics/00-compilation/
npm i
.\node_modules\.bin\tsc .\using-ts.ts
### compile in watch mode
.\node_modules\.bin\tsc .\using-ts.ts --watch
    OR .\node_modules\.bin\tsc .\using-ts.ts -w

## compile the entire project
tsc --init
`tsc` OR `tsc --watch` OR `tsc -w`

## Include files
"include": []
"files": []

## Exclude files
"node_modules" would be excluded the default
"*.dev.ts" would be excluded with specified ending
"**/*.dev.ts" would be excluded with specified ending anywhere

## run a lite server
* npm i lite-server -D
* add line to package.json `"scripts": { "start": "lite-server" },`
* npm run start
