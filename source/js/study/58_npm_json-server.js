"use strict";

// 58 npm json-server

fetch('http://localhost:3000/menu') // db.json (для того щоб зайти посилання в терміналі "npx json-server db.json")
        .then(data => data.json())
        .then(res => console.log(res));

// install npm "npm init"
// install npm package locally for developer "npm i "name of package" --save-dev" 
// install npm package locally "npm i "name of package" --save" 
// install npm package globally "npm i "name of package" -g --save"

// show db.information "npx json-server db.json" 
