# Panduan Kontribusi

Terima kasih sudah ikut mengerjakan **NO BATIDÃO**. Panduan ini untuk teman-teman yang mau mengedit data tim, mengganti foto, atau mengubah tampilan.

## Prasyarat

- [Git](https://git-scm.com/)
- [Node.js 20+](https://nodejs.org) (sudah termasuk npm)
- Editor, misalnya [VS Code](https://code.visualstudio.com)

## 1. Clone repo

Minta URL repo ke pemilik, lalu:

```bash
git clone https://github.com/USERNAME/no-batidao.git
cd no-batidao
npm install
npm run dev
```

Buka <http://localhost:3000>. Halaman akan otomatis refresh setiap file disimpan.

Perintah lain:

```bash
npm run build      # build produksi
npm start          # jalankan hasil build
npm run typecheck  # cek error TypeScript
```

## 2. Di mana mengedit

| Mau ubah apa | File |
| --- | --- |
| Nama, role, team, division, bio, tags, links, tone, photo | `lib/team.ts` |
| Navbar, menu mobile, audio | `components/zentry/navbar.tsx` |
| Hero (video + wordmark) | `components/zentry/hero.tsx` |
| Section about | `components/zentry/about.tsx` |
| Bento grid divisi | `components/zentry/features.tsx` |
| Section roster (lanyard) | `components/zentry/roster-section.tsx` |
| Story | `components/zentry/story.tsx` |
| Contact / CTA gabung | `components/zentry/contact.tsx` |
| Footer | `components/zentry/site-footer.tsx` |
| Warna & font | `app/globals.css` (`@theme`) |
| Foto anggota | `public/team/` |
| Video & gambar | `public/videos/`, `public/img/` |
| Komponen badge lanyard | `components/ui/team-lanyard-rail.tsx` |

### Bentuk data anggota

```tsx
{
  id: "fathir",                 // unik, jangan disamakan dengan anggota lain
  name: "Fathir Izzakky",
  role: "Founder Batidao",
  team: "CEO",
  division: "ceo",              // "ceo" | "core" | "org"
  tone: 1,                      // 1–5, menentukan warna badge
  photo: false,                 // true kalau file foto sudah ada
  image: "/team/fathir.jpg",    // file di public/team
  bio: "Teks di balik badge",
  tags: ["CHAMBER", "Zeroks"],  // maksimal 3 yang tampil
  links: [                      // maksimal 3 yang tampil
    { label: "Email", href: "mailto:halo@batidao.gg" },
    { label: "Portfolio", href: "#" },
  ],
}
```

Tips:

- `id` harus unik.
- `image` selalu diawali `/team/` karena `public/team` dipetakan ke URL `/team`.
- Nama file foto tidak harus sama dengan `id` — yang penting nilainya cocok.
- `division` menentukan anggota muncul di kartu mana pada section Struktur.

### Foto

- Taruh file di `public/team/`.
- Rasio **3:4 (potret)**, minimal 600×800 px.
- Wajah di tengah frame karena foto dipotong bulat.
- Nama file huruf kecil tanpa spasi, misalnya `fathir.jpg`. **Huruf besar/kecil
  berpengaruh** saat deploy ke server Linux.
- Foto otomatis di-grade duotone ungu di hero supaya satu set.
- Kalau foto belum ada, muncul siluet abu-abu (tidak error). Setelah file
  diunggah, ubah `photo: false` menjadi `photo: true` supaya ikut terhitung di
  indikator "4/12 foto".

## 3. Kalau mau mengubah animasi

Parallax tidak memakai library. Tiap section yang beranimasi dibungkus
`<SceneProgress>` (`components/motion/scene-progress.tsx`) yang menulis CSS
variable `--sp` dari 0 ke 1. Elemen di dalamnya cukup memakai class `p-scene`
dengan `--sp-y` (total geseran dalam px):

```tsx
<div className="p-scene" style={{ "--sp-y": "-200px" }}>…</div>
```

Angka negatif besar = bergerak lebih cepat dari scroll (foreground).
Angka kecil = nyaris diam (background).

Aturan penting:

- Jangan menaruh `overflow-hidden` pada elemen yang mau pakai
  `animation-timeline: view()` — parent dengan `overflow: hidden` menjadi scroll
  container sendiri dan timeline-nya mati. Karena itu reveal memakai
  IntersectionObserver (`components/motion/reveal-observer.tsx`).
- Animasikan `transform` dan `opacity` saja, jangan `top`/`left`/`width`.
- Selalu hormati `prefers-reduced-motion` (sudah ditangani di `globals.css`).

## 4. Alur Git

Selalu tarik perubahan terbaru sebelum mulai:

```bash
git pull
```

Setelah selesai mengedit:

```bash
git add .
git commit -m "update data tim"
git push
```

### Perubahan besar: pakai branch + Pull Request

```bash
git checkout -b update-tim
# ...edit...
git add .
git commit -m "tambah anggota baru"
git push -u origin update-tim
```

Lalu buka Pull Request di GitHub.

## 5. Alternatif tanpa terminal

Bisa juga lewat browser:

1. Buka repo di GitHub → masuk ke file → klik ikon **pensil**.
2. Edit → **Commit changes**.
3. Upload foto: **Add file → Upload files** ke folder `public/team/`.

Cara ini cocok untuk perubahan kecil; untuk mengedit banyak data sekaligus lebih nyaman clone lokal.

## Supaya tidak bentrok

- `git pull` sebelum mulai dan sebelum push.
- Hindari dua orang mengedit baris yang sama bersamaan.
- Jangan commit `node_modules/`, `.next/`, atau file `.env` (sudah di-`.gitignore`).
- Kalau `package.json` berubah, jalankan `npm install` lagi.
- Kompres foto besar (disarankan < 5 MB per file).

## Sebelum push

Pastikan build dan TypeScript lolos:

```bash
npm run typecheck
npm run build
```
