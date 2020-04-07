const BODY = document.querySelector('body');

// Header Creation
const HEADER = document.createElement('h1');
const headerText = document.createTextNode('Virtual Keyboard');
HEADER.appendChild(headerText);
BODY.appendChild(HEADER);

// Key Window creation
const WRAPPER = document.createElement('div');
BODY.appendChild(WRAPPER);
const WINDOW = document.createElement('textarea');
WRAPPER.appendChild(WINDOW);

// Keyboard creation

function buttonCreation(value, id, width, className, row) {
    let button = document.createElement('input');
    button.type = 'button';
    button.value = value;
    button.id = id;
    button.style.width = width;
    button.className = className;
    row.appendChild(button);
}

// First Keyboard Row
const FIRSTROW = document.createElement('div');
FIRSTROW.classList.add('row');
WRAPPER.appendChild(FIRSTROW);

buttonCreation('`', 'Backquote', '50px', 'eng', FIRSTROW);
buttonCreation('ё', 'Backquote', '50px', 'rus', FIRSTROW);
buttonCreation('1', 'Digit1', '50px', 'eng', FIRSTROW);
buttonCreation('1', 'Digit1', '50px', 'rus', FIRSTROW);
buttonCreation('2', 'Digit2', '50px', 'eng', FIRSTROW);
buttonCreation('2', 'Digit2', '50px', 'rus', FIRSTROW);
buttonCreation('3', 'Digit3', '50px', 'eng', FIRSTROW);
buttonCreation('3', 'Digit3', '50px', 'rus', FIRSTROW);
buttonCreation('4', 'Digit4', '50px', 'eng', FIRSTROW);
buttonCreation('4', 'Digit4', '50px', 'rus', FIRSTROW);
buttonCreation('5', 'Digit5', '50px', 'eng', FIRSTROW);
buttonCreation('5', 'Digit5', '50px', 'rus', FIRSTROW);
buttonCreation('6', 'Digit6', '50px', 'eng', FIRSTROW);
buttonCreation('6', 'Digit6', '50px', 'rus', FIRSTROW);
buttonCreation('7', 'Digit7', '50px', 'eng', FIRSTROW);
buttonCreation('7', 'Digit7', '50px', 'rus', FIRSTROW);
buttonCreation('8', 'Digit8', '50px', 'eng', FIRSTROW);
buttonCreation('8', 'Digit8', '50px', 'rus', FIRSTROW);
buttonCreation('9', 'Digit9', '50px', 'eng', FIRSTROW);
buttonCreation('9', 'Digit9', '50px', 'rus', FIRSTROW);
buttonCreation('0', 'Digit0', '50px', 'eng', FIRSTROW);
buttonCreation('0', 'Digit0', '50px', 'rus', FIRSTROW);
buttonCreation('-', 'Minus', '50px', 'eng', FIRSTROW);
buttonCreation('-', 'Minus', '50px', 'rus', FIRSTROW);
buttonCreation('=', 'Equal', '50px', 'eng', FIRSTROW);
buttonCreation('=', 'Equal', '50px', 'rus', FIRSTROW);
buttonCreation('Backspace', 'Backspace', '108px', 'eng', FIRSTROW);
buttonCreation('Backspace', 'Backspace', '108px', 'rus', FIRSTROW);


// Second Keyboard Row

const SECONDROW = document.createElement('div');
SECONDROW.classList.add('row');
WRAPPER.appendChild(SECONDROW);

buttonCreation('Tab', 'Tab', '50px', 'eng', SECONDROW);
buttonCreation('Tab', 'Tab', '50px', 'rus', SECONDROW);
buttonCreation('q', 'KeyQ', '50px', 'eng', SECONDROW);
buttonCreation('й', 'KeyQ', '50px', 'rus', SECONDROW);
buttonCreation('w', 'KeyW', '50px', 'eng', SECONDROW);
buttonCreation('ц', 'KeyW', '50px', 'rus', SECONDROW);
buttonCreation('e', 'KeyE', '50px', 'eng', SECONDROW);
buttonCreation('у', 'KeyE', '50px', 'rus', SECONDROW);
buttonCreation('r', 'KeyR', '50px', 'eng', SECONDROW);
buttonCreation('к', 'KeyR', '50px', 'rus', SECONDROW);
buttonCreation('t', 'KeyT', '50px', 'eng', SECONDROW);
buttonCreation('е', 'KeyT', '50px', 'rus', SECONDROW);
buttonCreation('y', 'KeyY', '50px', 'eng', SECONDROW);
buttonCreation('н', 'KeyY', '50px', 'rus', SECONDROW);
buttonCreation('u', 'KeyU', '50px', 'eng', SECONDROW);
buttonCreation('г', 'KeyU', '50px', 'rus', SECONDROW);
buttonCreation('i', 'KeyI', '50px', 'eng', SECONDROW);
buttonCreation('ш', 'KeyI', '50px', 'rus', SECONDROW);
buttonCreation('o', 'KeyO', '50px', 'eng', SECONDROW);
buttonCreation('щ', 'KeyO', '50px', 'rus', SECONDROW);
buttonCreation('p', 'KeyP', '50px', 'eng', SECONDROW);
buttonCreation('з', 'KeyP', '50px', 'rus', SECONDROW);
buttonCreation('[', 'BracketLeft', '50px', 'eng', SECONDROW);
buttonCreation('х', 'BracketLeft', '50px', 'rus', SECONDROW);
buttonCreation(']', 'BracketRight', '50px', 'eng', SECONDROW);
buttonCreation('ъ', 'BracketRight', '50px', 'rus', SECONDROW);
buttonCreation('\\', 'Backslash', '50px', 'eng', SECONDROW);
buttonCreation('\\', 'Backslash', '50px', 'rus', SECONDROW);
buttonCreation('Del', 'Delete', '55px', 'eng', SECONDROW);
buttonCreation('Del', 'Delete', '55px', 'rus', SECONDROW);

// Third Keyboard Row
const THIRDROW = document.createElement('div');
THIRDROW.classList.add('row');
WRAPPER.appendChild(THIRDROW);

buttonCreation('CapsLock', 'CapsLock', '105px', 'eng', THIRDROW);
buttonCreation('CapsLock', 'CapsLock', '105px', 'rus', THIRDROW);
buttonCreation('a', 'KeyA', '50px', 'eng', THIRDROW);
buttonCreation('ф', 'KeyA', '50px', 'rus', THIRDROW);
buttonCreation('s', 'KeyS', '50px', 'eng', THIRDROW);
buttonCreation('ы', 'KeyS', '50px', 'rus', THIRDROW);
buttonCreation('d', 'KeyD', '50px', 'eng', THIRDROW);
buttonCreation('в', 'KeyD', '50px', 'rus', THIRDROW);
buttonCreation('f', 'KeyF', '50px', 'eng', THIRDROW);
buttonCreation('а', 'KeyF', '50px', 'rus', THIRDROW);
buttonCreation('g', 'KeyG', '50px', 'eng', THIRDROW);
buttonCreation('п', 'KeyG', '50px', 'rus', THIRDROW);
buttonCreation('h', 'KeyH', '50px', 'eng', THIRDROW);
buttonCreation('р', 'KeyH', '50px', 'rus', THIRDROW);
buttonCreation('j', 'KeyJ', '50px', 'eng', THIRDROW);
buttonCreation('о', 'KeyJ', '50px', 'rus', THIRDROW);
buttonCreation('k', 'KeyK', '50px', 'eng', THIRDROW);
buttonCreation('л', 'KeyK', '50px', 'rus', THIRDROW);
buttonCreation('l', 'KeyL', '50px', 'eng', THIRDROW);
buttonCreation('д', 'KeyL', '50px', 'rus', THIRDROW);
buttonCreation(';', 'Semicolon', '50px', 'eng', THIRDROW);
buttonCreation('ж', 'Semicolon', '50px', 'rus', THIRDROW);
buttonCreation('\'', 'Quote', '50px', 'eng', THIRDROW);
buttonCreation('э', 'Quote', '50px', 'rus', THIRDROW);
buttonCreation('Enter', 'Enter', '105px', 'eng', THIRDROW);
buttonCreation('Enter', 'Enter', '105px', 'rus', THIRDROW);

// Fourth Keyboard Row
const FOURTHROW = document.createElement('div');
FOURTHROW.classList.add('row');
WRAPPER.appendChild(FOURTHROW);

buttonCreation('Shift', 'ShiftLeft', '105px', 'eng', FOURTHROW);
buttonCreation('Shift', 'ShiftLeft', '105px', 'rus', FOURTHROW);
buttonCreation('z', 'KeyZ', '50px', 'eng', FOURTHROW);
buttonCreation('я', 'KeyZ', '50px', 'rus', FOURTHROW);
buttonCreation('x', 'KeyX', '50px', 'eng', FOURTHROW);
buttonCreation('ч', 'KeyX', '50px', 'rus', FOURTHROW);
buttonCreation('c', 'KeyC', '50px', 'eng', FOURTHROW);
buttonCreation('с', 'KeyC', '50px', 'rus', FOURTHROW);
buttonCreation('v', 'KeyV', '50px', 'eng', FOURTHROW);
buttonCreation('м', 'KeyV', '50px', 'rus', FOURTHROW);
buttonCreation('b', 'KeyB', '50px', 'eng', FOURTHROW);
buttonCreation('и', 'KeyB', '50px', 'rus', FOURTHROW);
buttonCreation('n', 'KeyN', '50px', 'eng', FOURTHROW);
buttonCreation('т', 'KeyN', '50px', 'rus', FOURTHROW);
buttonCreation('m', 'KeyM', '50px', 'eng', FOURTHROW);
buttonCreation('ь', 'KeyM', '50px', 'rus', FOURTHROW);
buttonCreation(',', 'Comma', '50px', 'eng', FOURTHROW);
buttonCreation('б', 'Comma', '50px', 'rus', FOURTHROW);
buttonCreation('.', 'Period', '50px', 'eng', FOURTHROW);
buttonCreation('ю', 'Period', '50px', 'rus', FOURTHROW);
buttonCreation('/', 'Slash', '50px', 'eng', FOURTHROW);
buttonCreation('.', 'Slash', '50px', 'rus', FOURTHROW);
buttonCreation('↑', 'ArrowUp', '50px', 'eng', FOURTHROW);
buttonCreation('↑', 'ArrowUp', '50px', 'rus', FOURTHROW);
buttonCreation('Shift', 'ShiftRight', '105px', 'eng', FOURTHROW);
buttonCreation('Shift', 'ShiftRight', '105px', 'rus', FOURTHROW);

// Fifth Keyboard Row
const FIFTHROW = document.createElement('div');
FIFTHROW.classList.add('row');
WRAPPER.appendChild(FIFTHROW);

buttonCreation('Ctrl', 'ControlLeft', '60px', 'eng', FIFTHROW);
buttonCreation('Ctrl', 'ControlLeft', '60px', 'rus', FIFTHROW);
buttonCreation('Win', 'MetaLeft', '60px', 'eng', FIFTHROW);
buttonCreation('Win', 'MetaLeft', '60px', 'rus', FIFTHROW);
buttonCreation('Alt', 'AltLeft', '60px', 'eng', FIFTHROW);
buttonCreation('Alt', 'AltLeft', '60px', 'rus', FIFTHROW);
buttonCreation(' ', 'Space', '257px', 'eng', FIFTHROW);
buttonCreation(' ', 'Space', '257px', 'rus', FIFTHROW);
buttonCreation('Alt', 'AltRight', '60px', 'eng', FIFTHROW);
buttonCreation('Alt', 'AltRight', '60px', 'rus', FIFTHROW);
buttonCreation('Ctrl', 'ControlRight', '60px', 'eng', FIFTHROW);
buttonCreation('Ctrl', 'ControlRight', '60px', 'rus', FIFTHROW);
buttonCreation('←', 'ArrowLeft', '60px', 'eng', FIFTHROW);
buttonCreation('←', 'ArrowLeft', '60px', 'rus', FIFTHROW);
buttonCreation('↓', 'ArrowDown', '50px', 'eng', FIFTHROW);
buttonCreation('↓', 'ArrowDown', '50px', 'rus', FIFTHROW);
buttonCreation('→', 'ArrowRight', '105px', 'eng', FIFTHROW);
buttonCreation('→', 'ArrowRight', '105px', 'rus', FIFTHROW);

const OS = document.createElement('p');
const OSTEXT = document.createTextNode('Keyboard was created in OS WINDOWS');
OS.appendChild(OSTEXT);
WRAPPER.appendChild(OS);

const ENGRUS = document.createElement('p');
const ENGRUSTEXT = document.createTextNode('To switch the language, press Ctrl + Alt');
ENGRUS.appendChild(ENGRUSTEXT);
WRAPPER.appendChild(ENGRUS);

// Styles implementation

BODY.style.fontFamily = "'Lato', sans-serif";
BODY.style.backgroundImage = 'url(table.jpg)';
BODY.style.backgroundPosition = '10% 45%';
BODY.style.backgroundSize = 'cover';
BODY.style.backgroundRepeat = 'no-repeat';

HEADER.style.textAlign = 'center';
HEADER.style.color = '#00CECB';
HEADER.style.textTransform = 'uppercase';

WRAPPER.style.width = '1000px';
WRAPPER.style.margin = '0 auto';

WINDOW.style.width = '790px';
WINDOW.style.height = '200px';
WINDOW.style.display = 'block';
WINDOW.style.margin = '20px auto';
WINDOW.style.border = '1px solid #D8D8D8';
WINDOW.style.borderRadius = '3px';

let rows = document.querySelectorAll('.row');
for (let row of rows) {
    row.style.width = '800px';
    row.style.display = 'block';
    row.style.margin = '0 auto';
}

let inputs = document.querySelectorAll('input');
for (let input of inputs) {
    input.style.backgroundColor = '#FFFFEA';
    input.style.border = '1px solid #D8D8D8';
    input.style.color = '#00CECB';
    input.style.fontWeight = 'bold';
    input.style.fontSize = '15px';
    input.style.height = '40px';
    input.style.marginRight = '3px';
    input.style.marginBottom = '3px';
    input.style.cursor = 'pointer';
    input.style.borderRadius = '3px';
}
let engs = document.querySelectorAll('.eng');
for (let eng of engs) {
    eng.style.display = 'inline';
}

let ruses = document.querySelectorAll('.rus');
for (let rus of ruses) {
    rus.style.display = 'none';
}

OS.style.textAlign = 'center';
OS.style.color = '#00CECB';
OS.style.fontSize = '20px';
ENGRUS.style.textAlign = 'center';
ENGRUS.style.color = '#00CECB';
ENGRUS.style.fontSize = '20px';

// Functionality

let CONTROLLEFT = document.getElementById('ControlLeft');
let CAPSLOCK = document.getElementById('CapsLock');

// Keyboard Events

document.addEventListener('keydown', (event) => {
    document.getElementById(event.code).style.transition = 'all 0.5s';
    document.getElementById(event.code).style.backgroundColor = '#00CECB';
    document.getElementById(event.code).style.color = '#FFFFEA';
    document.getElementById(event.code).style.borderRadius = '20%';
    document.getElementById(event.code).nextSibling.style.transition = 'all 0.5s';
    document.getElementById(event.code).nextSibling.style.backgroundColor = '#00CECB';
    document.getElementById(event.code).nextSibling.style.color = '#FFFFEA';
    document.getElementById(event.code).nextSibling.style.borderRadius = '20%';

    if (event.ctrlKey && event.altKey) {
        CONTROLLEFT.classList.toggle('active');
    }
    if (CONTROLLEFT.classList.contains('active')) {
        for (let eng of engs) {
            eng.style.display = 'none';
        }
        for (let rus of ruses) {
            rus.style.display = 'inline';
        }
        if (event.code === 'CapsLock') {
            CAPSLOCK.classList.toggle('caps');
        }
        if (CAPSLOCK.classList.contains('caps')) {
            if (event.code !== 'Backspace' && event.code !== 'Tab' && event.code !== 'Delete' && event.code !== 'CapsLock' && event.code !== 'Enter' && event.code !== 'ShiftLeft' && event.code !== 'ShiftRight' && event.code !== 'ControlLeft' && event.code !== 'MetaLeft' && event.code !== 'AltLeft' && event.code !== 'AltRight' && event.code !== 'ControlRight') {
                WINDOW.appendChild(document.createTextNode(document.getElementById(event.code).nextSibling.value.toUpperCase()));
            }
        } else {
            if (event.code !== 'Backspace' && event.code !== 'Tab' && event.code !== 'Delete' && event.code !== 'CapsLock' && event.code !== 'Enter' && event.code !== 'ShiftLeft' && event.code !== 'ShiftRight' && event.code !== 'ControlLeft' && event.code !== 'MetaLeft' && event.code !== 'AltLeft' && event.code !== 'AltRight' && event.code !== 'ControlRight') {
                WINDOW.appendChild(document.createTextNode(document.getElementById(event.code).nextSibling.value));
            }
        }
    } else {
        for (let eng of engs) {
            eng.style.display = 'inline';
        }
        for (let rus of ruses) {
            rus.style.display = 'none';
        }
        if (event.code === 'CapsLock') {
            CAPSLOCK.classList.toggle('caps');
        }
        if (CAPSLOCK.classList.contains('caps')) {
            if (event.code !== 'Backspace' && event.code !== 'Tab' && event.code !== 'Delete' && event.code !== 'CapsLock' && event.code !== 'Enter' && event.code !== 'ShiftLeft' && event.code !== 'ShiftRight' && event.code !== 'ControlLeft' && event.code !== 'MetaLeft' && event.code !== 'AltLeft' && event.code !== 'AltRight' && event.code !== 'ControlRight') {
                WINDOW.appendChild(document.createTextNode(document.getElementById(event.code).value.toUpperCase()));
            }
        } else {
            if (event.code !== 'Backspace' && event.code !== 'Tab' && event.code !== 'Delete' && event.code !== 'CapsLock' && event.code !== 'Enter' && event.code !== 'ShiftLeft' && event.code !== 'ShiftRight' && event.code !== 'ControlLeft' && event.code !== 'MetaLeft' && event.code !== 'AltLeft' && event.code !== 'AltRight' && event.code !== 'ControlRight') {
                WINDOW.appendChild(document.createTextNode(document.getElementById(event.code).value));
            }
        }
    }
    if (event.code === 'Backspace') {
        WINDOW.lastChild.remove();
    }
    if (event.code === 'Tab') {
        event.preventDefault();
        let tab = document.createTextNode('  ');
        WINDOW.appendChild(tab);
    }
    if (event.code === 'Enter') {
        let newLine = document.createTextNode('\n');
        WINDOW.appendChild(newLine);
    }

});

document.addEventListener('keyup', (event) => {
    document.getElementById(event.code).style.backgroundColor = '#FFFFEA';
    document.getElementById(event.code).style.color = '#00CECB';
    document.getElementById(event.code).style.borderRadius = '0';
    document.getElementById(event.code).nextSibling.style.backgroundColor = '#FFFFEA';
    document.getElementById(event.code).nextSibling.style.color = '#00CECB';
    document.getElementById(event.code).nextSibling.style.borderRadius = '0';
});

// Mouse Events

document.addEventListener('mousedown', (event) => {
    if (event.target.tagName === 'INPUT') {
        event.target.style.transition = 'all 0.5s';
        event.target.style.backgroundColor = '#00CECB';
        event.target.style.color = '#FFFFEA';
        event.target.style.borderRadius = '20%';

        if (event.target.value === 'CapsLock') {
            CAPSLOCK.classList.toggle('caps');
        }
        if (CAPSLOCK.classList.contains('caps')) {
            if (event.target.value !== 'Backspace' && event.target.value !== 'Tab' && event.target.value !== 'Del' && event.target.value !== 'CapsLock' && event.target.value !== 'Enter' && event.target.value !== 'Shift' && event.target.value !== 'Ctrl' && event.target.value !== 'Win' && event.target.value !== 'Alt') {
                let textClick = document.createTextNode(event.target.value.toUpperCase());
                WINDOW.appendChild(textClick);
            }
        } else {
            if (event.target.value !== 'Backspace' && event.target.value !== 'Tab' && event.target.value !== 'Del' && event.target.value !== 'CapsLock' && event.target.value !== 'Enter' && event.target.value !== 'Shift' && event.target.value !== 'Ctrl' && event.target.value !== 'Win' && event.target.value !== 'Alt') {
                let textClick = document.createTextNode(event.target.value);
                WINDOW.appendChild(textClick);
            }
        }
        if (event.target.value === 'Backspace') {
            WINDOW.lastChild.remove();
        } else if (event.target.value === 'Tab') {
            event.preventDefault();
            WINDOW.appendChild(document.createTextNode('  '));
        } else if (event.target.value === 'Enter') {
            let newLine = document.createTextNode('\n');
            WINDOW.appendChild(newLine);
        }
    }
});

document.addEventListener('mouseup', (event) => {
    if (event.target.tagName === 'INPUT') {
        event.target.style.backgroundColor = '#FFFFEA';
        event.target.style.color = '#00CECB';
        event.target.style.borderRadius = '0';
    }
});

document.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'INPUT') {
        event.target.style.backgroundColor = '#FFFFEA';
    }
});