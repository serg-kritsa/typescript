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

## Compilation options
[https://www.typescriptlang.org/docs/handbook/tsconfig-json.html]
[https://www.typescriptlang.org/docs/handbook/compiler-options.html]
compilerOptions.target: es5 to support execution in old browsers 
"lib": [ "DOM", "DOM.Iterable", "ES6", "ScriptHost" ],     default libs if not specified
"sourceMap": true,      useful to simplify debugging
"outDir": "./dist",     folder for compiled files      
"rootDir": "./src",     folder w/ ts files to be compiled
"removeComments": true, useful to make output smaller        
"noEmit": true,         don't generate js files. useful for finding errors
"noEmitOnError": true,  no files will be emitted if there is error

## run a lite server
* npm i lite-server -D
* add line to package.json `"scripts": { "start": "lite-server" },`
* npm run start
