window.onload = () => {

    const title = document.querySelector(".title");
    const quote = document.querySelector(".quote");

    title.style.transition = "opacity 2s ease";
    quote.style.transition = "opacity 2s ease";

    setTimeout(() => {
        title.style.opacity = "1";
    }, 1000);

    setTimeout(() => {
        quote.style.opacity = "1";
    }, 2500);

};
