
function to_upper_word(word)
{
    let w = "";
    w = w + word[0].toUpperCase();
    for(let i = 1; i < word.length; i++)
    {
        w = w + word[i];
    }
    return w;
}

function to_upper_string(string)
{
    let arr = string.split(' ');
    let upper_str = "";
    for(let i = 0; i < arr.length; i++)
    {
        upper_str = upper_str + to_upper_word(arr[i]) + " ";
    }
    return upper_str;
}

console.log(to_upper_string("the quick brown fox jumps over the lazy dog"));