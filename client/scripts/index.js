function addString(value) {
    const div = document.createElement('div');
    div.className = 'list';
    const text = document.createTextNode(value);
    const bucket = document.getElementById('list-bucket');
    div.appendChild(text);
    bucket.appendChild(div);
}

function loadStrings() {
    fetch('/storage', { method: 'GET' })
        .then((response) => response.json())
        .then((values) => values.forEach(addString));
}

function load() {
    console.log('hello product team!');
    // load strings saved by the server
    loadStrings();

    // add button to the DOM
    const button = document.getElementById('submit-btn');

    // add click handler to button
    button.addEventListener('click', function () {
        // find the value from the search bar
        const search = document.getElementById('search');

        // create a request and send it to the server, using that value
        const request = new Request(`/storage?${search.value}`, { method: 'POST' });
        fetch(request).then(() => console.log('string added!'));

        // create a new div with a class, add the text to it, then add it to the bottom of the list
        addString(search.value);

        // reset the search bar
        search.value = '';
    });
}

window.onload = load();
