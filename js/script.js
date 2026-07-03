window.onload = () => {

    const text = document.querySelector(".hero-text");

    text.style.opacity = "0";

    text.style.transition = "opacity 2s ease";

    setTimeout(() => {

        text.style.opacity = "1";

    }, 800);

};
