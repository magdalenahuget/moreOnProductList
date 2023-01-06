import { products } from '/data.js';

// // TASK 1 - Rearrange by price

// const divElement = function (content) {

//     return `<div>${content.name}</div>`;
// }


// const loadEvent = function () {

//     // Write your JavaScript code after this line
//     products.sort((a, b) => (a.price > b.price) ? 1 : -1);

//     let rootElement = document.getElementById("root");

//     products.forEach((product) => {
//         rootElement.insertAdjacentHTML("beforeend", divElement(product));
//     })

//     // Write your JavaScript code before this line

// }

// window.addEventListener("load", loadEvent);





// // TASK 2 - Remove cheap ones

const divElement = function (content) {

    let result = "";
        if (content.price > 1000) {
            result += `${content.name}<br />`;
        }

    return `<div>${result}</div>`;
}


const loadEvent = function () {

    // Write your JavaScript code after this line
    products.sort((a, b) => (a.price > b.price) ? 1 : -1);

    let rootElement = document.getElementById("root");

    products.forEach((product) => {
        rootElement.insertAdjacentHTML("beforeend", divElement(product));
    })

    // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);