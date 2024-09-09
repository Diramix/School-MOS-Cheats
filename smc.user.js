// ==UserScript==
// @name         School-MOS-Cheats
// @namespace    http://tampermonkey.net/
// @version      2024-09-08
// @description  school.mos.ru crack
// @author       Diramix
// @match        https://school.mos.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mos.ru
// @grant        none
// @supportURL   https://github.com/Diramix/School-MOS-Cheats
// ==/UserScript==

// Подмена оценок
const evaluationsReplace = [
    // Годовые оценки
    '.diary-emotion-cache-vaoiao-row-markColumn',
    // Обычные оценки
    '.diary-emotion-cache-1vjp01c'
];

setInterval(() => {
    evaluationsReplace.forEach(className => {
        const elements = document.querySelectorAll(className);
        elements.forEach(element => {
            if (['2', '3', '4'].includes(element.textContent)) {
                element.textContent = '5';
            }
        });
    });
}, 0);

// Подмена статистики по оценкам
const evaluationStats = [
    '.diary-emotion-cache-7q7x6p-mark',
    '.diary-emotion-cache-tvt58a'
];

setInterval(() => {
  evaluationStats.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      element.textContent = "5.0";
    });
  });
}, 0);

// Подмена места в классе
const muiTypography = [
    '.diary-emotion-cache-kcc6yr-placeMark',
    '.diary-emotion-cache-1hp9vgt-placeMark',
    '.diary-emotion-cache-wxrd3x-rating'
];

setInterval(() => {
  muiTypography.forEach(className => {
    document.querySelectorAll(className).forEach(element => {
      element.textContent = "1";
    });
  });
}, 0);

const classToDelete = [
    '.diary-emotion-cache-1mz8453-root',
    '.diary-emotion-cache-1mznu6e-root',
    '.diary-emotion-cache-1699b2g-wrapper'
];

function hideElements() {
    classToDelete.forEach(className => {
        document.querySelectorAll(className).forEach(element => {
            element.style.display = 'none';
        });
    });
}

setInterval(hideElements, 0);
