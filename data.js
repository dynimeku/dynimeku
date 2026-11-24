// ===== DATA CONTOH =====
// dl = link download. {n} otomatis diganti nomor episode.
// Kosongkan dl ("") kalau belum punya link.
const animeList = [
  {id:1, title:"Hypnotic glasses", genre:"Action", type:"Drama", rating:8.7, eps:3, color:"#c0392b",
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
  {id:7, title:"A mother's desire", genre:"Romance", type:"Drama", rating:9.1, eps:10, color:"#b0396b",
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
  {nama:"terabox", url:["https://sfl.gl/w0vvd9U",
                        "https://sfl.gl/i7jiFQ",
                        "https://sfl.gl/stXDpcKx",
                        "https://sfl.gl/B4GVm",
                        "https://sfl.gl/695q",
                 "https://sfl.gl/uVkC3cZB",
                 "https://sfl.gl/xJnVUl1H",
                 "https://sfl.gl/uxT2",
                 "https://sfl.gl/g1BK",
                       "https://sfl.gl/FDUH8Tk"]},
  {nama:"uc browser",url:[""]}
   ],
  banner:"images/hasrat-seorang-ibu.jpg",
  poster:"images/a-mother.jpg"},
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
  
  {id:9, title:"OGY-040", genre:"Jav", type:"Movie", rating:9.1, eps:2, color:"#b0396b",
   desc:"The file is in zip format and is password-protected. PW:dynime",
   video:"", dl:["https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale"],
   alt:[
  {nama:"terabox", url:["https://sfl.gl/dX4FMhY",
                        "https://sfl.gl/LSZcXTF"]}],
  poster:"images/hoshimura-rr.jpg"},

  {id:10, title:"Kitty2002102", genre:"Onlyfans", type:"Onlyfans", rating:9.0, eps:3, color:"#b0396b",
   desc:"The file is in zip format and is password-protected. PW:dynime",
   video:"", dl:["https://bit.ly/4fLi79x",
                 "https://bit.ly/auctionr-sale",
                 "https://bit.ly/4fLi79x"],
   alt:[
  {nama:"terabox", url:["https://sfl.gl/tJRJpbWN",
                        "https://sfl.gl/SITsCjZ",
                        "https://sfl.gl/rCITRDZ"]}],
  poster:"images/kityy.jpg"}
];
// ===== FUNGSI BERSAMA (dipakai semua halaman) =====
const $ = (id) => document.getElementById(id);

// Mengubah satu sumber link menjadi link untuk episode n.
//  - Teks dengan {n}  -> {n} diganti nomor episode
//  - Daftar [ ... ]   -> ambil urutan ke-n
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

// Tema gelap/terang (tersimpan, berlaku di semua halaman)
function applyTheme(t){ document.body.classList.toggle("light", t === "light"); }
try { applyTheme(localStorage.getItem("tema")); } catch(e){}
const themeBtn = $("theme-btn");
if (themeBtn){
  themeBtn.onclick = () => {
    const light = !document.body.classList.contains("light");
    applyTheme(light ? "light" : "dark");
    try { localStorage.setItem("tema", light ? "light" : "dark"); } catch(e){}
  };
}