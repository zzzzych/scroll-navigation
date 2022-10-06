/*
MIT License @zzzzych
*/

class Scroll {
    constructor(_parameter) {
        let pageNum = 0;
        let scrollPos = 0;
        let contentSct = 0;
        let activeClass;
        let browserPos = window.innerHeight;
        let nav = document.querySelectorAll(".nav > *");
        let content = document.querySelectorAll(".scroll-container > *");

        //옵션(option)
        if (_parameter !== undefined) {
            this.activeClass = _parameter.activeClass;
            activeClass = this.activeClass;
        } else {
            activeClass = "active";
        }

        nav.forEach((navItem, idx) => {
            navItem.addEventListener("click", () => {
                contentSct = content[idx].offsetTop;
                window.scrollTo({
                    top: contentSct,
                    behavior: "smooth",
                });
                //좀 더 부드럽게 하기 위해
                //To make it Soft
                setTimeout(() => {
                    resetNav();
                    nav[idx].classList.add(activeClass);
                }, 500);
            });
        });

        window.addEventListener("scroll", () => {
            scrollPos = scrollY;
            content.forEach((contentItem, idx) => {
                contentSct = contentItem.offsetTop;

                if (scrollPos >= contentSct) {
                    resetNav();
                    nav[idx].classList.add(activeClass);
                }
            });
        });

        function resetNav() {
            for (let i = 0; i < nav.length; i++) {
                nav[i].classList.remove(activeClass);
            }
        }
    }
}
