const url = "https://www.flatlooker.com/appartements.json?page=";
    
        function request_page(i) {
            return fetch(url + i)
            .then(
            function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }
            response.json().then(function(data) {
                show_page(data);
            });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
    
        function show_page(data) {
            var i = 0;
            while (data[i] && i < 10)
            {
                document.getElementById('id'+ i).innerHTML = data[i]['id'];
                document.getElementById('lat' + i).innerHTML = data[i]['latitude'];
                document.getElementById('long' + i).innerHTML = data[i]['longitude'];
                document.getElementById('title' + i).innerHTML = data[i]['title'];
                document.getElementById('rent' + i).innerHTML = data[i]['rent'];
                document.getElementById('isrented' + i).innerHTML = data[i]['isrented'];
                document.getElementById('h_360' + i).innerHTML = data[i]['has_360'];
                console.log(data[i]['photo_360']);
                document.getElementById('photo_360' + i).src = data[i]['photo_360'];
                i++;
            }
        }
                