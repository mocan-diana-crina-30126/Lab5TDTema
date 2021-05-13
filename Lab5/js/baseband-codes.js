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
    if (parseInt(bits[index].value) == 1 && symbol == "|--|__|")
         {symbol = "|--|__|"
        }
    if (parseInt(bits[index].value) == 1 && symbol == "|__|--|"){
        symbol = "|__|--|"
         }
    if (parseInt(bits[index].value) == 1 && symbol == "|____|"){
          symbol = "|--|__|"
    }
    if (parseInt(bits[index].value) == 1 && symbol == "|----|"){
      symbol = "|__|--|"
    }
    
    if (parseInt(bits[index].value) == 0 && index==0){
      symbol = "|----|"
    }
    if(parseInt(bits[index].value) == 0 && symbol == "|--|__|"){
       symbol = "|----|"
    }
    if (parseInt(bits[index].value) == 0 && symbol == "|__|--|"){
      symbol = "|____|"
       }
       if (parseInt(bits[index].value) == 0 && symbol == "|____|"){
        symbol = "|----|"
  }
  if (parseInt(bits[index].value) == 0 && symbol == "|----|"){
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

      if(parseInt(bits[index].value)==0){
        if(symbol == "|____|"){
          symbol = "|--|__|"
        }
        
          if(symbol == "|----|"){
            symbol = "|__|--|"
          }
         
        }
        else{
          if(symbol == "|--|__|"){
            symbol = "|----|"
          }
          else{
            symbol = "|____|"
          }
        }
        result.push(symbol)
  }
 
  return result
}
