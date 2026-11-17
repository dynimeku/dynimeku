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
  //collage girl
  {id:5, title:"College Girl", genre:"School", type:"Drama", rating:9.6, eps:6, color:"#1f8a70",
   desc:"The file is in zip format and is password-protected.PW:dynimeku",
   video:"", dl:["https://sfl.gl/Xzb6",
                 "https://sfl.gl/7GraYrq",
                 "https://sfl.gl/iyNDHG",
                 "https://sfl.gl/56AFdZG",
                 "https://sfl.gl/7BDn9a",
                 "https://sfl.gl/mpT1Je"],
  alt:[
    {nama:"terabox",url:[]},
    {nama:"uc browser",url:[]}],
  poster:"images/college-girl.jpg"},
  //Conquering mother
  {id:6, title:"Conquering Mother", genre:"Romance", type:"Drama", rating:8.9, eps:6, color:"#2c6fbb",
   desc:"The file is in zip format and is Pessword-protected.PW:dynime",
   video:"", dl:["https://sfl.gl/YBY5",
                 "https://sfl.gl/PoiG5qL",
                 "https://sfl.gl/VoLfnb68",
                 "https://sfl.gl/NVgn",
                 "https://sfl.gl/NkJIR",
                 "https://sfl.gl/OPQ7"],
  alt:[
    {nama:"terabox", url:[]},
    {nama:"uc browser", url:[]}],
  poster:"images/conquering-mother.jpg"},
  // A mother's desire
  {id:7, title:"A mother's desire", genre:"Romance", type:"Drama", rating:9.1, eps:9, color:"#b0396b",
   desc:"The file is in zip format and is password-protected. PW:dynime",
   video:"", dl:["https://sfl.gl/w0vvd9U",
                 "https://sfl.gl/i7jiFQ",
                 "https://sfl.gl/stXDpcKx",
                 "https://sfl.gl/B4GVm",
                 "https://sfl.gl/695q",
                 "https://sfl.gl/uVkC3cZB",
                 "https://sfl.gl/xJnVUl1H",
                 "https://sfl.gl/uxT2",
                 "https://sfl.gl/g1BK"],
   alt:[
  {nama:"terabox", url:[""]},
  {nama:"uc browser",url:[""]}
   ],
  banner:"images/hasrat-seorang-ibu.jpg",
  poster:"images/hasrat-seorang-ibu-poster.jpg"},
  //Time Stoppage
  {id:8, title:"Time Stoppage", genre:"Romance", type:"Drama", rating:9.3, eps:10, color:"#d9822b",
   desc:"The file is in zip format and is password-protected. PW:dynime",
   video:"", dl:["https://sfl.gl/9jJBMxQ",
                 "https://sfl.gl/MJNp1HgO",
                 "https://sfl.gl/QoJgRcha",
                 "https://sfl.gl/UCOHZ",
                 "https://sfl.gl/Ez0s2V",
                 "https://sfl.gl/bU9vig",
                 "https://sfl.gl/XYd2zd5",
                 "https://sfl.gl/P3o9YiSz",
                 "https://sfl.gl/9DrMSpbE",
                 "https://sfl.gl/4QepT"],
   alt:[
   {nama:"Terabox", url:["https://1024terabox.com/s/1XhELszL3JRw3SH8t4cdTww",
                         "https://1024terabox.com/s/1fXef4Di966i2de0xfuUM1A",
                        "https://1024terabox.com/s/1P8dW-2ohsiP7ppzyxaR1Cg",
                        "https://1024terabox.com/s/1OovhqQO19V2_D99UdjArSg",
                        "https://1024terabox.com/s/1Dtmf6f0g--HC1WBqZYsprQ",
                        "https://1024terabox.com/s/1DA1RaKxmHCfCbxbAZ0haDA",
                        "https://1024terabox.com/s/1LXhX0JSA5RFSb_PbUzMnjw",
                        "https://1024terabox.com/s/1eVmCgF5iS9MPVnxczY3h7Q",
                        "https://1024terabox.com/s/1A2Szt8Vbu1v3q8eZxroT8g",
                        "https://1024terabox.com/s/1MFrR7ndWos7f7FgFcpZJow"]},
   {nama:"uc browser", url:["https://uc-share.com/s/8b84ec62dab44?la=id",
                            "https://uc-share.com/s/d0964104b2d04?la=id",
                            "https://uc-share.com/s/6d894dd1d09d4?la=id",
                            "https://uc-share.com/s/fca9dbb5e78a4?la=id",
                            "https://uc-share.com/s/bbff023829b34?la=id",
                            "https://uc-share.com/s/a093167a32ee4?la=id",
                            "https://uc-share.com/s/dea2ce0691434?la=id",
                            "https://uc-share.com/s/3c57a82846904?la=id",
                            "https://uc-share.com/s/90403b50537f4?la=id",
                            "https://uc-share.com/s/4a9e0b10f5584?la=id"
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