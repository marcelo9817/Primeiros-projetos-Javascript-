var elementos= document.querySelectorAll('.player-opitions div > img');
var playerOpt='';
var inimigoOpt='';

function validarVitoria(){
 
 let Vencedor=document.querySelector('.Vencedor')
    
  if(playerOpt=="pedra"){
    if(inimigoOpt=="pedra"){

        Vencedor.innerHTML="o jogo foi empatado"

    }else if(inimigoOpt=="papel"){

        Vencedor.innerHTML="O inimigo ganhou"

    }else if(inimigoOpt=="tesoura"){

        Vencedor.innerHTML="o player ganhou"
    }
  }

  if(playerOpt=="papel"){
    if(inimigoOpt=="papel"){

        Vencedor.innerHTML="o jogo foi empatado"

    }else if(inimigoOpt=="pedra"){

        Vencedor.innerHTML="O player ganhou"

    }else if(inimigoOpt=="tesoura"){

        Vencedor.innerHTML="o inimigo ganhou"
    }
  }

  if(playerOpt=="tesoura"){
    if(inimigoOpt=="tesoura"){

        Vencedor.innerHTML="o jogo foi empatado"

    }else if(inimigoOpt=="papel"){

        Vencedor.innerHTML="O player ganhou"

    }else if(inimigoOpt=="pedra"){

        Vencedor.innerHTML="o inimigo ganhou"
    }
  }
}


function resetinimigo(){
    const enemyoptions =  document.querySelectorAll('.enemy-options div');
    for(var i = 0;i<enemyoptions.length;i++){
       
    enemyoptions[i].childNodes[0].style.opacity = 0.3;
        
       }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);

   const enemyoptions =  document.querySelectorAll('.enemy-options div');
   resetinimigo();
   for(var i = 0;i<enemyoptions.length;i++){
    if(i == rand){
        enemyoptions[i].childNodes[0].style.opacity = 1;
        inimigoOpt = enemyoptions[i].childNodes[0].getAttribute('opt');
    }
   }

validarVitoria();
//lert(playerOpt);
//alert(inimigoOpt);


}

function restOpacityPlayer(){
    for(var i=0; i<elementos.length; i++){
    elementos[i].style.opacity=0.3;
      }
      
}

for(var i=0; i<elementos.length; i++){
  elementos[i].addEventListener('click',function(t){
    restOpacityPlayer();
    t.target.style.opacity=1;
    playerOpt = t.target.getAttribute('opt');

    inimigoJogar();
    // alert(playerOpt);
  });
}

