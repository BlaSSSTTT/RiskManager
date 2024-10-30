function createCells() {
    // Отримати всі рядки в межах div з id req-analis-content1
    var rows = document.querySelectorAll('#req-analis-content1 table tr');

    rows.forEach(function (row, index) {
        // Пропустимо заголовок
        if (index === 0) return;

        // Додати комірки "per1" до "per10" для кожного рядка
        for (var i = 1; i <= 10; i++) {
            var td = document.createElement('td');
            var input = document.createElement('input');
            input.type = 'text';
            input.style.width = '100%';
            input.style.boxSizing = 'border-box';
            input.style.fontSize = '13px';
            input.style.textAlign = 'center';
            input.style.verticalAlign = 'middle';
            input.setAttribute('min', 0);
            input.setAttribute('max', 1);
            input.addEventListener('input', function (event) {
                var value = parseFloat(event.target.value);
                if (isNaN(value) || value < 0 || value > 1) {
                    event.target.classList.add('invalid-input');
                    setTimeout(()=>{
                        alert('Значення має бути в межах [0;1]!');
                    }, 100)
                } else {
                    event.target.classList.remove('invalid-input');
                }
            });
            td.appendChild(input);
            row.appendChild(td);
        }

        // Додати комірку "ER" з input для кожного рядка
        var td = document.createElement('td');
        row.appendChild(td);
    });

    fillRandomNumbers();
}


function fillRandomNumbers() {
    // Отримати дані з Local Storage за ключем 'yourKey'
    var jsonData = localStorage.getItem('yourKey');

    // Перевірити, чи є дані в Local Storage
    if (jsonData) {
        fillFromLocalStorage();
        return;
    }

    // Отримати всі комірки "per1" до "per10" в межах div з id req-analis-content1
    var cells = document.querySelectorAll('#req-analis-content1 table td input');

    cells.forEach(function (input) {
        // Заповнити input випадковим числом з точністю до двох знаків після коми
        var randomNumber = (Math.random() * (1 - 0) + 0).toFixed(2);
        input.value = randomNumber;
        input.classList.remove("invalid-input");
    });

    saveToLocalStorage();
}

function saveToLocalStorage() {
    // Отримати всі комірки "per1" до "per10" в межах div з id req-analis-content1
    var cells = document.querySelectorAll('#req-analis-content1 table td input');

    // Створити масив об'єктів для зберігання значень
    var dataArray = [];

    // Ділити комірки на групи по 10 і створювати окремий об'єкт для кожної групи
    for (var i = 0; i < cells.length; i += 10) {
        var groupData = {};

        // Записати значення в об'єкт за ключем, наприклад, "per1", "per2", і так далі
        for (var j = 0; j < 10; j++) {
            groupData['per' + (j + 1)] = cells[i + j].value;
        }

        // Додати об'єкт до масиву
        dataArray.push(groupData);
    }

    // Перетворити масив у рядок JSON
    var jsonData = JSON.stringify(dataArray);

    // Зберегти у Local Storage
    localStorage.setItem('yourKey', jsonData);
}

function fillFromLocalStorage() {
    // Отримати дані з Local Storage за ключем 'yourKey'
    var jsonData = localStorage.getItem('yourKey');
    // Перетворити рядок JSON у масив об'єктів
    var dataArray = JSON.parse(jsonData);

    // Отримати всі рядки в межах div з id req-monitoring-content1
    var rows = document.querySelectorAll('#req-analis-content1 table tr');

    // Пройтися по рядках (починаючи з індексу 1, оскільки індекс 0 - це заголовок)
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];

        // Отримати комірки "per1" до "per10" для поточного рядка
        var cells = row.querySelectorAll('td input');

        // Отримати дані з поточного об'єкту масиву
        var rowData = dataArray[i - 1];

        // Пройтися по комірках і заповнити їх значеннями з об'єкту rowData
        for (var j = 0; j < cells.length; j++) {
            // Створити ключ для отримання значення з об'єкту rowData, наприклад, "per1", "per2", і так далі
            var key = 'per' + (j + 1);

            // Записати значення в комірку
            cells[j].value = rowData[key];
        }
    }
}

function calculateER() {
    // Отримати всі рядки в межах div з id req-analis-content1
    var rows = document.querySelectorAll('#req-analis-content1 table tr');

    rows.forEach(function(row, index) {
        // Пропустимо заголовок
        if (index === 0) return;

        var cells = row.querySelectorAll('td input'); // Отримати всі елементи input в межах рядка
        
        var sum = 0;
        cells.forEach(function (cell) {
            // Перевірити, чи є значення числовим
            var cellValue = parseFloat(cell.value);
            if (!isNaN(cellValue)) {
                sum += cellValue;
            }
        });

        // Обчислити середнє значення
        var average = sum / 10;

        // Знайти комірку "ER" та записати в неї середнє значення
        var erCell = row.querySelector('td:nth-child(13)');
        erCell.textContent = average.toFixed(2); // Фіксуємо до двох знаків після коми
    });
}


function reset() {
    localStorage.clear();
    fillRandomNumbers();
    calculateER();
    copyERValues();
    calculateAndSetVRER();
    findMinVRER();
    findMaxVRER();
    setPriorityIntervals();
    setPriorityValues();
}

