function createTable(size){
    var i = 0;
    var newArray;
    newArray = Array(size);
    while (i < size)
    {
        newArray[i] = Math.floor(Math.random() * 1000);
        i++;
    }
    return (newArray);
}