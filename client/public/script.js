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

// const divElement = function (content) {

//     let result = "";
//         if (content.price > 1000) {
//             result += `${content.name}<br />`;
//         }

//     return `<div>${result}</div>`;
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


// // TASK 3 - Group by Vendor Name

const divElement = function (content) {

    
    for (let product of content) {

        const section = document.createElement("section");
        document.body.append(section);

        const h2 = document.createElement("h2");
        h2.innerHTML = `${product.vendor.name}`;
        section.append(h2);

        const divAlbums = document.createElement("div");
        divAlbums.setAttribute("class", "albums");
        section.append(divAlbums);

        const divAlbum = document.createElement("div");
        divAlbum.setAttribute("class", "album");
        // todo: details here
        divAlbum.innerHTML = `Id: ${product.id}, <h2>${product.name}</h2>`;
        divAlbums.append(divAlbum);

        const divTracks = document.createElement("div");
        divTracks.setAttribute("class", "tracks");
        divAlbum.append(divTracks);

        for (let track of product.details) {

            const divTrack = document.createElement("div");
            divTrack.setAttribute("class", "track");
            let time = millisecondsToTime(track.milliseconds);
            divTrack.innerHTML = `Id: <b>${track.track_id}</b>, Name: <b>${track.name}</b> Track length: ${time}`;
            divTracks.append(divTrack);

        }

    }

    let result = "";
    if (content.price > 1000) {
        result += `${content.name}<br />`;
    }

    return `<div>${result}</div>`;
}

function millisecondsToTime(milli) {
    var seconds = Math.floor((milli / 1000) % 60);
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var minutes = Math.floor((milli / (60 * 1000)) % 60);
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    var hours = Math.floor((milli / (60 * 60 * 1000)) % 24);
    if (hours < 10) {
        hours = "0" + hours
    }

    return hours + ":" + minutes + ":" + seconds;
}

const loadEvent = function () {

    // Write your JavaScript code after this line
    products.sort((a, b) => (a.price > b.price) ? 1 : -1);

    let rootElement = document.getElementById("root");


        rootElement.insertAdjacentHTML("beforeend", divElement(products));


    // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);