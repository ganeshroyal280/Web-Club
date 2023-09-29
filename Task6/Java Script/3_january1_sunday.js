function is_leap_year(year)
{
    if(year % 4 == 0 && year % 100 != 0)
    {
        return true;
    }
    if(year % 100 == 0 && year % 400 == 0)
    {
        return true;
    }
    return false;
}

let first_jan_2013 = 2;

let current_day = first_jan_2013;

for(let i = 2014; i <= 2050; i++)
{
    if(is_leap_year(i - 1))
    {
        current_day = (current_day + 2) % 7;
    }
    else
    {
        current_day = (current_day + 1) % 7;
    }

    if(current_day === 0)
    {
        console.log(i + " january 1 is sunday");
    }
}