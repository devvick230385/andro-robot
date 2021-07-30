
let colors = ["","red","green","orange","pink","yellow","black","blue","whitesmoke","tomato","indigo","violet","grey","wheat","gold","purple"]
// let i = document.getElementById("i")
i = 0;
let butt = document.getElementById("butt");
butt.addEventListener("click",()=>{
    i = Number(i) + 1
    if(i == 8){
        let eyes = document.querySelectorAll(".eyes");
      eyes.forEach(eye =>{
          eye.style.background = "black";
      })
    }else{
        let eyes = document.querySelectorAll(".eyes");
        eyes.forEach(eye =>{
            eye.style.background = "#fff";
        })
    }
  if(i == 16){
      i = 0;

      
      
      let hands = document.querySelectorAll(".hands");
      hands.forEach(hand =>{
         hand.style.background = colors[i];
      })
      
      let legs = document.querySelectorAll(".legs");
      legs.forEach(leg =>{
          leg.style.background = colors[i];
      })
      
      
      
      let antennas = document.querySelectorAll(".antennas");
      antennas.forEach(antenna =>{
          antenna.style.background = colors[i];
      })
      
      let trunk = document.getElementById("trunk")
      trunk.style.background = colors[i];
  }else{
    let hands = document.querySelectorAll(".hands");
    hands.forEach(hand =>{
       hand.style.background = colors[i];
    })
    
    let legs = document.querySelectorAll(".legs");
    legs.forEach(leg =>{
        leg.style.background = colors[i];
    })
    
    
    
    let antennas = document.querySelectorAll(".antennas");
    antennas.forEach(antenna =>{
        antenna.style.background = colors[i];
    })
    
    let trunk = document.getElementById("trunk")
    trunk.style.background = colors[i];
  }

})