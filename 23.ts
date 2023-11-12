let car: string = "subaru";

console.log("Is car == \"subaru\"? I predict True.");
//Test01 for true
if (car=="subaru") {
    console.log(car == 'subaru');
}
//Test02 for true
console.log("Is car.charAt(0)==\"s\" ? I predict True");
if(car.charAt(0)=="s") {
    console.log(car.charAt(0)=='s');
}
//Test03 for true
console.log("Is car.length>4 ? I predict True");
if(car.length>4) {
    console.log(car.length>4);
}

//Test04 for true
console.log("Is car.indexOf(\"u\")>0 ? I predict True");
if(car.indexOf("u")>0) {
    console.log(car.indexOf("u")>0);
}

//Test05 for true
console.log("Is car.substring(0,3)==\"sub\" ? I predict True");
if(car.substring(0,3)=="sub") {
    console.log(car.substring(0,3)=="sub");
}

//Test01 for false
console.log("Is car == \"suzuki\"? I predict False.");
if (car=="suzuki") 
    console.log(car=="suzuki");
else 
    console.log(car=="suzuki");


//Test02 for False
console.log("Is car.charAt(0)==\"n\" ? I predict False");
if(car.charAt(0)=="n") 
    console.log(car.charAt(0)=="n");
else 
    console.log(car.charAt(0)=="n");

//Test03 for False
console.log("Is car.length>8 ? I predict False");
if(car.length>8) 
    console.log(car.length>8);
else 
    console.log(car.length>8);

//Test04 for False
console.log("Is car.indexOf(\"u\")<0 ? I predict False");
if(car.indexOf("u")<0) 
    console.log(car.indexOf("u")<0);
else 
    console.log(car.indexOf("u")<0);

//Test05 for False
console.log("Is car.substring(0,4)==\"sub\" ? I predict False");
if(car.substring(0,4)=="sub") 
    console.log(car.substring(0,4)=="sub");
else 
    console.log(car.substring(0,4)=="sub");
