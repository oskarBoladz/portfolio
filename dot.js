p1=document.getElementById('AboutMe')
p2=document.getElementById('MyWork')
p3=document.getElementById('Contact')
dot=document.getElementById("Lcircle")

l1=document.getElementById('abL')
l2=document.getElementById('mwL')
l3=document.getElementById('cL')

// window.scrollY
//window.innerHeight
// dot.style.top=((window.scrollY/(body.offsetHeight-window.innerHeight*0.98))*window.innerHeight)+"px"
// queryString = window.location.search
//     console.log(queryString)
body=document.getElementsByTagName('body')[0]

clientLook=()=>{
    return window.scrollY+(window.innerHeight/2)
}

dot.style.top=(l1.offsetTop+l1.offsetHeight/2)+"px"
for (const child of l1.children) {
    child.style.transform="rotate(-0.25turn) translateY(0.45rem)"
}
body.onscroll = () => {
    // console.log(clientLook())
    if(clientLook()>=p1.offsetTop && clientLook()<=p1.offsetTop+p1.offsetHeight){
        dot.style.top=(l1.offsetTop+l1.offsetHeight/2)+"px"
        for (const child of l1.children) {
            child.style.transform="rotate(-0.25turn) translateY(0.45rem)"
        }
        for (const child of l2.children) {
            child.removeAttribute('style')
        }
        for (const child of l3.children) {
            child.removeAttribute('style')
        }
    }if(clientLook()>=p2.offsetTop && clientLook()<=p2.offsetTop+p2.offsetHeight){
        dot.style.top=(l2.offsetTop+l2.offsetHeight/2)+"px"
        for (const child of l2.children) {
            child.style.transform="rotate(-0.25turn) translateY(0.45rem)"
        }
        for (const child of l1.children) {
            child.removeAttribute('style')
        }
        for (const child of l3.children) {
            child.removeAttribute('style')
        }
    }if(clientLook()>=p3.offsetTop && clientLook()<=p3.offsetTop+p3.offsetHeight){
        dot.style.top=(l3.offsetTop+l3.offsetHeight/2)+"px"
        for (const child of l3.children) {
            child.style.transform="rotate(-0.25turn) translateY(0.45rem)"
        }
        for (const child of l2.children) {
            child.removeAttribute('style')
        }
        for (const child of l1.children) {
            child.removeAttribute('style')
        }
    }
};
