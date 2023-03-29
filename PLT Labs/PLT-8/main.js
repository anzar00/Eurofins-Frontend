// Write a program to display the 1st , 2nd , and 4th multiple of 7 which gives 
// the remainder 1 when divided by 2,3,4,5 and 6.

var n = 7;
var count = 1;

while (count <= 4) {
  if (n % 2 == 1 && n % 3 == 1 && n % 4 == 1 && n % 5 == 1 && n % 6 == 1) {
    if(count != 3)
    {
        console.log(n);
    }
    count++;
  }
  n += 7;
}