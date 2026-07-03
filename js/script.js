window.onload = () => {

    const title = document.querySelector(".title");
    const line1 = document.querySelector(".line1");
    const line2 = document.querySelector(".line2");

    title.style.transition = "opacity 2s ease";
    line1.style.transition = "opacity 2s ease";
    line2.style.transition = "opacity 2s ease";

    setTimeout(() => {

        title.style.opacity = "1";

    }, 800);

    setTimeout(() => {

        line1.style.opacity = "1";

    }, 2800);

    setTimeout(() => {

        line2.style.opacity = "1";

    }, 5000);

};
