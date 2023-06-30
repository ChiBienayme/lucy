let tabItems = document.getElementsByClassName("tab__item");

for (let i = 0; i < tabItems.length; i++) {
    tabItems[i].addEventListener("click", function (event) {
        for (let j = 0; j < tabItems.length; j++) {
            tabItems[j].classList.remove("tab__item--active");
        }

        this.classList.add("tab__item--active");

        let tabIndex = Array.prototype.indexOf.call(tabItems, this);

        let content =
            document.getElementsByClassName("tab__content-item");

        for (let k = 0; k < content.length; k++) {
            content[k].classList.remove("tab__content-item--active");
        }

        content[tabIndex].classList.add("tab__content-item--active");
    });
}

// Display the content of the first tab by default
tabItems[0].click();
