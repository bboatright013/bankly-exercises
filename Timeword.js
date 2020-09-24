/** recieve string ie('06:10' or " 13:45")
 * return six ten am and one forty five pm
 * 
 * two-digit hour 00-23
 * 0-11 are am, 12-23 are pm
 * two-digit minute 00-59
 */

 function changeTime(stringOfTime){
     let yourTime = {};
     let stringHour = stringOfTime.slice(0,2);
     let tensMinutes = stringOfTime.slice(3,4);
     let onesMinutes = stringOfTime.slice(4,5);
     if(stringHour == "00" && tensMinutes == "0" && onesMinutes == "0"){
         yourTime.zeroHour = "midnight, the witching hour";
         return yourTime.zeroHour;
     } else if(stringHour == "12" && tensMinutes == "0" && onesMinutes == "0"){
        yourTime.zeroHour = "high noon";
        return yourTime.zeroHour;
     }
     yourTime.cycle = convertCycle(parseInt(stringHour));
     yourTime.hour = convertHour(parseInt(stringHour));
     yourTime.minutes = convertMinutes(parseInt(tensMinutes), parseInt(onesMinutes));
     yourTime.fullTime = yourTime.hour + ' ' + yourTime.minutes + ' ' + yourTime.cycle;
     return yourTime.fullTime;
    
 }

function convertCycle(intTime){
    if(intTime < 11 && intTime >= 0){
        return "am"

    } else {
       return "pm"
    }
}

 function convertHour(intTime){
     let x = intTime;
     if(x == 0 || x == 12){
         return "twelve";
     }
     if( x == 1 || x == 13){
         return "one";
     }
     if( x == 2 || x == 14){
        return "two";
    }
    if( x == 3 || x == 15){
        return "three";
    }
    if( x == 4 || x == 16){
        return "four";
    }
    if( x == 5 || x == 17){
        return "five";
    }
    if( x == 6 || x == 18){
        return "six";
    }
    if( x == 7 || x == 19){
        return "seven";
    }
    if( x == 8 || x == 20){
        return "eight";
    }
    if( x == 9 || x == 21){
        return "nine";
    }
    if( x == 10 || x == 22){
        return "ten";
    }
    if( x == 11 || x == 23){
        return "eleven";
    }
 }

 function convertMinutes(tens, ones) {
     let tensSpot;
     let onesSpot;
     if(tens == 0 && ones == 0){
         return "o'clock";
     }
     if( tens == 1){
         if(ones == 0){
             return "ten";
         }
         if(ones == 1){
            return "eleven";
        }
        if(ones == 2){
            return "twelve";
        }
        if(ones == 3){
            return "thirteen";
        }
        if(ones == 4){
            return "fourteen";
        }
        if(ones == 5){
            return "fifteen";
        }
        if(ones == 6){
            return "sixteen";
        }
        if(ones == 7){
            return "seventeen";
        }
        if(ones == 8){
            return "eighteen";
        }
        if(ones == 9){
            return "nineteen";
        }
     };
    if( tens == 2){
       tensSpot = "twenty"
    }
    if( tens == 3){
        tensSpot = "thirty"
    }
    if( tens == 4){
        tensSpot = "fourty"
    }
    if( tens == 5){
        tensSpot = "fifty"
    }
    if( tens == 6){
        tensSpot = "sixty"
    }
    if( tens == 7){
        tensSpot = "seventy"
    }
    if( tens == 8){
        tensSpot = "eighty"
    }
    if( tens == 9){
        tensSpot = "ninety"
    }
    if(ones == 0){
        onesSpot = "";
    }
    if(ones == 1){
        onesSpot =  "one";
    }
    if(ones == 2){
        onesSpot =  "two";
    }
    if(ones == 3){
        onesSpot =  "three";
    }
    if(ones == 4){
        onesSpot =  "four";
    }
    if(ones == 5){
        onesSpot =  "five";
    }
    if(ones == 6){
        onesSpot =  "six";
    }
    if(ones == 7){
        onesSpot =  "seven";
    }
    if(ones == 8){
        onesSpot =  "eight";
    }
    if(ones == 9){
        onesSpot =  "nine";
    }
    let fullStringTime = tensSpot + " " + onesSpot;
    return fullStringTime.trim();
    
 }

 module.exports = changeTime;