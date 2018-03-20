function tri(tab, length)
{
    var i = 0;
    var j;
    var min;
    while (i < length - 1)
    {
        min = i;
        j = i + 1;
        while (j < length)
        {
            if (tab[j] < tab[min])
                min = j;
            j++;
        }
        if (min != i)
            swap(tab, i, min);
        i++;
    }
}
