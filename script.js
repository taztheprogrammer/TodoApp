// const i1 = document.getElementById("i1");
// const i2 = document.getElementById("i2");
// const i3 = document.getElementById("i3");
// const i4 = document.getElementById("i4");

// function Class(name) {
//     this.name = name;
// }

// const c1 = new Class("cse214");
// const c2 = new Class("cse215");
// const c3 = new Class("ams301");
// const c4 = new Class("che131");

// const items = [i1, i2, i3, i4]
// const classes = [c1, c2, c3, c4]

// for (let i = 0; i < 4; i++) {
//     items[i].innerHTML = classes[i].name;
// }

function item(task, description) {
    this.task = task;
    this.description = description;
}

//remember to check what I should actually this [var, const]
const item1 = new item("cse 214", "study for class today");
const item2 = new item("cse 215", "begin hw, study yesterday");
const item3 = new item("che hw", "dynamic module");
const item4 = new item("ams hw", "homework");


const itemholder = document.getElementById('itemHolder');
const items = [item1, item2, item3, item4];
// console.log(items[1].task);


function render() {
    for(let num = 0; num < items.length; num++) {
        const task = document.createElement('span');
        task.innerHTML = items[num].task;
        task.classList.add('task');

        const description = document.createElement('span')
        description.innerHTML = items[num].description;
        description.classList.add('description')

        const item = document.createElement('div');
        item.classList.add('item');

        item.appendChild(task);
        item.appendChild(description);

        itemholder.appendChild(item);
    }
}

// render();