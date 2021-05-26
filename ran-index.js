let arr = [
    { id: 1, priority: 'low', title: 'buy groceries' },
    { id: 2, priority: 'high', title: 'get milk' }
]

let lastId = 2;

window.onload = showall;

function showall() {
    let list = document.getElementById('list');
    list.innerHTML = '';

    for (element of arr) {
        let li = document.createElement('li');
        li.innerHTML = element.title;
        li.classList = element.priority;
        list.appendChild(li);
    }
}

function add() {
    let text = document.getElementById("add-text").value;
    let priority = document.getElementById("add-priority").value;

    arr.push({ id: lastId, priority: priority, title: text });
    lastId++;
    
    showall();
}

function remove() {
    let text = document.getElementById("remove-text").value;
    for (i in arr) {
        if (arr[i].title == text) {
            arr.splice(i, 1);
        }
    }

    showall();
}

function search() {
    let text = document.getElementById("search-text").value;

    let toShow = [];
    
    for (element of arr) {
        if (element.title == text) {
            toShow.push(element);
        }
    }

    let list = document.getElementById('list');
    list.innerHTML = '';

    for (element of toShow) {
        let li = document.createElement('li');
        li.innerHTML = element.title;
        list.appendChild(li);
    }
}

function searchpriority() {
    let priority = document.getElementById("search-priority").value;

    let toShow = [];
    
    for (element of arr) {
        if (element.priority == priority) {
            toShow.push(element);
        }
    }

    let list = document.getElementById('list');
    list.innerHTML = '';

    for (element of toShow) {
        let li = document.createElement('li');
        li.innerHTML = element.title;
        li.classList = element.priority;
        list.appendChild(li);
    }
}