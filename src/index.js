module.exports = function getZerosCount(number, base) {
  var divBase = {},
      divNumber = {},
      tmp = 0;
primeNum(base, divBase);

for(var key in divBase)
{
  divNumber[key] = 0;
  for(var i = 1; i < number; i++)
  {
    if((tmp = Math.floor(number/ Math.pow(+key, i))) !==0){
      divNumber[key]+= tmp;
    } else break;
  }
}
var result = [];
for(var key in divBase)
{
result.push(Math.floor(divNumber[key]/divBase[key]));
}
return Math.min.apply(null,result);

}
  // your implementation
function primeNum(base, objBase = {})
{
 for(var i = 2; i<= base; i++)
 {
   while(base % i === 0){
    objBase[i] ? objBase[i]++ : objBase[i] = 1;
    base/= i;
   }
 }
}
