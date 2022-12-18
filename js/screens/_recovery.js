'use strict';
import { createElement, putInnerHtml, putTextContent, appendTo } from "../builders/_builders.js";

function recovery() {
    console.log('recovery');
    //render recovery
    appendTo('#body', createElement('pc'));
    appendTo('.pc', createElement('recovery'));
    appendTo('.recovery', createElement('recovery__top'));
    appendTo('.recovery', createElement('recovery__list', 'ul'));
    appendTo('.recovery', createElement('recovery__bottom'));
    putTextContent('.recovery__top', 'Barboskiny Recovery')

    recoveryLinksArray.forEach(link => {
        appendTo('.recovery__list', createElement('recovery__item', 'li'));
    })
    document.querySelectorAll('.recovery__item').forEach(item => {
        item.append(createElement('recovery__link', 'a'));
    })
    document.querySelectorAll('.recovery__link').forEach((link, index) => {
        link.textContent = recoveryLinksArray[index];
        link.setAttribute('tabindex',index)
    })
    putTextContent('.recovery__bottom', 'Enter-Choose')

    // recovery activity

    let modeList = document.querySelectorAll('.recovery__link');
    modeList.forEach(mode => {
        mode.addEventListener('click', () => {
            if (mode.textContent == 'Start Windogs Normal') {
                cleanBody();
                normalMode();
            }
            if (mode.textContent == 'Safe mode with Network') {
                cleanBody();
                barboskinyBootManager();
            }
            console.log(mode.textContent);
        })
    })
}

export default recovery;