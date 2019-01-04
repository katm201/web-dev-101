function load() {
    console.log('hello product team!');
    const button = document.getElementById('submit-btn');
    button.addEventListener('click', function () {
        const search = document.getElementById('search');
        const div = document.createElement('div');
        div.className = 'list';
        const text = document.createTextNode(search.value);
        const bucket = document.getElementById('list-bucket');
        div.appendChild(text);
        bucket.appendChild(div);
        search.value = '';
    })
}

window.onload = load();
