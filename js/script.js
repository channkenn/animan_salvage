document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("urlForm");
  const urlInput = document.getElementById("urlInput");
  const imageContainer = document.getElementById("imageContainer");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = urlInput.value.trim();
    const match = url.match(/board\/(\d+)/);

    if (!match) {
      alert("無効なURLです。");
      return;
    }

    const id = match[1];
    imageContainer.innerHTML = "";

    for (let i = 1; i <= 200; i++) {
      const imgSrc = `https://bbs.animanch.com/img/${id}/${i}`;
      const imgElement = document.createElement("img");
      imgElement.src = imgSrc;
      imgElement.alt = `Image ${i}`;
      imgElement.loading = "lazy";

      // クリック時に別タブで開く
      imgElement.addEventListener("click", () => {
        window.open(imgSrc, "_blank");
      });

      const imgWrapper = document.createElement("div");
      imgWrapper.className = "image-panel";

      const label = document.createElement("span");
      label.textContent = i;

      imgWrapper.appendChild(imgElement);
      imgWrapper.appendChild(label);
      imageContainer.appendChild(imgWrapper);
    }
  });
});
