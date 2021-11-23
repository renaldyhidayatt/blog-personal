---
type: "post"
date: "2021-10-12"
image: "../../images/blog-post-5.jpg"
slug: "tugas-10"
title: "tugas-10"
published: true
---

### ICMP

Internet Control Message Protocol atau biasa disingkat ICMP adalah protokol jaringan yang berguna untuk memecahkan berbagai masalah terkait konektivitas. Protokol ini digunakan oleh berbagai perangkat jaringan, seperti router, modem, server, dan yang lainnya.

### POP3

POP3 (Post Office Protocol 3) adalah versi terbaru dari protokol standar untuk menerima email. POP3 merupakan protokol client/server dimana email dikirimkan dari server ke email lokal.

### SMTP

Simple Mail Transfer Protocol atau SMTP adalah suatu protokol untuk berkomunikasi dengan server guna mengirimkan email dari lokal email ke server, sebelum akhirnya dikirimkan ke server email penerima. Proses ini dikontrol dengan Mail Transfer Agent (MTA) yang ada dalam server email Anda.

### FTP

Simple Mail Transfer Protocol atau SMTP adalah suatu protokol untuk berkomunikasi dengan server guna mengirimkan email dari lokal email ke server, sebelum akhirnya dikirimkan ke server email penerima. Proses ini dikontrol dengan Mail Transfer Agent (MTA) yang ada dalam server email Anda.

### ARP

ARP atau Address Resolution Protocol merupakan sebuah protokol yang bertanggung jawab mencari tahu Mac Address atau alamat hardware dari suatu Host yang tergabung dalam sebuah jaringan LAN dengan memanfaatkan atau berdasarkan IP Address yang terkonfigurasi pada Host yang bersangkutan.

## Kelebihan dan kekurangan IPV4 dan IPV6

### IPV4

kelebihan:

- Tidak mensyaratkan ukuran paket pada link layer dan harus bisa menyusun kembali paket berukuran 576 byte.
- Pengelolaan rute informasi yang tidak memerlukan seluruh 32 bit tersebut, melainkan cukup hanya bagian jaringannya saja, sehingga besar informasi rute yang disimpan di router, menjadi kecil. Setelah address jaringan diperoleh, maka organisasi tersebut dapat secara bebas memberikan address bagian host pada masing-masing hostnya.

kekurangan:

- Panjang alamat 32 bit (4bytes).
- Dikonfigurasi secara manual atau DHCP IPv4.
- Dukungan terhadap IPSec opsional.
- Fragmentasi dilakukan oleh pengirim dan pada router, menurunkan kinerja router.
- IPv4 yang hanya memiliki panjang 32-bit (jumlah total alamat yang dapat dicapainya mencapai 4,294,967,296 alamat). IPv4, meskipun total alamatnya mencapai 4 miliar, pada kenyataannya tidak sampai 4 miliar alamat, karena ada beberapa limitasi, sehingga implementasinya saat ini hanya mencapai beberapa ratus juta saja.

### IPV6

kelebihan:

- Format header baru. Header baru IPv6 lebih efisien daripada header pada IPv4 (karena memiliki overhead yang lebih kecil). Hal ini diperoleh dengan menghilangkan beberapa bagian yang tidak penting atau opsional.
- Jumlah alamat yang jauh lebih besar. Dengan spesifikasi bit untuk alamat standar sebanyak 128-bit memiliki arti IPv6 akan mampu menyediakan 2128 kemungkinan alamat unik. Walaupun tidak semuanya akan dialokasikan namun sudah cukup untuk keperluan masa mendatang sehingga teknologi semacam NAT pada IPv4 sudah tidak perlu lagi digunakan.
- Infrastruktur routing dan addressing yang efisien dan hirarkis. Arsitektur pengalamatan IPv6 yang hirarkis membuat infrastruktur routing menjadi efisien dan hirarkis juga. Adanya konsep skup juga memudahkan dalam manajemen pengalamatan untuk berbagai mode teknologi transmisi.

kekurangan:

- Kompatibilitas belum optimal — kebanyakan perangkat yang mengakses internet masih menggunakan IPv4. Jadi, dukungan infrastruktur dan jaringan IPv6 belum menyeluruh.
- Tren peralihan yang lambat — walaupun sudah dikenalkan sejak 1995, penggunaan IPv6 baru mencapai 35% saja di dunia.
