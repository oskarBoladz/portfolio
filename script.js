ctb=document.getElementById("option-work")
ctb.onclick=()=>{
    // console.log( document.getElementById("lr"))
    document.getElementById("lr").style.transform="translateY(0%)"
    document.getElementById("l").style.filter="blur(100px)"
}



ctb=document.getElementById("option-home")
ctb.onclick=()=>{
    // console.log( document.getElementById("lr"))
    document.getElementById("lr").style.transform="translateY(-120%)"
    document.getElementById("l").style.filter="blur(0px)"
}