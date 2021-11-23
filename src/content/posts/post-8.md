---
type: "post"
date: "2021-10-12"
image: "../../images/blog-post-5.jpg"
slug: "topologi-jaringan"
title: "topologi jaringan"
published: true
---

# Topologi Jaringan

Topologi jaringan Komputer merupakan hal yang menjelaskan hubungan geometris antara unsur-unsur dasar penyusun jaringan, yaitu link, node dan station.

<img src="https://4.bp.blogspot.com/-Pr0xSAqE__M/VgEPE8-brmI/AAAAAAAABFY/26eeqE5-zOI/s1600/Gambar%2BTopologi%2BJaringan.jpg" alt="coba">

## Jenis Jenis Topologi jaringan Komputer

Berikut ini jenis jenis topologi dan kelebihan dan kekurangan topologi tersebut.

### Topologi Ring

Topologi jaringan ring cenderung tidak efisien bila dibandingkan dengan topologi jaringan star karena data harus melakukan perjalanan melalui satu atau lebih titik (komputer) sebelum mencapai tujuan. Misalnya, jika pada topologi ring memiliki delapan komputer, misalnya jika komputer 2 mengirimkan data ke komputer 5 maka harus melakukan perjalanan melalui komputer 3 dan 4, sampai ketujuan ke komputer 5.

<img src="https://4.bp.blogspot.com/-YcMd7amO_FI/VgHX4vPboFI/AAAAAAAABFk/7u6avnbOodw/s1600/topologi%2Bring.jpg" alt="Topologi ring" style="width: 80%;" />

### Kelebihan dan Kekurangan Topologi Ring

Setiap model desain topologi jaringan komputer memiliki keuntungan dan keterbatasan, tak terkecuali pada topologi model Ring.

### Keuntungan / Kelebihan Topologi Jaringan Ring

<ul>

<li>Biaya instalasi cukup murah (Hemat kabel)
Tingkat kerumitan pemasangan rendah (Mudah dirancang dan diinstalasi) </li>

<li> Memiliki performa yang lebih baik daripada topologi jaringan Bus.</li>

<li>Mudah untuk melakukan konfigurasi ulang dan instalasi perangkat baru.</li>

<li> Transmisi data yang relatif sederhana seperti perjalanan paket dalam satu arah saja.</li>

<li> Tidak akan terjadi tabrakan pengiriman data (collision), karena pada satu waktu hanya satu node yang dapat mengirimkan data. </li>

<li>Mudah untuk melakukan pelacakan dan pengisolasian kesalahan dalam jaringan karena menggunakan konfigurasi point to point </li>
</ul>

### Kelemahan / Kekurangan Topolgi Jaringan Ring

<ul>
<li>Peka kesalahan jaringan, Sehingga jika ada masalah di suatu node mengakibatkan terganggunya seluruh jaringan. </li>

<li>tapi hal ini dapat diantisipasi dengan menggunakan cincin dual ring (Cincin Ganda).</li>

<li>Sulit untuk Pengembangan jaringan, karena menambah, mengubah dan memindahkan perangkat jaringan akan mempengaruhi keseluruhan jaringan.</li>

<li>Lebih sulit untuk dikonfigurasi daripada Topologi bintang
Kinerja komunikasi dalam jaringan sangat bergantung pada jumlah node/titik yang terdapat pada jaringan.</li>

<li>Diperlukan pengelolaan serta penanganan khusus bandles
Troubleshooting bisa dibilang cukup rumit.</li>

<li>Paket data harus melewati setiap komputer antara pengirim dan penerima Oleh karena ini membuatnya lebih lambat.</li>

</ul>

### Topologi Jaringan Bus

Topologi Bus - Topologi bus merupakan metode transmisi pada jaringan yang dapat digambarkan sebagai transmisi yang menggunakan kendaraan umum (Bus/Bis), oleh sebab itu jaringan BUS digolongkan sebagai komunikasi bersama,, Bayangkan saja sebuah bis (bus) mengambil (menaikkan) penumpang dari sebuah halte dan menurunkannya saat perjalanan serta kemudian mengambil (menaikkan) kembali. demikianlah ilustrasi topologi jaringan bus.

<img src="https://4.bp.blogspot.com/-k3wdoVWum98/VgJbUAkw4BI/AAAAAAAABF0/Y4dInOmUUVg/s1600/topologi%2Bbus.jpg" alt="Topologi Bus" style="width: 80%;" />

### Ciri-ciri Topologi Bus

<ul>

<li>Teknologi lama, dihubungkan menggunakan satu kabel dalam satu baris</li>
<li>Tidak membutuhkan peralatan aktif untuk menghubungkan terminal/komputer</li>
<li>Diujung kabel dipasang 50 ohm konektor
Susah melakukan pelacakan masalah</li>
<li>Kabel 'cut' dan digunakan konektor BNC tipe T</li>
<li>Jika kabel putus maka komputer yang lain tidak dapat berkomunikasi dengan komputer lainnya.</li>
<li>Discontinue Support</li>
</ul>

### Kelebihan Dan Kekurangan Topologi Bus

Setiap model desain topologi jaringan komputer memiliki keuntungan dan keterbatasan, tak terkecuali pada topologi model bus.

#### Keuntungan / Kelebihan Topologi Jaringan Bus

<ul>
<li>Pengembangan jaringan atau penambahan workstation baru dapat dilakukan dengan mudah tanpa mengganggu workstation lain.</li>
<li>Jika sebuah komputer gagal dalam jaringan, jaringan yang lain tidak terpengaruh dan mereka terus bekerja. Jaringan bus mudah dibuat dan sangat sederhana.</li>
<li>Jaringan bus menggunakan sedikit jumlah kabel (Hemat Kabel maka hemat biaya) serta sangat simpel.</li>
<li>Layout kabel sederhana.</li>
<li>Penerapannya tidak membutuhkan biaya besar dibanding topologi jaringan yang lainnya.</li>
</ul>

#### Kelemahan / Kekurangan Topolgi Jaringan Bus

<ul>

<li>Bila terdapat gangguan di sepanjang kabel pusat maka seluruh jaringan juga akan mengalami gangguan.
Dalam jaringan bus dibutuhkan sambungan jaringan untuk menentukan transfer data antara dua node.</li>
<li>Jika laju transfer data terlalu tinggi maka jaringan Bus tidak dapat berkerja dengan baik karena data pada stream tidak dapat boleh kelebihan beban</li>
<li>Jaringan bus kurang cocok sebagai jaringan yang besar karena terdapat keterbatasan jumlah node yang dapat diatur untuk satu persatu kabel. </li>
<li>Diperlukan Repeater untuk jarak jauh. </li>
<li>Agak sulit dalam memecahkan masalah.</li>
<li>Jika kebutuhan jumlah komputer meningkatkan dalam jaringan, laju transfer data akan terasa sangat menurun.</li>

</ul>

### Topologi Jaringan Star

Topologi Star - Topologi ini mengacu pada jaringan dimana semua node yang terhubung secara individual untuk satu hub umum. pada star stasiun transmisi terhubung sedemikian rupa ke simpul pusat yang didesain menyerupai bentuk bintang. Pada dasarnya, desain Star sangat mirip dengan sebuah roda sepeda dengan jari-jari yang memancar dari pusat. Dalam tipe jaringan bintang, pertukaran data hanya dapat dilakukan secara tidak langsung melalui simpul pusat ke semua node lain yang terhubung.

<img src="https://1.bp.blogspot.com/-0CppolEIjug/VgJkGfmmO-I/AAAAAAAABGE/-kOLwHTEAYg/s1600/topologi%2Bstar.jpg" alt="Topologi Star" style="width: 80%;" />

Inti dari Topologi Star (bintang) adalah bentuk jaringan, atau tata letak jaringan dimana semua perangkat berputar di sekitar hub pusat. Semua komputer dalam topologi star terhubung ke perangkat sentral seperti router, hub, atau switch. Komputer di jaringan biasanya dihubungkan dengan switch (hub) atau router dengan kabel shielded Twisted Pair (STP) atau 1.527 Twisted Pair (UTP).

Topologi jaringan star ini seperti halnya kita menarik satu kabel dari setiap komputer menuju pada pusat kosentrasi seperti Hub/Switch. Hub (Switch) nantinya menangani Switching traffic keluar ke node lainnya dalam sebuah jaringan.

### Kelebihan Dan Kekurangan Topologi Star

Setiap model desain topologi jaringan komputer memiliki keuntungan dan keterbatasan, tak terkecuali pada topologi model Star.

### Keuntungan / Kelebihan Topologi Jaringan Star

<ul>
<li>Pengelolaan dan Pemasangan dari jaringan berbetuk bintang ini sangat mudah serta sederhana dari segi Fungsionalitas
Kerusakan pada satu saluran hanya memengaruhi jaringan pada saluran tersebut (yang rusak) dan station yang terpaut.
Kemudahan deteksi dan isolasi kesalahan/kerusakan pengelolaan jaringan.</li>
<li>Tingkat keamanan tergolong tinggi.</li>
<li>Akses Kontrol terpusat.</li>
<li>Sangat mudah dalam memecahkan masalah, karena semua jenis jaringan komputer selalu tergantung pada hub sentral, artinya bahwa setiap masalah dalam pengoperasian jaringan yang dioperasi dapat ditelusuri ke hub pusat.</li>
<li>Penambahan atau pengurangan station dapat dikerjakan dengan mudah.</li>
<li>Paket-paket data tidak mesti membuat jalan melalui berbagai node yang akan menjamin transfer data dengan cepat.</li>
<li>Setiap masalah dalam satu node tidak akan mengganggu kinerja node lain dalam sebuah jaringan.</li>
<li>Menggantikan dan Menambahkan mesin baru sangat mudah dilakukan dalam topologi Star, serta tidak mengganggu jaringan ke node lainnya.</li>
<li>Tahan terhadap lalu lintas jaringan yang sibuk.</li>
</ul>

### Kelemahan / Kekurangan Topolgi Jaringan Star

<ul>
<li>Biaya jaringan lebih mahal dari Ring dan Bus.</li>
<li>Sangat bergantung pada fungsi hub pusat.</li>
<li>Membutuhkan lebih banyak kabel dibandingkan dengan topologi bus, yang berakibat pada agak tingginya biaya pembuatan.
Ukuran dari jaringan ini bergantung pada berapa banyak koneksi dapat dibuat untuk hub.
Jika salah satu simpul banyak memanfaatkan porsi pengolahan kemampuan yang signifikan dari hub pusat, akan mempengaruhi kinerja node lain.</li>
<li> Kinerja seluruh jaringan secara langsung tergantung pada kinerja hub. Jika server lambat, akan menyebabkan seluruh jaringan jadi lambat.</li>
<li>Boros dalam pemakaian kabel.</li>
<li>Jika node tengah mengalami kerusakan, maka seluruh rangkaian akan berhenti.
HUB/SWITCH jadi elemen kritis karena kontrol terpusat.</li>
<li>Jaringan tergantung pada terminal pusat.</li>
<li>Peran hub sangat sensitif sehingga ketika terdapat masalah dengan hub maka jaringan tersebut akan down.</li>
<li>Jika menggunakan HUB dan lalu lintas data padat dapat menyebabkan jaringan lambat.</li>
</ul>

### Topologi Mesh

Topologi Mesh - Mesh merupakan jenis pengaturan tata letak jaringan komputer di mana masing-masing komputer dan perangkat di jaringannya saling berhubungan satu sama lainnya secara langsung.

Sehingga, dalam topologi mesh setiap perangkat dapat berkomunikasi langsung dengan perangkat yang dituju (dedicated links). dan memungkinkan distribusi transmisi dapat dimaksimalkan. meskipun salah satu dari sambungan transmisinya menurun.

Hubungan antara perangkat dan komputer (node) dilakukan melalui hop (loncatan). Beberapa perangkat dan node yang terhubung melalui sekali loncatan dan ada juga yang terhubung dengan lebih dari satu kali loncatan menuju keperangkat lain.

Dalam Topologi mesh setiap node terhubung ke node lainnya dalam jaringan. Ketika data ditransmisikan pada topologi jaringan mesh maka jaringan secara otomatis dikonfigurasi untuk memilih rute paling pendek dalam mencapai tujuan. Dengan kata lain saat data ditransfer ke perangkat tujuan setidaknya melalui beberapa hop (loncatan).

<img src="https://4.bp.blogspot.com/-Kedi9WZEDYI/VgJkgP70UmI/AAAAAAAABGM/BFt0tqjFem8/s1600/topologi%2Bmesh.jpg" alt="Topologi Star" style="width: 80%;" />

### Kelebihan Dan Kekurangan Topologi Mesh

Setiap model desain topologi jaringan komputer memiliki keuntungan dan keterbatasan, tak terkecuali pada topologi model Mesh.

### Keuntungan / Kelebihan Topologi Jaringan Mesh

<ul>
<li>Topologi mesh merupakan jaringan kuat karena ketika satu link dalam topologi jaringan mesh menjadi tidak stabil tidak akan menyebabkan seluruh sistem terhenti.<li>
<li>Memiliki sifat Robust, yaitu seandainya terdapat gangguan pada koneksi sebuah komputer, misal komputer A dengan komputer B karena rusaknya kabel koneksi (links) antara komputer B dan A, maka gangguan tersebut tidak akan memengaruhi koneksi komputer A dengan komputer lain.</li>
<li>Adanya link khusus yang digunakan untuk menjamin setiap sambungan mampu membawa beban data, sehingga menghilangkan masalah lalu lintas data secara umum ketika beberapa perangkat berbagi.</li>
<li>Jika ada ekspansi jaringan, tidak akan menyebabkan gangguan pada pengguna jaringan lainnya</li>
</ul>

### Kelemahan / Kekurangan Topolgi Jaringan Mesh

<ul>

<li>Membutuhkan banyak Port I/O (Input-Output) dan kabel. semakin banyak komputer maka dibutuhkan semakin banyak pula port I/O dan kabel links</li>
<li>Biaya instalasi dan pemeliharaan jaringan komputer mesh cukup tinggi.</li>
<li>Kelemahan topologi mesh yang utama adalah membutuhkan lebih banyak perangkat keras jaringan (ex: kabel jaringan) dibandingkan dengan topologi Jaringan LAN lainnya</li>
<li>Pelaksanaan (konfigurasi dan instalasi) topologi ini tergolong rumit.</li>
<li>Perlu space yang luas karena menggunakan Banyaknya kabel .</li>
</ul>

### Topologi Jaringan Tree

Topologi Tree - Topologi tree atau sering disebut topologi pohon, merupakan topologi jaringan komputer yang secara hirarki merupakan kombinasi dari topologi bus dan star. Jadi, untuk memahami topologi pohon, maka kita perlu memahami terlebih dahulu topologi bus dan star.

Topologi bus merupakan topologi yang melibatkan sambungan serial komputer secara linear dan kabel tunggal yang menangani lalu lintas data antara semua komputer dalam jaringan. Jaringan bus dapat dikenali pada penggunaan sebuah kabel utama (kabel backbone) yang menghubungkan semua peralatan jaringan serta kedua ujungnya menggunakan T-Connector dengan terminator 50ohm pada kedua ujung. Sedangkan Topologi star merupakan salah satu topologi yang paling sering digunakan dalam pembangunan jaringan LAN. Dengan satu hub pusat terhubung ke beberapa komputer.

Topologi tree didesain berdasarkan kombinasi topologi star dan bus. Hal ini dapat dicapai dengan mengintegrasikan hub multi jaringan star bersama-sama pada satu bus. Bayangkan sebuah diagram topologi jaringan pohon (tree) dengan banyak jaringan star dengan hub pusatnya. Kemudian gambarlah garis yang hanya menghubungkan hub bersama ke titik pada satu line. Hub (Switch) ini biasanya terhubung dengan satu hub utama yang merupakan akar untuk seluruh jaringan data di antara seluruh komputer.

<img src="https://2.bp.blogspot.com/-fyOcbNPP5BY/VgY-rcIaYfI/AAAAAAAABGg/IdzHgxnmJZM/s1600/topologi%2Btree.jpg" alt="Topologi Star" style="width: 80%;" />

### Kelebihan Dan Kekurangan Topologi Tree

Setiap model desain topologi jaringan komputer memiliki keuntungan dan keterbatasan, tak terkecuali pada topologi model Tree.

### Keuntungan / Kelebihan Topologi Jaringan Tree

<ul>
<li>Merupakan topologi yang baik untuk jaringan komputer yang besar dibanding jenis topologi komputer lainnya seperti star dan ring yang tidak cocok untuk skala seluruh jaringan.</li>

<li>Topologi tree membagi seluruh jaringan menjadi bagian yang mudah diatur.</li>
<li>Semua komputer pada topologi tree memiliki akses segera ke node tetangga dalam jaringan dan juga hub pusat. </li>
<li>Jaringan tree memungkinkan beberapa perangkat jaringan dihubungkan dengan hub pusat.</li>
<li>Topologi tree memungkinkan untuk memiliki jaringan point to point.</li>
<li>Topologi tree menyediakan cukup ruang untuk ekspansi jaringan pada masa depan</li>

<li>Menanggulangi keterbatasan pada topologi jaringan star, yang memiliki kekurangan pada titik koneksi hub serta keterbatasa lalu lintas siaran yang diinduksi topologi jaringan bus.</li>
</ul>

### Kelemahan / Kekurangan Topolgi Jaringan Tree

<ul>
<li>Menggunakan banyak kabel</li>
<li>Jika terjadi kesalahan pada jaringan / komputer tingkat tinggi (pusat), maka jaringan tingkat rendah akan terganggu juga.</li>
<li>Sering terjadi tabrakan dan kinerjanya tergolong lambat
Ketergantungan dari seluruh jaringan pada satu hub pusat merupakan titik kerentanan untuk topologi ini.</li> 
<li>Kegagalan hub pusat atau kegagalan utama data cable trunk, bisa melumpuhkan seluruh jaringan.</li>
<li>Dengan peningkatan ukuran luar titik, pengelolaan menjadi sulit.</li>
</ul>
