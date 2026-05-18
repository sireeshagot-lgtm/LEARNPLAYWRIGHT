let a = 10;
console.log(++a + a);//22
console.log(a);//11


//A=++a= a+1 = 10+1=11
//B=a=11
//A+B=11+11=22

let b = 10;
console.log(++b + ++b);//23
console.log(b);//12

//A=++b=b+1=10+1=11
//B=++b=b+1=11+1=12
//A+B=11+12=23


let c = 5;
console.log(c++ + ++c - --c + c-- + ++c);//19
console.log(c);//6