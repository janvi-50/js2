document.addEventListener("DOMContentLoaded", () => {
    const featuredImage = document.querySelector("figure img");
    const figcaption = document.querySelector("figcaption");

    // Array of image data
    const images = [
        { src: "images/flowers-pink-large.jpg", thumb: "images/flowers-pink-small.jpg", caption: "Beautiful Pink Flowers" },
        { src: "images/flowers-purple-large.jpg", thumb: "images/flowers-purple-small.jpg", caption: "Lovely Purple Flowers" },
        { src: "images/flowers-red-large.jpg", thumb: "images/flowers-red-small.jpg", caption: "Radiant Red Flowers" },
        { src: "images/flowers-white-large.jpg", thumb: "images/flowers-white-small.jpg", caption: "Elegant White Flowers" },
        { src: "images/flowers-yellow-large.jpg", thumb: "images/flowers-yellow-small.jpg", caption: "Bright Yellow Flowers" }
    ];

    // Dynamically create thumbnails
    const thumbnailList = document.querySelector("ul");
    thumbnailList.innerHTML = ""; // Clear existing thumbnails

    images.forEach((image, index) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = image.thumb;
        img.alt = image.caption;
        img.width = 240;
        img.height = 160;

        img.addEventListener("click", () => {
            featuredImage.src = image.src;
            figcaption.textContent = image.caption;
            document.querySelectorAll("ul li img").forEach(t => t.classList.remove("active"));
            img.classList.add("active");
        });

        li.appendChild(img);
        thumbnailList.appendChild(li);
    });

    // Set initial featured image
    featuredImage.src = images[0].src;
    figcaption.textContent = images[0].caption;
    document.querySelector("ul li img").classList.add("active"); // Highlight the first thumbnail
});
