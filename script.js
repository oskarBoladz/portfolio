ctb=document.getElementById("option-work")
document.getElementById("l2").style.transform="translateY(-100svh)"
ctb.onclick=()=>{
    // console.log( document.getElementById("lr"))
    document.getElementById("l2").style.transform="translateY(0svh)"
    document.getElementById("l").style.filter="blur(100px)"
    // document.getElementById("cf").style.gridRow="1/5"
    document.getElementById("cf").style.filter="blur(100px)"
    document.getElementById("sb").style.filter="blur(100px)"
    document.getElementById("rwp").style.transform="translateX(0px)"
}



ctb=document.getElementById("option-home")
ctb.onclick=()=>{
    // console.log( document.getElementById("lr"))
    document.getElementById("l2").style.transform="translateY(-100svh)"
    document.getElementById("l").style.filter="blur(0px)"
    // document.getElementById("cf").style.gridRow="1/4"
    document.getElementById("rwp").style.transform="translateX(50vw)"
    document.getElementById("cf").style.filter="blur(0px)"
    document.getElementById("sb").style.filter="blur(0px)"
}