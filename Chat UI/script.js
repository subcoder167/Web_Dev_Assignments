function myFunction() {
    document.querySelector(".prod_details").style.display = "block";
    document.querySelector(".prod_details").style.opacity = 1;
}

document.querySelector(".back").addEventListener('click', function() {
    if(document.querySelector(".prod_details").style.display == "block"){
        document.querySelector(".prod_details").style.display = "none";
    }
})


//read more function


document.getElementById("desc").addEventListener('click', function() {
    if(document.getElementById("desc").innerHTML == "...read more"){
        document.querySelector(".read_more").style.height = "max-content";
        document.getElementById("read_more").style.whiteSpace = "normal";
        document.getElementById("read_more").style.overflow = "visible";
        document.getElementById("read_more").style.textOverflow = "unset";
        document.getElementById("desc").innerHTML = "...read less";
    }
    else{
        document.querySelector(".read_more").style.height = "40px";
        document.getElementById("read_more").style.whiteSpace = "wrap";
        document.getElementById("read_more").style.overflow = "hidden";
        document.getElementById("read_more").style.textOverflow = "ellipsis";
        document.getElementById("desc").innerHTML = "...read more";
    }
})