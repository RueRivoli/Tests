function toInt(tab)
{
    var i = 0;
    while (tab[i])
    {
        tab[i] = parseInt(tab[i]);
        if (isNaN(tab[i]))
            return (0);
        i++;
    }
}

function data_set(set) {
    var tab;

    set == 0 ? tab = createTable(10000) : tab = createTable(50000);
    alert('The following table will be sorted:\n ' + tab);
    treat_data(tab);
}

function treat_data(newArray) {
    
    var copArray = newArray.slice();
    var len = newArray.length;
    Start1 = new Date();
    tri(newArray, len);
    End1 = new Date();
    

    var len = copArray.length - 1;
    Start2 = new Date();
    quicksort(copArray, 0, len);
    End2 = new Date();

    alert('For a naive tri : found in ' + (End1-Start1) + " ms d'execution javascript \n" + newArray);
    alert('For a quicksort : found in ' + (End2-Start2) + " ms d'execution javascript \n" + copArray); 
}

function setTab()
{
    var ttab;
    var k;
    var len;
    var sum;

    ttab = tabs_1000;
    k = 0;
    sum = 0;
    while (k < 10){
        len = ttab[k].length;
        Start = new Date();
        tri(ttab[k], len);
        End = new Date();
        sum = sum + (End - Start);
        k++;
    }
    alert('Naive sort has finished in ' + sum + ' ms');

    k = 0;
    sum = 0;

    while (k < 10){
        len = ttab[k].length - 1;
        Start = new Date();
        quicksort(ttab[k], 0, len);
        End = new Date();
        sum = sum + (End - Start); 
        k++;
    }
    alert('Quicksort has finished in ' + sum + ' ms');
}

function custom_table() {
    var valid = false;
    var value;
    while (valid == false)  {
        value = prompt("Hello, Please type a table of integers separated by ',' ");
        if (value != null && value.trim().length > 0)  {
            valid = true;
        }
        var split = value.split(",");
        if (toInt(split) === 0)
            valid = false;
        if (valid)  {
            alert('The following table will be sorted:\n ' + split);
            treat_data(split);
        }
    }
}
