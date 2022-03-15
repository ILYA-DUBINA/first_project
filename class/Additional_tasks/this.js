let chanse = 0;
let chanseArray = [];
let maximumChances = 4;


const attacker = {
   archer: 30,
   footSoldier: 55,
   cavalry: 10,
   artillery: 3, 
   checkChancesToWin(defenderObject){
      if(this.archer < defender.archer){
         chanseArray[0] = chanse++;   
         chanseArray[1] = maximumChances;  
         if(this.footSoldier < defender.footSoldier){
            chanseArray[0] = chanse++;  
            chanseArray[1] = maximumChances;    
         } else {
            chanseArray[0] = chanse--;
            chanseArray[1] = maximumChances;          
         }  
      } else {
         chanseArray[0] = chanse--;
         chanseArray[1] = maximumChances;          
      }
      return chanseArray;
   },
   improveArmy(){      
      for( let k in attacker){
         attacker[k] + 5;         
      }      
   },
   attack(defender){
      chanse = this.checkChancesToWin(defender)[0];    
      if(chanse < 3){         
         alert(`Наши шансы равны ${chanse}/${maximumChances}. Необходимо укрепление!`);
         this.improveArmy();
      } else {
         alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
      }
   }
}

const defender = {
   archer: 33,
   footSoldier: 50,
   cavalry: 40,
   artillery: 10,
}

attacker.attack(defender);
attacker.attack(defender);
attacker.attack(defender);
