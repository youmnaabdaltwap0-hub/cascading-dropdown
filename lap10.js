document.addEventListener("DOMContentLoaded", () => {
    let bandSelect = document.getElementById("band");
    let artistSelect = document.getElementById("artist");

    fetch("./lap10.json")
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach(band => {
                let option = document.createElement("option");
                option.value = band;
                option.textContent = band;
                bandSelect.appendChild(option);
            });

            bandSelect.addEventListener("change", () => {
                artistSelect.innerHTML = "<option>Please select</option>";
                let selectedBand = bandSelect.value;
                if (selectedBand !== "Please select") {
                    data[selectedBand].forEach(artist => {
                        let option = document.createElement("option");
                        option.value = artist.link;
                        option.textContent = artist.name;
                        artistSelect.appendChild(option);
                    });
                }
            });

            artistSelect.addEventListener("change", () => {
                let link = artistSelect.value;
                if (link !== "Please select") {
                    window.open(link, "_blank");
                }
            });
        });

    // نجوم متحركة في الخلفية
    let canvas = document.getElementById("stars");
    let ctx = canvas.getContext("2d");
    let stars = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    for (let i = 0; i < 100; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            speed: Math.random() * 0.5
        });
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
        });
        requestAnimationFrame(drawStars);
    }
    drawStars();
});
