const thumbs = document.querySelectorAll(".thumb");
console.log(thumbs);


function print(a,b) {
    thumbs.forEach(element => {
        console.log(element);
        console.log(element.getAttribute("width"));
        console.log(element.getAttribute("height"));
        console.log(element.width);
        console.log(element.height);
        if (element.width > element.height) {
            const aspect = element.width / element.height;
            element.setAttribute("style", `height: 100%; aspect-ratio: ${aspect}`);
        }

    }); 
    console.log("__");
    console.log(a);
    console.log(b);
}


window.addEventListener('load', print);