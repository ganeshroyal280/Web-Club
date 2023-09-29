var y=1900;
if( ((y % 400 == 0) && ( y % 4 ==0)) || (y%100!=0))
{
    console.log(y,"is Leap Year");
}
else if((y%100 ==0) && (y%400 !=0))
{
    console.log(y,"is not a Leap Year");
}
else
{
    console.log(y,"is not a Leap Year");
}