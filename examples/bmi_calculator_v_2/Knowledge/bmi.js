export function bmi(height,weight){
    return Math.floor(height/Math.pow(weight/100,2) * 100)/100;
}