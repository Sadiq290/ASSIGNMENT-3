// 1 no problem

function kilometerToMeter(kilo){
    if(kilo >= 0){
        var meter = kilo * 1000;
        return meter ;
    }
    else{
        return "Distance can not be a word or negative"
    }
}


// 2 no problem

function budgetCalculator(watch,phone,laptop){
    // the decimel input will convert into integer
    watch  = parseInt(watch);
    phone  = parseInt(phone);
    laptop = parseInt(laptop);
 
    if(watch>=0 && phone>=0 && laptop>=0){
        var watchPrize =  watch * 50  ;
        var phonePrize =  phone * 100 ;
        var laptopPrize = laptop* 500  ;
        var total = watchPrize + laptopPrize + phonePrize;
    }
    else{
       return "Your input has negative value or you miss a value."
    }
    return total;
 }


// 3 no problem

function hotelCost(days){
    //the decimel input will convert into integer
    var days = parseInt(days);
    var finalCost ;
    if(days<1){
       return "You should at least stay for one day";
    }
    else if(days>0 && days<=10){
       var finalCost = days *100;
    }
    else if(days>10 && days<=20){
       var firstPart = 10 * 100;
       var remaining = days - 10;
       var secondPart = remaining * 80 ; 
       var finalCost = firstPart + secondPart;    
    }
    else{
       var firstPart  = 10 * 100;
       var secondPart = 10 * 80; 
       var remaining  = days - 20;
       var thirdPart = remaining * 50; 
       var finalCost = firstPart + secondPart + thirdPart;    
    }
    return finalCost;
 }
  


// 4 no problem

function megaFriend(array){
    var length = 0;
    var biggest;

    for (var i = 0; i < array.length; i++) {
       if (array[i].length > length) {
          length = array[i].length;
          biggest = array[i];
       }
    }
    return biggest;
}
