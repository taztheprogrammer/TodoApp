const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const i3 = document.getElementById("i3");
const i4 = document.getElementById("i4");

function Class(name) {
    this.name = name;
}

const c1 = new Class("cse214");
const c2 = new Class("cse215");
const c3 = new Class("ams301");
const c4 = new Class("che131");

const items = [i1, i2, i3, i4]
const classes = [c1, c2, c3, c4]

for (let i = 0; i < 4; i++) {
    items[i].innerHTML = classes[i].name;
}