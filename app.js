const form = document.getElementById("itemForm");
const cards = document.getElementById("cards");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleInput = document.getElementById("title");
  const descInput = document.getElementById("description");
  const imgInput = document.getElementById("image");

  const title = titleInput.value.trim();
  const description = descInput.value.trim();
  const imageUrl = imgInput.value.trim();

  if (title === "") {
    return;
  }

  const card = document.createElement("article");
  card.className = "card";

  if (imageUrl !== "") {
    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = title;
    card.appendChild(image);
  }

  const content = document.createElement("div");
  content.className = "card-content";

  const h3 = document.createElement("h3");
  h3.className = "card-title";
  h3.textContent = title;

  const p = document.createElement("p");
  p.textContent = description;

  content.appendChild(h3);
  content.appendChild(p);

  card.appendChild(content);

  cards.prepend(card);

  form.reset();
  titleInput.focus();
});
