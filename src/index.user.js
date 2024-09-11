// ==UserScript==
// @name         School-MOS-Cheats
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  school.mos.ru crack
// @author       Diramix
// @match        https://school.mos.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mos.ru
// @grant        none
// @supportURL   https://github.com/Diramix/School-MOS-Cheats
// ==/UserScript==

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
            if (
                ['2', '3', '4'].includes(element.textContent) &&
                !element.closest('body > div > div > div > div > section > section > div > div > div > div > div > div > div > p.diary-emotion-cache-1vjp01c')
            ) {
                element.textContent = '5';
            }
        });
    });
}, 0);

// Подмена статистики по оценкам
const evaluationStats = [
    '.diary-emotion-cache-7q7x6p-mark',
    '.diary-emotion-cache-tvt58a',
    '.diary-emotion-cache-dxpxra'
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

// Подмена статистики оценок за урок
setInterval(() => {
  let text1 = document.querySelector('.diary-emotion-cache-1d9v6cr')?.textContent;
  let elements2 = document.querySelectorAll('.diary-emotion-cache-1uko928');
  if (text1 && elements2.length > 1) {
    elements2[1].textContent = `${text1} получили такой результат`;
  }
}, 0);

setInterval(() => {
    let sourceElements = document.querySelectorAll('.diary-emotion-cache-1d9v6cr');
    let targetElement = document.querySelector('.diary-emotion-cache-16iolak');
    if (sourceElements.length > 1 && targetElement) {
        let numbers = sourceElements[1].textContent.match(/\d+/g);
        if (numbers) {
            let number = parseInt(numbers.join(''), 10);
            let wordForm;
            if (number % 10 === 1 && number % 100 !== 11) {
                wordForm = 'ученик';
            } else if ((number % 10 >= 2 && number % 10 <= 4) && !(number % 100 >= 12 && number % 100 <= 14)) {
                wordForm = 'ученика';
            } else {
                wordForm = 'учеников';
            }
            targetElement.textContent = `${number} ${wordForm}`;
        }
    }
}, 0);