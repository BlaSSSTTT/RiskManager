function createCells() {
    // Отримати всі рядки в межах div з id req-analis-content1
    var rows = document.querySelectorAll('#req-monitoring-content1 table tr');

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
            td.appendChild(input);
            row.appendChild(td);
        }

        // Додати комірку "ER" з input для кожного рядка
        var td = document.createElement('td');
        row.appendChild(td);
    });
    fillFromLocalStorage();
}

function fillFromLocalStorage() {
    // Отримати дані з Local Storage за ключем 'yourKey'
    var jsonData = localStorage.getItem('yourKey');

    // Перевірити, чи є дані в Local Storage
    if (!jsonData) {
        alert('Перейдіть на вкладку "Аналіз ризиків" та заповніть всі дані');
        return;
    }
    // Перетворити рядок JSON у масив об'єктів
    var dataArray = JSON.parse(jsonData);

    // Отримати всі рядки в межах div з id req-monitoring-content1
    var rows = document.querySelectorAll('#req-monitoring-content1 table tr');

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
    randomlyModifyData();
}   

function randomlyModifyData() {
    // Отримати всі рядки в межах div з id req-monitoring-content1
    var rows = document.querySelectorAll('#req-monitoring-content1 table tr');

    // Пройтися по кожному рядку (починаючи з індексу 1, оскільки індекс 0 - це заголовок)
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];

        // Отримати кількість комірок, які треба змінити (від 5 до 10)
        var numberOfCellsToModify = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

        // Створити масив усіх індексів комірок у рядку і перемішати його
        var allCellIndexes = Array.from({ length: row.cells.length }, (_, index) => index);
        allCellIndexes = shuffleArray(allCellIndexes);

        // Пройтися по випадково вибраних комірках і змінити їх значення
        for (var j = 0; j < numberOfCellsToModify && j < row.cells.length; j++) {
            var cellIndex = allCellIndexes[j];
            var cell = row.cells[cellIndex].querySelector('input');

            if (cell) {
                // Зменшити значення в комірці на випадковий відсоток (5-10%)
                var currentValue = parseFloat(cell.value);
                var decreasePercentage = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
                var newValue = currentValue - (currentValue * decreasePercentage / 100);

                // Обмежити значення в межах [0, 1]
                newValue = Math.max(0, Math.min(1, newValue));

                // Записати нове значення в комірку
                cell.value = newValue.toFixed(2); // Округлення до двох знаків після коми
            }
        }
    }
}

// Функція для перемішування масиву
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function calculateER() {
    // Отримати всі рядки в межах div з id req-analis-content1
    var rows = document.querySelectorAll('#req-monitoring-content1 table tr');

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
