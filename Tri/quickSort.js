function choicePivot(first, last){
    return Math.floor(Math.random() * (last - first + 1)) + first;
}

function partition(tab, first, last, pivot)
{
    var i = 0;
    var j = 0;
    swap(tab, last, pivot);
    while (i < last - 1)
    {
        if (tab[i] <= tab[last])
        {
            swap(tab, i, j);
            j++; 
        }
        i++;
    }
    swap(tab, last, j);
    return (j);
}


function quicksort(tab, first, last)
{
    var pivot;

    if (first < last)
    {
        pivot = choicePivot(first, last);
        pivot = partition(tab, first, last, pivot);
        quicksort(tab, first, pivot - 1);
        quicksort(tab, pivot + 1, last);
    }
}
