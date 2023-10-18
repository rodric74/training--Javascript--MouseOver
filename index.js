window.addEventListener("mousemove", (e) => {
  //   console.log(e.x);
  cursor.style.top = e.y + "px";
  cursor.style.left = e.x + "px";

  mouse1.style.top = e.y + "px";
  mouse1.style.left = e.x + "px";

  mouse2.style.top = e.y + "px";
  mouse2.style.left = e.x + "px";
});

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
