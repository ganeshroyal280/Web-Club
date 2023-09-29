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

function days_to_christmas(day, month, year)
{
    let is_leap = is_leap_year(year);
    let total_days;
    if(is_leap)
    {
        total_days = 366;
    }
    else
    {
        total_days = 365;
    }

    let current_day;

    let temp_current_day = (month - 1) * 31;
    let small_months;

    if(month % 2 == 0)
    {
        small_months = month / 2;
      
    }
    else
    {
        small_months = Math.floor(month / 2);
    }

    if(month > 8)
    {
        small_months--;
    }

    temp_current_day -= small_months;
    if(month > 2)
    {
        if(is_leap)
        {
            temp_current_day -= 1;
        }
        else
        {
            temp_current_day -= 2;
        }
    }

    current_day = day + temp_current_day;

    let days_left = total_days - 7 - current_day;

    return days_left
}

let days_left = days_to_christmas(26, 9, 2023);
if(days_left < 0)
{
    console.log("christmas is passed");
}
else
{
    console.log(days_left + " days left for christmas");
}