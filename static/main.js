document.getElementById("submit-btn").onclick = function () {

    const name = document.getElementById("fname").value + " " + document.getElementById("lname").value

    location.href = "/welcome/"+name;
};