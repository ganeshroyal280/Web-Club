let array = [1, 2, 3, 4, 5];

let length = array.length;

let max = Number.MIN_VALUE;;
let second_max;
let min = Number.MAX_VALUE;
let second_min;

for(let i = 0; i < length; i++)
{
    if(array[i] > max)
    {
        second_max = max;
        max = array[i];
    }
    else if(array[i] > second_max)
    {
        second_max = array[i];
    }

    if(array[i] < min)
    {
        second_min = min;
        min = array[i];
    }
    else if(array[i] < second_min)
    {
        second_min = array[i];
    }
}

console.log("second max = " + second_max + " second min = " + second_min);