"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos HTML
    const select = document.querySelector('select');
    const img = document.querySelector('#image'); // Asumimos id="image"
    const photographer = document.querySelector('#photographer');
    const description = document.querySelector('#description');
    const score = document.querySelector('#score');
    const btnIncrease = document.querySelector('#increase'); // Botón para aumentar
    const btnDecrease = document.querySelector('#decrease'); // Botón para disminuir

    // 1. Llenar el select con opciones de itemData
    for (const key in itemData) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = itemData[key].name;
        select.appendChild(option);
    }

    // Variable para guardar el ítem seleccionado
    let selectedKey = select.value;

    // 2. Función para actualizar la vista con el ítem seleccionado
    function updateView(key) {
        const item = itemData[key];
        if (!item) return;
        img.src = item.image;
        photographer.textContent = item.photographer;
        description.textContent = item.description;
        score.textContent = item.score;
    }

    // Mostrar datos del primer ítem al cargar
    updateView(select.value);

    // 3. Evento cambio en el select para mostrar datos
    select.addEventListener('change', (e) => {
        selectedKey = e.target.value;
        updateView(selectedKey);
    });

    // 4. Función para cambiar puntaje
    function changeScore(amount) {
        itemData[selectedKey].score += amount;
        // Evitar puntajes negativos si quieres
        if (itemData[selectedKey].score < 0) itemData[selectedKey].score = 0;
        score.textContent = itemData[selectedKey].score;
    }

    // 5. Eventos para botones
    btnIncrease.addEventListener('click', () => changeScore(1));
    btnDecrease.addEventListener('click', () => changeScore(-1));
});
