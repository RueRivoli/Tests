
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

function data_set(set) {
    var tab;

    set == 0 ? tab = createTable(10000) : tab = createTable(50000);
    alert('The following table will be sorted:\n ' + tab);
    treat_data(tab);
}

function custom_table() {
    var valid = false;
    var ar;
    while (valid == false)  {
        table = prompt("Hello, Please type a table of integers separated by ',' ");
        if (table != null && table.trim().length > 0)  {
            valid = true;
        }
        if (valid)  {
            alert('The following table will be sorted:\n ' + table);
            ar = table.split(",");
            treat_data(ar);
        }
    }
}
