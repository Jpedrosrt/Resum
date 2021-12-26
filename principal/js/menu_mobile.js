class MobileMenu {
    constructor(menu, navList, navLinks) {
        this.menu = document.querySelector(menu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind();
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.menu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menu) {
            this.addClickEvent();
        }
        return this;
    }
}

const MobileMenu = new MobileMenu(".header_nav_list_menu_mobile", ".header_nav_list", ".header_nav_list li",);

MobileMenu.init();