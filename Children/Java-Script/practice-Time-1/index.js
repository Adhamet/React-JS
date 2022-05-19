let length = document.getElementById("len-calc");
let volume = document.getElementById("vol-calc");
let mass = document.getElementById("mass-calc");
let metersToFoot, footToMeter, litersToGallons, gallonsToLiters, kiloGramsToPounds, poundsToKiloGrams;
let input = 20;
metersToFoot = input * 3.281;
footToMeter = input / 3.281;
litersToGallons = input / 3.785;
gallonsToLiters = input * 3.785;
kiloGramsToPounds = input * 2.205;
poundsToKiloGrams = input / 2.205;

length.textContent = input + " meters = " + metersToFoot + " feet || " + input
                     + " feet = " + footToMeter + " meters";
volume.textContent = input + " liters = " + litersToGallons + " gallons || " + input
                     + " gallons = " + gallonsToLiters + " liters";                       
mass.textContent = input + " kilos = " + kiloGramsToPounds + " pounds || " + input   
                     + " pounds = " + poundsToKiloGrams + " kilos";
