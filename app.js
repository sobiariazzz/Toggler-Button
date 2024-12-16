const btn = document.getElementById('btn');

btn.onclick = () => {
    if (document.body.style.backgroundColor === "white") {
       document.body.style.backgroundColor  = "black";
       document.body.style.color = "white";
       btn.textContent = "click to light mood";
    }
    else{
        document.body.style.backgroundColor = "white";
        btn.textContent = "click to dark mood";
        document.body.style.color = "black";
    }
}

