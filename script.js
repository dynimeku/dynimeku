// ===== ELEMEN =====
const gridNew = $("grid-terbaru");
const gridPop = $("grid-populer");
let genreAktif = "Semua";
let keyword = "";

// ===== KARTU: sekarang berupa link ke halaman download =====
function cardHTML(a){
  const bg = a.poster
    ? `url('${a.poster}') center/cover`
    : `linear-gradient(160deg,${a.color},#111)`;
  const huruf = a.poster ? "" : a.title.charAt(0);

  return `
    <a class="card" href="download.html?id=${a.id}">
      <div class="poster" style="background:${bg}">
        ${huruf}
        <span class="tag">${a.type}</span>
        <span class="rate">★ ${a.rating}</span>
      </div>
      <h3>${a.title}</h3>
    </a>`;
}

function filtered(){
  return animeList.filter(a =>
    (genreAktif === "Semua" || a.genre === genreAktif) &&
    a.title.toLowerCase().includes(keyword)
  );
}

function render(){
  const data = filtered();
  const terbaru = [...data].sort((a,b) => b.id - a.id);
  const populer = [...data].sort((a,b) => b.rating - a.rating);
  const kosong = '<p class="empty">Tidak ada judul ditemukan.</p>';
  gridNew.innerHTML = terbaru.length ? terbaru.map(cardHTML).join("") : kosong;
  gridPop.innerHTML = populer.length ? populer.map(cardHTML).join("") : kosong;
}

// ===== BANNER =====
// 0 = otomatis (rating tertinggi). Isi angka id untuk memilih manual.
const HERO_ID = 8;

function setHero(){
  const a = (HERO_ID && animeList.find(x => x.id === HERO_ID))
    || [...animeList].sort((x,y) => y.rating - x.rating)[0];

  const bg = a.banner
    ? `url("${a.banner}")`
    : `linear-gradient(120deg,${a.color},#111)`;

  $("hero").style.setProperty("--hero-bg", bg);
  $("hero-title").textContent = a.title;
  $("hero-desc").textContent = a.desc;
  $("hero-btn").onclick = () => { location.href = `download.html?id=${a.id}`; };
}

// ===== EVENT =====
document.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (chip){
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    genreAktif = chip.dataset.genre;
    render();
  }
});

$("search").addEventListener("input", (e) => {
  keyword = e.target.value.trim().toLowerCase();
  render();
});

$("burger").onclick = () => $("menu").classList.toggle("show");
$("menu").addEventListener("click", () => $("menu").classList.remove("show"));

// ===== MULAI =====
setHero();
render();