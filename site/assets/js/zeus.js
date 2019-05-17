
const loaded = function() {
    console.log("'Meow,' says the Mighty Zeus!")

    let name = document.getElementById("zeus-name");

    setInterval(function() { 
            if (name.style.display === "none") {
                name.style.display = "inline";
            } else {
                name.style.display = "none";
            }
        }, 
        1000
    );
}