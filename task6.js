  
function reverseText(text){  
    let newsentence= "";      
     for (let i = text.length - 1; i >= 0; i--){ 
         newsentence+= text[i];    
     }
     return newsentence;
  }
  let text  = prompt('Metn daxil edin');
  alert(reverse(text));

