const events = require('events');
const coolors = require('coolors');
const emoji = require("node-emoji");

const eventemiter = new events.EventEmitter();

const fantasma = function (params,emoji) {
    console.log(coolors(`Vi al Fastasma ${params} ${emoji}`,"red") );
}

const moustruo = function (params, emoji) {
    console.log(coolors(`Vi al Moustruo ${params} ${emoji}`,"blue"));
}

//Asigno los eventos

eventemiter.on("vifantasma",fantasma);

eventemiter.on("vimoustruo",moustruo);

eventemiter.emit("vifantasma","Gasparin", emoji.get("coffee"));

eventemiter.emit("vimoustruo","Hulk");

eventemiter.emit("vimoustruo","Dracula");


