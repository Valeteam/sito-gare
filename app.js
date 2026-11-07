/* Calendario Rally 2026 – logica
   Dati base: data.js (GARE, ALTRE_GARE). Le modifiche fatte dall'interfaccia
   vengono salvate in localStorage e possono essere esportate in un nuovo data.js. */
const KEY = "rally2026:gare";
const MESI = ["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"];
const TIPI = { moderne: "Moderne", storiche: "Storiche" };
const MAX_LOC = 3;

const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));
const toDate = s => { const [y, m, g] = s.split("-").map(Number); return new Date(y, m - 1, g); };
const clone = o => JSON.parse(JSON.stringify(o));

/* ---------- dati ---------- */
let gare = load();
function load() {
  try { const s = localStorage.getItem(KEY); if (s) return JSON.parse(s); } catch (e) {}
  return clone(GARE);
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(gare)); }
  catch (e) { alert("Salvataggio non riuscito (spazio del browser pieno). Esporta data.js per non perdere le modifiche."); }
}

/* ---------- elenco ---------- */
let filtroTipo = "all";
const q = $("q");
const sorted = () => [...gare].sort((a, b) => (!a.inizio) - (!b.inizio) || (a.inizio || "").localeCompare(b.inizio || ""));

function dateBlock(g) {
  if (!g.inizio) return '<div class="date nodate"><b>Data</b><span>da definire</span></div>';
  const a = toDate(g.inizio), b = toDate(g.fine || g.inizio);
  if (+a === +b) return `<div class="date"><b>${a.getDate()}</b><span>${MESI[a.getMonth()]}</span></div>`;
  if (a.getMonth() === b.getMonth()) return `<div class="date"><b>${a.getDate()}–${b.getDate()}</b><span>${MESI[a.getMonth()]}</span></div>`;
  return `<div class="date"><b>${a.getDate()} ${MESI[a.getMonth()]}</b><span>→ ${b.getDate()} ${MESI[b.getMonth()]}</span></div>`;
}

function locCol(l, i, nome) {
  const img = l.img
    ? `<button class="shot" type="button" data-zoom="${esc(nome)} – Location ${i + 1}"><img loading="lazy" src="${esc(l.img)}" alt="Vista satellitare, location ${i + 1}: ${esc(nome)}"></button>`
    : '<div class="noimg">Nessuna immagine</div>';
  const link = l.link
    ? `<a class="btn" href="${esc(l.link)}" target="_blank" rel="noopener">Apri su Google Maps</a>`
    : '<span class="btn off">Non indicata</span>';
  return `<div class="loc"><h4>Location ${i + 1}</h4>${img}${link}</div>`;
}

function card(g, prossima) {
  const meta = [
    g.provincia ? `<li>${esc(g.provincia)}</li>` : "",
    g.km != null && g.km !== "" ? `<li>${esc(g.km)} km</li>` : "",
    ...(g.tipo || []).map(t => `<li class="t">${TIPI[t]}</li>`)
  ].join("");
  let n = (g.location || []).length;
  while (n > 0 && !g.location[n - 1].link && !g.location[n - 1].img) n--;
  const locs = n
    ? `<div class="locs">${g.location.slice(0, n).map((l, i) => locCol(l, i, g.nome)).join("")}</div>`
    : '<p class="nolocs">Location non ancora inserite.</p>';
  return `<article class="race${prossima ? " is-next" : ""}" data-tipo="${(g.tipo || []).join(" ")}" data-t="${esc((g.nome + " " + (g.provincia || "")).toLowerCase())}">
    <div class="head">${dateBlock(g)}<div class="title"><h3>${esc(g.nome)}</h3><ul class="meta">${meta}</ul></div>
    <button class="edit" type="button" data-edit="${esc(g.id)}" aria-label="Modifica ${esc(g.nome)}">Modifica</button></div>
    ${locs}</article>`;
}

function render() {
  const oggi = new Date(); oggi.setHours(0, 0, 0, 0);
  const tutte = sorted();
  const prossima = tutte.find(g => g.inizio && toDate(g.fine || g.inizio) >= oggi);
  $("grid").innerHTML = tutte.filter(g => g.inizio).map(g => card(g, g === prossima)).join("");
  const senza = tutte.filter(g => !g.inizio);
  $("grid2").innerHTML = senza.map(g => card(g, false)).join("");
  $("undated").hidden = !senza.length;
  $("others").innerHTML = ALTRE_GARE.map(t => `<li>${esc(t)}</li>`).join("");

  const nx = $("next");
  if (prossima) {
    const giorni = Math.round((toDate(prossima.inizio) - oggi) / 864e5);
    const quando = giorni > 0 ? `tra ${giorni} ${giorni === 1 ? "giorno" : "giorni"}` : "in corso";
    nx.innerHTML = `<b>Prossima gara: ${esc(prossima.nome)}</b><span>${quando}</span>`;
    nx.hidden = false;
  } else nx.hidden = true;
  applicaFiltri();
}

function applicaFiltri() {
  const term = q.value.trim().toLowerCase();
  let visibili = 0;
  document.querySelectorAll(".race").forEach(c => {
    const ok = (filtroTipo === "all" || c.dataset.tipo.split(" ").includes(filtroTipo)) && (!term || c.dataset.t.includes(term));
    c.hidden = !ok; if (ok) visibili++;
  });
  $("count").textContent = visibili === 1 ? "1 gara" : visibili + " gare";
  $("empty").hidden = visibili > 0;
}

$("chips").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  filtroTipo = b.dataset.f;
  document.querySelectorAll("#chips button").forEach(x => x.setAttribute("aria-pressed", x === b));
  applicaFiltri();
});
q.addEventListener("input", applicaFiltri);

/* ---------- ingrandimento immagine ---------- */
const lb = $("lb");
document.addEventListener("click", e => {
  const s = e.target.closest(".shot"); if (!s) return;
  $("lbimg").src = s.querySelector("img").src; $("lbimg").alt = s.dataset.zoom; lb.showModal();
});
lb.addEventListener("click", e => { if (e.target === lb || e.target.id === "lbx") lb.close(); });

/* ---------- aggiungi / modifica / elimina ---------- */
const ed = $("ed");
let bozza = null;   // { id|null, location:[{link,img}] }

function normalizzaLink(v) {
  v = v.trim();
  return v && !/^https?:\/\//i.test(v) ? "https://" + v : v;
}

// riduce l'immagine scelta (max 800 px) e la restituisce come data URL
function ridimensiona(file) {
  return new Promise((ok, ko) => {
    const r = new FileReader();
    r.onerror = ko;
    r.onload = () => {
      const im = new Image();
      im.onerror = ko;
      im.onload = () => {
        const k = Math.min(1, 800 / Math.max(im.width, im.height));
        const c = document.createElement("canvas");
        c.width = Math.round(im.width * k); c.height = Math.round(im.height * k);
        c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
        ok(c.toDataURL("image/jpeg", 0.82));
      };
      im.src = r.result;
    };
    r.readAsDataURL(file);
  });
}

function disegnaLocEditor() {
  $("f-locs").innerHTML = bozza.location.map((l, i) => `
    <fieldset class="lc"><legend>Location ${i + 1}${i === 2 ? " (facoltativa)" : ""}</legend>
      <div class="f"><label for="l-link-${i}">Link Google Maps</label><input id="l-link-${i}" type="text" data-i="${i}" value="${esc(l.link)}" placeholder="https://www.google.com/maps/..."></div>
      <div class="f"><label for="l-img-${i}">Immagine</label><input id="l-img-${i}" type="file" accept="image/*" data-i="${i}"></div>
      ${l.img ? `<div class="thumb"><img src="${esc(l.img)}" alt=""><button type="button" class="btn-plain" data-rm="${i}">Rimuovi immagine</button></div>` : ""}
    </fieldset>`).join("");
}

function apriEditor(id) {
  const g = id ? gare.find(x => x.id === id) : null;
  const loc = clone(g?.location || []);
  while (loc.length < MAX_LOC) loc.push({ link: "", img: "" });
  bozza = { id: g ? g.id : null, location: loc };
  $("edtitle").textContent = g ? "Modifica gara" : "Nuova gara";
  $("f-nome").value = g?.nome || "";
  $("f-prov").value = g?.provincia || "";
  $("f-km").value = g?.km ?? "";
  $("f-mod").checked = !!g?.tipo?.includes("moderne");
  $("f-sto").checked = !!g?.tipo?.includes("storiche");
  $("f-ini").value = g?.inizio || "";
  $("f-fin").value = g?.fine || "";
  $("f-del").hidden = !g;
  disegnaLocEditor();
  ed.showModal();
}

$("add").addEventListener("click", () => apriEditor(null));
document.addEventListener("click", e => {
  const b = e.target.closest("[data-edit]"); if (b) apriEditor(b.dataset.edit);
});
$("f-cancel").addEventListener("click", () => ed.close());

$("f-locs").addEventListener("input", e => {
  if (e.target.type === "text") bozza.location[+e.target.dataset.i].link = e.target.value;
});
$("f-locs").addEventListener("change", async e => {
  if (e.target.type !== "file" || !e.target.files[0]) return;
  try {
    bozza.location[+e.target.dataset.i].img = await ridimensiona(e.target.files[0]);
    disegnaLocEditor();
  } catch (err) { alert("Immagine non leggibile."); }
});
$("f-locs").addEventListener("click", e => {
  const b = e.target.closest("[data-rm]"); if (!b) return;
  bozza.location[+b.dataset.rm].img = ""; disegnaLocEditor();
});

$("form").addEventListener("submit", e => {
  e.preventDefault();
  const nome = $("f-nome").value.trim();
  if (!nome) { $("f-nome").focus(); return; }
  let ini = $("f-ini").value, fin = $("f-fin").value || ini;
  if (ini && fin < ini) [ini, fin] = [fin, ini];
  const tipo = [$("f-mod").checked && "moderne", $("f-sto").checked && "storiche"].filter(Boolean);
  const km = $("f-km").value;
  const location = bozza.location.map(l => ({ link: normalizzaLink(l.link), img: l.img }));
  while (location.length && !location.at(-1).link && !location.at(-1).img) location.pop();
  const g = {
    id: bozza.id || nome.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") + "-" + Date.now().toString(36),
    nome, provincia: $("f-prov").value.trim().toUpperCase(), km: km === "" ? null : Number(km),
    tipo, inizio: ini, fine: ini ? fin : "", location
  };
  const i = gare.findIndex(x => x.id === g.id);
  if (i >= 0) gare[i] = g; else gare.push(g);
  save(); ed.close(); render();
});

$("f-del").addEventListener("click", () => {
  const g = gare.find(x => x.id === bozza.id);
  if (g && confirm(`Eliminare “${g.nome}”?`)) { gare = gare.filter(x => x.id !== g.id); save(); ed.close(); render(); }
});

/* ---------- esporta / ripristina ---------- */
$("export").addEventListener("click", () => {
  const testo = "// Dati del calendario. tipo: \"moderne\" e/o \"storiche\". Date AAAA-MM-GG.\n" +
    "const GARE = " + JSON.stringify(sorted(), null, 2) + ";\n\n" +
    "const ALTRE_GARE = " + JSON.stringify(ALTRE_GARE, null, 2) + ";\n";
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([testo], { type: "text/javascript" }));
  a.download = "data.js"; a.click(); URL.revokeObjectURL(a.href);
});
$("reset").addEventListener("click", () => {
  if (!confirm("Annullare tutte le modifiche fatte da questa pagina e tornare ai dati di data.js?")) return;
  try { localStorage.removeItem(KEY); } catch (e) {}
  gare = clone(GARE); render();
});

render();
