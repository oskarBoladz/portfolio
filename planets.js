canva = document.getElementById('planetCanva')
canva.width=document.getElementById("canvaAM").offsetWidth
canva.height=document.getElementById("canvaAM").offsetHeight
ctx=canva.getContext('2d')
const CANVAS_HEIGHT=canva.height
const CANVAS_WIDTH=canva.width

const WIDTH=canva.width/2

const HEIGHT=canva.height/2

const CENTER={x:WIDTH,y:HEIGHT}


cleanScrean=()=>{ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)}

class planet{
    constructor(size,color,sunDistance,speed,){
    this.size=size//rozmiar
    this.color=color//kolor
    this.sunDistance=sunDistance//dystans od sloncaca
    this.speed=speed//prędkość
  
    this.x=CENTER.x
    this.y=CENTER.y-sunDistance
  
    this.angle=0

    }
  }
  planets=[]
  
  sun=new planet(26,"#2a2a2a",0,0)
  earth=new planet(10,"#1a1a1a",100,1)
  mars=new planet(16,"#1a1a1a",200,0.5)
  jupiter=new planet(5,"#1a1a1a",320,0.2)
  planets.push(earth)
  planets.push(mars)
  planets.push(jupiter)
  planets.push(sun)
rotationPlanet=(array)=>{
    for(i=0;i<array.length;i++){
      x=array[i].x
      y=array[i].y
      array[i].angle+=array[i].speed
      angle=array[i].angle
    //   if((array[i].sunDistance>20)&&(document.getElementById('boxAttraction').checked)){//(array[i].sunDistance>20)&&(!attractionBool.checked)
    //     //array[i].sunDistance-=1-((((array[0].mass-array[i].mass)/1000)+FAST)) //sunPlanets[0].mass-array[i].mass
    //     //console.log(1-(((sunPlanets[0].mass-array[i].mass)/1000)+0.99))//fast
    //     //r-=1-((mS-mP)/100)
    //     array[i].sunDistance-=((array[0].mass*array[i].mass)/array[i].sunDistance/1000)*galaxySpeed[galaxySpeedIndex]
    //     console.log((array[0].mass*array[i].mass)/array[i].sunDistance)
    //   }
      radius=array[i].sunDistance
      x = radius * Math.sin(Math.PI * 2 * angle / 360);
      y = radius * Math.cos(Math.PI * 2 * angle / 360);
      array[i].x=x+CENTER.x
      array[i].y=CENTER.y-y
    }
  }

  renderPlanet=(array)=>{
    for(i=0;i<array.length;i++){
        if(array[i].sunDistance!=0){
            ctx.beginPath();
            ctx.arc(CENTER.x, CENTER.y, array[i].sunDistance, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();
        }
        
      ctx.beginPath();
      ctx.fillStyle=array[i].color
      ctx.strokeStyle = '#2a2a2a';
      ctx.lineWidth = 4;
      ctx.arc(array[i].x, array[i].y, array[i].size, 0, 2 * Math.PI);
    //   if(nowTrigerd.value==i){}
      ctx.stroke();
      ctx.fill();
    //   console.log(ctx.strokeStyle)
    }
  }


  update=()=>{

    cleanScrean()

    rotationPlanet(planets)
    renderPlanet(planets)

    requestAnimationFrame(update)
  }
  update()