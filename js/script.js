'use strict';
const startMenyBtns = document.querySelectorAll('.startmenu__btn'),
    worktable = document.querySelector('.worktable'),
    html = document.querySelector('html');


startMenyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        newWindow(btn);
        openWindow(btn);
        themeColor();
        selectCustom();
        changeWallpaper();
        addWallpaper();
    });
});

function themeColor() {
    document.querySelectorAll('.theme button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            html.className = '';
            let themeName = e.target.getAttribute('alt');
            html.classList.add(themeName);
            console.log(html);
        });
    });
}

function openWindow(window) {
    let openWindow = document.querySelector('.window');
    if (window.innerText == 'Settings') {
        openWindow.querySelector('.window__main').innerHTML = settingsWindogs;
        const settingsTabs = document.querySelectorAll('.settings__tab'),
            settingsTabContent = document.querySelectorAll('.settings__tab-content');

        settingsTabs.forEach((tab, tabIndex) => {
            tab.addEventListener('click', (e) => {
                settingsTabContent.forEach(tabContent => {
                    tabContent.classList.remove('settings__tab-content--active');
                });
                settingsTabs.forEach((tabElem, tabIndex) => {
                    tabElem.classList.remove('settings__tab--active');

                });
                e.target.classList.add('settings__tab--active');
                settingsTabContent[tabIndex].classList.add('settings__tab-content--active');
            });
        });


    }
}

function changeWallpaper() {
    document.querySelectorAll('.wallpaper__img').forEach(btn => {
        btn.addEventListener('click', (e) => {
            worktable.style.cssText = `background: url(${e.target.getAttribute('src')}) center / cover no-repeat`;

        });
    });
}

function selectCustom() {
    const element = document.querySelector('#select');
    const choices = new Choices(element, {
        itemSelectText: '',
    });
}

function newWindow(window) {
    //created window
    let newWindow = document.createElement('div');
    newWindow.classList.add('window');

    //created window header

    let header = document.createElement('div'),
        headerName = document.createElement('div'),
        headerbtns = document.createElement('div'),
        headerbtnClose = document.createElement('button'),
        controlsHeader = document.createElement('div');

    header.classList.add('window__header');
    headerName.classList.add('window__name');
    headerName.textContent = chekForTextContent(window);
    headerbtns.classList.add('window__btns');
    headerbtns.innerHTML = `<button class="window__close-btn"></button>`;
    controlsHeader.className = 'controls-header';
    controlsHeader.innerHTML = `<div class="controls-header">
    <button class="controls-header__btn"><img src="img/theme/window/be/ui/arrow-left-removebg-preview.png" alt=""></button>
    <button class="controls-header__btn"><img src="img/theme/window/be/ui/arrow-right-removebg-preview.png" alt=""></button>
    <div class="controls-header__search"><input type="search" name="search" id="search"><button class="controls-header__btn"><img src="img/theme/window/be/ui/arrow-up-removebg-preview.png" alt=""></button></div>
    <button class="controls-header__btn"><img src="img/theme/window/be/ui/arrow-reverse-removebg-preview.png" alt=""></button>
</div>`;

    header.append(headerName, headerbtns, controlsHeader);


    //created window main
    let windowMain = document.createElement('div');
    windowMain.classList.add('window__main');
    let windowAside = createElement('aside', 'aside');
    windowAside.innerHTML = aside;
    windowMain.append(windowAside);

    newWindow.append(header, windowMain);


    const closeBtn = newWindow.querySelector('.window__close-btn');
    closeBtn.addEventListener('click', () => {
        let dragOption = document.querySelector('.sjx-wrapper');
        dragOption.remove();
        newWindow.remove();
    });
    // dragAndDrop('.window');
    document.body.append(newWindow);
    subjx(newWindow).drag();
}

function chekForTextContent(element) {
    for (let i = 0; i < element.children.length; i++) {
        if (element.children[i].textContent != '') {
            return element.children[i].textContent;
        }
    }
    // element.children.forEach(element => {
    //     if (element.textContent) {
    //         return element.textContent;
    //     }
    // })
}

function createElement(className, element = 'div') {
    let newItem = document.createElement(element);
    newItem.classList.add(className);
    return newItem;
}



// windows contents
const aside = `
<div class="aside__name"><img src="img/theme/startmenu/icon/removebg/6-removebg-preview.png" alt=""><span>computer</span></div>
<div class="divider"></div>
<ul class="aside__list">
    <li class="aside__item">
        <button class="aside__btn">
            <img src="img/theme/startmenu/icon/removebg/8-removebg-preview.png" alt="Music">
            <span>Music</span>
        </button>
    </li>
    <li class="aside__item">
        <button class="aside__btn">
            <img src="img/theme/startmenu/icon/removebg/document.png" alt="Document">
            <span>Document</span>
        </button>
    </li>
    <li class="aside__item">
        <button class="aside__btn">
            <img src="img/theme/startmenu/icon/removebg/11-removebg-preview.png" alt="Download">
            <span>Download</span>
        </button>
    </li>
    <li class="aside__item">
        <button class="aside__btn">
            <img src="img/theme/startmenu/icon/removebg/picture.png" alt="Picture">
            <span>Picture</span>
        </button>
    </li>
    <li class="aside__item">
        <button class="aside__btn">
            <img src="img/theme/startmenu/icon/removebg/12-removebg-preview.png" alt="Videos">
            <span>Videos</span>
        </button>
    </li>

</ul>
<div class="divider"></div>
<ul class="aside__list">
    <li class="aside__item">
        <button class="aside__btn">
            <img src="img/theme/startmenu/icon/removebg/7-removebg-preview.png" alt="Networks">
            <span>Networks</span>
        </button>
    </li>
</ul>`
const settingsWindogs = `
            <div class="settings__tabs">
                <div class="settings__tab settings__tab--active">Theme</div>
                <div class="settings__tab">Wallpaper</div>
                <div class="settings__tab">Display</div>
                <div class="settings__tab">Icon</div>
                <div class="settings__tab">Start Menu</div>
                <div class="settings__tab">Taskbar</div>
            </div>
            <div class="settings__tab-content settings__tab-content--active">
                <div class="theme">
                    <button class="settings__item">
                        <img src="img/theme/window/settings/windowthemes/1.png" alt="windogsAero">
                        <div class="settings__label">Windogs Aero</div>
                    </button>
                    <button class="settings__item">
                        <img src="img/theme/window/settings/windowthemes/2.png" alt="barboskinBasic">
                        <div class="settings__label">Barboskin Basic</div>
                    </button>
                    <button class="settings__item">
                        <img src="img/theme/window/settings/windowthemes/3.png" alt="barboskinClassic">
                        <div class="settings__label">Barboskin Classic</div>
                    </button>
                    <button class="settings__item">
                        <img src="img/theme/window/settings/windowthemes/4.png" alt="windowsXP">
                        <div class="settings__label">Windows XP</div>
                    </button>
                    <button class="settings__item">
                    <img src="img/theme/window/settings/windowthemes/1 - Copy.png" alt="windogsAcer">
                    <div class="settings__label">Acer</div>
                </button>
                </div>
            </div>
            <div class="settings__tab-content">
                <div class="wallpaper">
                <button class="wallpaper__img"><img src="img/theme/window/settings/windowthemes/bg.webp" alt="Windogs Aero"></button>
                <button class="wallpaper__img"><img src="img/theme/window/settings/windowthemes/bg2.webp" alt="Windogs Aero"></button>
                <button class="wallpaper__img"><img src="img/theme/window/settings/windowthemes/bg3.webp" alt="Windogs Aero"></button>
                <button class="wallpaper__img"><img src="img/theme/window/settings/windowthemes/bg4.webp" alt="Windogs Aero"></button>
                <button class="wallpaper__img"><img src="img/theme/window/settings/windowthemes/bg5.webp" alt="Windogs Aero"></button>
                <button class="wallpaper__img"><img src="img/theme/window/settings/windowthemes/bg6.webp" alt="Windogs Aero"></button>
                <button class="wallpaper__img"><img src="img/theme/window/settings/windowthemes/bg7.webp" alt="Windogs Aero"></button>
                <button class="wallpaper__img"><img src="img/theme/window/settings/windowthemes/bg80.webp" alt="Windogs Aero"></button>
                <button class="wallpaper__img"><img src="img/theme/window/settings/windowthemes/bg75.webp" alt="Windogs Aero"></button>
                <button class="wallpaper__img"><img src="img/PBPOM.png" alt="Windogs Aero"></button>
                <button class="wallpaper__img"><img src="img/theme/window/settings/windowthemes/acer01.jpg" alt="Acer"></button>
                    <button class="wallpaper__img"><img src="img/theme/window/settings/windowthemes/add.png" alt="Windogs Aero"><div>add wallpaper</div></button>
                </div>
            </div>
            <div class="settings__tab-content">
            <div class="display">
            <div class="display__icon"><img src="img/theme/icons/display.png" alt="display"></div>
            <div class="display__item">
                <input type="range" name="range" id="range">
            </div>
            <div class="display__item select">
                <select name="select" id="select">
                    <option value="32">32 colours</option>
                    <option value="256">256 colours</option>
                    <option value="16">16 colours</option>
                    <option value="2">2 colours</option>
                </select>
            </div>
        </div>
            </div>
            <div class="settings__tab-content"></div>
            <div class="settings__btns">
                <button class="settings__btn">Apply</button>
                <button class="settings__btn">Cancel</button>
                <button class="settings__btn">Ok</button>
            </div>
            `;

