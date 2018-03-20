
function createTable(size){
    var i = 0;
    var newArray;
    newArray = Array(size);
    while (i < size)
    {
        newArray[i] = Math.floor(Math.random() * 10);
        i++;
    }
    return (newArray);
}

function swap(tab, i, j)
{
    var tmp;

    tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp;
}

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


function partition(tab, first, last, pivot)
{
    var i = 0;
    var j = 0;
    swap(tab, last, pivot);
    while (i < last)
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


function choicePivot(first, last){
    return Math.floor(Math.random() * (last - first + 1)) + first;
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


var size = prompt("Hello, give me a size of table", "Your number here");
alert('The table will be generate randomly with a size of ' + size);
var newArray = createTable(size);

var copArray = newArray;
Start = new Date();
var len = newArray.length;
tri(newArray, len);
End = new Date();
alert('For a naive tri : found in ' + (End-Start) + " ms d'execution javascript \n" + newArray);

var len = copArray.length;
Start = new Date();
quicksort(copArray, 0, len);
End = new Date();
alert('For a quicksort : found in ' + (End-Start) + " ms d'execution javascript\n" + copArray);