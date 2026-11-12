# Foto Tim — `/public/team`

Simpan foto anggota di folder ini, lalu pastikan nilai `image` di
`components/team-lanyard-rail-demo.tsx` menunjuk ke nama file yang sama.

| Anggota | Nama file saat ini |
| --- | --- |
| Fathir Izzakky | `fathir.jpg` |
| El Rafi Althaf Zamroni | `el-rafi.jpg` |
| Bilhaq Zouvary Brahmantya Jatmiko | `bilhaq.jpg` |
| Auliya Hisboel | `auliya.jpg` |
| Ryandra Ghani Firmansyah | `ryandra.jpg` |
| Muhammad Jisrin Syahadata | `muhammad.jpg` |
| Raydisa Putra ACEMAD | `raydisa.jpg` |
| Gesangrah Swandaru Pratama | `gesangrah.jpg` |
| Rafi Firdaus | `rafi.jpg` |
| Nizar Ramzy | `nizar.jpg` |
| Rafaaryas | `rafaaryas.jpg` |
| Dipa prammansyah | `dipa.jpg` |

Nama file boleh diganti (misalnya `fathir.jpg`), asalkan nilai `image` di file demo
ikut diubah. Nama file **tidak harus** sama dengan `id`.

## Spesifikasi

- Rasio **1:1 (persegi)**, minimal 400×400 px, ideal 800×800 px.
- Wajah di tengah frame — foto dipotong bulat oleh komponen.
- Format `.jpg`, `.png`, atau `.webp` (jika bukan `.jpg`, sesuaikan ekstensinya di `components/team-lanyard-rail-demo.tsx`).
- Nama file disarankan huruf kecil tanpa spasi.

## Catatan

Selama file belum ada, komponen otomatis menampilkan siluet abu-abu sebagai fallback,
jadi halaman tidak error. Setelah foto diletakkan di sini, cukup refresh browser.
