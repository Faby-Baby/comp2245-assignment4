document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("btn");

    btn.addEventListener("click", function(event) {
        event.preventDefault();

        fetch('http://localhost/comp2245-assignment4/superheroes.php')
        .then(response => response.text())
        .then(data => {

            alert(data);
            //let list = data.getElementsByTag("li");
            //console.log(list);
        })
        .catch(error => {
            alert(error);
        })
    })
})