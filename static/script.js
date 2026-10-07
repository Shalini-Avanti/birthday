document.addEventListener("DOMContentLoaded", function () {

    const hearts = document.querySelectorAll(".heart");

    hearts.forEach(function (heart) {

        heart.addEventListener("click", function () {

            // Create burst of hearts
            for (let i = 0; i < 15; i++) {

                const miniHeart = document.createElement("span");

                miniHeart.innerHTML = "♥";

                miniHeart.style.position = "fixed";
                miniHeart.style.left = heart.getBoundingClientRect().left + "px";
                miniHeart.style.top = heart.getBoundingClientRect().top + "px";

                miniHeart.style.color = "#ff4567";
                miniHeart.style.fontSize =
                    Math.random() * 15 + 10 + "px";

                miniHeart.style.pointerEvents = "none";
                miniHeart.style.zIndex = "9999";

                document.body.appendChild(miniHeart);

                const x =
                    (Math.random() - 0.5) * 300;

                const y =
                    (Math.random() - 0.5) * 300;

                miniHeart.animate(
                    [
                        {
                            transform: "translate(0,0) scale(1)",
                            opacity: 1
                        },
                        {
                            transform:
                                `translate(${x}px, ${y}px) scale(0)`,
                            opacity: 0
                        }
                    ],
                    {
                        duration: 900,
                        easing: "ease-out"
                    }
                );

                setTimeout(function () {
                    miniHeart.remove();
                }, 900);
            }


            // Fade the birthday page
            document.body.style.opacity = "0";
            document.body.style.transform = "scale(1.05)";

            setTimeout(function () {

                window.location.href = "/lunch";

            }, 900);

        });

    });

});