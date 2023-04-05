document.addEventListener("DOMContentLoaded", function () {
    let first = 5 > 4;
    let second = "apple" > "pineapple";
    let third = "2" > "12";
    let fourth = undefined == null;
    let fiveth = undefined === null;
    let sixth = null == "\n0\n";
    let seventh = null === +"\n0\n";
    document.getElementById("first").innerHTML = first;
    document.getElementById("second").innerHTML = second;
    document.getElementById("third").innerHTML = third;
    document.getElementById("fourth").innerHTML = fourth;
    document.getElementById("fiveth").innerHTML = fiveth;
    document.getElementById("sixth").innerHTML = sixth;
    document.getElementById("seventh").innerHTML = seventh;
});
