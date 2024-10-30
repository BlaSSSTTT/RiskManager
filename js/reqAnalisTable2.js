function createRiskMetricsCells() {
    // Отримати всі рядки в межах div з id req-analis-content2
    var rows = document.querySelectorAll('#req-analis-content2 table tr');

    rows.forEach(function(row, index) {
        // Пропустити заголовок
        if (index === 0) return;

        // Створити комірки "ER", "LRER", "VRER" та "Пріоритет" для кожного рядка
        var erCell = document.createElement('td');
        var lrerCell = document.createElement('td');
        var vrerCell = document.createElement('td');
        var priorityCell = document.createElement('td');

        // Додати стилі, якщо потрібно
        erCell.style.width = '5%';
        vrerCell.style.width = '5%';
        priorityCell.style.width = '5%';

        // Додати input тільки для комірки "LRER"
        var lrerInput = document.createElement('input');

        // Налаштувати стилі та властивості для input
        lrerInput.type = 'text';
        lrerInput.style.width = '100%';
        lrerInput.style.boxSizing = 'border-box';
        lrerInput.style.textAlign = 'center';
        lrerInput.style.verticalAlign = 'middle';

        // Додати input до комірки "LRER"
        lrerCell.appendChild(lrerInput);

        // Додати комірки до рядка
        row.appendChild(erCell);
        row.appendChild(lrerCell);
        row.appendChild(vrerCell);
        row.appendChild(priorityCell);
    });
}


function copyERValues() {
    // Отримати всі рядки в межах div з id req-analis-content1
    var rows1 = document.querySelectorAll('#req-analis-content1 table tr');
    
    // Отримати всі рядки в межах div з id req-analis-content2
    var rows2 = document.querySelectorAll('#req-analis-content2 table tr');

    rows1.forEach(function(row1, index) {
        // Пропустити заголовок
        if (index === 0) return;

        // Отримати значення з комірки "ER" в рядку з таблиці req-analis-content1
        var erValue = row1.querySelector('td:nth-child(13)').textContent;

        // Отримати відповідний рядок в таблиці req-analis-content2
        var row2 = rows2[index];

        // Отримати комірку "ER" у рядку з таблиці req-analis-content2
        var erCell = row2.querySelector('td:nth-child(3)');

        // Встановити вміст комірки "ER" в таблиці req-analis-content2
        erCell.textContent = erValue;
    });
}


function generateLRERValues() {
    // Отримати всі рядки в межах div з id req-analis-content2
    var rows = document.querySelectorAll('#req-analis-content2 table tr');

    rows.forEach(function(row, index) {
        // Пропустити заголовок
        if (index === 0) return;

        // Отримати комірку "LRER" у рядку
        var lrerCell = row.querySelector('td:nth-child(4) input');

        // Згенерувати випадкове число з точністю до двох знаків після коми
        var randomValue = (Math.random() * (1 - 0) + 0).toFixed(2);

        // Вставити згенероване значення у комірку "LRER"
        lrerCell.value = randomValue;
    });
}

function calculateAndSetVRER() {
    // Отримати всі рядки в межах div з id req-analis-content2
    var rows = document.querySelectorAll('#req-analis-content2 table tr');

    rows.forEach(function(row, index) {
        // Пропустити заголовок
        if (index === 0) return;

        // Отримати значення з комірки "ER" та "LRER" в рядку
        var erValue = parseFloat(row.querySelector('td:nth-child(3)').textContent);
        var lrerValue = parseFloat(row.querySelector('td:nth-child(4) input').value);

        // Обчислити значення для "VRER"
        var vrerValue = (erValue * lrerValue).toFixed(2);

        // Отримати комірку "VRER" у рядку
        var vrerCell = row.querySelector('td:nth-child(5)');

        // Встановити значення для комірки "VRER"
        vrerCell.textContent = vrerValue;
    });
}

function findMinVRER() {
    // Отримати всі комірки "VRER" в межах div з id req-analis-content2
    var vrerCells = document.querySelectorAll('#req-analis-content2 table td:nth-child(5)');

    // Знайти мінімальне значення
    var minVRER = Infinity;
    vrerCells.forEach(function(cell) {
        var vrerValue = parseFloat(cell.textContent);
        if (!isNaN(vrerValue) && vrerValue < minVRER) {
            minVRER = vrerValue;
        }
    });

    // Записати мінімальне значення в відповідний label
    document.getElementById('min-vrer').textContent = minVRER.toFixed(2);
}

function findMaxVRER() {
    // Отримати всі комірки "VRER" в межах div з id req-analis-content2
    var vrerCells = document.querySelectorAll('#req-analis-content2 table td:nth-child(5)');

    // Знайти максимальне значення
    var maxVRER = -Infinity;
    vrerCells.forEach(function(cell) {
        var vrerValue = parseFloat(cell.textContent);
        if (!isNaN(vrerValue) && vrerValue > maxVRER) {
            maxVRER = vrerValue;
        }
    });

    // Записати максимальне значення в відповідний label
    document.getElementById('max-vrer').textContent = maxVRER.toFixed(2);
}

function setPriorityIntervals() {
    minVRER = parseFloat(document.getElementById('min-vrer').textContent);
    maxVRER = parseFloat(document.getElementById('max-vrer').textContent);
    // Визначити інтервали пріоритетів
    var range = maxVRER - minVRER;
    var interval1 = [minVRER, minVRER + range / 3];
    var interval2 = [interval1[1], minVRER + 2 * range / 3];
    var interval3 = [interval2[1], maxVRER];

    // Записати інтервали в відповідні label
    document.getElementById('low-priority').textContent = "[" + interval1[0].toFixed(2) + ";" + interval1[1].toFixed(2) + "]";
    document.getElementById('middle-priority').textContent = "[" + interval2[0].toFixed(2) + ";" + interval2[1].toFixed(2) + "]";
    document.getElementById('high-priority').textContent = "[" + interval3[0].toFixed(2) + ";" + interval3[1].toFixed(2) + "]";
}


function setPriorityValues() {
    // Отримати всі рядки в межах div з id req-analis-content2
    var rows = document.querySelectorAll('#req-analis-content2 table tr');
    var minVRER = parseFloat(document.getElementById('min-vrer').textContent);
    var maxVRER = parseFloat(document.getElementById('max-vrer').textContent);
    
    rows.forEach(function(row, index) {
        // Пропустити заголовок
        if (index === 0) return;

        // Отримати значення з комірки "VRER" у рядку
        var vrerValue = parseFloat(row.querySelector('td:nth-child(5)').textContent);

        // Визначити інтервали пріоритетів
        var range = maxVRER - minVRER;
        var interval1 = [minVRER, minVRER + range / 3];
        var interval2 = [interval1[1], minVRER + 2 * range / 3];
        var interval3 = [interval2[1], maxVRER];

        // Встановити значення пріоритету в залежності від інтервалу
        var priorityValue = "";
        if (vrerValue >= interval1[0] && vrerValue <= interval1[1]) {
            priorityValue = "low-priority";
        } else if (vrerValue >= interval2[0] && vrerValue <= interval2[1]) {
            priorityValue = "medium-priority";
        } else if (vrerValue >= interval3[0] && vrerValue <= interval3[1]) {
            priorityValue = "high-priority";
        }

        // Записати значення пріоритету в відповідну комірку
        row.querySelector('td:nth-child(6)').textContent = priorityValue;

        // Додати клас для зміни кольору рядка
        row.className = priorityValue;
    });
}