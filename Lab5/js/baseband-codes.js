var position;

function getManchesterLevelEncoding(bits) {
  var result = [];
  for (var i = 0; i < bits.length; i++) {
    let symbol = "|--|--|";
    if (parseInt(bits[i].value) == 1) symbol = "|__|--|";
    if (
      parseInt(bits[i].value) == 1 &&
      i > 0 &&
      parseInt(bits[i - 1].value) == 1
    )
      symbol = "|__|--|";
    if (parseInt(bits[i].value) == 0) symbol = "|--|__|";
    if (
      parseInt(bits[i].value) == 0 &&
      i > 0 &&
      parseInt(bits[i - 1].value) == 0
    )
      symbol = "|--|__|";
    result.push(symbol);
  }
  return result;
}

function getNRZLevelEncoding(bits){
  var result = [];

  for (let index = 0; index < bits.length; index++) {
    let symbol = "|----|"
    if(parseInt(bits[index].value) == 0) symbol="|____|"
    result.push(symbol)
  }

  return result
}

function getNRZSpaceEncoding(bits){
  var result = [];
  var symbol = "|----|"

  for (let index = 0; index < bits.length; index++) {
    
    if(parseInt(bits[index].value)==0){
      if(symbol == "|____|") symbol="|----|"
      else symbol = "|____|"
    }
     result.push(symbol)
  }

  return result
}



function getNRZMarkEncoding(bits){
  var result = [];
  var symbol = "|----|"

  for (let index = 0; index < bits.length; index++) {
    
    if(parseInt(bits[index].value)==1){
      if(symbol == "|____|") symbol="|----|"
      else symbol = "|____|"
    }
     result.push(symbol)
  }

  return result
}

function getRZEncoding(bits){
  var result = [];
  var symbol = "|----|"

  for (let index = 0; index < bits.length; index++) {
    
    if(parseInt(bits[index].value)==1){
      symbol="|--|__|"
      
    }
    else{
      symbol = "|____|"
    }
     result.push(symbol)
  }

  return result
}

function getBiphaseMarkEncoding(bits) {
  var result = [];
  var symbol = "|----|"
  for (let index = 0; index < bits.length; index++) {
    
    if (parseInt(bits[index].value) == 1 && index == 0) symbol = "|--|__|";
    if (parseInt(bits[index].value) == 0 && index == 0){
      symbol = "|----|"
    }
    if (parseInt(bits[index].value) == 1 && index>0 && parseInt(bits[index-1].value) == 1 && symbol == "|--|__|")
         {symbol = "|--|__|"
        }
    if (parseInt(bits[index].value) == 1 && index>0 && parseInt(bits[index-1].value) == 1 && symbol == "|__|--|"){
        symbol = "|__|--|"
         }
    if (parseInt(bits[index].value) == 1 && index>0 && parseInt(bits[index-1].value) == 0 && symbol == "|____|"){
          symbol = "|--|__|"
    }
    if (parseInt(bits[index].value) == 1 && index>0 && parseInt(bits[index-1].value) == 0 && symbol == "|----|"){
      symbol = "|__|--|"
    }
    
   
    if(parseInt(bits[index].value) == 0 && index>0 && parseInt(bits[index-1].value) == 1 && symbol == "|--|__|"){
       symbol = "|----|"
    }
    if (parseInt(bits[index].value) == 0 && index>0 && parseInt(bits[index-1].value) == 1 && symbol == "|__|--|"){
      symbol = "|____|"
       }
       if (parseInt(bits[index].value) == 0 && index>0 && parseInt(bits[index-1].value) == 0 && symbol == "|____|"){
        symbol = "|----|"
  }
  if (parseInt(bits[index].value) == 0 && index>0 && parseInt(bits[index-1].value) == 0 && symbol == "|----|"){
    symbol = "|____|"
  }
      
  
    result.push(symbol);
  }
  return result;
}

function getBiphaseSpaceEncoding(bits) {
  var result = [];
  var symbol = "|----|"
  for (let index = 0; index < bits.length; index++) {
    
    if (parseInt(bits[index].value) == 0 && index == 0) symbol = "|--|__|";
    if (parseInt(bits[index].value) == 1 && index == 0){
      symbol = "|----|"
    }
    if (parseInt(bits[index].value) == 0 && index>0 && parseInt(bits[index-1].value) == 0 && symbol == "|--|__|")
         {symbol = "|--|__|"
        }
    if (parseInt(bits[index].value) == 0 && index>0 && parseInt(bits[index-1].value) == 0 && symbol == "|__|--|"){
        symbol = "|__|--|"
         }
    if (parseInt(bits[index].value) == 0 && index>0 && parseInt(bits[index-1].value) == 1 && symbol == "|____|"){
          symbol = "|--|__|"
    }
    if (parseInt(bits[index].value) == 0 && index>0 && parseInt(bits[index-1].value) == 1 && symbol == "|----|"){
      symbol = "|__|--|"
    }
    
   
    if(parseInt(bits[index].value) == 1 && index>0 && parseInt(bits[index-1].value) == 0 && symbol == "|--|__|"){
       symbol = "|----|"
    }
    if (parseInt(bits[index].value) == 1 && index>0 && parseInt(bits[index-1].value) == 0 && symbol == "|__|--|"){
      symbol = "|____|"
       }
       if (parseInt(bits[index].value) == 1 && index>0 && parseInt(bits[index-1].value) == 1 && symbol == "|____|"){
        symbol = "|----|"
  }
  if (parseInt(bits[index].value) == 1 && index>0 && parseInt(bits[index-1].value) == 1 && symbol == "|----|"){
    symbol = "|____|"
  }
      
  
    result.push(symbol);
  }
  return result;
}

//pentru tensiunile negative aleg sa utilizez |....|

function findPreviousBitOne(bits,position){
  
   var ok = 0; //nu am gasit elementul
   var newPoz = 0;
   var index2 = 0;
  for (let index = 0; index < bits.length; index++) {
        index2 = position-1;
        while(index2 >=0 && ok ==0){
          if(index2 == position){
            newPoz = index2;
            ok = 1;
          }
          index2 -- ;
        }

  }
  return index2;

}

function getAMIEncoding(bits){
  var result = [];
  var symbol = "|----|"
  var symbol1 = "|----|"   //variabila in care retinem fiecare simbol ai bitilor de 1
  var poz = 0;

  for (let index = 0; index < bits.length; index++) {
    
    if(parseInt(bits[index].value)==1 && index ==0){ //daca pe prima pozitie avem un bit de 1
      symbol = "|----|"
      symbol1 = symbol
    }
    if(parseInt(bits[index].value)==0){
      symbol = "|____|"
    }
    else{
      if(index > 0 && parseInt(bits[index].value)==1 && symbol == "|----|"){
        symbol = '|....|'
        symbol1 = symbol1

      }
      else{
        if(index > 0 && parseInt(bits[index-1].value)==1 && symbol == "|....|"){
          symbol = "|----|"
          symbol1 = Symbol;
        }
        else{
            if(parseInt(bits[index-1].value)==0){
               poz = findPreviousBitOne(bits,index)   //caut bitul de 1 de dinaintea bitului de 1 la pozitia index si il retin in variabila poz
               if(poz == 0){
                 console.log("Nu exista niciun bit de 1 inainte de acest element");
               }
               else{
                 if(symbol1 == "|----|"){
                   symbol = "|....|"
                 }
                 else{
                   Symbol = "|----|"
                 }
               }
            }
        }
      }
    }
     result.push(symbol)
  }

  return result
}
