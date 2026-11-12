# Foto Tim — `/public/team`

Simpan foto anggota di folder ini, lalu pastikan nilai `image` di
`components/team-lanyard-rail-demo.tsx` menunjuk ke nama file yang sama.

| Anggota | Nama file saat ini |
| --- | --- |
| Fathir Izzakky | `ada.jpg` |
| El Rafi Althaf Zamroni | `ravi.jpg` |
| Bilhaq Zouvary Brahmantya Jatmiko | `imani.jpg` |
| Auliya Hisboel | `kenji.jpg` |
| Ryandra Ghani Firmansyah | `lucia.jpg` |
| Muhammad Jisrin Syahadata | `mateo.jpg` |
| Raydisa Putra ACEMAD | `mila.jpg` |
| Gesangrah Swandaru Pratama | `noah.jpg` |
| Rafi Firdaus | `sofia.jpg` |
| Nizar Ramzy | `theo.jpg` |
| Rafaaryas | `hana.jpg` |
| Dipa prammansyah | `marcus.jpg` |

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
