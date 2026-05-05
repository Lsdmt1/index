// ══════════════════════════════════════════════════════
// ARTICLES DATA — buraya yeni makale ekle
// ══════════════════════════════════════════════════════
const ARTICLES_DATA = [
  {
    id:'anice', cat:'maneviyat', subcat:'budizm',
    title:'Aniçe: Her Şeyin Geçiciliğini Kucaklamak',
    titlePlain:'Aniçe: Her Şeyin',
    titleEm:'geçiciliğini kucaklamak',
    tag:'☯ Budizm & Zen', read:'12 dk', sources:14,
    img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    desc:'Buda\'nın en temel öğretilerinden biri olan geçicilik kavramı ve modern hayatta uygulaması.',
    body:`<p class="article-lead">Sabah kahveni içerken masanın üzerindeki buharın yükselişini izledin mi hiç? O ince beyaz kıvrım — doğar, yükselir, dağılır. Saniyeler içinde. Ne kadar direnirsek direnelim, buhar gider.</p>
<p>Budizm buna bir isim koymuştur: <strong>Aniçe</strong>. Pali dilinde "geçicilik" anlamına gelir. Buda'nın öğretilerinin tam merkezinde durur.</p>
<div class="article-sep">· · ·</div>
<h2 class="article-h2">Geçicilik neden bu kadar zor?</h2>
<p>İnsan zihni, doğası gereği kalıcılık arar. <strong>Thich Nhat Hanh</strong> bunu şöyle açıklar: tutunma, bir şeyin gerçekte ne olduğunu görmemizi engeller.</p>
<blockquote><p>"Her şey geçicidir. Bunu anlayan kişi acının üzerinden geçer."</p><cite>— Dhammapada</cite></blockquote>
<h2 class="article-h2">Bırakmak, kaybetmek değildir</h2>
<p>Aniçe öğretisi şunu söyler: bir şeyin geçici olduğunu kabul etmek, onu daha tam yaşamamızı sağlar. <strong>Osho'nun</strong> dediği gibi: gerçek aşk serbest bırakır.</p>
<p class="article-closing">Sabah kahvenizdeki buharı bir daha izlediğinizde, belki bu kez ona direnmek yerine yükselişini takip edersiniz. Doğar. Yükselir. Dağılır.</p>`,
    sourceList:['Dhammapada (Buda\'nın sözleri, MÖ 3. yüzyıl)','Thich Nhat Hanh — Farkındalığın Mucizesi','Dalai Lama — Yeni Binyılın Değerleri','Osho — Farkındalık: Dengeli Yaşamanın Anahtarı','Alan W. Watts — Zen Yolu']
  },
  {
    id:'golge', cat:'zihin', subcat:'psikoloji',
    title:'Jung\'un Gölge Arketipi: Kendi Karanlığınla Yüzleşmek',
    titlePlain:'Jung\'un Gölge Arketipi:',
    titleEm:'Kendi Karanlığınla Yüzleşmek',
    tag:'🧠 Derinlik Psikolojisi', read:'10 dk', sources:9,
    img:'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?w=1200&q=80',
    desc:'Carl Gustav Jung\'un gölge çalışmasının dönüştürücü gücü ve kolektif bilinçdışı üzerine.',
    body:`<p class="article-lead">Her insanın içinde bir gölge yaşar. Bastırdığımız öfke, inkâr ettiğimiz kıskançlık, kabul edemediğimiz arzular — hepsi orada, karanlığın içinde bekler.</p>
<p><strong>Carl Gustav Jung</strong>, bu karanlık bölgeyi "gölge" olarak adlandırdı. Ego'nun dışında kalan, bilinçdışına itilmiş tüm içeriklerin toplamıdır gölge.</p>
<div class="article-sep">· · ·</div>
<h2 class="article-h2">Gölge neden önemli?</h2>
<p>Jung şöyle söyler: "En büyük kötülük, gölgeden habersiz olmaktır." Bizi en çok rahatsız eden insanlar, çoğunlukla bizim inkâr ettiğimiz nitelikleri taşıyanlardır.</p>
<blockquote><p>"Birinin gölgesi olmadığı zaman, ışığı da olmaz."</p><cite>— Carl Gustav Jung</cite></blockquote>
<h2 class="article-h2">Gölge çalışması nasıl yapılır?</h2>
<p><strong>Robert A. Johnson</strong>'ın önerdiği yöntemle: sizi en çok rahatsız eden kişilikleri listeleyin. O özellikleri kendinizde aramaya başlayın.</p>
<p class="article-closing">Gölgeyi kucaklamak, tüm karanlığı kabul etmek demek değildir. Onu tanımak, bütünleşmek ve özgürleşmek demektir.</p>`,
    sourceList:['Carl Gustav Jung — Psikoloji ve Simya','Robert A. Johnson — Gölgemizi Yemek','Marie-Louise von Franz — Gölge ve Kötülük','James Hollis — Karanlıkta Işık Aramak']
  },
  {
    id:'hermes', cat:'ezoterizm', subcat:'okultizm',
    title:'Hermes Trismegistus ve Kadim Bilgeliğin Dili',
    titlePlain:'Hermes Trismegistus ve',
    titleEm:'Kadim Bilgeliğin Dili',
    tag:'🔮 Okültizm & Hermetizm', read:'15 dk', sources:11,
    img:'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
    desc:'Hermetik felsefenin kökleri ve "Yukarıda ne varsa aşağıda da odur" ilkesinin derinlikleri.',
    body:`<p class="article-lead">"Yukarıda ne varsa, aşağıda da odur." Bu cümle, binlerce yıl önce yazılmış Zümrüt Tablet'ten gelmektedir.</p>
<p><strong>Hermes Trismegistus</strong> — "Üç kez büyük Hermes" — efsanevi bir figürdür. Antik Mısır geleneğinde Thoth ile Yunan tanrısı Hermes'in bileşimi.</p>
<div class="article-sep">· · ·</div>
<h2 class="article-h2">Yedi Hermetik İlke</h2>
<p>Hermetizm, evrenin işleyişini yedi temel ilkeyle açıklar: Zihinsellik, Yazışma, Titreşim, Kutupsallık, Ritim, Nedensellik ve Cinsiyet.</p>
<blockquote><p>"Zihin her şeydir; evren zihinseldir."</p><cite>— Kybalion</cite></blockquote>
<h2 class="article-h2">Modern dünyada Hermetizm</h2>
<p>Rönesans simyacıları ve bazı kuantum fizikçileri Hermetik metinlerden ilham almıştır.</p>
<p class="article-closing">Zümrüt Tablet'in son satırı: "Güneş onun babası, Ay onun annesi." Evrenin ritmi hâlâ aynı.</p>`,
    sourceList:['Kybalion — Three Initiates','The Emerald Tablet — Dennis William Hauck','Hermetica — Brian Copenhaver','Frances Yates — Giordano Bruno ve Hermetik Gelenek','Manly P. Hall — Tüm Çağların Gizli Öğretileri']
  },
  {
    id:'nlp', cat:'saglik', subcat:'nlp',
    title:'NLP ile Zihin Programlama: Kökler ve Pratik',
    titlePlain:'NLP ile Zihin Programlama:',
    titleEm:'Kökler ve Pratik',
    tag:'🌿 Bütüncül Sağlık', read:'8 dk', sources:7,
    img:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
    desc:'Nöro-linguistik programlamanın temelleri ve günlük yaşamda dönüştürücü etkileri.',
    body:`<p class="article-lead">Dilimiz gerçekliği sadece anlatmaz — aynı zamanda inşa eder. NLP'nin temel iddiası budur.</p>
<p><strong>Richard Bandler</strong> ve <strong>John Grinder</strong> tarafından 1970'lerde geliştirilen NLP, başarılı terapistlerin kalıplarını modellemeye dayanır.</p>
<div class="article-sep">· · ·</div>
<h2 class="article-h2">Harita, arazi değildir</h2>
<p>Her insanın gerçekliğin farklı bir "haritası" vardır. Sorunlar genellikle haritadaki kısıtlamalardan kaynaklanır.</p>
<blockquote><p>"İnsanlar kırık değildir. Kullandıkları kalıplar değiştirilebilir."</p><cite>— Richard Bandler</cite></blockquote>
<h2 class="article-h2">Yeniden Çerçeveleme</h2>
<p>"Başarısız oldum" yerine "Neyin işe yaramadığını öğrendim" demek beynin farklı nöral yollar kullanmasını sağlar.</p>
<p class="article-closing">Dil bir araçtır. Ama hangi aracı nasıl kullandığımız, inşa ettiğimiz yapıyı belirler.</p>`,
    sourceList:['Richard Bandler & John Grinder — Kurbağalardan Prenslere','Steve Andreas & Charles Faulkner — NLP: Yeni Teknoloji','Robert Dilts — Değişim İçin Stratejiler','Tony Robbins — Sınırsız Güç']
  },
  {
    id:'saman', cat:'maneviyat', subcat:'samanizm',
    title:'Şaman Yolculuğu: Üç Dünya Kozmolojisi',
    titlePlain:'Şaman Yolculuğu:',
    titleEm:'Üç Dünya Kozmolojisi',
    tag:'🥁 Şamanizm', read:'11 dk', sources:8,
    img:'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?w=1200&q=80',
    desc:'Alt dünya, orta dünya, üst dünya ve modern insanın bu antik bilgelikle bağı.',
    body:`<p class="article-lead">Davulun monoton ritmi başlar. Şaman gözlerini kapatır ve bir yolculuğa çıkar — başka bir gerçekliğin katmanlarını ziyaret etmek için.</p>
<p>Şamanizm, insanlığın bilinen en eski spiritüel geleneğidir.</p>
<div class="article-sep">· · ·</div>
<h2 class="article-h2">Üç Dünya</h2>
<p><strong>Alt Dünya</strong>: ataların ve hayvan rehberlerin diyarı. <strong>Orta Dünya</strong>: yaşadığımız gerçeklik. <strong>Üst Dünya</strong>: öğretmen ruhların mekânı.</p>
<blockquote><p>"Şaman, görünmeyen dünyaların avcısıdır."</p><cite>— Michael Harner</cite></blockquote>
<h2 class="article-h2">Modern Şamanizm</h2>
<p><strong>Sandra Ingerman</strong> ve <strong>Michael Harner</strong>'ın çalışmaları sayesinde şamanizm modern insana uyarlandı.</p>
<p class="article-closing">Davul hâlâ çalıyor. İnsanlık başlangıcından bu yana aynı kapıyı aramaya devam ediyor.</p>`,
    sourceList:['Michael Harner — Şamanın Yolu','Sandra Ingerman — Ruh Geri Getirme','Mircea Eliade — Şamanizm: Arkaik Vecd Teknikleri','Alberto Villoldo — Şaman, Hekim, Bilge']
  },
  {
    id:'astroloji', cat:'ezoterizm', subcat:'astroloji',
    title:'Doğum Haritası: Gökyüzünün Sana Anlattıkları',
    titlePlain:'Doğum Haritası:',
    titleEm:'Gökyüzünün Sana Anlattıkları',
    tag:'⭐ Astroloji', read:'9 dk', sources:6,
    img:'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1200&q=80',
    desc:'Natal harita okuma temelleri ve gezegenlerin kişilik üzerindeki sembolik etkileri.',
    body:`<p class="article-lead">Doğduğunuz an, gökyüzündeki bir fotoğraf çekilir. Gezegenlerin o anki konumu kişiliğinizin bir haritasını sunar.</p>
<p>Batı astrolojisi 4.000 yıllık bir birikimin ürünüdür. Modern psikolojik astroloji <strong>Carl Jung</strong>'un arketip teorisiyle zenginleşmiştir.</p>
<div class="article-sep">· · ·</div>
<h2 class="article-h2">Üç Temel Bileşen</h2>
<p><strong>Güneş burcu</strong>: temel kimlik. <strong>Ay burcu</strong>: duygusal dünya. <strong>Yükselen burç</strong>: dünyaya nasıl göründüğünüz.</p>
<blockquote><p>"Yıldızlar eğilimi gösterir, zorunluluğu değil."</p><cite>— Dane Rudhyar</cite></blockquote>
<h2 class="article-h2">Evler ve Gezegenler</h2>
<p>Harita 12 eve bölünmüştür. Her gezegen bir evi ziyaret eder ve o alan üzerinde etkisini bırakır.</p>
<p class="article-closing">Harita, kaderin ta kendisi değildir. Kendini tanımak için en eski aynalardan biri.</p>`,
    sourceList:['Liz Greene — Satürn: Yeni Bir Bakış','Dane Rudhyar — Astroloji Kişiliğinin Yeniden Yorumlanması','Howard Sasportas — 12 Ev','Stephen Arroyo — Astroloji, Psikoloji ve Dört Element']
  },
  {
    id:'akis-hali', cat:'zihin', subcat:'psikoloji',
    title:'Akış Hali: Nörobiyoloji ve Kadim Bilgeliğin Kesiştiği Tepe Deneyim',
    titlePlain:'Akış Hali:',
    titleEm:'Nörobiyoloji ve Kadim Bilgeliğin Kesiştiği Tepe Deneyim',
    tag:'🧠 Zihin & Bilinç', read:'14 dk', sources:12,
    img:'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1200&q=80',
    desc:'Csikszentmihalyi\'nin akış teorisi, geçici hipofrontalite ve Zen\'in "Wu Wei" öğretisi — bilim ile spiritüalitenin optimal deneyimde buluştuğu nokta.',
    body:`<p class="article-lead">Bazen öyle anlar olur: kalem kendi kendine yazar, eller kendi kendine çalar, beden kendi kendine koşar. "Ben" kaybolur. Sadece eylem kalır. Bu an — bilimin "akış", kadim bilgeliğin "Samadhi" ya da "Wu" dediği an — insan deneyiminin en saf formudur.</p>

<p>Macar-Amerikalı psikolog <strong>Mihaly Csikszentmihalyi</strong> onlarca yıl boyunca ressam, cerrah, satranç ustası ve dağcılarla görüştü. Hepsinin tarif ettiği deneyim özünde aynıydı: zaman durur, öz-bilinç solar, eylem ile eyleyen arasındaki sınır ortadan kalkar. Csikszentmihalyi buna <em>flow</em> — akış — adını verdi. Ama bu deneyimi ilk keşfeden o değildi. Binlerce yıl önce, Himalaya'nın yamaçlarında ve Çin'in meditasyon kulübelerinde, aynı hal farklı bir dille anlatılmıştı.</p>

<div class="article-sep">· · ·</div>

<h2 class="article-h2">Goldilocks Bölgesi: Ne Çok Kolay, Ne Çok Zor</h2>

<p>Akışın kapısı, hassas bir denge noktasında açılır. Bir görev yeteneklerinizin çok altındaysa sıkılırsınız. Çok üzerindeyse kaygılanırsınız. Ama görevin zorluk derecesi mevcut becerilerinizi yaklaşık <strong>%4 oranında aştığında</strong>, zihin o nadir "Goldilocks Bölgesi"ne girer — ne donup kalır ne de uyuşur. Tam anlamıyla uyanır.</p>

<p>Sinirbilimciler bu noktada beyinde ilginç bir şey olduğunu keşfetti: <strong>Sistem 1</strong> (hızlı, sezgisel, otomatik) ve <strong>Sistem 2</strong> (yavaş, analitik, bilinçli) modları kusursuz bir senkronizasyona girer. Beden bildiğini yapar; zihin buna ortak olur ama araya girmez. Daniel Kahneman'ın iki sistem teorisi açısından bakıldığında, akış aslında bu iki sistemin çatışma yaşamadığı ender hallerden biridir.</p>

<h2 class="article-h2">Geçici Hipofrontalite: İç Sesin Susması</h2>

<p>Akışın en çarpıcı nörolojik bulgularından biri, <strong>prefrontal korteks</strong> aktivitesinin belirgin biçimde azalmasıdır. Bu bölge; öz-eleştiri, sosyal kaygı, gelecek planlaması ve "başkaları beni nasıl görüyor?" sorularının yuvası. Akış sırasında bu bölge sakinleşir — araştırmacıların "geçici hipofrontalite" dediği bu fenomen, bireyi kendi iç gürültüsünden özgür kılar.</p>

<p>Bu sessizlik bir boşluk değildir. Aksine, beyin o anda adeta bir <em>elektrokimyasal senfoni</em> çalmaktadır:</p>

<p><strong>Dopamin</strong> odaklanmayı derinleştirir ve her ilerlemeyi küçük bir ödülle pekiştirir. <strong>Norepinefrin</strong> dikkati lazer gibi tek bir noktaya sabitler. <strong>Anandamid</strong> — adını Sanskritçe "sonsuz mutluluk" anlamındaki <em>ananda</em>'dan alan bu molekül — yaratıcı bağlantılar kurma kapasitesini artırırken acı eşiğini yükseltir. <strong>Endorfin ve serotonin</strong> ise deneyim boyunca ve sonrasında derin bir doyum zemini oluşturur.</p>

<p>Steven Kotler bu nörokokteyli şöyle özetler: akış, insan beyninin erişebileceği en güçlü değişmiş bilinç hallerinden biridir — ve üstelik tamamen doğal, tamamen içseldir.</p>

<div class="article-sep">· · ·</div>

<h2 class="article-h2">Zen ve "Acemi Zihni": Bilmemenin Bilgeliği</h2>

<p>Zen ustası <strong>Shunryu Suzuki</strong> şöyle der: "Acemi zihninde pek çok olasılık vardır; uzman zihninde ise yalnızca birkaç tane." Bu paradoks, akışın ruhunu tam olarak yakalar. Akışa giren kişi, bilgisini geride bırakmaz — onu aşar. Bilgi artık düşünülmesi gereken bir şey değil, akmaya devam eden bir nehirdir.</p>

<p>Zen felsefesindeki <strong>Shoshin</strong> (acemi zihni) kavramı, her anı ilk kez yaşanıyormuş gibi karşılamayı öğretir. Yargı, beklenti ve önceki deneyimin ağırlığı olmadan. Bu yaklaşım, sinirbilimin "geçici hipofrontalite" dediği şeyin bilinçli olarak kültive edilmiş halidir — prefrontal korteksin susturulması, ancak bu kez yıllar süren pratikle, kasıtlı olarak.</p>

<blockquote><p>"Zihin bir ayna gibi olmalı — tutmamalı, reddetmemeli, yalnızca yansıtmalı."</p><cite>— Bruce Lee (Jeet Kune Do felsefesinden)</cite></blockquote>

<h2 class="article-h2">Samadhi, Wu ve Anatta: Doğu'nun Üç Anahtarı</h2>

<p>Budist gelenekte akışın karşılığı <strong>Samadhi</strong>'dir — zihnin tek bir nesneyle tam birleşimi. Meditasyon pratiğinin en derin katmanlarından biri olan Samadhi'de özne-nesne ayrımı çözülür. Meditasyoncu artık nefesi izlemez; nefes olur. Bu, Csikszentmihalyi'nin tanımıyla neredeyse kelimesi kelimesine örtüşür: "eylem ile farkındalığın birleşmesi."</p>

<p>Taoizm'deki <strong>Wu Wei</strong> (eylemsiz eylem ya da çabasız çaba) kavramı da aynı gerçeği farklı bir açıdan ele alır. Su nasıl taşların etrafından zahmetsizce akıyorsa, akıştaki bir usta da dirençle değil uyumla hareket eder. Müzisyen notaları çalmaz — notalar onun aracılığıyla çalar. Budizm'in <strong>Anatta</strong> (benliksizlik) öğretisi ise bu deneyimin metafizik temelini kurar: "ben" zaten bir kurgu idi; akış, bu kurgunun geçici olarak askıya alınmasıdır.</p>

<p>Hint geleneğinde <strong>Prana</strong> (yaşam enerjisi) ve Çin geleneğinde <strong>Chi</strong> kavramları da aynı fenomene işaret eder: akış halindeki bir cerrah, bir dansçı ya da bir demirci, yalnızca kendi becerilerini sergilemez. Evrensel bir enerjinin kendisi aracılığıyla akmasına izin verir.</p>

<div class="article-sep">· · ·</div>

<h2 class="article-h2">Akışa Giren Zihin: Zaman Nasıl Bükülür?</h2>

<p>Akış halinin en gizemli özelliklerinden biri <strong>zamansal tahrifat</strong>dır. Saatler saniyeler gibi, ya da bazen saniyeler bir ömür gibi geçer. Bu deneyim öylesine evrenseldir ki hem nörobilim hem de mistik gelenekler onu merkeze alır.</p>

<p>Nörolojik açıdan açıklama şudur: beyin yoğun veri işleme moduna geçtiğinde, zaman algısını inşa eden "iç saat" mekanizmaları arka plana çekilir. Beyin, saatleri değil anı işler. Budist pratikte ise bu "şimdi"nin genişlemesi, aydınlanmanın ön kapısı olarak görülür. <strong>Thich Nhat Hanh</strong> bunu şöyle ifade eder: "Gelecek henüz gelmedi, geçmiş artık geçti. Yaşayabileceğiniz tek an şimdiki andır."</p>

<p>Bu iki perspektif birbirini açıklar: beyin "şimdi"ye tam odaklandığında zaman algısı dönüşür; spiritüel pratik de tam bu odaklanmayı kültive etmeyi hedefler. Araç farklı, varış aynı.</p>

<h2 class="article-h2">Akışa Açılan Kapılar: Pratik Tetikleyiciler</h2>

<p>Steven Kotler ve Flow Research Collective'in araştırmaları, akışı tetikleyen belirli koşulları ortaya koymuştur. <strong>Net hedefler</strong> — ne yaptığınızı ve neden yaptığınızı net bilmek — zihnin önündeki sisi dağıtır. <strong>Anlık geri bildirim</strong> — her adımın sonucunu hemen görmek — sistemi kalibre eder. <strong>Kontrol duygusu</strong> — sonucu etkileyebileceğinize olan inanç — kaygıyı dengeler.</p>

<p>Meditasyon geleneği bu tetikleyicileri binlerce yıl önce keşfetmişti: Zazen'deki tek bir nesneye odaklanma net hedeftir. Nefes farkındalığı anlık geri bildirimdir. "Şimdi burada olmak" ise tam anlamıyla kontrol duygusunun içselleştirilmesidir.</p>

<blockquote><p>"Mutluluk, arayarak bulunmaz. Tam anlamıyla bir şeyle meşgul olmanın yan ürünüdür."</p><cite>— Mihaly Csikszentmihalyi</cite></blockquote>

<h2 class="article-h2">Öz-Gerçekleştirmenin Somut Hali</h2>

<p>Abraham Maslow'un ihtiyaçlar hiyerarşisinin zirvesi olan <strong>"öz-gerçekleştirme"</strong> çoğu zaman soyut bir kavram olarak kalır. Akış hali ise bu kavrama somut bir beden kazandırır. Maslow'un sonraki dönemde tanımladığı <strong>"zirve deneyimler"</strong> (peak experiences) — sınırların yok olduğu, anlam ve güzelliğin öne çıktığı o nadir anlar — akış halinin duygusal boyutudur.</p>

<p>Pozitif psikolojinin kurucularından <strong>Martin Seligman</strong>, PERMA modelinde akışı (engagement) refahın beş temel unsurundan biri olarak konumlandırır. Çünkü akış anında ne geçmiş ne gelecek sizi esir alır; tam anlamıyla <em>yaşıyorsunuzdur</em>.</p>

<p class="article-closing">Beyin prefrontal korteksi sessizleştirirken, Zen acemi zihnini kültive eder. Dopamin ödül devrelerini ateşlerken, Taoizm Wu Wei'nin suyunu akıtır. Farklı diller, farklı haritalar — ama hepsi aynı dağı gösteriyor. Akış, insan olmanın en kalabalık ve en sessiz anıdır aynı anda. Ve belki de bu yüzden, bir kez tadıldığında, bir daha vazgeçilemiyor.</p>`,
    sourceList:[
      'Mihaly Csikszentmihalyi — Flow: The Psychology of Optimal Experience',
      'Steven Kotler — The Rise of Superman',
      'Shunryu Suzuki — Zen Mind, Beginner\'s Mind',
      'Thich Nhat Hanh — The Miracle of Mindfulness',
      'Daniel Kahneman — Thinking, Fast and Slow',
      'Abraham Maslow — Toward a Psychology of Being',
      'Martin Seligman — Flourish',
      'Alan Watts — The Way of Zen',
      'Bruce Lee — Tao of Jeet Kune Do',
      'Mark Johnson — The Meaning of the Body',
      'Arne Dietrich — Transient Hypofrontality as a Mechanism for the Psychological Effects of Exercise',
      'Flow Research Collective — State of Flow Report 2023'
    ]
  }
];
