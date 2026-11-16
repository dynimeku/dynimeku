// ===== DATA CONTOH =====
// dl = link download. {n} otomatis diganti nomor episode.
// Kosongkan dl ("") kalau belum punya link.
const animeList = [
  {id:1, title:"Pedang Langit Abadi", genre:"Aksi", type:"Donghua", rating:8.7, eps:20, color:"#c0392b",
   desc:"Seorang pemuda desa menemukan pedang kuno dan memulai perjalanan menuju puncak dunia kultivasi.",
   video:"", dl:"https://drive.google.com/uc?export=download&id=1VuZTTFpYEdIYAiZLMc6zQqfJAwUM_Dca"},
  {id:2, title:"Kerajaan Bayangan", genre:"Fantasi", type:"Anime", rating:8.2, eps:12, color:"#6c3fb5",
   desc:"Sebuah kerajaan yang diselimuti kabut menyimpan rahasia kelam di balik tahtanya.",
   video:"", dl:"https://contoh.com/kerajaan-bayangan/eps-{n}.mp4"},
  {id:3, title:"Senja di Kota Tua", genre:"Romantis", type:"Anime", rating:7.9, eps:13, color:"#d35d8c",
   desc:"Dua sahabat lama bertemu kembali di kota kecil dan perasaan lama pun bangkit.",
   video:"", dl:"https://contoh.com/senja-kota-tua/eps-{n}.mp4"},
  {id:4, title:"Klub Tawa Sekolah", genre:"Komedi", type:"Anime", rating:7.5, eps:12, color:"#e0a030",
   desc:"Kekacauan sehari-hari di klub paling aneh di sekolah.",
   video:"", dl:""},
  {id:5, title:"Naga Giok Perkasa", genre:"Fantasi", type:"Donghua", rating:8.9, eps:30, color:"#1f8a70",
   desc:"Legenda naga giok bangkit kembali dan mengubah takdir tiga sekte besar.",
   video:"", dl:"https://contoh.com/naga-giok/eps-{n}.mp4"},
  {id:6, title:"Ksatria Cahaya", genre:"Aksi", type:"Anime", rating:8.0, eps:26, color:"#2c6fbb",
   desc:"Pasukan ksatria muda melawan kegelapan yang mengancam perbatasan.",
   video:"", dl:"https://contoh.com/ksatria-cahaya/eps-{n}.mp4"},
  {id:7, title:"Hati yang Tertinggal", genre:"Romantis", type:"Donghua", rating:8.1, eps:20, color:"#b0396b",
   desc:"Kisah cinta lintas zaman antara seorang tabib dan jenderal perang.",
   video:"", dl:""},
  {id:8, title:"Penghentian Waktu", genre:"Romantis", type:"Drama", rating:9.3, eps:10, color:"#d9822b",
   desc:"Murid yang bisa menghentikan waktu untuk melakukan seks",
   video:"", dl:["https://drive.google.com/uc?export=download&id=1X4t-rIhOoRQhyoYSxSZGPr9B04trtk38",
                "https://drive.google.com/uc?export=download&id=1o-mN-vZjK0_KOpIJ13zyz4YJICU9mMu0",
                "https://drive.google.com/uc?export=download&id=1J7QwoE-elZhAI8yhqZQw3sWwo2mqAeDR",
                "https://drive.google.com/uc?export=download&id=1Q8kfjh2rYetY6s4eZXpbboRaIWDYiUEb",
                "https://drive.google.com/uc?export=download&id=1e6g5R59D_qcq9ZtFB0xUXmJA5AX1aI5r",
                "https://drive.google.com/uc?export=download&id=1ylPijf4oPaKt_6kFwQOZGOK5_tKHRQ8G",
                "https://drive.google.com/uc?export=download&id=1Ic6IpbNCduoBhFlbktsvEgMCiEWWPBu8",
                "https://drive.google.com/uc?export=download&id=1CYjstifLCaOW5BlT_LYjPOdXF2sgnrJY"],
   alt:[
   {nama:"Terabox", url:"https://sfl.gl/HOjKef"},
   {nama:"uc browser", url:[
      "https://sfl.gl/R5MO4",
      "https://drive.google.com/uc?export=download&id=1o-mN-vZjK0_KOpIJ13zyz4YJICU9mMu0",
      "https://drive.google.com/uc?export=download&id=KODE3"
   ]}],
   banner:"images/penghentian-waktu.jpg",
   poster:"images/penghentian-waktu-poster.jpg"},
];

// ===== ELEMEN =====
const $ = (id) => document.getElementById(id);
const gridNew = $("grid-terbaru");
const gridPop = $("grid-populer");
let genreAktif = "Semua";
let keyword = "";
let currentAnime = null;

// ===== RENDER KARTU =====
function cardHTML(a){
  // Kalau ada poster pakai gambar, kalau tidak pakai gradasi + huruf
  const bg = a.poster
    ? `url('${a.poster}') center/cover`
    : `linear-gradient(160deg,${a.color},#111)`;
  const huruf = a.poster ? "" : a.title.charAt(0);

  return `
    <div class="card" data-id="${a.id}">
      <div class="poster" style="background:${bg}">
        ${huruf}
        <span class="tag">${a.type}</span>
        <span class="rate">★ ${a.rating}</span>
      </div>
      <h3>${a.title}</h3>
    </div>`;
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

// Pilih judul yang jadi banner.
// 0 = otomatis (rating tertinggi). Isi angka id untuk memilih manual, misal 5.
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
  $("hero-btn").onclick = () => openModal(a.id);
}

// Mengubah satu sumber link menjadi link untuk episode n.
// - Teks dengan {n}  -> {n} diganti nomor episode
// - Daftar [ ... ]   -> ambil urutan ke-n
function getLink(src, n){
  if (!src) return "";
  if (Array.isArray(src)) return src[n-1] || "";
  return String(src).split("{n}").join(n);
}

// Link download utama
function getDL(a, n){
  return getLink(a.dl, n);
}

// Daftar link alternatif (yang kosong dibuang)
function getAlts(a, n){
  if (!a.alt) return [];
  return a.alt
    .map(s => ({ nama: s.nama, url: getLink(s.url, n) }))
    .filter(s => s.url);
}

// ===== MODAL & PEMUTAR =====
function openModal(id){
  currentAnime = animeList.find(a => a.id === id);
  const a = currentAnime;
  $("m-title").textContent = a.title;
  $("m-meta").textContent = `${a.type} • ${a.genre} • ★ ${a.rating} • ${a.eps} Episode`;
  $("m-desc").textContent = a.desc;

  // Tiap episode: tombol "Eps N" + tombol kecil ⬇ (kalau link ada)
  $("eps").innerHTML = Array.from({length:a.eps}, (_, i) => {
    const n = i + 1;
    const link = getDL(a, n);
    return `<div class="ep-wrap">
      <button class="ep" data-ep="${n}">Eps ${n}</button>
      ${link ? `<a class="ep-dl" href="${link}" target="_blank" rel="noopener" download title="Download Eps ${n}">⬇</a>` : ""}
    </div>`;
  }).join("");

  playEpisode(1);
  $("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function playEpisode(n){
  document.querySelectorAll(".ep").forEach(b =>
    b.classList.toggle("active", Number(b.dataset.ep) === n));
  $("player").src = currentAnime.video ? currentAnime.video : "about:blank";

  // Tombol download utama
  const link = getDL(currentAnime, n);
  const btn = $("dl-main");
  if (link){
    btn.href = link;
    btn.textContent = `⬇ Download Episode ${n}`;
    btn.classList.remove("off");
  } else {
    btn.removeAttribute("href");
    btn.textContent = `⬇ Download Episode ${n} (link belum diisi)`;
    btn.classList.add("off");
  }

  // Tombol download alternatif
  $("dl-alt").innerHTML = getAlts(currentAnime, n).map(s =>
    `<a href="${s.url}" target="_blank" rel="noopener">⬇ ${s.nama}</a>`
  ).join("");
}

function closeModal(){
  $("modal").classList.remove("open");
  $("player").src = "about:blank";
  document.body.style.overflow = "";
}

// ===== EVENT =====
document.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) openModal(Number(card.dataset.id));

  const ep = e.target.closest(".ep");
  if (ep) playEpisode(Number(ep.dataset.ep));

  const chip = e.target.closest(".chip");
  if (chip){
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    genreAktif = chip.dataset.genre;
    render();
  }
});

$("close").onclick = closeModal;
$("modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

$("search").addEventListener("input", (e) => {
  keyword = e.target.value.trim().toLowerCase();
  render();
});

$("burger").onclick = () => $("menu").classList.toggle("show");
$("menu").addEventListener("click", () => $("menu").classList.remove("show"));

// Tema gelap/terang (tersimpan)
function applyTheme(t){ document.body.classList.toggle("light", t === "light"); }
try { applyTheme(localStorage.getItem("tema")); } catch(e){}
$("theme-btn").onclick = () => {
  const light = !document.body.classList.contains("light");
  applyTheme(light ? "light" : "dark");
  try { localStorage.setItem("tema", light ? "light" : "dark"); } catch(e){}
};

// ===== MULAI =====
setHero();
render();