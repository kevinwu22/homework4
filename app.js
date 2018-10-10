const xhr = new XMLHttpRequest(); 

xhr.onreadystatechange = function () {
    if (xhr.readystate == 4) {
        if (xhr.status == 200) {
            var result = JSON.parse(xhr.responseText);
            console.log(result);
        }
    }
}

xhr.open('get', 'https://jsonplaceholder.typicode.com/users', true);
    
xhr.send();

    