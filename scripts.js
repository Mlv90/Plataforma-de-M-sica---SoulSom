document.addEventListener("DOMContentLoaded", () => {
  const artistsData = [
    {
      name: "Henrique & Juliano",
      image: "./img/artista-henrique-juliano.jpg",
    },
    {
      name: "Jorge & Mateus",
      image: "./img/jorge e mateus.jpg",
    },
    {
      name: "Zé Neto & Cristiano",
      image: "./img/artista-ze-neto.jpg",
    },
    {
      name: "Gusttavo Lima",
      image: "./img/artista-gustavo-limma.jpg",
    },
    {
      name: "Luan Santana",
      image: "./img/artista-luan-santana.jpg",
    },
    {
      name: "Matheus & Kauan",
      image: "./img/artista-mateus-kauan.jpg",
    },
  ];

  const albumsData = [
    {
      name: "White Noise (Sleep & Relaxation Sounds)",
      artist: "Sleepy John",
      image: "./img/album-white-noise.jpg",
    },
    {
      name: "O Céu Explica Tudo (Ao Vivo)",
      artist: "Henrique & Juliano",
      image: "./img/album-ceu-explica.jpg",
    },
    {
      name: "Nada como um dia após o outro",
      artist: "Racionais",
      image: "./img/album-vida-loka.jpg",
    },
    {
      name: "HIT ME HARD AND SOFT",
      artist: "Billie Eilish",
      image: "./img/album-hit-me.jpg",
    },
    {
      name: "CAJU",
      artist: "Liniker",
      image: "./img/Caju.jpg",
    },
    {
      name: "Escândalo Íntimo",
      artist: "Luísa Sonza",
      image: "./img/Escandalo intimo.png",
    },
  ];

  const artistsGrid = document.querySelector(".artists-grid");
  const albumsGrid = document.querySelector(".albums-grid");
  const searchInput = document.querySelector("#search-input");

  function renderArtists(artists) {
    if (!artistsGrid) return;
    artistsGrid.innerHTML = "";

    artists.forEach((artist) => {
      const card = document.createElement("div");
      card.classList.add("artist-card");

      card.innerHTML = `
        <img src="${artist.image}" alt="Foto de ${artist.name}">
        <h3>${artist.name}</h3>
        <p>Artista</p>
      `;

      artistsGrid.appendChild(card);
    });
  }

  function renderAlbums(albums) {
    if (!albumsGrid) return;
    albumsGrid.innerHTML = "";

    albums.forEach((album) => {
      const card = document.createElement("div");
      card.classList.add("album-card");

      card.innerHTML = `
        <img src="${album.image}" alt="Capa do álbum ${album.name}">
        <h3>${album.name}</h3>
        <p>${album.artist}</p>
      `;

      albumsGrid.appendChild(card);
    });
  }

  // Renderização inicial dos itens
  renderArtists(artistsData);
  renderAlbums(albumsData);

  // Filtro de pesquisa dinâmica
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();

      const filteredArtists = artistsData.filter((artist) =>
        artist.name.toLowerCase().includes(term),
      );

      const filteredAlbums = albumsData.filter(
        (album) =>
          album.name.toLowerCase().includes(term) ||
          album.artist.toLowerCase().includes(term),
      );

      renderArtists(filteredArtists);
      renderAlbums(filteredAlbums);
    });
  }
});
