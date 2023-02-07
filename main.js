onload = init;

function init() {
    let desc = $(".desc");
    let text = desc.innerText;
    let div = document.createElement("div");
    text.split("").forEach((ch, idx) => {
        let span = document.createElement("span");
        span.innerText = ch;
        div.appendChild(span);
        span.style.display = "inline-block";
        span.style.animation = `1s ${0.1 * idx}s ease-in-out infinite alternate hover`;
    });
    desc.innerHTML = "";
    desc.appendChild(div);
}

function $(el) {
    return document.querySelector(el);
}

onresize = () => {
    document.body.style.backgroundSize = "cover";
    console.log("hello");
    if (innerWidth > innerHeight) {
    } else {
        // document.body.style.backgroundSize = "";
    }
}