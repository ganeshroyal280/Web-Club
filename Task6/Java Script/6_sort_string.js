function sort(string)
{
    let arr = [];
    for(let i = 0; i < string.length; i++)
    {
        arr[i] = string[i];
    }

    console.log(arr);

    for(let i = 0; i < arr.length; i++)
    {
        let swapped = false;
        for(let j = 0; j < arr.length - 1; j++)
        {
            if(arr[j] > arr[j + 1])
            {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
                swapped = true;
            }
        }
        if(!swapped)
        {
            break;
        }
    }
    str = "";
    for(let i = 0; i < arr.length; i++)
    {
        str = str + arr[i];
    }
    return str;
}

console.log(sort("webmaster"));