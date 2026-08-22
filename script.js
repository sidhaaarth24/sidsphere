/* HELPERS */

const $ = (selector) =>
    document.querySelector(selector);

const $$ = (selector) =>
    document.querySelectorAll(selector);


/* TYPING EFFECT */

const typingElement = $("#typing");

const roles = [
    "engineer",
    "developer",
    "designer",
    "programmer",
    "editor",
    "translator",
    "author",
    "artist",
];

let roleIndex = 0;
let characterIndex = 0;

let deleting = false;


function typeRole() {

    if (!typingElement) return;

    const currentWord =
        roles[roleIndex];

    typingElement.textContent =
        currentWord.slice(
            0,
            characterIndex
        );


    if (!deleting) {

        if (
            characterIndex <
            currentWord.length
        ) {

            characterIndex++;

            setTimeout(
                typeRole,
                85
            );

        } else {

            deleting = true;

            setTimeout(
                typeRole,
                1100
            );

        }

    } else {

        if (
            characterIndex > 0
        ) {

            characterIndex--;

            setTimeout(
                typeRole,
                45
            );

        } else {

            deleting = false;

            roleIndex =
                (roleIndex + 1) %
                roles.length;

            setTimeout(
                typeRole,
                300
            );

        }

    }

}


typeRole();


/* THEME */

const themeToggle =
    $("#theme-toggle");

const savedTheme =
    localStorage.getItem(
        "sidsphere-theme"
    );


if (savedTheme === "light") {

    document.body.classList.add(
        "light"
    );

}


function updateThemeIcon() {

    if (!themeToggle) return;

    const isLight =
        document.body.classList.contains(
            "light"
        );

    themeToggle.innerHTML =
        isLight

            ? '<i class="fa-solid fa-moon"></i>'

            : '<i class="fa-solid fa-sun"></i>';

}


updateThemeIcon();


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light"
            );

            const isLight =
                document.body.classList.contains(
                    "light"
                );

            localStorage.setItem(
                "sidsphere-theme",
                isLight
                    ? "light"
                    : "dark"
            );

            updateThemeIcon();

        }
    );

}


/* MOBILE MENU */

const menuToggle =
    $("#menu-toggle");

const navLinks =
    $("#navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "open"
            );

            const icon =
                menuToggle.querySelector(
                    "i"
                );

            const isOpen =
                navLinks.classList.contains(
                    "open"
                );

            if (icon) {

                icon.className =
                    isOpen
                        ? "fa-solid fa-xmark"
                        : "fa-solid fa-bars";

            }

        }
    );


    $$("#navLinks a").forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "open"
                    );

                    const icon =
                        menuToggle.querySelector(
                            "i"
                        );

                    if (icon) {

                        icon.className =
                            "fa-solid fa-bars";

                    }

                }
            );

        }
    );

}


/* SCROLL REVEAL */

const revealElements =
    $$(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);


/* SCROLL PROGRESS */

const progress =
    $(".scroll-progress");


function updateScrollProgress() {

    if (!progress) return;

    const documentHeight =
        document.documentElement
            .scrollHeight;

    const viewportHeight =
        document.documentElement
            .clientHeight;

    const scrollTop =
        window.scrollY;

    const maxScroll =
        documentHeight -
        viewportHeight;


    const percentage =
        maxScroll > 0

            ? (scrollTop / maxScroll) * 100

            : 0;


    progress.style.width =
        `${percentage}%`;

}


window.addEventListener(
    "scroll",
    updateScrollProgress,
    {
        passive: true
    }
);


updateScrollProgress();


/* BACK TO TOP */

const topButton =
    $("#top-button");


function updateTopButton() {

    if (!topButton) return;

    if (window.scrollY > 600) {

        topButton.classList.add(
            "show"
        );

    } else {

        topButton.classList.remove(
            "show"
        );

    }

}


window.addEventListener(
    "scroll",
    updateTopButton,
    {
        passive: true
    }
);


updateTopButton();


if (topButton) {

    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* CUSTOM CURSOR */

const cursor =
    $(".cursor");


if (
    cursor &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    window.addEventListener(
        "mousemove",
        (event) => {

            cursor.style.left =
                `${event.clientX}px`;

            cursor.style.top =
                `${event.clientY}px`;

        },
        {
            passive: true
        }
    );


    const interactiveElements =
        $$(
            "a, button, .skill-modern-card, .credential-card"
        );


    interactiveElements.forEach(
        (element) => {

            element.addEventListener(
                "mouseenter",
                () => {

                    cursor.style.width =
                        "32px";

                    cursor.style.height =
                        "32px";

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    cursor.style.width =
                        "20px";

                    cursor.style.height =
                        "20px";

                }
            );

        }
    );

}


/* PARTICLES */

const particleContainer =
    $(".particles");


function createParticles() {

    if (!particleContainer) return;


    const amount =
        window.innerWidth < 700
            ? 20
            : 35;


    particleContainer.innerHTML =
        "";


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );

        particle.className =
            "particle";


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.opacity =
            `${0.2 + Math.random() * 0.5}`;


        particle.style.animationDuration =
            `${8 + Math.random() * 15}s`;


        particle.style.animationDelay =
            `${Math.random() * -15}s`;


        particleContainer.appendChild(
            particle
        );

    }

}


createParticles();


/* CREDENTIAL IMAGE ERROR HANDLING */

$$(".credential-image img").forEach(
    (image) => {

        image.addEventListener(
            "error",
            () => {

                const parent =
                    image.closest(
                        ".credential-image"
                    );

                if (!parent) return;


                image.style.display =
                    "none";


                parent.classList.add(
                    "placeholder"
                );


                parent.innerHTML = `
                    <div>
                        <i class="fa-solid fa-image"></i>
                        <span>image unavailable</span>
                    </div>
                `;

            }
        );

    }
);


/* CURRENT YEAR */

const yearElement =
    $("#year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* SMOOTH ANCHOR OFFSET */

$$('a[href^="#"]').forEach(
    (link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                const navbarHeight =
                    document.querySelector(
                        ".navbar"
                    )?.offsetHeight || 75;


                const targetPosition =
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    navbarHeight;


                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }
        );

    }
);


/* PAGE LOAD */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);