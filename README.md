# NO BATIDÃO

Situs perkenalan tim esport yang dibangun dari template
[adrianhajdin/award-winning-website](https://github.com/adrianhajdin/award-winning-website)
(gaya Zentry): hero video full-bleed dengan frame clip-path, judul kata-per-kata,
bento grid video, dan section contact ber-clip-path.

Isi, teks, dan badge tim sudah diganti ke BATIDAO. Komponen lanyard badge
(`components/ui/team-lanyard-rail.tsx`) dipertahankan dan jadi section **Roster**.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run typecheck
```

## Alur halaman

| Section | File | Isi |
| --- | --- | --- |
| Navbar | `components/zentry/navbar.tsx` | Floating nav, audio toggle, menu mobile |
| Hero | `components/zentry/hero.tsx` | Video 4 lapis, clip-path frame, wordmark raksasa |
| About | `components/zentry/about.tsx` | Judul animasi + gambar yang membesar saat di-pin |
| Features | `components/zentry/features.tsx` | Bento grid video + tilt 3D |
| **Roster** | `components/zentry/roster-section.tsx` | **Rail badge lanyard (interaktif)** |
| Story | `components/zentry/story.tsx` | Gambar ber-clip-path + tilt 3D |
| Contact | `components/zentry/contact.tsx` | CTA gabung + gambar sudut |
| Footer | `components/zentry/site-footer.tsx` | Bar ungu + sosial |

## Aset

| Folder | Isi | Ukuran |
| --- | --- | --- |
| `public/videos/` | 4 hero + 5 fitur (mp4) | **48 MB** |
| `public/img/` | 15 webp | 2,2 MB |
| `public/fonts/` | zentry, general, circular-web, robert | 188 KB |
| `public/audio/` | loop.mp3 | 376 KB |
| `public/team/` | foto anggota | — |

> ⚠️ 48 MB video itu berat. Sebelum deploy: kompres ke H.264 CRF 28 / 720p,
> atau ganti dengan WebM. Target di bawah 12 MB total.

## Mengedit data tim

Semua di `lib/team.ts`:

```tsx
{
  id: "fathir",
  name: "Fathir Izzakky",
  role: "Founder Batidao",
  team: "CEO",
  division: "ceo",        // "ceo" | "core" | "org"
  tone: 1,                // warna badge 1–5
  photo: false,           // true kalau file fotonya sudah ada
  image: "/team/fathir.jpg",
  bio: "…",
  tags: ["CHAMBER", "Zeroks"],
  links: [{ label: "Email", href: "mailto:halo@batidao.gg" }],
}
```

- `photo: false` → badge menampilkan siluet (tidak error).
- Indikator "4/12 foto" dihitung otomatis.
- Foto ideal **3:4 potret**, minimal 600×800 px, nama file huruf kecil.

## Mengganti video / gambar

Semua path absolut dari `public/`:

| Slot | File |
| --- | --- |
| Hero (4 video, dirotasi) | `/videos/hero-1.mp4` … `hero-4.mp4` |
| Bento fitur | `/videos/feature-1.mp4` … `feature-5.mp4` |
| Gambar About | `/img/about.webp` |
| Gambar Story | `/img/entrance.webp` |
| Contact | `/img/contact-1.webp`, `contact-2.webp`, `swordman.webp` |

Kalau mau ganti video, jaga nama file yang sama — nggak perlu ubah kode.

## Yang diubah dari template asli

1. **Bug loader diperbaiki.** Template aslinya menahan overlay loading
   (`z-[100]`) sampai semua video load; kalau satu video gagal, halaman
   menggantung selamanya. Sekarang ada timeout 4 detik.
2. **Fallback hero digelapkan.** Frame hero tadinya `bg-blue-75` (terang),
   jadi teks putih tak terbaca kalau video belum load. Sekarang `bg-black`.
3. **Menu mobile ditambahkan.** Template asli menyembunyikan link nav di mobile
   tanpa pengganti.
4. **Bahasa & isi** diganti ke Indonesia + data tim BATIDAO.
5. **Ikon** `react-icons` diganti SVG inline (tanpa dependency tambahan).

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4 (token template dipindah ke `@theme` di `app/globals.css`)
- GSAP 3.15 + ScrollTrigger
- shadcn/ui (dipakai komponen lanyard)
