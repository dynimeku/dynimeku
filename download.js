const params = new URLSearchParams(location.search);
const id = Number(params.get("id"));
const a = animeList.find(x => x.id === id);
const box = $("page");

if (!a){
  box.innerHTML = `<p class="empty">Judul tidak ditemukan.</p>`;
} else {
  document.title = `Download ${a.title} - DyNimeKu`;

  const posterBg = a.poster
    ? `url('${a.poster}') center/cover`
    : `linear-gradient(160deg,${a.color},#111)`;

  // Teks tombol link utama. Bisa diubah per judul lewat field dlNama
  // contoh: dlNama:"Link 1"
  const labelUtama = a.dlNama || "Download";

  // Satu baris per episode
  const rows = Array.from({length:a.eps}, (_, i) => {
    const n = i + 1;
    const main = getDL(a, n);
    const alts = getAlts(a, n);
    const tombol = [];

    if (main){
      tombol.push(`<a class="btn-dl" href="${main}" target="_blank" rel="noopener noreferrer">⬇ ${labelUtama}</a>`);
    }
    alts.forEach(s => {
      tombol.push(`<a class="btn-alt" href="${s.url}" target="_blank" rel="noopener noreferrer">⬇ ${s.nama}</a>`);
    });

    return `
      <div class="eps-row">
        <span class="eps-label">Episode ${n}</span>
        <div class="eps-links">
          ${tombol.length ? tombol.join("") : `<span class="nolink">Link belum tersedia</span>`}
        </div>
      </div>`;
  }).join("");

  // Pemutar hanya tampil kalau field video diisi (tidak ada kotak hitam)
  const player = a.video
    ? `<div class="player"><iframe src="${a.video}" allowfullscreen></iframe></div>`
    : "";

  box.innerHTML = `
    <div class="detail-top">
      <div class="detail-poster" style="background:${posterBg}">${a.poster ? "" : a.title.charAt(0)}</div>
      <div class="detail-info">
        <h1>${a.title}</h1>
        <p class="meta">${a.type} • ${a.genre} • ★ ${a.rating} • ${a.eps} Episode</p>
        <p>${a.desc}</p>
      </div>
    </div>
    ${player}
    <h2 class="title">Download</h2>
    <div class="eps-list">${rows}</div>`;
}