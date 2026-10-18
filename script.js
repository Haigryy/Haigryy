/**
 * ============================================================================
 * MEDIA AJAR INTERAKTIF — DASAR PEMROGRAMAN (INFORMATIKA UKDW)
 * Arsitektur: Data-Driven Slides + Custom Precomputed Simulators (Tanpa eval)
 * ============================================================================
 */

const CHAPTER_META = [
  { id: 0, nama: "Bab 0 · Pengantar & Computational Thinking", warna: "#14b8a6" },
  { id: 1, nama: "Bab 1 · Pseudocode (Blueprint Program)", warna: "#10b981" },
  { id: 2, nama: "Bab 2 · Flowchart (Peta Visual Algoritma)", warna: "#3b82f6" },
  { id: 3, nama: "Bab 3 · Struktur Kontrol Percabangan", warna: "#f59e0b" },
  { id: 4, nama: "Bab 4 · Struktur Kontrol Perulangan", warna: "#8b5cf6" },
  { id: 5, nama: "Evaluasi Akhir & Penutup", warna: "#ec4899" }
];

// Penyimpanan skor kuis per bab
const stateSkor = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
const maxSkorBab = { 0: 3, 1: 3, 2: 3, 3: 3, 4: 4 };

/**
 * Helper Syntax Highlighter sederhana untuk Python & Pseudocode
 */
function highlightCode(raw) {
  const escaped = raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped
    .replace(/(#.*$)/gm, '<span class="cmt">$1</span>')
    .replace(/\b(ALGORITMA|DEKLARASI|DESKRIPSI|READ|INPUT|GET|PRINT|WRITE|DISPLAY|IF|THEN|ELSE|ENDIF|WHILE|DO|ENDWHILE|FOR|TO|ENDFOR|REPEAT|UNTIL|if|elif|else|for|in|while|break|continue|True|False|and|or|not)\b/g, '<span class="kw">$1</span>')
    .replace(/\b(range|int|float|str|bool|input|print)\b/g, '<span class="fn">$1</span>')
    .replace(/("[^"]*")/g, '<span class="str">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="num">$1</span>');
}

/**
 * ============================================================================
 * DATA SLIDE LENGKAP (BAB 0 s/d BAB 4 + REKAP)
 * ============================================================================
 */
const SLIDES = [
  // ==========================================================================
  // BAB 0 — PEMBUKA & PRASYARAT RINGKAS
  // ==========================================================================
  {
    bab: 0,
    tipe: "📘 Pembuka Bab",
    judul: "Bab 0: Pengantar Algoritma, CT & Prasyarat Dasar",
    durasi: "2 menit",
    catatan: "Sapa adik-adik semester 1 UKDW dengan hangat! Jelaskan bahwa Bab 0 adalah pemanasan singkat dari Pertemuan 1, 2, dan 4 sebelum masuk ke 4 topik utama hari ini.",
    render: () => `
      <p class="slide-subtitle">Fondasi berpikir logis sebelum kita merancang Pseudocode, Flowchart, Percabangan, dan Perulangan.</p>
      <div class="grid-2">
        <div class="card card-accent">
          <h3>🎯 Setelah bab pembuka ini, kamu bisa:</h3>
          <ul class="bullet-list">
            <li>Menjelaskan arti <strong>Algoritma</strong> & syarat algoritma yang baik (Input, Proses, Output, <em>Stopping Rule</em>).</li>
            <li>Menerapkan 4 pilar <strong>Computational Thinking</strong> pada kasus nyata (Es Kopi Butterscotch).</li>
            <li>Membedakan <strong>Tipe Data</strong>, aturan penamaan <strong>Variabel</strong>, dan <strong>Operator</strong> dasar.</li>
          </ul>
        </div>
        <div class="card">
          <h3>🗺️ Peta Perjalanan Kita Hari Ini</h3>
          <ul class="bullet-list">
            <li><strong>Bab 1 — Pseudocode:</strong> Merancang <em>blueprint</em> logika tanpa pusing titik koma.</li>
            <li><strong>Bab 2 — Flowchart:</strong> Menggambar peta alir keputusan secara visual.</li>
            <li><strong>Bab 3 — Percabangan:</strong> Membuat komputer bisa memilih jalan (<code>if / else</code>).</li>
            <li><strong>Bab 4 — Perulangan:</strong> Menyuruh komputer mengulang otomatis (<code>for / while</code>).</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    bab: 0,
    tipe: "🔥 Pemantik",
    judul: "Kenapa Komputer Butuh Instruksi yang Super Jelas?",
    durasi: "3 menit",
    catatan: "Minta 1 mahasiswa menjawab dulu sebelum kartu diklik. Tekankan bahwa komputer itu mesin yang patuh tapi tidak punya 'akal kira-kira'.",
    render: () => `
      <div class="prompt-card" onclick="document.getElementById('hint-b0').classList.toggle('hidden')">
        <div class="prompt-question">🔥 "Kalau kamu menyuruh temanmu: <em>'Tolong belikan kopi di depan, terserah apa aja'</em>, temanmu bisa pulang bawa kopi. Tapi kalau kamu memberi instruksi yang sama ke robot komputer, apa yang terjadi?"</div>
        <p style="color:var(--text-muted)">👆 Klik kartu ini untuk membuka bahan diskusi</p>
        <div id="hint-b0" class="feedback-box ok hidden" style="text-align:left; margin-top:1.2rem;">
          💡 <strong>Bahan Diskusi:</strong> Komputer adalah mesin yang tidak bisa menebak maksud tersembunyi. Kata <em>"di depan"</em> (berapa meter?), <em>"terserah"</em> (kopi apa?), dan tanpa batas uang akan membuat program <strong>macet atau salah jalan</strong>. Karena itulah kita butuh <strong>Algoritma yang tidak ambigu!</strong>
        </div>
      </div>
    `
  },
  {
    bab: 0,
    tipe: "📘 Konsep",
    judul: "Apa Itu Algoritma & Ciri Algoritma yang Baik?",
    durasi: "4 menit",
    catatan: "Klik tombol Selanjutnya atau Spasi untuk memunculkan poin satu per satu. Tekankan sejarah Al-Khwarizmi dan 5 ciri algoritma yang baik.",
    steps: 3,
    render: () => `
      <div class="grid-2">
        <div class="card step-item" data-step="1">
          <h3>📜 Definisi & Sejarah</h3>
          <p><strong>Algoritma</strong> adalah prosedur langkah demi langkah yang dapat dihitung untuk menyelesaikan masalah dalam <strong>jumlah langkah terbatas</strong>.</p>
          <p style="margin-top:0.5rem">Diambil dari ilmuwan Persia <strong>Muhammad ibn Mūsā al-Khwārizmī</strong> (825 M), penulis kitab <em>al-jabar w'al-muqabala</em>.</p>
        </div>
        <div class="card step-item" data-step="2">
          <h3>✅ 5 Ciri Algoritma yang Baik</h3>
          <ul class="bullet-list">
            <li>Memiliki <strong>Input</strong> (masukan opsional) & <strong>Proses</strong>.</li>
            <li>Menghasilkan <strong>Output</strong> (keluaran).</li>
            <li>Instruksi <strong>tidak ambigu</strong> (jelas & pasti).</li>
            <li>Wajib punya <strong>Stopping Rule</strong> (titik berhenti).</li>
            <li><strong>Tidak bergantung</strong> bahasa pemrograman tertentu.</li>
          </ul>
        </div>
      </div>
      <div class="card card-accent step-item" data-step="3">
        <h3>📐 Contoh Klasik: Menghitung Luas Persegi Panjang</h3>
        <p><strong>1. Input:</strong> Masukkan nilai Panjang (<code>P</code>) dan Lebar (<code>L</code>) &nbsp;→&nbsp; <strong>2. Proses:</strong> Hitung <code>Luas = P × L</code> &nbsp;→&nbsp; <strong>3. Output:</strong> Tampilkan <code>Luas</code> &nbsp;→&nbsp; <strong>4. Selesai</strong> (Stopping Rule).</p>
      </div>
    `
  },
  {
    bab: 0,
    tipe: "📘 Konsep",
    judul: "Computational Thinking: Studi Kasus Es Kopi Butterscotch",
    durasi: "4 menit",
    catatan: "Klik ke-4 kartu pilar CT di layar untuk menunjukkan bagaimana Danny merancang SOP Es Kopi Butterscotch di kedainya agar rasanya konsisten.",
    render: () => `
      <p class="slide-subtitle">Danny ingin membuat menu baru <strong>Es Kopi Butterscotch</strong> yang konsisten & cepat dibuat timnya. Klik tiap pilar:</p>
      <div class="grid-2">
        <div class="card" style="cursor:pointer" onclick="this.querySelector('.ct-detail').classList.toggle('hidden')">
          <h3>1. 🧩 Dekomposisi (Klik)</h3>
          <p>Memecah masalah besar menjadi bagian-bagian kecil.</p>
          <div class="ct-detail feedback-box ok">
            Dipecah jadi 4 bagian: (1) Saus/Sirup Butterscotch, (2) Ekstraksi Espresso, (3) Pengolahan Susu, (4) Penyajian di gelas.
          </div>
        </div>
        <div class="card" style="cursor:pointer" onclick="this.querySelector('.ct-detail').classList.toggle('hidden')">
          <h3>2. 🔍 Pengenalan Pola (Klik)</h3>
          <p>Mencari kesamaan tren dari resep kopi yang sudah ada.</p>
          <div class="ct-detail feedback-box ok">
            Polanya sama dengan Kopi Gula Aren: <strong>Pemanis → Kopi → Susu → Es Batu</strong> (rasio Cafe Latte 1 espresso : 4 susu).
          </div>
        </div>
        <div class="card" style="cursor:pointer" onclick="this.querySelector('.ct-detail').classList.toggle('hidden')">
          <h3>3. 🎯 Abstraksi (Klik)</h3>
          <p>Fokus pada informasi inti, abaikan detail tidak relevan.</p>
          <div class="ct-detail feedback-box ok">
            <strong>Fokus:</strong> Takaran ml, suhu espresso melarutkan saus.<br><strong>Abaikan:</strong> Merek mesin kopi, bentuk cetakan es batu.
          </div>
        </div>
        <div class="card" style="cursor:pointer" onclick="this.querySelector('.ct-detail').classList.toggle('hidden')">
          <h3>4. 📋 Algoritma / SOP (Klik)</h3>
          <p>Menyusun urutan instruksi logis dari awal sampai siap saji.</p>
          <div class="ct-detail feedback-box ok">
            1) Tuang 20ml saus → 2) Tuang 30ml espresso panas & aduk → 3) Masukkan 150g es → 4) Tuang 120ml susu → 5) Beri foam.
          </div>
        </div>
      </div>
    `
  },
  {
    bab: 0,
    tipe: "📘 Konsep",
    judul: "Prasyarat: Tipe Data, Variabel & Operator",
    durasi: "4 menit",
    catatan: "Tunjukkan perbedaan int 6+7 vs char/str '6'+'7'. Tekankan aturan nama variabel karena mahasiswa baru sering memakai spasi.",
    steps: 3,
    render: () => `
      <div class="grid-3">
        <div class="card step-item" data-step="1">
          <h3>📦 Tipe Data Utama</h3>
          <ul class="bullet-list">
            <li><strong>Integer (<code>int</code>):</strong> Bilangan bulat (<code>10</code>, <code>-5</code>)</li>
            <li><strong>Float (<code>float</code>):</strong> Desimal (<code>3.14</code>)</li>
            <li><strong>Char / String:</strong> Karakter / teks (<code>"A"</code>, <code>"UKDW"</code>)</li>
            <li><strong>Boolean (<code>bool</code>):</strong> <code>True</code> / <code>False</code></li>
          </ul>
          <div class="feedback-box ok" style="font-size:16px">
            ⚠️ <strong>Jebakan:</strong><br>
            <code>int: 6 + 7 = 13</code><br>
            <code>char/str: "6" + "7" = "67"</code>
          </div>
        </div>
        <div class="card step-item" data-step="2">
          <h3>🏷️ Aturan Nama Variabel</h3>
          <ul class="bullet-list">
            <li>Wajib diawali <strong>huruf abjad</strong> (bukan angka).</li>
            <li><strong>Tanpa spasi</strong> (gunakan <code>camelCase</code> atau <code>snake_case</code>).</li>
            <li>Tanpa simbol membingungkan (<code>+ : ,</code>).</li>
          </ul>
          <p style="margin-top:0.4rem">✅ Benar: <code>namaLengkap</code>, <code>no_HP</code><br>❌ Salah: <code>4XYZ</code>, <code>IP rata</code>, <code>Var:+xy,458</code></p>
        </div>
        <div class="card step-item" data-step="3">
          <h3>⚙️ Kelompok Operator</h3>
          <ul class="bullet-list">
            <li><strong>Assignment:</strong> <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code></li>
            <li><strong>Aritmatika:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (modulus/sisa bagi)</li>
            <li><strong>Relasional:</strong> <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code></li>
            <li><strong>Logika:</strong> <code>and</code>, <code>or</code>, <code>not</code></li>
          </ul>
        </div>
      </div>
    `
  },
  {
    bab: 0,
    tipe: "🎬 Demo",
    judul: "Demo Interaktif: SOP Kopi & Inspektur Nama Variabel",
    durasi: "5 menit",
    catatan: "Ajak mahasiswa mengurutkan langkah SOP Kopi di kiri dan menguji nama variabel di kanan.",
    render: () => `
      <div class="grid-2">
        <div class="card">
          <h3>🧋 A. Urutkan SOP Es Kopi Butterscotch</h3>
          <p style="font-size:17px; color:var(--text-muted)">Gunakan tombol ↑ / ↓ agar urutan pembuatan logis:</p>
          <div id="kopiSortList"></div>
          <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
            <button class="btn-action" onclick="cekUrutanKopi()">Cek Urutan SOP</button>
            <button class="btn-action secondary" onclick="initKopiSorter()">Acak Ulang</button>
          </div>
          <div id="kopiSortFeedback"></div>
        </div>
        <div class="card">
          <h3>🔎 B. Uji Nama Variabel & Tipe Data</h3>
          <p style="font-size:17px; color:var(--text-muted)">Klik atau ketik calon nama variabel untuk mengecek kevalidannya:</p>
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:0.5rem;">
            <button class="btn-action secondary" onclick="ujiVariabel('namaLengkap')">namaLengkap</button>
            <button class="btn-action secondary" onclick="ujiVariabel('4XYZ')">4XYZ</button>
            <button class="btn-action secondary" onclick="ujiVariabel('IP rata')">IP rata</button>
            <button class="btn-action secondary" onclick="ujiVariabel('no_HP')">no_HP</button>
            <button class="btn-action secondary" onclick="ujiVariabel('Var:+xy,458')">Var:+xy,458</button>
          </div>
          <div style="display:flex; gap:0.5rem;">
            <input type="text" id="inputVarCustom" placeholder="Ketik nama variabel..." style="flex:1" />
            <button class="btn-action" onclick="ujiVariabel(document.getElementById('inputVarCustom').value)">Cek</button>
          </div>
          <div id="varFeedback"></div>
        </div>
      </div>
    `,
    onMount: () => {
      initKopiSorter();
    }
  },
  {
    bab: 0,
    tipe: "✅ Cek Pemahaman",
    judul: "Cek Pemahaman Bab 0 (Prasyarat & CT)",
    durasi: "4 menit",
    catatan: "Kuis 3 soal untuk mengecek pemahaman Bab 0. Kunci: 1=B, 2=C, 3=B.",
    render: () => renderQuizSlide(0, [
      {
        tanya: "1. Saat merancang aplikasi Perpustakaan Pintar, kita mengabaikan 'warna sampul buku' dan 'berat buku', lalu hanya menyimpan 'ISBN' dan 'Judul'. Pilar Computational Thinking apa yang sedang dipakai?",
        opsi: ["Dekomposisi", "Abstraksi", "Pengenalan Pola", "Pemrograman C"],
        benar: 1,
        bahas: "Abstraksi menyaring informasi dengan fokus pada elemen inti yang relevan dan mengabaikan detail yang tidak berpengaruh langsung."
      },
      {
        tanya: "2. Manakah penamaan variabel di bawah ini yang VALID menurut aturan pemrograman?",
        opsi: ["4_nilai_akhir", "rata rata nilai", "total_bayar_2", "harga:barang"],
        benar: 2,
        bahas: "total_bayar_2 diawali huruf, tidak mengandung spasi, dan hanya memakai garis bawah (underscore)."
      },
      {
        tanya: "3. Apa hasil dari operasi penggabungan karakter/teks \"6\" + \"7\" dibanding bilangan bulat 6 + 7?",
        opsi: ["Keduanya menghasilkan 13", "\"67\" untuk teks, dan 13 untuk bilangan bulat", "13 untuk teks, dan \"67\" untuk bilangan bulat", "Menghasilkan nilai Boolean True"],
        benar: 1,
        bahas: "Pada tipe char/string, tanda + menggabungkan karakter menjadi \"67\" (concatenation), sedangkan pada integer menjumlahkan nilai secara matematis menjadi 13."
      }
    ])
  },
  {
    bab: 0,
    tipe: "📝 Rangkuman",
    judul: "Rangkuman Bab 0 & Jembatan ke Bab 1",
    durasi: "2 menit",
    catatan: "Tutup Bab 0 dan arahkan perhatian mahasiswa ke Bab 1: Pseudocode.",
    render: () => `
      <div class="grid-2">
        <div class="card card-accent">
          <h3>📌 Poin Kunci Bab 0</h3>
          <ul class="bullet-list">
            <li><strong>Algoritma</strong> wajib jelas (tidak ambigu), memiliki Input → Proses → Output, serta memiliki titik berhenti (<em>Stopping Rule</em>).</li>
            <li><strong>4 Pilar CT:</strong> Dekomposisi → Pengenalan Pola → Abstraksi → Algoritma.</li>
            <li>Perhatikan <strong>tipe data</strong> (jangan tertukar angka <code>6</code> dengan teks <code>"6"</code>) dan patuhi <strong>aturan nama variabel</strong>.</li>
          </ul>
        </div>
        <div class="card">
          <h3>🚀 Selanjutnya di Bab 1: PSEUDOCODE</h3>
          <p>Kita sudah tahu cara menyusun langkah algoritma dalam bahasa sehari-hari. Tapi bahasa manusia sering terlalu panjang untuk diterjemahkan ke kode program.</p>
          <p style="margin-top:0.6rem">Bagaimana cara menulis <strong>"blueprint" algoritma</strong> yang rapi dan siap diterjemahkan ke bahasa pemrograman apa pun? Mari masuk ke <strong>Bab 1!</strong></p>
        </div>
      </div>
    `
  },

  // ==========================================================================
  // BAB 1 — PSEUDOCODE (FOKUS UTAMA 1)
  // ==========================================================================
  {
    bab: 1,
    tipe: "📘 Pembuka Bab",
    judul: "Bab 1: Pseudocode — Blueprint Sebuah Program",
    durasi: "2 menit",
    catatan: "Masuk ke fokus utama pertama: Pseudocode (Pertemuan 3). Tekankan bahwa di sini kita fokus ke alur logika, bukan titik koma.",
    render: () => `
      <p class="slide-subtitle">Menjembatani pikiran manusia dengan instruksi komputer tanpa pusing memikirkan sintaks kaku.</p>
      <div class="grid-2">
        <div class="card card-accent">
          <h3>🎯 Setelah bab ini, kamu bisa:</h3>
          <ul class="bullet-list">
            <li>Menjelaskan fungsi <strong>Pseudocode</strong> dan mengapa kita tidak boleh langsung <em>coding</em> (menghindari <em>Spaghetti Code</em>).</li>
            <li>Menulis struktur baku Pseudocode: <strong>Judul (Header)</strong>, <strong>Deklarasi (Kamus)</strong>, dan <strong>Deskripsi (Algoritma Inti)</strong>.</li>
            <li>Menerjemahkan masalah sehari-hari menjadi Pseudocode terstruktur dengan keyword standar & indentasi yang tepat.</li>
          </ul>
        </div>
        <div class="card">
          <h3>🏗️ Analogi Arsitek Bangunan</h3>
          <p>Seorang arsitek tidak langsung menyusun batu bata dan semen. Ia menggambar <strong>cetak biru (blueprint)</strong> di atas kertas terlebih dahulu.</p>
          <p style="margin-top:0.5rem"><strong>Pseudocode adalah blueprint programmer.</strong> Selesaikan masalahnya di atas kertas dulu, baru ketik kodenya!</p>
        </div>
      </div>
    `
  },
  {
    bab: 1,
    tipe: "🔥 Pemantik",
    judul: "Mengapa Tidak Langsung Mengetik Kode Program Saja?",
    durasi: "3 menit",
    catatan: "Tanyakan kasus robot dapur mie instan kepada mahasiswa. Klik kartu untuk memunculkan alasan menghindari Spaghetti Code.",
    render: () => `
      <div class="prompt-card" onclick="document.getElementById('hint-b1').classList.toggle('hidden')">
        <div class="prompt-question">🔥 "Bayangkan kamu menyuruh robot dapur memasak mie instan dengan instruksi: <em>'Rebus mie sebentar lalu kasih bumbu'</em>. Apa yang bisa salah? Dan apa akibatnya kalau programmer langsung mengetik kode tanpa coret-coretan logika?"</div>
        <p style="color:var(--text-muted)">👆 Klik kartu ini untuk membuka petunjuk diskusi</p>
        <div id="hint-b1" class="feedback-box ok hidden" style="text-align:left; margin-top:1.2rem;">
          💡 <strong>Diskusi:</strong><br>
          1) Kata <em>"sebentar"</em> itu ambigu bagi robot (3 detik? 3 menit?). Apakah mie goreng (ditiriskan di piring) atau mie kuah (dituang beserta kuah ke mangkok)?<br>
          2) Terjun langsung mengetik kode tanpa rancangan logika akan menghasilkan <strong>Spaghetti Code</strong> (kode berantakan seperti benang kusut, sulit dibaca, dan susah di-<em>debug</em> saat error).
        </div>
      </div>
    `
  },
  {
    bab: 1,
    tipe: "📘 Konsep",
    judul: "Struktur Dasar & Keyword Standar Pseudocode",
    durasi: "5 menit",
    catatan: "Jelaskan 3 bagian utama penulisan pseudocode (Judul, Deklarasi, Deskripsi) serta tabel keyword umum dari modul Pertemuan 3.",
    steps: 3,
    render: () => `
      <div class="grid-2">
        <div class="card step-item" data-step="1">
          <h3>🏛️ 3 Bagian Struktur Penulisan</h3>
          <ul class="bullet-list">
            <li><strong>1. Bagian Judul (Header):</strong> Nama algoritma (tanpa spasi, gunakan underscore).<br><code>ALGORITMA Hitung_Luas_Persegi_Panjang</code></li>
            <li><strong>2. Bagian Deklarasi (Kamus):</strong> Mendefinisikan variabel & tipe data.<br><code>panjang, lebar, luas : float</code></li>
            <li><strong>3. Bagian Deskripsi (Algoritma Inti):</strong> Urutan langkah Input, Proses, Output dengan <strong>indentasi konsisten</strong>.</li>
          </ul>
        </div>
        <div class="card step-item" data-step="2">
          <h3>🔑 Standar Keyword Pseudocode</h3>
          <table class="trace-table">
            <thead>
              <tr><th>Kategori</th><th>Keyword Umum</th><th>Contoh</th></tr>
            </thead>
            <tbody>
              <tr><td>Input</td><td><code>READ, GET, INPUT</code></td><td><code>READ harga</code></td></tr>
              <tr><td>Output</td><td><code>PRINT, WRITE, DISPLAY</code></td><td><code>PRINT luas</code></td></tr>
              <tr><td>Proses</td><td><code>&lt;-, COMPUTE</code></td><td><code>luas &lt;- p * l</code></td></tr>
              <tr><td>Kondisi</td><td><code>IF, THEN, ELSE, ENDIF</code></td><td><code>IF usia &gt;= 17 THEN</code></td></tr>
              <tr><td>Ulang</td><td><code>FOR..ENDFOR, WHILE..ENDWHILE</code></td><td><code>WHILE i &lt;= 5 DO</code></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card card-accent step-item" data-step="3">
        <h3>📏 Aturan Emas Indentasi</h3>
        <p>Gunakan spasi menjorok ke dalam (indentasi) secara konsisten untuk blok aksi di dalam <code>IF..ELSE..ENDIF</code> atau perulangan agar batas blok terlihat jelas.</p>
      </div>
    `
  },
  {
    bab: 1,
    tipe: "🎬 Demo",
    judul: "Transformasi Logika: Bahasa Manusia ⇄ Pseudocode ⇄ Python",
    durasi: "5 menit",
    catatan: "Klik baris mana pun di salah satu kolom! Baris yang berpadanan di kedua kolom lainnya akan menyala bersamaan.",
    render: () => `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
        <p class="slide-subtitle">Klik baris mana saja untuk melihat terjemahan antar-bahasa secara sinkron:</p>
        <div style="display:flex; gap:0.5rem;">
          <button class="btn-action" onclick="switchTransCase('ktp')">Kasus 1: Syarat Usia KTP</button>
          <button class="btn-action secondary" onclick="switchTransCase('luas')">Kasus 2: Luas Persegi Panjang</button>
        </div>
      </div>
      <div id="transGridContainer" class="grid-3"></div>
    `,
    onMount: () => {
      switchTransCase('ktp');
    }
  },
  {
    bab: 1,
    tipe: "🎬 Demo",
    judul: "Susun & Atur Indentasi Pseudocode",
    durasi: "5 menit",
    catatan: "Minta mahasiswa mengurutkan baris pseudocode KTP yang teracak, sekaligus mengatur indentasi (menjorok ke dalam) pada baris PRINT.",
    render: () => `
      <p class="slide-subtitle">Urutkan baris (↑/↓) dan atur spasi menjorok (<code>&lt;&lt;</code> / <code>&gt;&gt;</code>) agar membentuk Pseudocode cek usia KTP yang benar:</p>
      <div class="grid-2">
        <div class="card">
          <div id="pseudoPuzzleList"></div>
          <div style="display:flex; gap:0.6rem; margin-top:0.6rem;">
            <button class="btn-action" onclick="checkPseudoPuzzle()">✅ Cek Struktur & Indentasi</button>
            <button class="btn-action secondary" onclick="initPseudoPuzzle()">🔄 Acak Ulang</button>
          </div>
          <div id="pseudoPuzzleFeedback"></div>
        </div>
        <div class="card card-accent">
          <h3>💡 Petunjuk Penyusunan</h3>
          <ul class="bullet-list">
            <li>Program harus membaca input (<code>READ usia</code>) terlebih dahulu sebelum mengecek kondisi.</li>
            <li>Baris perintah di dalam cabang <code>IF</code> dan <code>ELSE</code> wajib diberi <strong>1 level indentasi</strong> (klik tombol <code>&gt;&gt;</code>).</li>
            <li>Tutup blok percabangan dengan <code>ENDIF</code> sejajar dengan <code>IF</code> (indentasi 0).</li>
          </ul>
        </div>
      </div>
    `,
    onMount: () => {
      initPseudoPuzzle();
    }
  },
  {
    bab: 1,
    tipe: "🐞 Debug",
    judul: "Inspektur Bug: Cari 3 Kesalahan pada Pseudocode Ini!",
    durasi: "4 menit",
    catatan: "Ada 3 baris bermasalah: Baris 3 (belum baca lebar), Baris 4 (instruksi ambigu 'kira-kira'), dan Baris 8 (lupa ENDIF). Klik barisnya!",
    render: () => `
      <p class="slide-subtitle">Klik pada <strong>3 baris yang salah/ambigu</strong> di bawah ini untuk memperbaikinya:</p>
      <div class="grid-2">
        <div class="card">
          <div id="pseudoBugContainer" class="code-wrapper"></div>
        </div>
        <div class="card">
          <h3>🔍 Temuan Inspektur (<span id="bugFoundCount">0</span>/3 ditemukan)</h3>
          <div id="pseudoBugExplanation">
            <p style="color:var(--text-muted)">Klik baris kode di sebelah kiri yang menurutmu melanggar aturan algoritma/pseudocode...</p>
          </div>
          <button class="btn-action secondary" style="margin-top:auto" onclick="initPseudoBug()">Reset Inspeksi</button>
        </div>
      </div>
    `,
    onMount: () => {
      initPseudoBug();
    }
  },
  {
    bab: 1,
    tipe: "✅ Cek Pemahaman",
    judul: "Cek Pemahaman Bab 1 (Pseudocode)",
    durasi: "4 menit",
    catatan: "Kuis 3 soal Bab 1. Kunci: 1=A, 2=C, 3=B.",
    render: () => renderQuizSlide(1, [
      {
        tanya: "1. Mengapa seorang programmer disarankan membuat Pseudocode terlebih dahulu sebelum langsung menulis kode program?",
        opsi: [
          "Agar fokus merancang alur logika penyelesaian masalah dan menghindari Spaghetti Code",
          "Karena komputer hanya bisa mengeksekusi file Pseudocode secara langsung",
          "Supaya tidak perlu lagi menggunakan variabel dan tipe data",
          "Agar program otomatis bebas dari aturan indentasi"
        ],
        benar: 0,
        bahas: "Pseudocode berfungsi sebagai blueprint logika agar programmer menyelesaikan masalah di atas kertas dulu dan terhindar dari Spaghetti Code."
      },
      {
        tanya: "2. Bagian dalam struktur penulisan Pseudocode yang berfungsi untuk mendefinisikan semua variabel dan tipe data yang dibutuhkan disebut...",
        opsi: ["Bagian Judul (Header)", "Bagian Deskripsi", "Bagian Deklarasi (Kamus)", "Bagian Terminator"],
        benar: 2,
        bahas: "Bagian Deklarasi (Kamus) adalah tempat mendefinisikan variabel, konstanta, dan tipe data sebelum masuk ke bagian Deskripsi."
      },
      {
        tanya: "3. Penulisan instruksi penugasan (menyimpan hasil kali panjang dan lebar ke variabel luas) yang standar dalam Pseudocode adalah...",
        opsi: ["READ luas = panjang * lebar", "luas <- panjang * lebar", "PRINT luas <- panjang * lebar", "IF luas = panjang * lebar THEN"],
        benar: 1,
        bahas: "Simbol panah kiri (<-) atau COMPUTE digunakan untuk proses perhitungan dan penyimpanan nilai ke dalam variabel."
      }
    ])
  },
  {
    bab: 1,
    tipe: "✍️ Latihan",
    judul: "Latihan Mandiri: Cek Ganjil/Genap & Robot Mie Instan",
    durasi: "6 menit",
    catatan: "Beri waktu mahasiswa menulis di buku atau di kotak teks layar, lalu buka Petunjuk dan Kunci Jawaban.",
    render: () => `
      <div class="grid-2">
        <div class="card">
          <h3>✍️ Soal 1: Cek Bilangan Ganjil / Genap</h3>
          <p>Buatlah Pseudocode untuk mengecek apakah sebuah bilangan bulat yang diinputkan pengguna bernilai <strong>Genap</strong> atau <strong>Ganjil</strong>!</p>
          <textarea rows="5" placeholder="Ketik rancangan pseudocode Soal 1 di sini..." style="width:100%; background:var(--code-bg); color:#fff; padding:0.6rem; border-radius:8px; font-family:var(--font-mono);"></textarea>
          <div style="display:flex; gap:0.5rem;">
            <button class="btn-action secondary" onclick="document.getElementById('hint-l1-1').classList.toggle('hidden')">💡 Lihat Petunjuk</button>
            <button class="btn-action" onclick="document.getElementById('key-l1-1').classList.toggle('hidden')">🔑 Kunci Jawaban</button>
          </div>
          <div id="hint-l1-1" class="feedback-box ok hidden">Petunjuk: Gunakan operator sisa bagi (<code>MOD</code> atau <code>%</code>). Bilangan genap habis dibagi 2 (<code>bilangan MOD 2 == 0</code>).</div>
          <pre id="key-l1-1" class="code-wrapper hidden">${highlightCode(`ALGORITMA Cek_Ganjil_Genap
DEKLARASI:
    bilangan : integer
DESKRIPSI:
    READ bilangan
    IF bilangan MOD 2 == 0 THEN
        PRINT "Genap"
    ELSE
        PRINT "Ganjil"
    ENDIF`)}</pre>
        </div>

        <div class="card">
          <h3>🍜 Soal 2: Robot Dapur Mie Instan Budi</h3>
          <p>Input: <code>tipe_mie</code> (Goreng/Kuah) & <code>pake_telur</code> (Ya/Tidak). Susun pseudocode dari merebus air hingga menyajikan di piring/mangkok!</p>
          <textarea rows="5" placeholder="Ketik rancangan pseudocode Soal 2 di sini..." style="width:100%; background:var(--code-bg); color:#fff; padding:0.6rem; border-radius:8px; font-family:var(--font-mono);"></textarea>
          <div style="display:flex; gap:0.5rem;">
            <button class="btn-action secondary" onclick="document.getElementById('hint-l1-2').classList.toggle('hidden')">💡 Lihat Petunjuk</button>
            <button class="btn-action" onclick="document.getElementById('key-l1-2').classList.toggle('hidden')">🔑 Kunci Jawaban</button>
          </div>
          <div id="hint-l1-2" class="feedback-box ok hidden">Petunjuk: Ada 2 pemeriksaan <code>IF</code> terpisah: pertama cek apakah <code>pake_telur == "Ya"</code>, kedua cek apakah <code>tipe_mie == "Goreng"</code> atau <code>"Kuah"</code>.</div>
          <pre id="key-l1-2" class="code-wrapper hidden">${highlightCode(`ALGORITMA Robot_Masak_Mie
DEKLARASI:
    tipe_mie, pake_telur : string
DESKRIPSI:
    READ tipe_mie
    READ pake_telur
    PRINT "Rebus air hingga mendidih & masukkan mie"
    IF pake_telur == "Ya" THEN
        PRINT "Masukkan telur ke dalam rebusan"
    ENDIF
    IF tipe_mie == "Goreng" THEN
        PRINT "Siapkan bumbu di piring, tiriskan mie & aduk"
    ELSE
        PRINT "Siapkan bumbu di mangkok, tuang mie beserta kuah"
    ENDIF
    PRINT "Mie siap disajikan!"`)}</pre>
        </div>
      </div>
    `
  },
  {
    bab: 1,
    tipe: "📝 Rangkuman",
    judul: "Rangkuman Bab 1 & Jembatan ke Bab 2",
    durasi: "2 menit",
    catatan: "Rangkum poin kunci Pseudocode dan hubungkan ke visualisasi Flowchart di Bab 2.",
    render: () => `
      <div class="grid-2">
        <div class="card card-accent">
          <h3>📌 Poin Kunci & Kesalahan Umum Bab 1</h3>
          <ul class="bullet-list">
            <li><strong>3 Struktur Utama:</strong> Judul → Deklarasi (Kamus) → Deskripsi.</li>
            <li>Gunakan kata kunci tegas (<code>READ</code>, <code>PRINT</code>, <code>&lt;-</code>, <code>IF..THEN..ELSE..ENDIF</code>).</li>
            <li>⚠️ <strong>Kesalahan Umum:</strong> Menulis kalimat panjang yang ambigu, lupa menutup blok dengan <code>ENDIF</code>, atau memakai variabel yang belum di-<code>READ</code>/diinisialisasi.</li>
          </ul>
        </div>
        <div class="card">
          <h3>🚀 Selanjutnya di Bab 2: FLOWCHART</h3>
          <p>Pseudocode sangat rapi untuk dibaca sebagai teks. Namun, saat alur percabangan dan perulangan makin bercabang, mata manusia lebih cepat memahami <strong>peta bergambar</strong>.</p>
          <p style="margin-top:0.6rem">Bagaimana cara mengubah Pseudocode menjadi diagram alir berstandar internasional? Mari lanjut ke <strong>Bab 2!</strong></p>
        </div>
      </div>
    `
  },

  // ==========================================================================
  // BAB 2 — FLOWCHART (FOKUS UTAMA 2)
  // ==========================================================================
  {
    bab: 2,
    tipe: "📘 Pembuka Bab",
    judul: "Bab 2: Flowchart — Peta Visual Algoritma",
    durasi: "2 menit",
    catatan: "Masuk ke fokus utama kedua: Flowchart (Pertemuan 3). Tekankan aturan bentuk simbol dan jumlah anak panah.",
    render: () => `
      <p class="slide-subtitle">Memvisualisasikan alur logika dan pengambilan keputusan dengan simbol geometris standar.</p>
      <div class="grid-2">
        <div class="card card-accent">
          <h3>🎯 Setelah bab ini, kamu bisa:</h3>
          <ul class="bullet-list">
            <li>Membedakan fungsi setiap <strong>simbol standar Flowchart</strong> (Terminator, Input/Output, Process, Decision).</li>
            <li>Mematuhi <strong>aturan jumlah anak panah</strong> masuk dan keluar pada tiap simbol.</li>
            <li>Membaca dan merancang Flowchart yang selaras dengan Pseudocode-nya.</li>
          </ul>
        </div>
        <div class="card">
          <h3>🗺️ Mengapa Perlu Flowchart?</h3>
          <p>Flowchart sangat efektif untuk memvisualisasikan bagaimana sebuah program <strong>"membuat keputusan" (percabangan)</strong> atau berputar (perulangan) melalui garis alir (<em>flow line</em>).</p>
        </div>
      </div>
    `
  },
  {
    bab: 2,
    tipe: "🔥 Pemantik",
    judul: "Peta Visual vs Teks Paragraf",
    durasi: "2 menit",
    catatan: "Tanyakan kenapa denah di mal memakai simbol dan panah.",
    render: () => `
      <div class="prompt-card" onclick="document.getElementById('hint-b2').classList.toggle('hidden')">
        <div class="prompt-question">🔥 "Kenapa papan petunjuk arah di mal atau bandara selalu digambar dengan ikon dan tanda panah, bukan ditulis dalam paragraf esai sepanjang 2 halaman?"</div>
        <p style="color:var(--text-muted)">👆 Klik kartu ini untuk membuka diskusi</p>
        <div id="hint-b2" class="feedback-box ok hidden" style="text-align:left; margin-top:1.2rem;">
          💡 <strong>Diskusi:</strong> Otak manusia memproses bentuk visual dan arah panah jauh lebih cepat daripada mengurai paragraf panjang. Dalam tim pengembang software, <strong>Flowchart</strong> memastikan setiap orang melihat "peta jalan" logika yang sama dalam sekali pandang!
        </div>
      </div>
    `
  },
  {
    bab: 2,
    tipe: "🎬 Demo",
    judul: "Galeri Interaktif Simbol Flowchart & Aturan Anak Panah",
    durasi: "5 menit",
    catatan: "Klik tiap kartu simbol di kiri untuk menampilkan detail aturan panah (1 Start/Stop, 2 panah pada I/O & Process, 3 panah pada Decision).",
    render: () => `
      <p class="slide-subtitle">Klik simbol di bawah ini untuk melihat fungsi dan <strong>aturan ketat anak panahnya</strong>:</p>
      <div class="grid-2">
        <div class="grid-2" style="gap:0.75rem;">
          <button class="card" style="cursor:pointer; align-items:center;" onclick="showSymbolDetail('terminal')">
            <svg width="160" height="58"><rect x="10" y="8" width="140" height="42" rx="21" fill="#0f766e" stroke="#5eead4" stroke-width="2.5"/><text x="80" y="30" class="fc-text">START / STOP</text></svg>
            <strong>1. Terminator</strong>
          </button>
          <button class="card" style="cursor:pointer; align-items:center;" onclick="showSymbolDetail('io')">
            <svg width="160" height="58"><polygon points="28,8 150,8 132,50 10,50" fill="#1d4ed8" stroke="#93c5fd" stroke-width="2.5"/><text x="80" y="30" class="fc-text">Input / Output</text></svg>
            <strong>2. Input / Output</strong>
          </button>
          <button class="card" style="cursor:pointer; align-items:center;" onclick="showSymbolDetail('process')">
            <svg width="160" height="58"><rect x="12" y="8" width="136" height="42" fill="#4338ca" stroke="#a5b4fc" stroke-width="2.5"/><text x="80" y="30" class="fc-text">Proses / Hitung</text></svg>
            <strong>3. Process</strong>
          </button>
          <button class="card" style="cursor:pointer; align-items:center;" onclick="showSymbolDetail('decision')">
            <svg width="160" height="66"><polygon points="80,4 152,33 80,62 8,33" fill="#b45309" stroke="#fcd34d" stroke-width="2.5"/><text x="80" y="33" class="fc-text">Kondisi ?</text></svg>
            <strong>4. Decision</strong>
          </button>
        </div>
        <div id="symbolDetailBox" class="card card-accent">
          <!-- Dirender oleh showSymbolDetail -->
        </div>
      </div>
    `,
    onMount: () => {
      showSymbolDetail('terminal');
    }
  },
  {
    bab: 2,
    tipe: "🎬 Demo",
    judul: "Flowchart Player (Animasi SVG + Pseudocode Berdampingan)",
    durasi: "6 menit",
    catatan: "Jalankan simulasi langkah demi langkah untuk 3 studi kasus: Luas Persegi Panjang, Cek Usia KTP, dan Cek Ganjil Genap.",
    render: () => `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
        <div style="display:flex; gap:0.45rem; flex-wrap:wrap;">
          <button class="btn-action" onclick="loadFcScenario('luas')">1. Luas Persegi Panjang</button>
          <button class="btn-action secondary" onclick="loadFcScenario('ktp')">2. Cek Usia KTP (If-Else)</button>
          <button class="btn-action secondary" onclick="loadFcScenario('ganjil')">3. Cek Ganjil / Genap</button>
        </div>
        <div id="fcInputControls" style="display:flex; gap:0.5rem; align-items:center;"></div>
      </div>

      <div class="grid-2" style="align-items:start;">
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h3>🗺️ Flowchart SVG</h3>
            <div style="display:flex; gap:0.4rem;">
              <button class="btn-action" onclick="stepFcPlayer()">⏭️ Langkah</button>
              <button class="btn-action secondary" onclick="autoPlayFcPlayer()">▶️ Putar</button>
              <button class="btn-action secondary" onclick="resetFcPlayer()">🔄 Reset</button>
            </div>
          </div>
          <div id="fcSvgContainer"></div>
        </div>

        <div class="card">
          <h3>📄 Pseudocode & Status Memori Variabel</h3>
          <div id="fcPseudoList" class="code-wrapper" style="margin-bottom:0.6rem;"></div>
          <div class="grid-2" style="gap:0.6rem;">
            <div class="card" style="padding:0.7rem;">
              <strong>📦 Memori Variabel:</strong>
              <div id="fcVarPanel" style="font-family:var(--font-mono); color:var(--accent);">Belum ada data</div>
            </div>
            <div class="card" style="padding:0.7rem;">
              <strong>🖥️ Layar Output:</strong>
              <div id="fcOutputPanel" style="font-family:var(--font-mono); color:var(--success);">-</div>
            </div>
          </div>
        </div>
      </div>
    `,
    onMount: () => {
      loadFcScenario('ktp');
    }
  },
  {
    bab: 2,
    tipe: "🎬 Demo",
    judul: "Rakit & Validasi Flowchart: Menghitung Volume Bola",
    durasi: "5 menit",
    catatan: "Latihan 1 dari modul Pertemuan 3: Menyusun langkah & memilih bentuk simbol yang benar untuk menghitung volume bola.",
    render: () => `
      <p class="slide-subtitle">Pasangkan jenis simbol Flowchart yang tepat untuk setiap baris Pseudocode Volume Bola di bawah ini, lalu klik <strong>Validasi Flowchart</strong>:</p>
      <div class="grid-2">
        <div class="card">
          <div id="bolaBuilderList" style="display:flex; flex-direction:column; gap:0.5rem;"></div>
          <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
            <button class="btn-action" onclick="validateBolaFlowchart()">✅ Validasi Flowchart</button>
            <button class="btn-action secondary" onclick="initBolaBuilder()">🔄 Reset Pilihan</button>
          </div>
          <div id="bolaBuilderFeedback"></div>
        </div>
        <div class="card">
          <h3>🖼️ Pratinjau Kanvas Flowchart</h3>
          <div id="bolaSvgPreview"></div>
        </div>
      </div>
    `,
    onMount: () => {
      initBolaBuilder();
    }
  },
  {
    bab: 2,
    tipe: "✅ Cek Pemahaman",
    judul: "Cek Pemahaman Bab 2 (Flowchart)",
    durasi: "4 menit",
    catatan: "Kuis 3 soal Bab 2. Kunci: 1=C, 2=B, 3=A.",
    render: () => renderQuizSlide(2, [
      {
        tanya: "1. Berapa jumlah anak panah yang WAJIB dimiliki oleh simbol Decision (Belah Ketupat)?",
        opsi: [
          "Hanya 1 anak panah keluar",
          "2 anak panah (1 masuk dan 1 keluar)",
          "3 anak panah (1 masuk dan 2 keluar untuk jalur True/Yes dan False/No)",
          "Bebas tanpa aturan"
        ],
        benar: 2,
        bahas: "Simbol Decision mengevaluasi kondisi Yes/No sehingga memiliki 1 panah masuk dan 2 panah keluar (True/Yes dan False/No)."
      },
      {
        tanya: "2. Instruksi `volume = (4/3) * PI * radius ** 3` pada Flowchart harus diletakkan di dalam simbol...",
        opsi: ["Jajar Genjang (Input/Output)", "Persegi Panjang (Process)", "Belah Ketupat (Decision)", "Oval (Terminator)"],
        benar: 1,
        bahas: "Perhitungan matematika, deklarasi, dan inisialisasi nilai selalu ditempatkan di dalam simbol Persegi Panjang (Process)."
      },
      {
        tanya: "3. Manakah pernyataan yang BENAR mengenai simbol Terminator (Start / Stop)?",
        opsi: [
          "Setiap flowchart wajib hanya memiliki 1 Start dan 1 Stop, masing-masing dengan 1 anak panah",
          "Satu flowchart boleh memiliki 3 simbol Start sekaligus",
          "Simbol Start memiliki 2 anak panah keluar",
          "Simbol Terminator dipakai untuk membaca input keyboard"
        ],
        benar: 0,
        bahas: "Aturan Terminal Symbol: Only one 'start' & one 'stop', dan masing-masing hanya memiliki 1 anak panah."
      }
    ])
  },
  {
    bab: 2,
    tipe: "✍️ Latihan",
    judul: "Latihan Studi Kasus: Flowchart Mencari FPB Dua Bilangan",
    durasi: "5 menit",
    catatan: "Ini adalah Latihan 2 dari modul Pertemuan 3 (mencari pembagi persekutuan terbesar / FPB dengan mengecek sisa bagi dari 1 sampai bilangan terkecil).",
    render: () => `
      <div class="grid-2">
        <div class="card">
          <h3>✍️ Latihan 2 Modul: Mencari FPB (Faktor Persekutuan Terbesar)</h3>
          <p style="font-size:18px;">Spesifikasi Pseudocode dari modul:</p>
          <ol style="padding-left:1.4rem; font-size:18px; display:flex; flex-direction:column; gap:0.3rem;">
            <li>Start & inisialisasi variabel.</li>
            <li>Masukkan <code>bil1</code> dan <code>bil2</code>.</li>
            <li>Jika <code>bil1 &gt; bil2</code> maka <code>kecil = bil2</code>, jika tidak <code>kecil = bil1</code>.</li>
            <li>Ulangi <code>x</code> dari <code>1</code> hingga <code>kecil</code>: jika <code>bil1 % x == 0</code> dan <code>bil2 % x == 0</code>, simpan <code>d = x</code>.</li>
            <li>Tampilkan hasil <code>d</code>, lalu Finish.</li>
          </ol>
          <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
            <button class="btn-action secondary" onclick="document.getElementById('hint-fpb').classList.toggle('hidden')">💡 Lihat Petunjuk Simbol</button>
            <button class="btn-action" onclick="document.getElementById('key-fpb').classList.toggle('hidden')">🔑 Tampilkan Flowchart Kunci</button>
          </div>
          <div id="hint-fpb" class="feedback-box ok hidden">
            Gunakan <strong>Jajar Genjang</strong> untuk baca <code>bil1, bil2</code>, <strong>Belah Ketupat</strong> untuk membandingkan <code>bil1 &gt; bil2</code> serta mengecek modulus, dan garis panah balik untuk perulangan <code>x</code>.
          </div>
        </div>
        <div class="card">
          <h3>🗺️ Kunci Visual Flowchart FPB</h3>
          <div id="key-fpb" class="hidden">
            <svg viewBox="0 0 460 360" class="fc-svg">
              <rect x="170" y="8" width="120" height="28" rx="14" class="fc-node active"/><text x="230" y="23" class="fc-text">START</text>
              <line x1="230" y1="36" x2="230" y2="54" class="fc-edge"/>
              <polygon points="150,54 320,54 305,84 135,84" class="fc-node"/><text x="228" y="70" class="fc-text">INPUT bil1, bil2</text>
              <line x1="230" y1="84" x2="230" y2="104" class="fc-edge"/>
              <polygon points="230,104 310,130 230,156 150,130" class="fc-node"/><text x="230" y="131" class="fc-text">bil1 &gt; bil2 ?</text>
              <line x1="310" y1="130" x2="380" y2="130" class="fc-edge"/><text x="335" y="122" class="fc-text">Ya</text>
              <rect x="330" y="145" width="115" height="28" class="fc-node"/><text x="387" y="160" class="fc-text">kecil = bil2</text>
              <line x1="150" y1="130" x2="80" y2="130" class="fc-edge"/><text x="115" y="122" class="fc-text">Tidak</text>
              <rect x="20" y="145" width="115" height="28" class="fc-node"/><text x="77" y="160" class="fc-text">kecil = bil1</text>
              <line x1="77" y1="173" x2="230" y2="195" class="fc-edge"/>
              <line x1="387" y1="173" x2="230" y2="195" class="fc-edge"/>
              <rect x="125" y="195" width="210" height="32" class="fc-node"/><text x="230" y="212" class="fc-text">Loop x=1..kecil: cek mod=0 → d=x</text>
              <line x1="230" y1="227" x2="230" y2="255" class="fc-edge"/>
              <polygon points="160,255 310,255 295,285 145,285" class="fc-node"/><text x="228" y="271" class="fc-text">PRINT d (FPB)</text>
              <line x1="230" y1="285" x2="230" y2="312" class="fc-edge"/>
              <rect x="170" y="312" width="120" height="28" rx="14" class="fc-node"/><text x="230" y="327" class="fc-text">FINISH</text>
            </svg>
          </div>
          <p style="font-size:16px; color:var(--text-muted)">Klik tombol "Tampilkan Flowchart Kunci" di sebelah kiri setelah selesai mencoba.</p>
        </div>
      </div>
    `
  },
  {
    bab: 2,
    tipe: "📝 Rangkuman",
    judul: "Rangkuman Bab 2 & Jembatan ke Bab 3",
    durasi: "2 menit",
    catatan: "Rangkum Flowchart dan jembatan ke Bab 3: Percabangan.",
    render: () => `
      <div class="grid-2">
        <div class="card card-accent">
          <h3>📌 Poin Kunci Bab 2</h3>
          <ul class="bullet-list">
            <li><strong>Oval (Terminator):</strong> Wajib 1 Start & 1 Stop (masing-masing 1 panah).</li>
            <li><strong>Jajar Genjang (I/O) & Persegi Panjang (Proses):</strong> 1 panah masuk, 1 panah keluar.</li>
            <li><strong>Belah Ketupat (Decision):</strong> 1 panah masuk, 2 panah keluar (True/Yes & False/No).</li>
          </ul>
        </div>
        <div class="card">
          <h3>🚀 Selanjutnya di Bab 3: PERCABANGAN</h3>
          <p>Di Flowchart tadi kita sudah melihat simbol <strong>Decision (Belah Ketupat)</strong> yang membuat alur bercabang dua.</p>
          <p style="margin-top:0.6rem">Bagaimana cara menerjemahkan belah ketupat itu ke dalam kode program <code>if</code> dan <code>if-else</code>? Mari kita bahas di <strong>Bab 3!</strong></p>
        </div>
      </div>
    `
  },

  // ==========================================================================
  // BAB 3 — PERCABANGAN (FOKUS UTAMA 3)
  // ==========================================================================
  {
    bab: 3,
    tipe: "📘 Pembuka Bab",
    judul: "Bab 3: Percabangan (Selection — if & if-else)",
    durasi: "2 menit",
    catatan: "Masuk ke fokus utama ketiga: Percabangan (Pertemuan 5). Hari ini komputer belajar MEMILIH.",
    render: () => `
      <p class="slide-subtitle">Membuat program komputer mampu mengambil keputusan berdasarkan kondisi Boolean (True / False).</p>
      <div class="grid-2">
        <div class="card card-accent">
          <h3>🎯 Setelah bab ini, kamu bisa:</h3>
          <ul class="bullet-list">
            <li>Menentukan <strong>syarat/kondisi Boolean</strong> dari suatu permasalahan sehari-hari.</li>
            <li>Membedakan dan menulis kode <strong>If Sederhana</strong>, <strong>If-Else</strong>, hingga <strong>Elif</strong>.</li>
            <li>Melacak (<em>trace</em>) output program percabangan dan menghindari jebakan <code>=</code> vs <code>==</code>.</li>
          </ul>
        </div>
        <div class="card">
          <h3>🔀 Apa Itu Percabangan?</h3>
          <p><strong>Percabangan</strong> adalah suatu keadaan di mana pernyataan hanya akan dieksekusi apabila terdapat kondisi yang memenuhi syarat (bernilai <strong>True / Benar</strong>).</p>
        </div>
      </div>
    `
  },
  {
    bab: 3,
    tipe: "🔥 Pemantik",
    judul: "Cerita Pengantar: Danny Membeli Kopi",
    durasi: "3 menit",
    catatan: "Cerita ikonik dari slide Pertemuan 5 Pak Danny. Tanyakan ke kelas: 'Mana yang menjadi syarat?' sebelum klik kartu.",
    render: () => `
      <div class="card" style="margin-bottom:0.8rem;">
        <p>☕ <em>"Pada suatu hari, Danny diberi uang oleh sang istri sebanyak <strong>Rp20.000</strong> untuk membeli kopi. Sang istri memberinya saran: jika uang itu cukup untuk membeli kopi susu, belilah <strong>kopi susu</strong>. Namun jika harga kopi susu di atas 20 ribu, maka belilah <strong>kopi hitam biasa</strong>."</em></p>
      </div>
      <div class="prompt-card" onclick="document.getElementById('hint-b3').classList.toggle('hidden')">
        <div class="prompt-question">🔥 Pertanyaan: Dari cerita di atas, <u>mana yang menjadi syarat (kondisi)</u> dan bagaimana penulisan ekspresi Boolean-nya?</div>
        <p style="color:var(--text-muted)">👆 Klik untuk memunculkan pembahasan</p>
        <div id="hint-b3" class="feedback-box ok hidden" style="text-align:left; margin-top:1rem;">
          💡 <strong>Jawaban:</strong> Yang menjadi syarat adalah <strong>Harga Kopi Susu</strong>!<br>
          Ekspresi Boolean-nya: <code>Harga_Kopi_Susu &lt;= 20000</code>.<br>
          • Jika <strong>True (Benar)</strong> → Beli Kopi Susu.<br>
          • Jika <strong>False (Salah)</strong> → Beli Kopi Hitam.
        </div>
      </div>
    `
  },
  {
    bab: 3,
    tipe: "📘 Konsep",
    judul: "Dua Bentuk Utama: If Sederhana vs If-Else (+ Elif)",
    durasi: "5 menit",
    catatan: "Bandingkan If Sederhana (hanya 1 aksi jika True) dan If-Else (ada aksi alternatif jika False). Singgung juga perbedaan sintaks C/Java (pakai kurung) dan Python (pakai titik dua + indentasi).",
    steps: 3,
    render: () => `
      <div class="grid-3">
        <div class="card step-item" data-step="1">
          <h3>1. If Sederhana</h3>
          <p>Pernyataan hanya dieksekusi jika kondisi bernilai <strong>True</strong>. Jika False, dilewati.</p>
          <pre class="code-wrapper">${highlightCode(`# Python
if i > 0:
    print("i nilai positif")

// Gaya C / Modul
if (i > 0) {
    print("i nilai positif");
}`)}</pre>
        </div>
        <div class="card step-item" data-step="2">
          <h3>2. If - Else (2 Jalur)</h3>
          <p>Menambahkan jalur khusus yang dijalankan saat kondisi bernilai <strong>False</strong>.</p>
          <pre class="code-wrapper">${highlightCode(`# Python
if a > b:
    print("A lebih besar")
else:
    print("A lebih kecil")

// Pseudocode
IF a > b THEN
    PRINT "A lebih besar"
ELSE
    PRINT "A lebih kecil"
ENDIF`)}</pre>
        </div>
        <div class="card step-item" data-step="3">
          <h3>3. If - Elif - Else (&gt;2 Jalur)</h3>
          <p>Digunakan saat ada lebih dari 2 kemungkinan pilihan keputusan.</p>
          <pre class="code-wrapper">${highlightCode(`if nilai >= 85:
    print("A")
elif nilai >= 70:
    print("B")
else:
    print("C")`)}</pre>
          <div class="feedback-box err" style="font-size:15px;">
            ⚠️ Ingat: Membandingkan kesamaan wajib memakai <code>==</code> (dua sama dengan), bukan <code>=</code>!
          </div>
        </div>
      </div>
    `
  },
  {
    bab: 3,
    tipe: "🎬 Demo",
    judul: "Simulator Interaktif: Kopi Danny & Visualizer If-Else",
    durasi: "5 menit",
    catatan: "Geser slider harga kopi susu di kiri untuk melihat perubahan keputusan Danny secara real-time di Flowchart, Pseudocode, dan Python.",
    render: () => `
      <div class="grid-2">
        <div class="card">
          <h3>☕ Simulator Keputusan Kopi Danny</h3>
          <label>Uang dari Istri: <strong>Rp 20.000</strong></label>
          <label for="sliderHargaKopi">Harga Kopi Susu di Kedai: <strong id="labelHargaKopi" style="color:var(--accent)">Rp 18.000</strong></label>
          <input type="range" id="sliderHargaKopi" min="10000" max="30000" step="1000" value="18000" oninput="updateSimKopi(this.value)" />
          <div id="simKopiSvgWrap" style="margin-top:0.5rem;"></div>
        </div>
        <div class="card">
          <h3>💻 Eksekusi Kode Secara Langsung</h3>
          <div id="simKopiCode" class="code-wrapper"></div>
          <div id="simKopiResult" class="feedback-box ok" style="font-size:20px;"></div>
        </div>
      </div>
    `,
    onMount: () => {
      updateSimKopi(18000);
    }
  },
  {
    bab: 3,
    tipe: "🎬 Demo",
    judul: "Latihan Prediksi Output Modul Pertemuan 5",
    durasi: "4 menit",
    catatan: "Dua soal latihan langsung dari slide Pertemuan 5. Minta mahasiswa menebak dulu sebelum menekan tombol Trace & Jalankan.",
    render: () => `
      <p class="slide-subtitle">Tebak output dari 2 potongan kode di modul Pertemuan 5 sebelum menekan tombol <strong>Trace & Jalankan</strong>:</p>
      <div class="grid-2">
        <div class="card">
          <h3>Soal Modul A</h3>
          <pre class="code-wrapper">${highlightCode(`int a = 50;
if (a >= 90) {
    print("Nilai = A");
} else {
    print("Nilai = C");
}`)}</pre>
          <button class="btn-action" onclick="document.getElementById('out-mod-a').classList.toggle('hidden')">🔍 Trace & Lihat Output</button>
          <div id="out-mod-a" class="feedback-box ok hidden">
            <strong>Trace:</strong> <code>a = 50</code>. Cek kondisi <code>50 &gt;= 90</code> → bernilai <strong>FALSE</strong>.<br>
            Maka blok <code>else</code> dijalankan → Output: <strong><code>Nilai = C</code></strong>
          </div>
        </div>

        <div class="card">
          <h3>Soal Modul B</h3>
          <pre class="code-wrapper">${highlightCode(`int nilai = 8;
if (nilai == 10) {
    print("Sepuluh");
} else {
    print("Bukan Sepuluh");
}`)}</pre>
          <button class="btn-action" onclick="document.getElementById('out-mod-b').classList.toggle('hidden')">🔍 Trace & Lihat Output</button>
          <div id="out-mod-b" class="feedback-box ok hidden">
            <strong>Trace:</strong> <code>nilai = 8</code>. Cek kondisi <code>8 == 10</code> → bernilai <strong>FALSE</strong>.<br>
            Maka blok <code>else</code> dijalankan → Output: <strong><code>Bukan Sepuluh</code></strong>
          </div>
        </div>
      </div>
    `
  },
  {
    bab: 3,
    tipe: "✅ Cek Pemahaman",
    judul: "Cek Pemahaman Bab 3 (Percabangan)",
    durasi: "4 menit",
    catatan: "Kuis 3 soal Bab 3. Kunci: 1=B, 2=A, 3=C.",
    render: () => renderQuizSlide(3, [
      {
        tanya: "1. Tipe data yang dihasilkan oleh kondisi di dalam pernyataan `if (kondisi)` harus berupa...",
        opsi: ["Float (desimal)", "Boolean (True / False)", "Array", "Char"],
        benar: 1,
        bahas: "Kondisi pada percabangan wajib menghasilkan nilai kebenaran Boolean (True atau False)."
      },
      {
        tanya: "2. Jika diketahui `a = 5` dan `b = 6`, apa output dari `if (a > b) print(\"A\") else print(\"B\")`?",
        opsi: ["B", "A", "A dan B", "Tidak mencetak apa pun"],
        benar: 0,
        bahas: "Karena 5 > 6 bernilai False, maka program mengeksekusi cabang else dan mencetak \"B\"."
      },
      {
        tanya: "3. Apa kesalahan sintaks pada penulisan gaya C/Java berikut: `if i > 0 { print(\"Positif\") }`?",
        opsi: [
          "Variabel tidak boleh bernama i",
          "Tanda > tidak dikenal dalam pemrograman",
          "Kondisi `i > 0` tidak dibungkus tanda kurung `(i > 0)`",
          "Seharusnya memakai kata kunci WHILE"
        ],
        benar: 2,
        bahas: "Pada contoh di modul Pertemuan 5, penulisan kondisi pada bahasa keluarga C/Java wajib menggunakan tanda kurung: `if (i > 0)`."
      }
    ])
  },
  {
    bab: 3,
    tipe: "✍️ Latihan",
    judul: "Latihan Ngoding Bab 3: Genap & Bilangan Terbesar",
    durasi: "6 menit",
    catatan: "Dua soal latihan terakhir di slide Pertemuan 5. Dilengkapi simulator uji input secara langsung.",
    render: () => `
      <div class="grid-2">
        <div class="card">
          <h3>✍️ Soal 1: Cetak 'Genap' Jika Bilangan Genap</h3>
          <p>Buat program yang membaca sebuah bilangan bulat dari keyboard, lalu mencetak pesan <code>'Genap'</code> jika bilangan tersebut genap.</p>
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <label>Uji angka:</label>
            <input type="number" id="inpLatGenap" value="14" style="width:90px;" />
            <button class="btn-action" onclick="ujiLatihanGenap()">Jalankan</button>
            <button class="btn-action secondary" onclick="document.getElementById('key-b3-1').classList.toggle('hidden')">🔑 Kunci Kode</button>
          </div>
          <div id="outLatGenap" class="feedback-box ok">Output: Genap (karena 14 % 2 == 0)</div>
          <pre id="key-b3-1" class="code-wrapper hidden">${highlightCode(`angka = int(input("Masukkan bilangan bulat: "))
if angka % 2 == 0:
    print("Genap")`)}</pre>
        </div>

        <div class="card">
          <h3>✍️ Soal 2: Menampilkan Bilangan Terbesar dari 2 Angka</h3>
          <p>Buat program yang membaca 2 bilangan dari keyboard lalu menampilkan bilangan terbesar!</p>
          <div style="display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap;">
            <input type="number" id="inpMaxA" value="25" style="width:80px;" />
            <input type="number" id="inpMaxB" value="42" style="width:80px;" />
            <button class="btn-action" onclick="ujiLatihanMax()">Bandingkan</button>
            <button class="btn-action secondary" onclick="document.getElementById('key-b3-2').classList.toggle('hidden')">🔑 Kunci Kode</button>
          </div>
          <div id="outLatMax" class="feedback-box ok">Bilangan terbesar adalah: 42</div>
          <pre id="key-b3-2" class="code-wrapper hidden">${highlightCode(`a = int(input("Masukkan bilangan 1: "))
b = int(input("Masukkan bilangan 2: "))
if a > b:
    print("Bilangan terbesar:", a)
else:
    print("Bilangan terbesar:", b)`)}</pre>
        </div>
      </div>
    `
  },
  {
    bab: 3,
    tipe: "📝 Rangkuman",
    judul: "Rangkuman Bab 3 & Jembatan ke Bab 4",
    durasi: "2 menit",
    catatan: "Gunakan kalimat jembatan dari slide Pertemuan 6 Pak Jan Kristanto Wibisono: 'Kemarin MEMILIH, hari ini MENGULANG'.",
    render: () => `
      <div class="grid-2">
        <div class="card card-accent">
          <h3>📌 Poin Kunci Bab 3</h3>
          <ul class="bullet-list">
            <li>Percabangan mengevaluasi ekspresi <strong>Boolean</strong> (<code>True</code> / <code>False</code>).</li>
            <li>Gunakan <strong><code>if</code> sederhana</strong> untuk 1 aksi bersyarat, <strong><code>if-else</code></strong> untuk 2 jalur alternatif, dan <strong><code>elif</code></strong> untuk banyak pilihan.</li>
            <li>Jangan tertukar antara <code>=</code> (simpan nilai) dan <code>==</code> (bandingkan nilai).</li>
          </ul>
        </div>
        <div class="card">
          <h3>🚀 Kemarin MEMILIH, Hari Ini MENGULANG!</h3>
          <p>Dengan <code>if / else</code>, komputer sudah pintar memilih jalan. Tapi bagaimana kalau kita harus mencetak teks atau menjumlahkan angka <strong>1.000 kali berturut-turut</strong>?</p>
          <p style="margin-top:0.6rem">Mari masuk ke <strong>Bab 4: Struktur Kontrol Perulangan (<code>for</code> & <code>while</code>)!</strong></p>
        </div>
      </div>
    `
  },

  // ==========================================================================
  // BAB 4 — PERULANGAN (FOKUS UTAMA 4)
  // ==========================================================================
  {
    bab: 4,
    tipe: "📘 Pembuka Bab",
    judul: "Bab 4: Struktur Kontrol Perulangan (for, while, range)",
    durasi: "2 menit",
    catatan: "Masuk ke fokus utama keempat dari Pertemuan 6 (Pak Jan Kristanto Wibisono). Tekankan filosofi: Jangan hafalkan kodenya, pahami apa yang dikerjakan komputer.",
    render: () => `
      <p class="slide-subtitle">Menyuruh komputer mengulang instruksi secara sistematis — tanpa kita menulisnya berkali-kali.</p>
      <div class="grid-2">
        <div class="card card-accent">
          <h3>🎯 Setelah bab ini, kamu bisa:</h3>
          <ul class="bullet-list">
            <li>Menjelaskan <strong>3 bahan utama loop</strong> serta cara kerja <code>for</code> dan <code>range(start, stop, step)</code>.</li>
            <li>Menggunakan pola <strong>Akumulator</strong> untuk menjumlahkan dan mengalikan nilai (faktorial).</li>
            <li>Membedakan kapan memakai <code>for</code> vs <code>while</code>, serta mencegah <strong>Infinite Loop</strong>.</li>
          </ul>
        </div>
        <div class="card">
          <h3>💡 Prinsip Utama Kita</h3>
          <p style="font-size:26px; font-weight:800; color:var(--accent);">"Don't memorize the code. Understand what the computer is doing."</p>
          <p>Jangan menebak output — biasakan melakukan <strong>trace</strong> baris demi baris!</p>
        </div>
      </div>
    `
  },
  {
    bab: 4,
    tipe: "🔥 Pemantik",
    judul: "Masalah: Cetak \"Hello UKDW\" Sebanyak 100 Kali!",
    durasi: "3 menit",
    catatan: "Tunjukkan betapa merepotkannya menyalin 100 baris print, apalagi kalau disuruh ganti jadi 'Hello FTI'.",
    render: () => `
      <div class="grid-2">
        <div class="card">
          <h3>😫 Cara Manual (100 Baris)</h3>
          <pre class="code-wrapper">${highlightCode(`print("Hello UKDW")
print("Hello UKDW")
print("Hello UKDW")
# ... 96 baris lagi ...
print("Hello UKDW")`)}</pre>
        </div>
        <div class="prompt-card" onclick="document.getElementById('hint-b4').classList.toggle('hidden')">
          <div class="prompt-question">🔥 Mau ngetik 100 baris? Bagaimana kalau diminta 1.000.000 kali? Atau tiba-tiba dosen minta ganti tulisannya jadi <code>"Hello FTI"</code>?</div>
          <p style="color:var(--text-muted)">👆 Klik untuk melihat solusi 2 baris</p>
          <div id="hint-b4" class="feedback-box ok hidden" style="text-align:left; margin-top:1rem;">
            ✨ <strong>100 baris → cukup 2 baris dengan Loop!</strong>
            <pre class="code-wrapper" style="margin-top:0.5rem;">${highlightCode(`for i in range(100):
    print("Hello UKDW")`)}</pre>
          </div>
        </div>
      </div>
    `
  },
  {
    bab: 4,
    tipe: "📘 Konsep",
    judul: "3 Bahan Utama Loop & Analogi Lari 5 Putaran Lapangan",
    durasi: "4 menit",
    catatan: "Klik tombol 'Lari 1 Putaran' untuk mendemonstrasikan sinkronisasi antara pelari di lintasan dengan variabel loop i.",
    render: () => `
      <div class="grid-2">
        <div class="card">
          <h3>🏃‍♂️ Setiap Loop Punya 3 Bahan:</h3>
          <ul class="bullet-list">
            <li><strong>1. Yang diulang:</strong> Instruksi di dalam badan loop (berlari mengelilingi lapangan).</li>
            <li><strong>2. Sampai kapan?:</strong> Urutan atau kondisi berhenti (target 5 putaran).</li>
            <li><strong>3. Yang berubah:</strong> Variabel penghitung yang nilainya berganti tiap putaran (<code>i</code>).</li>
          </ul>
          <pre class="code-wrapper">${highlightCode(`for i in range(5):   # 0, 1, 2, 3, 4 (5 kali)
    print(i)         # 4 spasi indentasi = badan loop`)}</pre>
        </div>

        <div class="card card-accent">
          <h3>🏟️ Simulator Analogi Lari 5 Putaran (<code>range(5)</code>)</h3>
          <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem;">
            <svg width="210" height="145" viewBox="0 0 210 145" style="background:var(--code-bg); border-radius:12px;">
              <rect x="20" y="20" width="170" height="105" rx="52" fill="none" stroke="#334155" stroke-width="14"/>
              <rect x="20" y="20" width="170" height="105" rx="52" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="6 4"/>
              <circle id="runnerDot" cx="105" cy="20" r="11" fill="#fbbf24" />
              <text x="105" y="76" class="fc-text" id="trackCenterText">Siap (i = -)</text>
            </svg>
            <div style="flex:1;">
              <p id="lapStatusText" style="font-weight:700;">Klik tombol untuk mulai iterasi:</p>
              <div style="display:flex; gap:0.5rem; margin-top:0.6rem;">
                <button class="btn-action" onclick="stepRunnerLap()">👟 Lari 1 Iterasi</button>
                <button class="btn-action secondary" onclick="resetRunnerLap()">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    onMount: () => {
      resetRunnerLap();
    }
  },
  {
    bab: 4,
    tipe: "🎬 Demo",
    judul: "Visualisasi Interaktif Tiga Bentuk range()",
    durasi: "5 menit",
    catatan: "Kenapa range(5) berhenti di 4? Karena mulai dari 0 dan berhenti SEBELUM stop! Gunakan tombol preset atau ubah angkanya.",
    render: () => `
      <p class="slide-subtitle">Ingat aturan emas: <code>range()</code> selalu berhenti <strong>SEBELUM</strong> nilai <code>stop</code> (kotak merah tidak ikut dieksekusi).</p>
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.8rem;">
          <div style="display:flex; gap:0.6rem; align-items:center; flex-wrap:wrap;">
            <label>start: <input type="number" id="rngStart" value="0" min="0" max="10" style="width:70px" oninput="updateRangeVis()"/></label>
            <label>stop: <input type="number" id="rngStop" value="5" min="1" max="12" style="width:70px" oninput="updateRangeVis()"/></label>
            <label>step: <input type="number" id="rngStep" value="1" min="1" max="5" style="width:70px" oninput="updateRangeVis()"/></label>
          </div>
          <div style="display:flex; gap:0.45rem; flex-wrap:wrap;">
            <button class="btn-action" onclick="setRangePreset(0,5,1)">range(5)</button>
            <button class="btn-action secondary" onclick="setRangePreset(1,6,1)">range(1, 6)</button>
            <button class="btn-action secondary" onclick="setRangePreset(2,11,2)">range(2, 11, 2)</button>
          </div>
        </div>

        <div id="rangeCodePreview" class="code-wrapper" style="margin-top:0.5rem;"></div>
        <div id="rangeNumberLine" class="number-line"></div>
        <div id="rangeExplainText" class="feedback-box ok" style="margin-top:0.5rem;"></div>
      </div>
    `,
    onMount: () => {
      updateRangeVis();
    }
  },
  {
    bab: 4,
    tipe: "🎬 Demo",
    judul: "Live Loop Stepper & Tabel Trace (Predict, Akumulator, Faktorial)",
    durasi: "6 menit",
    catatan: "Tekankan: Jangan menebak, jalankan kodenya baris demi baris di tabel trace! Tunjukkan bahwa '=' pada total = total + i berarti SIMPAN.",
    render: () => `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
        <div style="display:flex; gap:0.45rem; flex-wrap:wrap;">
          <button class="btn-action" onclick="loadLoopTrace('predict')">1. Predict: i * 2</button>
          <button class="btn-action secondary" onclick="loadLoopTrace('sum')">2. Akumulator (1+2+..+5)</button>
          <button class="btn-action secondary" onclick="loadLoopTrace('fact')">3. Faktorial (5! = 120)</button>
        </div>
        <div style="display:flex; gap:0.45rem;">
          <button class="btn-action" onclick="stepLoopTrace()">⏭️ Langkah Iterasi</button>
          <button class="btn-action secondary" onclick="playAllLoopTrace()">⏩ Jalankan Semua</button>
          <button class="btn-action secondary" onclick="resetLoopTrace()">🔄 Reset</button>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <h3>🐍 Kode Python & Penjelasan</h3>
          <div id="traceCodeBox" class="code-wrapper"></div>
          <div id="traceNoteBox" class="feedback-box ok" style="font-size:17px;"></div>
        </div>
        <div class="card">
          <h3>📊 Tabel Trace Live</h3>
          <div style="max-height:270px; overflow-y:auto;">
            <table class="trace-table" id="liveTraceTable"></table>
          </div>
        </div>
      </div>
    `,
    onMount: () => {
      loadLoopTrace('predict');
    }
  },
  {
    bab: 4,
    tipe: "🎬 Demo",
    judul: "Perulangan while & Simulator Bahaya Infinite Loop",
    durasi: "5 menit",
    catatan: "Tunjukkan 3 bagian while: Inisialisasi, Kondisi, Update. Lalu klik tombol merah 'Hapus Baris Update' untuk mendemonstrasikan Infinite Loop yang dihentikan aman.",
    render: () => `
      <div class="grid-2">
        <div class="card">
          <h3>🔐 Kapan Pakai <code>while</code>?</h3>
          <p>Saat kita <strong>tidak tahu sebelumnya harus berapa kali mengulang</strong> (bergantung kondisi). Contoh: meminta password sampai benar.</p>
          <pre class="code-wrapper">${highlightCode(`password = input("Password: ")
while password != "ukdw123":
    print("Salah! Coba lagi.")
    password = input("Password: ")
print("Selamat datang!")`)}</pre>
          <p style="font-size:17px;"><strong>3 Bagian Penting <code>while</code>:</strong> (1) <strong>Inisialisasi</strong> nilai awal, (2) <strong>Kondisi</strong> dicek sebelum tiap putaran, (3) <strong>Update</strong> pengubah state.</p>
        </div>

        <div class="card">
          <h3>⚠️ Simulator <code>while</code> vs Infinite Loop</h3>
          <div id="whileSimCode" class="code-wrapper"></div>
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:0.4rem;">
            <button class="btn-action" onclick="runWhileSim(false)">▶️ Jalankan Normal (Ada Update)</button>
            <button class="btn-action danger" onclick="runWhileSim(true)">💥 Hapus Update (Infinite Loop!)</button>
            <button class="btn-action secondary" onclick="stopWhileSim()">🛑 Tekan Ctrl + C</button>
          </div>
          <div id="whileSimOutput" class="feedback-box ok" style="font-family:var(--font-mono); min-height:72px;">Klik tombol di atas untuk menguji...</div>
        </div>
      </div>
    `,
    onMount: () => {
      renderWhileSimCode(false);
    }
  },
  {
    bab: 4,
    tipe: "🐞 Debug",
    judul: "Debug Lab: What's Wrong With This Code? (3 Bug Modul)",
    durasi: "5 menit",
    catatan: "3 Bug dari slide 26-27 Pertemuan 6: #1 Infinite Loop, #2 Off-by-one range(1,10), #3 Indentasi print(total) di dalam loop.",
    render: () => `
      <p class="slide-subtitle">Temukan penyebab bug dan klik tombol <strong>Perbaiki Kode</strong> pada ketiga kasus dari modul Pertemuan 6:</p>
      <div class="grid-3">
        <div class="card">
          <h3>🐞 Bug #1: Cetak 1 s/d 10</h3>
          <pre id="bug6-1" class="code-wrapper">${highlightCode(`i = 1
while i <= 10:
    print(i)`)}</pre>
          <button class="btn-action" onclick="fixBug6(1)">🔧 Perbaiki Bug #1</button>
          <div id="fix6-1" class="feedback-box err">Masalah: Baris UPDATE hilang! <code>i</code> selalu 1 (Infinite Loop).</div>
        </div>

        <div class="card">
          <h3>🐞 Bug #2: Cetak 1 s/d 10</h3>
          <pre id="bug6-2" class="code-wrapper">${highlightCode(`for i in range(1, 10):
    print(i)`)}</pre>
          <button class="btn-action" onclick="fixBug6(2)">🔧 Perbaiki Bug #2</button>
          <div id="fix6-2" class="feedback-box err">Masalah: <em>Off-by-one!</em> <code>range(1, 10)</code> berhenti di 9.</div>
        </div>

        <div class="card">
          <h3>🐞 Bug #3: Cetak Total Sekali</h3>
          <pre id="bug6-3" class="code-wrapper">${highlightCode(`total = 0
for i in range(1, 6):
    total = total + i
    print(total)`)}</pre>
          <button class="btn-action" onclick="fixBug6(3)">🔧 Perbaiki Bug #3</button>
          <div id="fix6-3" class="feedback-box err">Masalah: Indentasi! <code>print(total)</code> di dalam loop ikut tercetak 5 kali.</div>
        </div>
      </div>
    `
  },
  {
    bab: 4,
    tipe: "✅ Cek Pemahaman",
    judul: "Cek Pemahaman Bab 4 (Perulangan + break/continue)",
    durasi: "5 menit",
    catatan: "Kuis 4 soal Bab 4 termasuk materi opsional break & continue di slide 19.",
    render: () => renderQuizSlide(4, [
      {
        tanya: "1. Berapa kali perulangan `for i in range(5):` akan dieksekusi dan berapa nilai terakhir dari variabel `i`?",
        opsi: [
          "5 kali, dengan nilai i terakhir adalah 4",
          "5 kali, dengan nilai i terakhir adalah 5",
          "4 kali, dengan nilai i terakhir adalah 4",
          "6 kali, karena dimulai dari 0 sampai 5"
        ],
        benar: 0,
        bahas: "range(5) menghasilkan 0, 1, 2, 3, 4 (total 5 angka / 5 iterasi) dan berhenti sebelum 5."
      },
      {
        tanya: "2. Saat menghitung faktorial `for i in range(1, n + 1): faktorial = faktorial * i`, mengapa nilai awal `faktorial` harus diinisialisasi dengan `1`, bukan `0`?",
        opsi: [
          "Karena Python melarang angka 0 di dalam loop",
          "Karena bilangan apa pun jika dikalikan dengan 0 hasilnya akan selalu 0",
          "Agar loop otomatis berhenti di tengah jalan",
          "Karena range dimulai dari 0"
        ],
        benar: 1,
        bahas: "Untuk perkalian berulang (faktorial), identitas perkalian adalah 1. Jika dimulai dari 0, maka 0 * 1 * 2 * ... akan selalu menghasilkan 0."
      },
      {
        tanya: "3. Apa output dari kode: `for i in range(1, 6): if i == 3: continue; print(i)`?",
        opsi: ["1 2", "1 2 3 4 5", "1 2 4 5 (angka 3 dilewati)", "3 saja"],
        benar: 2,
        bahas: "Perintah `continue` melewati sisa iterasi saat i == 3 dan langsung lanjut ke iterasi berikutnya (4 dan 5). Sedangkan `break` menghentikan loop sepenuhnya."
      },
      {
        tanya: "4. Kapan sebaiknya kita memilih perulangan `for` dibandingkan `while`?",
        opsi: [
          "Saat jumlah pengulangan atau urutan yang dilalui sudah diketahui secara pasti",
          "Saat kita belum tahu sampai percobaan ke berapa user memasukkan password yang benar",
          "Saat kita sengaja ingin membuat infinite loop",
          "Saat tidak ada variabel yang berubah"
        ],
        benar: 0,
        bahas: "`for` sangat cocok saat melewati urutan atau jumlah putaran yang sudah pasti (seperti cetak angka 1–10), sedangkan `while` cocok saat bergantung kondisi."
      }
    ])
  },
  {
    bab: 4,
    tipe: "✍️ Latihan",
    judul: "Studi Kasus Ngoding Bertingkat (Level 1, 2, 3 & Bonus Digit)",
    durasi: "8 menit",
    catatan: "Ingatkan pola dari slide 20: Pikir dulu -> tulis langkahnya -> baru ngoding! Semua level dilengkapi petunjuk dan kunci.",
    render: () => `
      <p class="slide-subtitle">Ingat pola kita: <strong>Pikir dulu → Tulis langkahnya → Baru ngoding!</strong> Klik tab level di bawah ini:</p>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
        <button class="btn-action" onclick="showLevelLatihan(1)">🟢 Level 1: Mudah (1–20 & Genap)</button>
        <button class="btn-action secondary" onclick="showLevelLatihan(2)">🟡 Level 2: Sedang (Jumlah 1..N)</button>
        <button class="btn-action secondary" onclick="showLevelLatihan(3)">🔴 Level 3: Faktorial N!</button>
        <button class="btn-action secondary" onclick="showLevelLatihan(4)">⭐ Bonus: Hitung Digit Angka</button>
      </div>
      <div id="levelLatihanBox" class="card" style="margin-top:0.5rem;"></div>
    `,
    onMount: () => {
      showLevelLatihan(1);
    }
  },
  {
    bab: 4,
    tipe: "📝 Rangkuman",
    judul: "Rangkuman 5 Pertanyaan Bab 4 & Teaser Minggu Depan",
    durasi: "3 menit",
    catatan: "Pastikan mahasiswa bisa menjawab ke-5 pertanyaan rangkuman ini sebelum menutup kelas.",
    render: () => `
      <div class="grid-2">
        <div class="card card-accent">
          <h3>✅ Sekarang Kalian Bisa Menjawab 5 Hal Ini:</h3>
          <ol style="padding-left:1.4rem; display:flex; flex-direction:column; gap:0.45rem;">
            <li><strong>Apa itu loop?</strong> Menyuruh komputer mengulang instruksi secara sistematis.</li>
            <li><strong>Kapan memakai <code>for</code>?</strong> Saat urutan/jumlah pengulangan sudah diketahui pasti.</li>
            <li><strong>Kapan memakai <code>while</code>?</strong> Saat pengulangan bergantung pada kondisi.</li>
            <li><strong>Apa yang terjadi tiap iterasi?</strong> Variabel loop berubah & badan loop dieksekusi.</li>
            <li><strong>Bagaimana menghindari infinite loop?</strong> Pastikan ada baris <strong>UPDATE</strong> yang mengubah kondisi menjadi <code>False</code>.</li>
          </ol>
        </div>
        <div class="card">
          <h3>🔮 Minggu Depan: Nested Loops!</h3>
          <p>Hari ini kita belajar satu <strong>LOOP</strong>. Minggu depan kita akan mempelajari <strong>LOOP di dalam LOOP</strong> (<em>Nested Loops</em>):</p>
          <pre class="code-wrapper">${highlightCode(`for baris in range(1, 5):
    for kolom in range(1, 5):
        # Apa yang terjadi di sini?`)}</pre>
          <p style="margin-top:0.5rem; font-weight:700; color:var(--accent);">"Jangan hafalkan kodenya — pahami apa yang dikerjakan komputer."</p>
        </div>
      </div>
    `
  },

  // ==========================================================================
  // SLIDE TERAKHIR — REKAP SKOR SEMUA BAB & PENUTUP
  // ==========================================================================
  {
    bab: 5,
    tipe: "🏆 Penutup",
    judul: "Rekap Skor Pemahaman & Penutup Kelas",
    durasi: "2 menit",
    catatan: "Apresiasi semangat belajar adik-adik tingkat. Ajak mereka mencoba kembali kuis yang belum sempurna atau melanjutkan soal Bonus di rumah.",
    render: () => {
      const totalBenar = Object.values(stateSkor).reduce((a, b) => a + b, 0);
      const totalSoal = Object.values(maxSkorBab).reduce((a, b) => a + b, 0);
      return `
        <p class="slide-subtitle">Terima kasih sudah aktif berdiskusi, melakukan <em>trace</em>, dan berlatih bersama hari ini!</p>
        <div class="grid-2">
          <div class="card card-accent">
            <h3>📊 Rekap Skor Cek Pemahamanmu</h3>
            <table class="trace-table">
              <thead>
                <tr><th>Bab Materi</th><th>Skor Kamu</th><th>Aksi</th></tr>
              </thead>
              <tbody>
                <tr><td>Bab 0 · CT & Prasyarat</td><td>${stateSkor[0]} / ${maxSkorBab[0]}</td><td><button class="btn-action secondary" onclick="goToSlide(6)">Buka Kuis</button></td></tr>
                <tr><td>Bab 1 · Pseudocode</td><td>${stateSkor[1]} / ${maxSkorBab[1]}</td><td><button class="btn-action secondary" onclick="goToSlide(14)">Buka Kuis</button></td></tr>
                <tr><td>Bab 2 · Flowchart</td><td>${stateSkor[2]} / ${maxSkorBab[2]}</td><td><button class="btn-action secondary" onclick="goToSlide(22)">Buka Kuis</button></td></tr>
                <tr><td>Bab 3 · Percabangan</td><td>${stateSkor[3]} / ${maxSkorBab[3]}</td><td><button class="btn-action secondary" onclick="goToSlide(30)">Buka Kuis</button></td></tr>
                <tr><td>Bab 4 · Perulangan</td><td>${stateSkor[4]} / ${maxSkorBab[4]}</td><td><button class="btn-action secondary" onclick="goToSlide(40)">Buka Kuis</button></td></tr>
              </tbody>
            </table>
            <p style="font-size:24px; font-weight:800; margin-top:0.6rem;">Total Skor Keseluruhan: <span style="color:var(--accent)">${totalBenar} / ${totalSoal}</span></p>
          </div>
          <div class="card">
            <h3>🎓 Pesan untuk Adik-Adik Semester 1 UKDW</h3>
            <ul class="bullet-list">
              <li>Sebelum mengetik kode Python/C, biasakan merancang <strong>Pseudocode</strong> atau <strong>Flowchart</strong> di kertas terlebih dahulu.</li>
              <li>Saat bertemu soal <code>if-else</code> dan <code>for/while</code>, jangan pernah menebak — buatlah <strong>Tabel Trace</strong>.</li>
              <li>Belum selesai Level 3 atau soal Bonus digit? Lanjutkan eksperimenmu di VS Code di rumah!</li>
            </ul>
            <div style="margin-top:auto; display:flex; gap:0.6rem;">
              <button class="btn-action" onclick="goToSlide(0)">⏮️ Kembali ke Slide 1</button>
              <button class="btn-action secondary" onclick="resetAllScores()">🔄 Reset Semua Skor</button>
            </div>
          </div>
        </div>
      `;
    }
  }
];

/**
 * ============================================================================
 * LOGIKA INTI NAVIGASI, PROGRESSIVE REVEAL & PENYIMPANAN LOCALSTORAGE
 * ============================================================================
 */
let currentSlideIndex = 0;
let currentStepIndex = 0;
let maxStepsInSlide = 0;

function loadSavedPosition() {
  try {
    const saved = localStorage.getItem("ukdw_daspro_slide_idx");
    if (saved !== null) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed >= 0 && parsed < SLIDES.length) {
        currentSlideIndex = parsed;
      }
    }
  } catch (e) {
    // Abaikan jika localStorage diblokir browser
  }
}

function savePosition() {
  try {
    localStorage.setItem("ukdw_daspro_slide_idx", String(currentSlideIndex));
  } catch (e) {
    // Abaikan jika localStorage diblokir
  }
}

function renderCurrentSlide() {
  const slide = SLIDES[currentSlideIndex];
  const container = document.getElementById("slideContainer");
  document.body.setAttribute("data-bab", String(slide.bab));

  // Update Header & Badge
  const babInfo = CHAPTER_META.find((b) => b.id === slide.bab) || CHAPTER_META[0];
  document.getElementById("chapterBadge").textContent = babInfo.nama;
  document.getElementById("slideTypeBadge").textContent = slide.tipe;

  // Render HTML Slide
  container.innerHTML = `
    <h1 class="slide-title">${slide.judul}</h1>
    ${slide.render()}
  `;

  // Pasang tombol salin pada setiap blok kode
  container.querySelectorAll("pre.code-wrapper").forEach((pre) => {
    const btn = document.createElement("button");
    btn.className = "copy-code-btn";
    btn.textContent = "Salin";
    btn.onclick = (ev) => {
      ev.stopPropagation();
      navigator.clipboard?.writeText(pre.innerText.replace("Salin", "").trim());
      btn.textContent = "Tersalin ✓";
      setTimeout(() => (btn.textContent = "Salin"), 1400);
    };
    pre.appendChild(btn);
  });

  // Inisialisasi Progressive Reveal (Langkah demi langkah)
  const stepElements = container.querySelectorAll(".step-item");
  maxStepsInSlide = stepElements.length;
  currentStepIndex = maxStepsInSlide > 0 ? 1 : 0;
  updateStepVisibility();

  // Update Progress Bar & Nomor Slide
  const pct = ((currentSlideIndex + 1) / SLIDES.length) * 100;
  document.getElementById("progressBar").style.width = `${pct}%`;
  document.getElementById("slideCounter").textContent = `${currentSlideIndex + 1} / ${SLIDES.length}`;

  // Update Panel Catatan Pembicara (Dosen/Pemateri)
  document.getElementById("notesDuration").textContent = `⏱️ ~${slide.durasi || "3 menit"}`;
  document.getElementById("notesBody").textContent = slide.catatan || "Tidak ada catatan khusus untuk slide ini.";

  if (typeof slide.onMount === "function") {
    slide.onMount();
  }

  savePosition();
  updateDrawerHighlight();
}

function updateStepVisibility() {
  const stepElements = document.querySelectorAll("#slideContainer .step-item");
  const stepBtn = document.getElementById("btnStepReveal");
  const stepText = document.getElementById("stepCounterText");

  if (maxStepsInSlide === 0) {
    stepBtn.classList.remove("has-steps");
    stepText.textContent = "Utuh";
    return;
  }

  stepElements.forEach((el, idx) => {
    if (idx < currentStepIndex) {
      el.classList.remove("step-hidden");
    } else {
      el.classList.add("step-hidden");
    }
  });

  stepText.textContent = `Poin ${currentStepIndex}/${maxStepsInSlide}`;
  if (currentStepIndex < maxStepsInSlide) {
    stepBtn.classList.add("has-steps");
  } else {
    stepBtn.classList.remove("has-steps");
  }
}

function nextAction() {
  if (maxStepsInSlide > 0 && currentStepIndex < maxStepsInSlide) {
    currentStepIndex++;
    updateStepVisibility();
    return;
  }
  if (currentSlideIndex < SLIDES.length - 1) {
    currentSlideIndex++;
    renderCurrentSlide();
  }
}

function prevAction() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    renderCurrentSlide();
  }
}

function goToSlide(idx) {
  if (idx >= 0 && idx < SLIDES.length) {
    currentSlideIndex = idx;
    renderCurrentSlide();
    document.getElementById("drawerMenu").classList.add("hidden");
  }
}

/**
 * ============================================================================
 * KOMPONEN INTERAKTIF BAB 0 (SOP KOPI & VALIDATOR VARIABEL)
 * ============================================================================
 */
let kopiSteps = [];
const KOPI_CORRECT = [
  "1. Tuang 20 ml saus butterscotch ke dasar gelas",
  "2. Ekstraksi 1 shot espresso (30 ml) panas & aduk hingga larut",
  "3. Masukkan 150 gram es batu hingga 3/4 gelas",
  "4. Tuangkan 120 ml susu segar (fresh milk) perlahan",
  "5. Tambahkan milk foam & siram 5 ml saus di atasnya"
];

function initKopiSorter() {
  kopiSteps = [
    KOPI_CORRECT[2],
    KOPI_CORRECT[0],
    KOPI_CORRECT[4],
    KOPI_CORRECT[1],
    KOPI_CORRECT[3]
  ];
  renderKopiSorter();
  const fb = document.getElementById("kopiSortFeedback");
  if (fb) fb.innerHTML = "";
}

function renderKopiSorter() {
  const wrap = document.getElementById("kopiSortList");
  if (!wrap) return;
  wrap.innerHTML = kopiSteps
    .map(
      (txt, idx) => `
      <div class="sortable-item">
        <span>${txt.replace(/^\d+\.\s*/, "")}</span>
        <div style="display:flex; gap:0.3rem;">
          <button class="icon-btn" onclick="moveKopiStep(${idx}, -1)" aria-label="Naikkan">↑</button>
          <button class="icon-btn" onclick="moveKopiStep(${idx}, 1)" aria-label="Turunkan">↓</button>
        </div>
      </div>
    `
    )
    .join("");
}

function moveKopiStep(idx, dir) {
  const target = idx + dir;
  if (target < 0 || target >= kopiSteps.length) return;
  const temp = kopiSteps[idx];
  kopiSteps[idx] = kopiSteps[target];
  kopiSteps[target] = temp;
  renderKopiSorter();
}

function cekUrutanKopi() {
  const benar = kopiSteps.every((val, i) => val === KOPI_CORRECT[i]);
  const fb = document.getElementById("kopiSortFeedback");
  if (benar) {
    fb.innerHTML = `<div class="feedback-box ok">🎉 Tepat sekali! Saus dilarutkan dulu dengan espresso panas sebelum diberi es batu dan susu.</div>`;
  } else {
    fb.innerHTML = `<div class="feedback-box err">❌ Urutan belum tepat. Ingat: saus kental harus di dasar gelas dan dilarutkan oleh espresso panas sebelum es batu masuk!</div>`;
  }
}

function ujiVariabel(nama) {
  const clean = (nama || "").trim();
  const fb = document.getElementById("varFeedback");
  if (!clean) {
    fb.innerHTML = `<div class="feedback-box err">Masukkan nama variabel terlebih dahulu.</div>`;
    return;
  }
  if (/^[0-9]/.test(clean)) {
    fb.innerHTML = `<div class="feedback-box err">❌ <code>${clean}</code> TIDAK VALID: Dimulai dengan angka. Wajib diawali huruf abjad!</div>`;
  } else if (/\s/.test(clean)) {
    fb.innerHTML = `<div class="feedback-box err">❌ <code>${clean}</code> TIDAK VALID: Mengandung spasi. Gunakan underscore (<code>_</code>) atau camelCase.</div>`;
  } else if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(clean)) {
    fb.innerHTML = `<div class="feedback-box err">❌ <code>${clean}</code> TIDAK VALID: Mengandung simbol terlarang/membingungkan.</div>`;
  } else {
    fb.innerHTML = `<div class="feedback-box ok">✅ <code>${clean}</code> VALID! Diawali huruf, tanpa spasi, dan sesuai aturan identifier.</div>`;
  }
}

/**
 * ============================================================================
 * KOMPONEN INTERAKTIF BAB 1 (TRANSFORMASI 3 KOLOM, PUZZLE & BUG PSEUDOCODE)
 * ============================================================================
 */
const TRANS_DATA = {
  ktp: [
    {
      manusia: "1. Tanya pengguna berapa usianya saat ini.",
      pseudo: "READ usia",
      python: 'usia = int(input("Usia: "))'
    },
    {
      manusia: "2. Jika usianya mencapai 17 tahun atau lebih:",
      pseudo: "IF usia >= 17 THEN",
      python: "if usia >= 17:"
    },
    {
      manusia: "3. Beri tahu bahwa dia boleh membuat KTP.",
      pseudo: '    PRINT "Boleh membuat KTP"',
      python: '    print("Boleh membuat KTP")'
    },
    {
      manusia: "4. Jika usianya di bawah itu (kondisi salah):",
      pseudo: "ELSE",
      python: "else:"
    },
    {
      manusia: "5. Katakan dia belum cukup umur.",
      pseudo: '    PRINT "Belum cukup umur"\nENDIF',
      python: '    print("Belum cukup umur")'
    }
  ],
  luas: [
    {
      manusia: "1. Minta nilai panjang dari pengguna.",
      pseudo: "READ panjang",
      python: 'panjang = float(input("P: "))'
    },
    {
      manusia: "2. Minta nilai lebar dari pengguna.",
      pseudo: "READ lebar",
      python: 'lebar = float(input("L: "))'
    },
    {
      manusia: "3. Kalikan panjang dengan lebar, simpan ke luas.",
      pseudo: "luas <- panjang * lebar",
      python: "luas = panjang * lebar"
    },
    {
      manusia: "4. Tampilkan hasil luas ke layar.",
      pseudo: "PRINT luas",
      python: "print(luas)"
    }
  ]
};

let activeTransRow = 0;
let currentTransKey = "ktp";

function switchTransCase(key) {
  currentTransKey = key;
  activeTransRow = 0;
  renderTransGrid();
}

function selectTransRow(idx) {
  activeTransRow = idx;
  renderTransGrid();
}

function renderTransGrid() {
  const wrap = document.getElementById("transGridContainer");
  if (!wrap) return;
  const rows = TRANS_DATA[currentTransKey];

  const colManusia = rows
    .map(
      (r, i) =>
        `<div class="code-line ${i === activeTransRow ? "active-line" : ""}" style="white-space:normal" onclick="selectTransRow(${i})">${r.manusia}</div>`
    )
    .join("");
  const colPseudo = rows
    .map(
      (r, i) =>
        `<div class="code-line ${i === activeTransRow ? "active-line" : ""}" onclick="selectTransRow(${i})">${highlightCode(r.pseudo)}</div>`
    )
    .join("");
  const colPython = rows
    .map(
      (r, i) =>
        `<div class="code-line ${i === activeTransRow ? "active-line" : ""}" onclick="selectTransRow(${i})">${highlightCode(r.python)}</div>`
    )
    .join("");

  wrap.innerHTML = `
    <div class="card"><h3>🗣️ Bahasa Manusia</h3><div class="code-wrapper">${colManusia}</div></div>
    <div class="card"><h3>📐 Pseudocode</h3><div class="code-wrapper">${colPseudo}</div></div>
    <div class="card"><h3>🐍 Kode Python</h3><div class="code-wrapper">${colPython}</div></div>
  `;
}

// Puzzle Indentasi Pseudocode
let pseudoPuzzleState = [];
const PSEUDO_PUZZLE_TARGET = [
  { text: "READ usia", indent: 0 },
  { text: "IF usia >= 17 THEN", indent: 0 },
  { text: 'PRINT "Boleh membuat KTP"', indent: 1 },
  { text: "ELSE", indent: 0 },
  { text: 'PRINT "Belum cukup umur"', indent: 1 },
  { text: "ENDIF", indent: 0 }
];

function initPseudoPuzzle() {
  pseudoPuzzleState = [
    { text: "IF usia >= 17 THEN", indent: 0 },
    { text: 'PRINT "Boleh membuat KTP"', indent: 0 },
    { text: "READ usia", indent: 0 },
    { text: "ELSE", indent: 0 },
    { text: "ENDIF", indent: 0 },
    { text: 'PRINT "Belum cukup umur"', indent: 0 }
  ];
  renderPseudoPuzzle();
  const fb = document.getElementById("pseudoPuzzleFeedback");
  if (fb) fb.innerHTML = "";
}

function renderPseudoPuzzle() {
  const wrap = document.getElementById("pseudoPuzzleList");
  if (!wrap) return;
  wrap.innerHTML = pseudoPuzzleState
    .map(
      (item, idx) => `
      <div class="sortable-item">
        <span style="padding-left:${item.indent * 2.2}rem">${highlightCode(item.text)}</span>
        <div style="display:flex; gap:0.25rem;">
          <button class="icon-btn" onclick="indentPseudoItem(${idx}, -1)" title="Kurangi Indentasi">&lt;&lt;</button>
          <button class="icon-btn" onclick="indentPseudoItem(${idx}, 1)" title="Tambah Indentasi">&gt;&gt;</button>
          <button class="icon-btn" onclick="movePseudoItem(${idx}, -1)" title="Naik">↑</button>
          <button class="icon-btn" onclick="movePseudoItem(${idx}, 1)" title="Turun">↓</button>
        </div>
      </div>
    `
    )
    .join("");
}

function indentPseudoItem(idx, delta) {
  pseudoPuzzleState[idx].indent = Math.max(0, Math.min(2, pseudoPuzzleState[idx].indent + delta));
  renderPseudoPuzzle();
}

function movePseudoItem(idx, dir) {
  const t = idx + dir;
  if (t < 0 || t >= pseudoPuzzleState.length) return;
  const tmp = pseudoPuzzleState[idx];
  pseudoPuzzleState[idx] = pseudoPuzzleState[t];
  pseudoPuzzleState[t] = tmp;
  renderPseudoPuzzle();
}

function checkPseudoPuzzle() {
  const ok = pseudoPuzzleState.every(
    (it, i) => it.text === PSEUDO_PUZZLE_TARGET[i].text && it.indent === PSEUDO_PUZZLE_TARGET[i].indent
  );
  const fb = document.getElementById("pseudoPuzzleFeedback");
  if (ok) {
    fb.innerHTML = `<div class="feedback-box ok">🎉 Sempurna! Urutan logika dan indentasi blok IF-ELSE-ENDIF sudah 100% tepat.</div>`;
  } else {
    fb.innerHTML = `<div class="feedback-box err">❌ Masih ada urutan atau indentasi yang belum pas. Pastikan kedua baris PRINT menjorok 1 level ke dalam!</div>`;
  }
}

// Cari Kesalahan Pseudocode
let foundBugsSet = new Set();
const PSEUDO_BUG_LINES = [
  { code: "ALGORITMA Hitung_Diskon_Belanja", isBug: false },
  { code: "DEKLARASI: total_harga : float", isBug: false },
  {
    code: "DESKRIPSI: diskon <- total_harga * 0.1",
    isBug: true,
    msg: "Bug 1 (Lupa Input/Inisialisasi): Variabel `total_harga` langsung dikalikan padahal belum ada `READ total_harga`!"
  },
  {
    code: "IF total_harga lumayan mahal THEN",
    isBug: true,
    msg: "Bug 2 (Ambigu!): Kalimat 'lumayan mahal' tidak bisa dihitung komputer. Harus tegas, misal `IF total_harga >= 100000 THEN`."
  },
  { code: "    total_bayar <- total_harga - diskon", isBug: false },
  { code: "    PRINT total_bayar", isBug: false },
  {
    code: "// Program langsung selesai tanpa penutup blok IF",
    isBug: true,
    msg: "Bug 3 (Lupa ENDIF): Setiap pembukaan blok `IF ... THEN` pada pseudocode wajib ditutup dengan `ENDIF`."
  }
];

function initPseudoBug() {
  foundBugsSet = new Set();
  renderPseudoBugLines();
  const exp = document.getElementById("pseudoBugExplanation");
  if (exp) exp.innerHTML = `<p style="color:var(--text-muted)">Klik baris kode di sebelah kiri yang menurutmu bermasalah...</p>`;
}

function renderPseudoBugLines() {
  const wrap = document.getElementById("pseudoBugContainer");
  if (!wrap) return;
  wrap.innerHTML = PSEUDO_BUG_LINES.map((ln, idx) => {
    const cls = foundBugsSet.has(idx) ? "code-line error-line" : "code-line";
    return `<div class="${cls}" onclick="clickPseudoBugLine(${idx})">${idx + 1}. ${highlightCode(ln.code)}</div>`;
  }).join("");
  const counter = document.getElementById("bugFoundCount");
  if (counter) counter.textContent = String(foundBugsSet.size);
}

function clickPseudoBugLine(idx) {
  const item = PSEUDO_BUG_LINES[idx];
  const exp = document.getElementById("pseudoBugExplanation");
  if (item.isBug) {
    foundBugsSet.add(idx);
    renderPseudoBugLines();
    exp.innerHTML = `<div class="feedback-box ok">✅ <strong>Tepat!</strong> ${item.msg}</div>`;
  } else {
    exp.innerHTML = `<div class="feedback-box err">Baris ke-${idx + 1} sudah benar. Cari baris lain yang ambigu atau tidak lengkap!</div>`;
  }
}

/**
 * ============================================================================
 * KOMPONEN INTERAKTIF BAB 2 (GALERI SIMBOL, FLOWCHART PLAYER SVG, BUILDER BOLA)
 * ============================================================================
 */
const SYMBOL_INFO = {
  terminal: {
    judul: "1. Terminal Symbol (Terminator — Oval)",
    fungsi: "Menandakan permulaan (START) dan akhir (STOP/FINISH) dari sebuah program.",
    aturan: [
      "Hanya boleh ada 1 START dan 1 STOP dalam setiap flowchart.",
      "Hanya boleh memiliki 1 arah anak panah (1 keluar dari Start, atau 1 masuk ke Stop).",
      "Setiap flowchart wajib diawali Start dan diakhiri Stop."
    ],
    contoh: "START, STOP, MULAI, SELESAI"
  },
  io: {
    judul: "2. Input / Output Symbol (Jajar Genjang)",
    fungsi: "Menyatakan proses pembacaan data masukan (Input) atau penampilan hasil ke layar (Output).",
    aturan: [
      "Wajib memiliki tepat 2 anak panah: 1 anak panah MASUK dan 1 anak panah KELUAR.",
      "Tidak boleh dipakai untuk menulis rumus perhitungan matematika."
    ],
    contoh: "INPUT Panjang, GET fullname, PRINT Luas"
  },
  process: {
    judul: "3. Processing Symbol (Persegi Panjang)",
    fungsi: "Menyatakan proses perhitungan matematika, pengolahan data, deklarasi, atau inisialisasi variabel.",
    aturan: [
      "Wajib memiliki tepat 2 anak panah: 1 anak panah MASUK dan 1 anak panah KELUAR.",
      "Digunakan untuk operasi assignment dan rumus."
    ],
    contoh: "sum : real, sum = 30.14, Luas = Panjang * Lebar"
  },
  decision: {
    judul: "4. Decision Symbol (Belah Ketupat)",
    fungsi: "Pemilihan kondisi untuk percabangan atau perulangan.",
    aturan: [
      "Wajib memiliki 3 anak panah: 1 anak panah MASUK dan 2 anak panah KELUAR.",
      "Isinya berupa pertanyaan/kondisi yang bisa dijawab dengan Yes/No (True/False).",
      "Dua panah keluar wajib diberi label T/Y (True/Yes) dan F/N (False/No)."
    ],
    contoh: "usia >= 17 ?, Harga Kopi <= 20000 ?, bilangan % 2 == 0 ?"
  }
};

function showSymbolDetail(key) {
  const info = SYMBOL_INFO[key];
  const box = document.getElementById("symbolDetailBox");
  if (!box || !info) return;
  box.innerHTML = `
    <h3>${info.judul}</h3>
    <p>${info.fungsi}</p>
    <strong>📏 Aturan Anak Panah:</strong>
    <ul class="bullet-list">
      ${info.aturan.map((a) => `<li>${a}</li>`).join("")}
    </ul>
    <div class="code-wrapper">Contoh isi: ${highlightCode(info.contoh)}</div>
  `;
}

// Flowchart Player SVG
let fcScenarioKey = "ktp";
let fcStepIdx = 0;
let fcTimer = null;
let fcInputs = { p: 8, l: 5, usia: 19, bil: 14 };

function loadFcScenario(key) {
  clearInterval(fcTimer);
  fcScenarioKey = key;
  fcStepIdx = 0;
  renderFcControls();
  renderFcFrame();
}

function renderFcControls() {
  const ctrl = document.getElementById("fcInputControls");
  if (!ctrl) return;
  if (fcScenarioKey === "luas") {
    ctrl.innerHTML = `
      <label>P: <input type="number" value="${fcInputs.p}" style="width:65px" onchange="fcInputs.p=Number(this.value);resetFcPlayer()"/></label>
      <label>L: <input type="number" value="${fcInputs.l}" style="width:65px" onchange="fcInputs.l=Number(this.value);resetFcPlayer()"/></label>
    `;
  } else if (fcScenarioKey === "ktp") {
    ctrl.innerHTML = `
      <label>Uji Usia: <input type="number" value="${fcInputs.usia}" style="width:75px" onchange="fcInputs.usia=Number(this.value);resetFcPlayer()"/></label>
    `;
  } else {
    ctrl.innerHTML = `
      <label>Uji Bilangan: <input type="number" value="${fcInputs.bil}" style="width:75px" onchange="fcInputs.bil=Number(this.value);resetFcPlayer()"/></label>
    `;
  }
}

function getFcExecutionPlan() {
  if (fcScenarioKey === "luas") {
    const p = fcInputs.p;
    const l = fcInputs.l;
    const luas = p * l;
    return {
      pseudo: [
        "START",
        "INPUT Panjang, Lebar",
        "HITUNG Luas = Panjang * Lebar",
        "OUTPUT Luas",
        "STOP"
      ],
      steps: [
        { node: "n_start", line: 0, vars: "Belum diinisialisasi", out: "-" },
        { node: "n_io1", line: 1, vars: `Panjang = ${p}, Lebar = ${l}`, out: "-" },
        { node: "n_proc", line: 2, vars: `Panjang = ${p}, Lebar = ${l}, Luas = ${luas}`, out: "-" },
        { node: "n_out", line: 3, vars: `Panjang = ${p}, Lebar = ${l}, Luas = ${luas}`, out: `Luas = ${luas}` },
        { node: "n_stop", line: 4, vars: `Panjang = ${p}, Lebar = ${l}, Luas = ${luas}`, out: `Luas = ${luas} (Selesai)` }
      ]
    };
  }
  if (fcScenarioKey === "ktp") {
    const u = fcInputs.usia;
    const boleh = u >= 17;
    return {
      pseudo: [
        "START",
        "READ usia",
        "IF usia >= 17 THEN",
        '    PRINT "Boleh membuat KTP"',
        "ELSE",
        '    PRINT "Belum cukup umur"',
        "ENDIF / STOP"
      ],
      steps: [
        { node: "n_start", line: 0, vars: "-", out: "-" },
        { node: "n_read", line: 1, vars: `usia = ${u}`, out: "-" },
        { node: "n_dec", line: 2, vars: `usia = ${u} (usia >= 17 bernilai ${boleh ? "TRUE" : "FALSE"})`, out: "-" },
        boleh
          ? { node: "n_true", line: 3, vars: `usia = ${u}`, out: '"Boleh membuat KTP"' }
          : { node: "n_false", line: 5, vars: `usia = ${u}`, out: '"Belum cukup umur"' },
        { node: "n_stop", line: 6, vars: `usia = ${u}`, out: boleh ? '"Boleh membuat KTP"' : '"Belum cukup umur"' }
      ]
    };
  }
  // ganjil genap
  const b = fcInputs.bil;
  const genap = b % 2 === 0;
  return {
    pseudo: [
      "START",
      "READ bilangan",
      "IF bilangan % 2 == 0 THEN",
      '    PRINT "Genap"',
      "ELSE",
      '    PRINT "Ganjil"',
      "ENDIF / STOP"
    ],
    steps: [
      { node: "n_start", line: 0, vars: "-", out: "-" },
      { node: "n_read", line: 1, vars: `bilangan = ${b}`, out: "-" },
      { node: "n_dec", line: 2, vars: `bilangan = ${b}, sisa bagi = ${b % 2} (${genap ? "TRUE" : "FALSE"})`, out: "-" },
      genap
        ? { node: "n_true", line: 3, vars: `bilangan = ${b}`, out: '"Genap"' }
        : { node: "n_false", line: 5, vars: `bilangan = ${b}`, out: '"Ganjil"' },
      { node: "n_stop", line: 6, vars: `bilangan = ${b}`, out: genap ? '"Genap"' : '"Ganjil"' }
    ]
  };
}

function renderFcFrame() {
  const plan = getFcExecutionPlan();
  const current = plan.steps[fcStepIdx];
  const svgWrap = document.getElementById("fcSvgContainer");
  const pseudoWrap = document.getElementById("fcPseudoList");
  if (!svgWrap || !pseudoWrap) return;

  if (fcScenarioKey === "luas") {
    svgWrap.innerHTML = `
      <svg viewBox="0 0 420 340" class="fc-svg">
        <rect x="150" y="10" width="120" height="34" rx="17" class="fc-node ${current.node === "n_start" ? "active" : ""}"/><text x="210" y="27" class="fc-text">MULAI</text>
        <line x1="210" y1="44" x2="210" y2="70" class="fc-edge"/>
        <polygon points="120,70 315,70 295,112 100,112" class="fc-node ${current.node === "n_io1" ? "active" : ""}"/><text x="208" y="92" class="fc-text">INPUT Panjang, Lebar</text>
        <line x1="210" y1="112" x2="210" y2="140" class="fc-edge"/>
        <rect x="105" y="140" width="210" height="44" class="fc-node ${current.node === "n_proc" ? "active" : ""}"/><text x="210" y="162" class="fc-text">Luas = Panjang * Lebar</text>
        <line x1="210" y1="184" x2="210" y2="212" class="fc-edge"/>
        <polygon points="130,212 305,212 285,254 110,254" class="fc-node ${current.node === "n_out" ? "active" : ""}"/><text x="208" y="234" class="fc-text">OUTPUT Luas</text>
        <line x1="210" y1="254" x2="210" y2="285" class="fc-edge"/>
        <rect x="150" y="285" width="120" height="34" rx="17" class="fc-node ${current.node === "n_stop" ? "active" : ""}"/><text x="210" y="302" class="fc-text">SELESAI</text>
      </svg>
    `;
  } else {
    const labelCond = fcScenarioKey === "ktp" ? "usia >= 17 ?" : "bil % 2 == 0 ?";
    const labelTrue = fcScenarioKey === "ktp" ? 'PRINT "Boleh KTP"' : 'PRINT "Genap"';
    const labelFalse = fcScenarioKey === "ktp" ? 'PRINT "Belum Cukup"' : 'PRINT "Ganjil"';
    const labelRead = fcScenarioKey === "ktp" ? "READ usia" : "READ bilangan";

    svgWrap.innerHTML = `
      <svg viewBox="0 0 460 340" class="fc-svg">
        <rect x="170" y="10" width="120" height="32" rx="16" class="fc-node ${current.node === "n_start" ? "active" : ""}"/><text x="230" y="26" class="fc-text">START</text>
        <line x1="230" y1="42" x2="230" y2="66" class="fc-edge"/>
        <polygon points="155,66 320,66 302,104 137,104" class="fc-node ${current.node === "n_read" ? "active" : ""}"/><text x="228" y="85" class="fc-text">${labelRead}</text>
        <line x1="230" y1="104" x2="230" y2="130" class="fc-edge"/>
        <polygon points="230,130 325,165 230,200 135,165" class="fc-node ${current.node === "n_dec" ? "active" : ""}"/><text x="230" y="165" class="fc-text">${labelCond}</text>
        <line x1="325" y1="165" x2="385" y2="165" class="fc-edge"/><text x="355" y="155" class="fc-text">True</text>
        <line x1="385" y1="165" x2="385" y2="210" class="fc-edge"/>
        <polygon points="310,210 455,210 440,250 295,250" class="fc-node ${current.node === "n_true" ? "active" : ""}"/><text x="375" y="230" class="fc-text">${labelTrue}</text>
        <line x1="135" y1="165" x2="75" y2="165" class="fc-edge"/><text x="105" y="155" class="fc-text">False</text>
        <line x1="75" y1="165" x2="75" y2="210" class="fc-edge"/>
        <polygon points="15,210 165,210 150,250 5,250" class="fc-node ${current.node === "n_false" ? "active" : ""}"/><text x="85" y="230" class="fc-text">${labelFalse}</text>
        <line x1="375" y1="250" x2="230" y2="290" class="fc-edge"/>
        <line x1="85" y1="250" x2="230" y2="290" class="fc-edge"/>
        <rect x="170" y="290" width="120" height="32" rx="16" class="fc-node ${current.node === "n_stop" ? "active" : ""}"/><text x="230" y="306" class="fc-text">STOP</text>
      </svg>
    `;
  }

  pseudoWrap.innerHTML = plan.pseudo
    .map((line, idx) => `<div class="code-line ${idx === current.line ? "active-line" : ""}">${highlightCode(line)}</div>`)
    .join("");

  document.getElementById("fcVarPanel").textContent = current.vars;
  document.getElementById("fcOutputPanel").textContent = current.out;
}

function stepFcPlayer() {
  const plan = getFcExecutionPlan();
  if (fcStepIdx < plan.steps.length - 1) {
    fcStepIdx++;
  } else {
    fcStepIdx = 0;
  }
  renderFcFrame();
}

function resetFcPlayer() {
  clearInterval(fcTimer);
  fcStepIdx = 0;
  renderFcFrame();
}

function autoPlayFcPlayer() {
  clearInterval(fcTimer);
  fcStepIdx = 0;
  renderFcFrame();
  fcTimer = setInterval(() => {
    const plan = getFcExecutionPlan();
    if (fcStepIdx < plan.steps.length - 1) {
      fcStepIdx++;
      renderFcFrame();
    } else {
      clearInterval(fcTimer);
    }
  }, 900);
}

// Builder Volume Bola
const BOLA_STEPS = [
  { teks: "1. Mulai Program (START)", target: "terminal" },
  { teks: "2. PI = 3.14 (Inisialisasi nilai konstanta)", target: "process" },
  { teks: "3. Get radius (Baca jari-jari dari user)", target: "io" },
  { teks: "4. volume = (4/3) * PI * radius ** 3", target: "process" },
  { teks: '5. Print "The volume is", volume', target: "io" },
  { teks: "6. Akhir Program (STOP)", target: "terminal" }
];
let bolaSelections = [];

function initBolaBuilder() {
  bolaSelections = ["terminal", "io", "process", "io", "process", "terminal"];
  renderBolaBuilder();
  const fb = document.getElementById("bolaBuilderFeedback");
  if (fb) fb.innerHTML = "";
}

function renderBolaBuilder() {
  const wrap = document.getElementById("bolaBuilderList");
  if (!wrap) return;
  wrap.innerHTML = BOLA_STEPS.map(
    (st, i) => `
    <div class="sortable-item">
      <span>${st.teks}</span>
      <select onchange="bolaSelections[${i}]=this.value; renderBolaPreview()">
        <option value="terminal" ${bolaSelections[i] === "terminal" ? "selected" : ""}>Oval (Terminator)</option>
        <option value="io" ${bolaSelections[i] === "io" ? "selected" : ""}>Jajar Genjang (I/O)</option>
        <option value="process" ${bolaSelections[i] === "process" ? "selected" : ""}>Persegi Panjang (Process)</option>
        <option value="decision" ${bolaSelections[i] === "decision" ? "selected" : ""}>Belah Ketupat (Decision)</option>
      </select>
    </div>
  `
  ).join("");
  renderBolaPreview();
}

function renderBolaPreview() {
  const prev = document.getElementById("bolaSvgPreview");
  if (!prev) return;
  const labels = ["START", "PI = 3.14", "GET radius", "volume = (4/3)*PI*r³", "PRINT volume", "STOP"];
  let shapes = "";
  labels.forEach((lb, i) => {
    const y = 10 + i * 54;
    const sel = bolaSelections[i];
    if (sel === "terminal") {
      shapes += `<rect x="130" y="${y}" width="160" height="34" rx="17" class="fc-node"/><text x="210" y="${y + 17}" class="fc-text">${lb}</text>`;
    } else if (sel === "io") {
      shapes += `<polygon points="115,${y} 315,${y} 300,${y + 34} 100,${y + 34}" class="fc-node"/><text x="210" y="${y + 17}" class="fc-text">${lb}</text>`;
    } else if (sel === "process") {
      shapes += `<rect x="105" y="${y}" width="210" height="34" class="fc-node"/><text x="210" y="${y + 17}" class="fc-text">${lb}</text>`;
    } else {
      shapes += `<polygon points="210,${y - 4} 305,${y + 17} 210,${y + 38} 115,${y + 17}" class="fc-node"/><text x="210" y="${y + 17}" class="fc-text">${lb}</text>`;
    }
    if (i < labels.length - 1) {
      shapes += `<line x1="210" y1="${y + 34}" x2="210" y2="${y + 54}" class="fc-edge"/>`;
    }
  });
  prev.innerHTML = `<svg viewBox="0 0 420 340" class="fc-svg">${shapes}</svg>`;
}

function validateBolaFlowchart() {
  const ok = bolaSelections.every((val, i) => val === BOLA_STEPS[i].target);
  const fb = document.getElementById("bolaBuilderFeedback");
  if (ok) {
    fb.innerHTML = `<div class="feedback-box ok">🎉 Semua simbol tepat! Inisialisasi <code>PI = 3.14</code> dan rumus <code>volume</code> memakai Persegi Panjang (Process), sedangkan <code>Get</code> & <code>Print</code> memakai Jajar Genjang (I/O).</div>`;
  } else {
    fb.innerHTML = `<div class="feedback-box err">❌ Masih ada simbol yang tertukar! Ingat: rumus & pemberian nilai awal (<code>PI = 3.14</code>) masuk ke <strong>Persegi Panjang (Process)</strong>, sedangkan <code>Get</code> & <code>Print</code> masuk ke <strong>Jajar Genjang (I/O)</strong>.</div>`;
  }
}

/**
 * ============================================================================
 * KOMPONEN INTERAKTIF BAB 3 (SIMULATOR KOPI DANNY & LATIHAN)
 * ============================================================================
 */
function updateSimKopi(val) {
  const harga = Number(val);
  const cukup = harga <= 20000;
  const lbl = document.getElementById("labelHargaKopi");
  if (lbl) lbl.textContent = `Rp ${harga.toLocaleString("id-ID")}`;

  const svgWrap = document.getElementById("simKopiSvgWrap");
  if (svgWrap) {
    svgWrap.innerHTML = `
      <svg viewBox="0 0 440 210" class="fc-svg">
        <polygon points="220,15 335,60 220,105 105,60" class="fc-node active"/>
        <text x="220" y="54" class="fc-text">Harga Kopi Susu</text>
        <text x="220" y="72" class="fc-text">&lt;= 20.000 ?</text>
        <line x1="335" y1="60" x2="400" y2="60" class="fc-edge ${cukup ? "active" : ""}"/>
        <line x1="400" y1="60" x2="400" y2="135" class="fc-edge ${cukup ? "active" : ""}"/>
        <text x="365" y="48" class="fc-text">true</text>
        <rect x="305" y="135" width="125" height="42" class="fc-node ${cukup ? "active" : ""}"/>
        <text x="367" y="156" class="fc-text">Beli Kopi Susu</text>

        <line x1="105" y1="60" x2="55" y2="60" class="fc-edge ${!cukup ? "active" : ""}"/>
        <line x1="55" y1="60" x2="55" y2="135" class="fc-edge ${!cukup ? "active" : ""}"/>
        <text x="80" y="48" class="fc-text">false</text>
        <rect x="10" y="135" width="130" height="42" class="fc-node ${!cukup ? "active" : ""}"/>
        <text x="75" y="156" class="fc-text">Beli Kopi Hitam</text>
      </svg>
    `;
  }

  const codeWrap = document.getElementById("simKopiCode");
  if (codeWrap) {
    const lines = [
      `uang = 20000`,
      `harga_kopi_susu = ${harga}`,
      `if harga_kopi_susu <= uang:`,
      `    print("Beli Kopi Susu")`,
      `else:`,
      `    print("Beli Kopi Hitam")`
    ];
    codeWrap.innerHTML = lines
      .map((ln, idx) => {
        const active = (cukup && (idx === 2 || idx === 3)) || (!cukup && (idx === 4 || idx === 5));
        return `<div class="code-line ${active ? "active-line" : ""}">${highlightCode(ln)}</div>`;
      })
      .join("");
  }

  const resWrap = document.getElementById("simKopiResult");
  if (resWrap) {
    resWrap.innerHTML = cukup
      ? `✅ Kondisi <code>${harga} &lt;= 20000</code> bernilai <strong>TRUE</strong> → Danny membeli <strong>Kopi Susu</strong>!`
      : `❌ Kondisi <code>${harga} &lt;= 20000</code> bernilai <strong>FALSE</strong> → Danny membeli <strong>Kopi Hitam Biasa</strong>!`;
  }
}

function ujiLatihanGenap() {
  const n = Number(document.getElementById("inpLatGenap").value);
  const out = document.getElementById("outLatGenap");
  if (n % 2 === 0) {
    out.className = "feedback-box ok";
    out.textContent = `Output: Genap (karena ${n} % 2 == 0 bernilai True)`;
  } else {
    out.className = "feedback-box err";
    out.textContent = `Output: (Tidak mencetak 'Genap' karena ${n} adalah bilangan ganjil)`;
  }
}

function ujiLatihanMax() {
  const a = Number(document.getElementById("inpMaxA").value);
  const b = Number(document.getElementById("inpMaxB").value);
  const out = document.getElementById("outLatMax");
  const terbesar = a > b ? a : b;
  out.textContent = `Bilangan terbesar adalah: ${terbesar} (kondisi a > b bernilai ${a > b})`;
}

/**
 * ============================================================================
 * KOMPONEN INTERAKTIF BAB 4 (LARI 5 PUTARAN, RANGE, TRACE TABLE, WHILE, DEBUG)
 * ============================================================================
 */
let runnerLapIdx = -1;
const RUNNER_COORDS = [
  { cx: 175, cy: 35 },
  { cx: 175, cy: 110 },
  { cx: 105, cy: 125 },
  { cx: 35, cy: 105 },
  { cx: 105, cy: 20 }
];

function stepRunnerLap() {
  if (runnerLapIdx < 4) {
    runnerLapIdx++;
    const pos = RUNNER_COORDS[runnerLapIdx];
    const dot = document.getElementById("runnerDot");
    if (dot) {
      dot.setAttribute("cx", String(pos.cx));
      dot.setAttribute("cy", String(pos.cy));
    }
    document.getElementById("trackCenterText").textContent = `Iterasi ${runnerLapIdx + 1} (i=${runnerLapIdx})`;
    document.getElementById("lapStatusText").textContent = `Putaran ke-${runnerLapIdx + 1}: nilai i = ${runnerLapIdx}, dicetak: ${runnerLapIdx}`;
  } else {
    document.getElementById("trackCenterText").textContent = "Selesai! (5x)";
    document.getElementById("lapStatusText").textContent = "Setelah i = 4, urutan range(5) habis → Loop Selesai!";
  }
}

function resetRunnerLap() {
  runnerLapIdx = -1;
  const dot = document.getElementById("runnerDot");
  if (dot) {
    dot.setAttribute("cx", "105");
    dot.setAttribute("cy", "20");
  }
  const t = document.getElementById("trackCenterText");
  if (t) t.textContent = "Siap (i = -)";
  const s = document.getElementById("lapStatusText");
  if (s) s.textContent = "Klik tombol untuk mulai iterasi:";
}

// Visualisasi range()
function setRangePreset(start, stop, step) {
  document.getElementById("rngStart").value = start;
  document.getElementById("rngStop").value = stop;
  document.getElementById("rngStep").value = step;
  updateRangeVis();
}

function updateRangeVis() {
  const start = Number(document.getElementById("rngStart")?.value || 0);
  const stop = Number(document.getElementById("rngStop")?.value || 5);
  const step = Math.max(1, Number(document.getElementById("rngStep")?.value || 1));

  const visited = [];
  for (let x = start; x < stop; x += step) {
    visited.push(x);
  }

  const codeCall =
    start === 0 && step === 1
      ? `range(${stop})`
      : step === 1
      ? `range(${start}, ${stop})`
      : `range(${start}, ${stop}, ${step})`;

  const codeBox = document.getElementById("rangeCodePreview");
  if (codeBox) {
    codeBox.innerHTML = highlightCode(`for i in ${codeCall}:\n    print(i)  # Output: ${visited.join(", ") || "(kosong)"}`);
  }

  const lineBox = document.getElementById("rangeNumberLine");
  if (lineBox) {
    let html = "";
    for (let n = 0; n <= 11; n++) {
      const isVis = visited.includes(n);
      const isStop = n === stop;
      const cls = isVis ? "num-node visited" : isStop ? "num-node stop-node" : "num-node";
      html += `
        <div class="${cls}">
          <span>${n}</span>
          ${isStop ? '<small style="font-size:10px">STOP</small>' : ""}
        </div>
      `;
    }
    lineBox.innerHTML = html;
  }

  const exp = document.getElementById("rangeExplainText");
  if (exp) {
    exp.innerHTML = `Mulai dari <strong>${start}</strong>, melompat <strong>+${step}</strong> setiap iterasi, dan berhenti <strong>SEBELUM ${stop}</strong>. Total iterasi: <strong>${visited.length} kali</strong> (${visited.join(", ")}).`;
  }
}

// Live Loop Stepper & Trace Table
const TRACE_SCENARIOS = {
  predict: {
    code: ["for i in range(1, 6):", "    print(i * 2)"],
    note: "Jangan menebak — jalankan kodenya baris demi baris. 6 adalah batas stop (tidak ikut).",
    headers: ["Iterasi ke-", "Nilai i", "i * 2", "Dicetak ke Layar"],
    rows: [
      [1, 1, 2, "2"],
      [2, 2, 4, "4"],
      [3, 3, 6, "6"],
      [4, 4, 8, "8"],
      [5, 5, 10, "10"]
    ]
  },
  sum: {
    code: ["total = 0", "for i in range(1, 6):", "    total = total + i", "print(total)"],
    note: "Akumulator: tanda '=' artinya SIMPAN. Ambil total lama, tambah i, simpan lagi ke total. (Jika sampai 101 hasilnya 5050).",
    headers: ["Iterasi ke-", "Nilai i", "Perhitungan (total + i)", "Nilai total Baru"],
    rows: [
      ["Awal", "-", "-", "0"],
      [1, 1, "0 + 1", "1"],
      [2, 2, "1 + 2", "3"],
      [3, 3, "3 + 3", "6"],
      [4, 4, "6 + 4", "10"],
      [5, 5, "10 + 5", "15 (Output Akhir)"]
    ]
  },
  fact: {
    code: ["faktorial = 1", "for i in range(1, 6):", "    faktorial = faktorial * i", "print(faktorial)"],
    note: "Faktorial 5! = 1 × 2 × 3 × 4 × 5 = 120. Wajib mulai dari faktorial = 1 dan stop di n + 1.",
    headers: ["Iterasi ke-", "Nilai i", "Perhitungan (faktorial * i)", "Nilai faktorial Baru"],
    rows: [
      ["Awal", "-", "-", "1"],
      [1, 1, "1 * 1", "1"],
      [2, 2, "1 * 2", "2"],
      [3, 3, "2 * 3", "6"],
      [4, 4, "6 * 4", "24"],
      [5, 5, "24 * 5", "120 (Output Akhir)"]
    ]
  }
};

let currentTraceKey = "predict";
let currentTraceRowCount = 1;

function loadLoopTrace(key) {
  currentTraceKey = key;
  currentTraceRowCount = 1;
  renderLoopTraceView();
}

function stepLoopTrace() {
  const sc = TRACE_SCENARIOS[currentTraceKey];
  if (currentTraceRowCount < sc.rows.length) {
    currentTraceRowCount++;
  }
  renderLoopTraceView();
}

function playAllLoopTrace() {
  const sc = TRACE_SCENARIOS[currentTraceKey];
  currentTraceRowCount = sc.rows.length;
  renderLoopTraceView();
}

function resetLoopTrace() {
  currentTraceRowCount = 1;
  renderLoopTraceView();
}

function renderLoopTraceView() {
  const sc = TRACE_SCENARIOS[currentTraceKey];
  const codeBox = document.getElementById("traceCodeBox");
  const noteBox = document.getElementById("traceNoteBox");
  const table = document.getElementById("liveTraceTable");
  if (!codeBox || !table) return;

  codeBox.innerHTML = sc.code
    .map((ln, idx) => `<div class="code-line ${idx === 1 || idx === 2 ? "active-line" : ""}">${highlightCode(ln)}</div>`)
    .join("");
  noteBox.textContent = sc.note;

  const thead = `<thead><tr>${sc.headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>`;
  const visibleRows = sc.rows.slice(0, currentTraceRowCount);
  const tbody = `<tbody>${visibleRows
    .map(
      (r, idx) =>
        `<tr class="${idx === visibleRows.length - 1 ? "latest-row" : ""}">${r.map((c) => `<td>${c}</td>`).join("")}</tr>`
    )
    .join("")}</tbody>`;
  table.innerHTML = thead + tbody;
}

// Simulator While & Infinite Loop
let whileTimer = null;

function renderWhileSimCode(missingUpdate) {
  const box = document.getElementById("whileSimCode");
  if (!box) return;
  const lines = [
    "count = 1             # 1. INISIALISASI",
    "while count <= 5:     # 2. KONDISI",
    "    print(count)",
    missingUpdate
      ? "    # BARIS UPDATE HILANG! (count tetap 1 selamanya)"
      : "    count += 1        # 3. UPDATE (mengubah state)"
  ];
  box.innerHTML = lines.map((l) => `<div class="code-line">${highlightCode(l)}</div>`).join("");
}

function runWhileSim(infiniteMode) {
  clearInterval(whileTimer);
  renderWhileSimCode(infiniteMode);
  const out = document.getElementById("whileSimOutput");
  if (!out) return;

  let iter = 0;
  let count = 1;
  const printed = [];

  whileTimer = setInterval(() => {
    iter++;
    if (!infiniteMode) {
      if (count <= 5) {
        printed.push(count);
        out.className = "feedback-box ok";
        out.innerHTML = `Iterasi ${iter}: <code>count = ${count}</code> → Output: <strong>${printed.join("  ")}</strong>`;
        count++;
      } else {
        clearInterval(whileTimer);
        out.innerHTML += `<br>✅ <code>count</code> sekarang 6 (<code>6 &lt;= 5</code> bernilai False) → Loop berhenti dengan aman!`;
      }
    } else {
      printed.push(1);
      out.className = "feedback-box err";
      out.innerHTML = `⚠️ INFINITE LOOP (Iterasi ke-${iter}): <code>count</code> selalu 1! Output: ${printed.slice(0, 18).join(" ")} ...`;
      if (iter >= 25) {
        clearInterval(whileTimer);
        out.innerHTML += `<br>🛑 <strong>Dihentikan otomatis oleh pengaman simulator (25 iterasi)!</strong> Di terminal asli, tekan <strong>Ctrl + C</strong> untuk menghentikan program.`;
      }
    }
  }, 140);
}

function stopWhileSim() {
  clearInterval(whileTimer);
  const out = document.getElementById("whileSimOutput");
  if (out) {
    out.className = "feedback-box ok";
    out.innerHTML = `🛑 <strong>KeyboardInterrupt (Ctrl + C ditekan):</strong> Eksekusi loop dihentikan paksa oleh pengguna.`;
  }
}

// Perbaikan 3 Bug Pertemuan 6
function fixBug6(num) {
  if (num === 1) {
    document.getElementById("bug6-1").innerHTML = highlightCode(`i = 1\nwhile i <= 10:\n    print(i)\n    i += 1  # Tambahkan update!`);
    const f = document.getElementById("fix6-1");
    f.className = "feedback-box ok";
    f.innerHTML = "✅ Diperbaiki! Dengan <code>i += 1</code>, nilai <code>i</code> bertambah hingga mencapai 11 dan loop berhenti.";
  } else if (num === 2) {
    document.getElementById("bug6-2").innerHTML = highlightCode(`for i in range(1, 11):  # Stop = 11\n    print(i)`);
    const f = document.getElementById("fix6-2");
    f.className = "feedback-box ok";
    f.innerHTML = "✅ Diperbaiki! Karena <code>range</code> berhenti sebelum <code>stop</code>, gunakan <code>range(1, 11)</code> untuk mencetak 1 sampai 10.";
  } else {
    document.getElementById("bug6-3").innerHTML = highlightCode(`total = 0\nfor i in range(1, 6):\n    total = total + i\nprint(total)  # Keluarkan dari indentasi loop`);
    const f = document.getElementById("fix6-3");
    f.className = "feedback-box ok";
    f.innerHTML = "✅ Diperbaiki! Menggeser <code>print(total)</code> keluar dari indentasi loop membuatnya hanya dicetak 1 kali di akhir.";
  }
}

// Latihan Bertingkat Bab 4 (Level 1, 2, 3, Bonus)
function showLevelLatihan(lvl) {
  const box = document.getElementById("levelLatihanBox");
  if (!box) return;
  if (lvl === 1) {
    box.innerHTML = `
      <h3>🟢 Level 1 — Mudah (± 7 menit)</h3>
      <p><strong>Tugas A:</strong> Cetak angka 1 sampai 20. &nbsp;|&nbsp; <strong>Tugas B:</strong> Cetak hanya bilangan genap dari 1 sampai 20.</p>
      <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
        <button class="btn-action secondary" onclick="document.getElementById('hint-lv1').classList.toggle('hidden')">💡 Lihat Petunjuk</button>
        <button class="btn-action" onclick="document.getElementById('key-lv1').classList.toggle('hidden')">🔑 Lihat Kunci Jawaban</button>
      </div>
      <div id="hint-lv1" class="feedback-box ok hidden">Petunjuk: Ingat <code>range(start, stop, step)</code> dengan <code>stop = 21</code>, atau gunakan <code>if i % 2 == 0</code> dari minggu lalu!</div>
      <pre id="key-lv1" class="code-wrapper hidden">${highlightCode(`# A: Cetak 1 sampai 20
for i in range(1, 21):
    print(i)

# B: Cetak genap saja (2 sampai 20)
for i in range(2, 21, 2):
    print(i)`)}</pre>
    `;
  } else if (lvl === 2) {
    box.innerHTML = `
      <h3>🟡 Level 2 — Sedang (± 10 menit)</h3>
      <p>Minta user memasukkan angka <code>N</code>, lalu hitung total penjumlahan: <code>1 + 2 + 3 + … + N</code> (Contoh: N = 5 → Total: 15).</p>
      <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
        <button class="btn-action secondary" onclick="document.getElementById('hint-lv2').classList.toggle('hidden')">💡 Pikir Dulu (4 Pertanyaan)</button>
        <button class="btn-action" onclick="document.getElementById('key-lv2').classList.toggle('hidden')">🔑 Lihat Kunci Jawaban</button>
      </div>
      <div id="hint-lv2" class="feedback-box ok hidden">
        1) Input: <code>int(input("Masukkan N: "))</code> &nbsp;|&nbsp; 2) Yang diingat: akumulator <code>total = 0</code> &nbsp;|&nbsp; 3) Yang diulang: <code>total = total + i</code> &nbsp;|&nbsp; 4) Berhenti di: <code>n + 1</code>.
      </div>
      <pre id="key-lv2" class="code-wrapper hidden">${highlightCode(`n = int(input("Masukkan N: "))
total = 0
for i in range(1, n + 1):
    total = total + i
print("Total:", total)`)}</pre>
    `;
  } else if (lvl === 3) {
    box.innerHTML = `
      <h3>🔴 Level 3 — Tantangan Faktorial (± 15 menit)</h3>
      <p>Hitung faktorial dari <code>N</code> menggunakan loop! Contoh: <code>5! = 5 × 4 × 3 × 2 × 1 = 120</code>.</p>
      <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
        <button class="btn-action secondary" onclick="document.getElementById('hint-lv3').classList.toggle('hidden')">💡 Lihat Petunjuk</button>
        <button class="btn-action" onclick="document.getElementById('key-lv3').classList.toggle('hidden')">🔑 Lihat Kunci Jawaban</button>
      </div>
      <div id="hint-lv3" class="feedback-box ok hidden">Awas jebakan: jangan mulai dari <code>faktorial = 0</code> (hasilnya akan selalu 0) dan jangan pakai <code>range(1, n)</code> karena <code>n</code> tidak ikut dikalikan!</div>
      <pre id="key-lv3" class="code-wrapper hidden">${highlightCode(`n = int(input("Masukkan N: "))
faktorial = 1
for i in range(1, n + 1):
    faktorial = faktorial * i
print("Hasil:", faktorial)`)}</pre>
    `;
  } else {
    box.innerHTML = `
      <h3>⭐ Soal Bonus — Hitung Banyaknya Digit Sebuah Angka</h3>
      <p>Contoh: <code>2026 → 4 digit</code>, <code>7 → 1 digit</code>. Gunakan perulangan dan pembagian bulat <code>// 10</code>!</p>
      <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
        <button class="btn-action secondary" onclick="document.getElementById('hint-lv4').classList.toggle('hidden')">💡 Lihat Petunjuk</button>
        <button class="btn-action" onclick="document.getElementById('key-lv4').classList.toggle('hidden')">🔑 Lihat Kunci Jawaban</button>
      </div>
      <div id="hint-lv4" class="feedback-box ok hidden">Petunjuk: Setiap kali angka dibagi bulat dengan 10 (<code>2026 // 10 = 202</code>), digit terakhirnya hilang. Gunakan <code>while angka &gt; 0:</code>!</div>
      <pre id="key-lv4" class="code-wrapper hidden">${highlightCode(`angka = int(input("Masukkan angka positif: "))
if angka == 0:
    digit = 1
else:
    digit = 0
    while angka > 0:
        angka = angka // 10
        digit += 1
print("Jumlah digit:", digit)`)}</pre>
    `;
  }
}

/**
 * ============================================================================
 * MESIN KUIS CEK PEMAHAMAN PER BAB
 * ============================================================================
 */
function renderQuizSlide(babId, questions) {
  return `
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <p class="slide-subtitle">Pilih jawaban yang paling tepat untuk menguji pemahamanmu di Bab ${babId}:</p>
      <span id="skorBabBadge-${babId}" class="chapter-pill">Skor Bab ${babId}: ${stateSkor[babId]} / ${questions.length}</span>
    </div>
    <div class="grid-3">
      ${questions
        .map(
          (q, qIdx) => `
        <div class="card" id="qcard-${babId}-${qIdx}">
          <p style="font-weight:700; font-size:18px;">${q.tanya}</p>
          <div style="display:flex; flex-direction:column; gap:0.4rem; margin-top:0.3rem;">
            ${q.opsi
              .map(
                (op, oIdx) => `
              <button class="btn-action secondary" style="text-align:left; font-size:16px;" onclick="answerQuiz(${babId}, ${qIdx}, ${oIdx}, ${q.benar}, '${encodeURIComponent(q.bahas)}')">
                ${String.fromCharCode(65 + oIdx)}. ${op}
              </button>
            `
              )
              .join("")}
          </div>
          <div id="qfb-${babId}-${qIdx}"></div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

const answeredTracker = {};

function answerQuiz(babId, qIdx, chosen, correct, encodedBahas) {
  const key = `${babId}-${qIdx}`;
  const bahas = decodeURIComponent(encodedBahas);
  const fb = document.getElementById(`qfb-${babId}-${qIdx}`);
  if (!fb) return;

  const isCorrect = chosen === correct;
  if (!answeredTracker[key] && isCorrect) {
    stateSkor[babId] = Math.min(maxSkorBab[babId], stateSkor[babId] + 1);
    answeredTracker[key] = true;
  }

  fb.innerHTML = isCorrect
    ? `<div class="feedback-box ok" style="font-size:15px;">✅ <strong>Benar!</strong> ${bahas}</div>`
    : `<div class="feedback-box err" style="font-size:15px;">❌ <strong>Kurang tepat.</strong> Jawaban benar adalah <strong>${String.fromCharCode(65 + correct)}</strong>. ${bahas}</div>`;

  const badge = document.getElementById(`skorBabBadge-${babId}`);
  if (badge) {
    badge.textContent = `Skor Bab ${babId}: ${stateSkor[babId]} / ${maxSkorBab[babId]}`;
  }
}

function resetAllScores() {
  Object.keys(stateSkor).forEach((k) => (stateSkor[k] = 0));
  Object.keys(answeredTracker).forEach((k) => delete answeredTracker[k]);
  renderCurrentSlide();
}

/**
 * ============================================================================
 * MENU DRAWER, FULLSCREEN, TEMA, DAN SHORTCUT KEYBOARD
 * ============================================================================
 */
function buildDrawerMenu() {
  const body = document.getElementById("drawerContent");
  if (!body) return;

  body.innerHTML = CHAPTER_META.map((chap) => {
    const slidesInChap = SLIDES.map((s, idx) => ({ ...s, idx })).filter((s) => s.bab === chap.id);
    return `
      <div class="drawer-chapter-group">
        <h3>${chap.nama}</h3>
        ${slidesInChap
          .map(
            (s) => `
          <button class="drawer-slide-btn" id="drawer-btn-${s.idx}" onclick="goToSlide(${s.idx})">
            <span>${s.idx + 1}.${s.judul}</span>
            <small>${s.tipe.split(" ")[0]}</small>
          </button>
        `
          )
          .join("")}
      </div>
    `;
  }).join("");
}

function updateDrawerHighlight() {
  document.querySelectorAll(".drawer-slide-btn").forEach((b) => b.classList.remove("current"));
  const activeBtn = document.getElementById(`drawer-btn-${currentSlideIndex}`);
  if (activeBtn) activeBtn.classList.add("current");
}

function toggleDrawer() {
  const dr = document.getElementById("drawerMenu");
  dr.classList.toggle("hidden");
}

function toggleSpeakerNotes() {
  const pn = document.getElementById("speakerNotesPanel");
  pn.classList.toggle("hidden");
}

function toggleTheme() {
  const root = document.documentElement;
  const now = root.getAttribute("data-theme");
  root.setAttribute("data-theme", now === "dark" ? "light" : "dark");
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

// Event Listeners Utama
window.addEventListener("DOMContentLoaded", () => {
  buildDrawerMenu();
  loadSavedPosition();
  renderCurrentSlide();

  document.getElementById("btnNext").addEventListener("click", nextAction);
  document.getElementById("btnPrev").addEventListener("click", prevAction);
  document.getElementById("btnStepReveal").addEventListener("click", nextAction);
  document.getElementById("btnMenu").addEventListener("click", toggleDrawer);
  document.getElementById("btnCloseDrawer").addEventListener("click", toggleDrawer);
  document.getElementById("btnNotes").addEventListener("click", toggleSpeakerNotes);
  document.getElementById("btnCloseNotes").addEventListener("click", toggleSpeakerNotes);
  document.getElementById("btnTheme").addEventListener("click", toggleTheme);
  document.getElementById("btnFullscreen").addEventListener("click", toggleFullscreen);

  // Navigasi Keyboard Lengkap
  window.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
      e.preventDefault();
      nextAction();
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      prevAction();
    } else if (e.key === "Home") {
      e.preventDefault();
      goToSlide(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goToSlide(SLIDES.length - 1);
    } else if (e.key === "f" || e.key === "F") {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === "m" || e.key === "M" || e.key === "Escape") {
      e.preventDefault();
      toggleDrawer();
    } else if (e.key === "n" || e.key === "N") {
      e.preventDefault();
      toggleSpeakerNotes();
    } else if (e.key === "t" || e.key === "T") {
      e.preventDefault();
      toggleTheme();
    }
  });

  // Dukungan Swipe Layar Sentuh
  let touchStartX = 0;
  const vp = document.getElementById("slideViewport");
  vp.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  vp.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 60) {
      if (diff < 0) nextAction();
      else prevAction();
    }
  }, { passive: true });
});