// ===== DATA CONTOH =====
// dl = link download. {n} otomatis diganti nomor episode.
// Kosongkan dl ("") kalau belum punya link.
const animeList = [
  {id:1, title:"Hypnotic glasses", genre:"Akction", type:"Drama", rating:8.7, eps:3, color:"#c0392b",
   desc:"The file in zip format and is password-protected.PW:dynime",
   video:"", dl:["https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x"],
   alt:[
     {nama:"terabox", url:["https://sfl.gl/KXuge",
                           "https://sfl.gl/DUKT7",
                           "https://sfl.gl/IMPBq"]}
   ],
  poster:"images/hypnotic.jpg"},
  //My Girlfriend helped me fuck her best friend
  {id:2, title:"My Girlfriend helped me fuck her best friend", genre:"Romance", type:"Drama", rating:8.8, eps:2, color:"#6c3fb5",
   desc:"The file in zip format and is password-protected.PW:dynime",
   video:"", dl:["https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale"],
   alt:[
     {nama:"terabox", url:["https://sfl.gl/2pid",
                           "https://sfl.gl/355vnf"]}
   ],
  poster:"images/my-girl.jpg"},
  //Love assistant
  {id:3, title:"Love Assistant", genre:"Romance", type:"Drama", rating:9.1, eps:2, color:"#d35d8c",
   desc:"The file in zip format and is password-protected.PW:dynime",
   video:"", dl:["https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale"],
   alt:[
     {nama:"terabox", url:["https://sfl.gl/Aacj20",
                           "https://sfl.gl/u28g5OI"]}
   ],
  poster:"images/love-assistant.jpg"},
  //I turned my bro into a bitch
  {id:4, title:"I turned my bro into a bitch", genre:"Romance", type:"Drama", rating:8.5, eps:7, color:"#e0a030",
   desc:"The file in zip format and is password-protected.PW:dynime",
   video:"", dl:["https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x"],
   alt:[
     {nama:"terabox", url:["https://sfl.gl/N2YO01",
                 "https://sfl.gl/h2tE5ZR",
                 "https://sfl.gl/2ISySUH",
                 "https://sfl.gl/thPt",
                 "https://sfl.gl/eM9CNKMK",
                 "https://sfl.gl/Ap9Jl5",
                 "https://sfl.gl/NThUwF9J"]}
   ],
  poster:"images/into-bitch.jpg"},
  //collage girl
  {id:5, title:"College Girl", genre:"School", type:"Drama", rating:9.6, eps:6, color:"#1f8a70",
   desc:"The file is in zip format and is password-protected.PW:dynimeku",
   video:"", dl:["https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale"],
  alt:[
    {nama:"terabox",url:["https://sfl.gl/0LKgCTJ8",
                         "https://sfl.gl/eMbU",
                         "https://sfl.gl/CeZE",
                         "https://sfl.gl/XBIjmNri",
                         "https://sfl.gl/RcnZNe5",
                         "https://sfl.gl/NGhw1P"]},
    {nama:"uc browser",url:[]}],
  poster:"images/college-girl.jpg"},
  //Conquering mother
  {id:6, title:"Conquering the Mother", genre:"Romance", type:"Drama", rating:8.9, eps:6, color:"#2c6fbb",
   desc:"The file is in zip format and is Pessword-protected.PW:dynime",
   video:"", dl:["https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale"],
  alt:[
    {nama:"terabox", url:["https://sfl.gl/1A6dkx",
                          "https://sfl.gl/51i1rvhm",
                          "https://sfl.gl/ietWPA",
                          "https://sfl.gl/vKnkhI",
                          "https://sfl.gl/qGACrXkp",
                          "https://sfl.gl/hsgUIv"]},
    {nama:"uc browser", url:[]}],
  poster:"images/conquering-mother.jpg"},
  // A mother's desire
  {id:7, title:"A mother's desire", genre:"Romance", type:"Drama", rating:9.1, eps:9, color:"#b0396b",
   desc:"The file is in zip format and is password-protected. PW:dynime",
   video:"", dl:["https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x"],
   alt:[
  {nama:"terabox", url:["https://sfl.gl/w0vvd9U",
                        "https://sfl.gl/i7jiFQ",
                        "https://sfl.gl/stXDpcKx",
                        "https://sfl.gl/B4GVm",
                        "https://sfl.gl/695q",
                 "https://sfl.gl/uVkC3cZB",
                 "https://sfl.gl/xJnVUl1H",
                 "https://sfl.gl/uxT2",
                 "https://sfl.gl/g1BK"]},
  {nama:"uc browser",url:[""]}
   ],
  banner:"images/hasrat-seorang-ibu.jpg",
  poster:"images/hasrat-seorang-ibu-poster.jpg"},
  //Time Stoppage
  {id:8, title:"Time Stoppage", genre:"Romance", type:"Drama", rating:9.3, eps:10, color:"#d9822b",
   desc:"The file is in zip format and is password-protected. PW:dynime",
   video:"", dl:["https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale"],
   alt:[
   {nama:"Terabox", url:["https://sfl.gl/baQloDjH",
                         "https://sfl.gl/jwbNfOw",
                         "https://sfl.gl/nuDI35",
                         "https://sfl.gl/rS5PfnVd",
                         "https://sfl.gl/cZFS",
                         "https://sfl.gl/2aYZf",
                         "https://sfl.gl/vD6U",
                         "https://sfl.gl/UekX3E",
                         "https://sfl.gl/ReOr",
                         "https://sfl.gl/dXeS"]}],
   banner:"images/penghentian-waktu.jpg",
   poster:"images/penghentian-waktu-poster.jpg"},
  
  {id:9, title:"Onlyfans", genre:"Romance", type:"Drama", rating:9.1, eps:9, color:"#b0396b",
   desc:"The file is in zip format and is password-protected. PW:dynime",
   video:"", dl:["https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x"],
   alt:[
  {nama:"terabox", url:[]}]}
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