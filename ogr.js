
const personNames = {
    ali_karadag: "Ali Karadağ",
    seref_turgut: "Şeref Turgut",
    burcu_harem: "Burcu Harem",
    halil_calis: "Halil İbrahim Çalış",
    hatice_selimoglu: "Hatice Selimoğlu",
    tubanur_birkan: "Tübanür Birkan",
    aylin_sarioglu: "Aylin Sarıoğlu",
    muharrem_sahin: "Muharrem Şahin",
    ihsan_bapli: "İhsan Bapli",
    busra_turan: "Büşra Turan",
    guluzar_kaya: "Gülüzar Kaya",
    serra_oguzhan: "Serra Oğuzhan",
    iler_kiran: "İler Kıran",
    ozlem_dulger: "Özlem Dülger Terekeci",
    didem_dundar: "Didem Dündar",
    tahsin_kaygisiz: "Tahsin Kaygısız",
    tanju_karaarslan: "Tanju Karaarslan",
    burak_yesil: "Burak Yeşil",
    hatice_ozmen: "Hatice Özmen",
    fahri_celik: "Fahri Çelik",
    mehmet_hamarat: "Mehmet Hamarat",
    yusuf_yildiz: "Yusuf Şamil Yıldız",
    yavuz_inan: "Yavuz İnan",
    ruhi_sarikaya: "Ruhi Sarıkaya",
    ramazan_sarioglu: "Ramazan Mürşit Sarıoğlu",
    omer_kayhan: "Ömer Kayhan",
    sinan_aydin: "Sinan Aydın",
    inci_sener: "İnci Şener",
    aysen_eraydin: "Ayşen Eraydın",
    nursel_yildirim: "Nursel Yıldırım",
    hatice_bayram: "Hatice Bayram",
    osman_kilic: "Osman Kılıç"
};

const personDescriptions = {
    ali_karadag: "Beden Eğitimi Öğretmeni",
    seref_turgut: "Beden Eğitimi Öğretmeni",
    burcu_harem: "Resim Öğretmeni",
    halil_calis: "Din Kültürü Öğretmeni",
    hatice_selimoglu: "Bilişim Öğretmeni",
    tubanur_birkan: "Felsefe Öğretmeni",
    aylin_sarioglu: "Biyoloji Öğretmeni",
    muharrem_sahin: "Biyoloji Öğretmeni",
    ihsan_bapli: "Kimya Öğretmeni",
    busra_turan: "Kimya Öğretmeni",
    guluzar_kaya: "Almanca Öğretmeni",
    serra_oguzhan: "Almanca Öğretmeni",
    iler_kiran: "İngilizce Öğretmeni",
    ozlem_dulger: "İngilizce Öğretmeni",
    didem_dundar: "İngilizce Öğretmeni",
    tahsin_kaygisiz: "Fizik Öğretmeni",
    tanju_karaarslan: "Fizik Öğretmeni",
    burak_yesil: "Matematik Öğretmeni ",
    hatice_ozmen: "Matematik Öğretmeni",
    fahri_celik: "Matematik Öğretmeni",
    mehmet_hamarat: "Matematik Öğretmeni ",
    yusuf_yildiz: "Matematik Öğretmeni ",
    yavuz_inan: "Matematik Öğretmeni ",
    ruhi_sarikaya: "Tarih Öğretmeni",
    ramazan_sarioglu: "Tarih Öğretmeni",
    omer_kayhan: "Coğrafya Öğretmeni",
    sinan_aydin: "Edebiyat Öğretmeni",
    inci_sener: "Edebiyat Öğretmeni",
    aysen_eraydin: "Edebiyat Öğretmeni",
    nursel_yildirim: "Edebiyat Öğretmeni",
    hatice_bayram: "Fizik Öğretmeni",
    osman_kilic: "Din Kültürü Öğretmeni / Müdür"
};


const questions = [
    {
    question: "Boş vakitlerinde ne yapmayı seversin?",
    options: [
        { text: "Futbol oynamak veya maç izlemek", scores: { ali_karadag: 4, seref_turgut: 4, omer_kayhan: 4, burak_yesil: 1, tahsin_kaygisiz: 2, tanju_karaarslan: 2, ruhi_sarikaya: 3, ramazan_sarioglu: 2, burcu_harem: 1, halil_calis: 1, hatice_selimoglu: 2, tubanur_birkan: 1, aylin_sarioglu: 2, muharrem_sahin: 3, ihsan_bapli: 2, busra_turan: 1, guluzar_kaya: 2, serra_oguzhan: 2, iler_kiran: 2, ozlem_dulger: 2, didem_dundar: 3, hatice_ozmen: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 2, sinan_aydin: 2, inci_sener: 1, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 2, osman_kilic: 1 } },
        { text: "Kitap okumak, araştırma yapmak", scores: { inci_sener: 4, sinan_aydin: 4, aysen_eraydin: 4, nursel_yildirim: 4, tubanur_birkan: 4, ruhi_sarikaya: 4, ramazan_sarioglu: 4, hatice_ozmen: 3, ali_karadag: 1, seref_turgut: 1, burcu_harem: 3, halil_calis: 3, hatice_selimoglu: 3, aylin_sarioglu: 3, muharrem_sahin: 2, ihsan_bapli: 3, busra_turan: 3, guluzar_kaya: 4, serra_oguzhan: 3, iler_kiran: 3, ozlem_dulger: 4, didem_dundar: 2, tahsin_kaygisiz: 3, tanju_karaarslan: 3, burak_yesil: 2, fahri_celik: 3, mehmet_hamarat: 3, yusuf_yildiz: 3, yavuz_inan: 3, omer_kayhan: 2, hatice_bayram: 4, osman_kilic: 3 } },
        { text: "Arkadaşlarla vakit geçirmek, takılmak", scores: { ali_karadag: 4, seref_turgut: 3, omer_kayhan: 4, didem_dundar: 4, aylin_sarioglu: 3, muharrem_sahin: 4, burcu_harem: 3, halil_calis: 2, hatice_selimoglu: 3, tubanur_birkan: 3, ihsan_bapli: 2, busra_turan: 2, guluzar_kaya: 3, serra_oguzhan: 2, iler_kiran: 4, ozlem_dulger: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, hatice_ozmen: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, ramazan_sarioglu: 1, sinan_aydin: 3, inci_sener: 2, aysen_eraydin: 3, nursel_yildirim: 2, hatice_bayram: 2, osman_kilic: 2 } },
        { text: "İbadet etmek", scores: { halil_calis: 4, osman_kilic: 4, ramazan_sarioglu: 3, hatice_selimoglu: 2, nursel_yildirim: 2, ali_karadag: 1, seref_turgut: 1, burcu_harem: 1, tubanur_birkan: 2, aylin_sarioglu: 2, muharrem_sahin: 2, ihsan_bapli: 2, busra_turan: 3, guluzar_kaya: 2, serra_oguzhan: 2, iler_kiran: 1, ozlem_dulger: 2, didem_dundar: 1, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, hatice_ozmen: 3, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 3, ruhi_sarikaya: 2, omer_kayhan: 2, sinan_aydin: 2, inci_sener: 2, aysen_eraydin: 2, hatice_bayram: 3 } }
    ]
},
{
    question: "Bir sorunla karşılaştığında nasıl tepki verirsin?",
    options: [
        { text: "Hemen çözüm ararım, kurallar dahilinde", scores: { inci_sener: 4, burak_yesil: 4, busra_turan: 4, ramazan_sarioglu: 4, hatice_ozmen: 3, yavuz_inan: 4, ali_karadag: 2, seref_turgut: 2, burcu_harem: 3, halil_calis: 2, hatice_selimoglu: 4, tubanur_birkan: 3, aylin_sarioglu: 3, muharrem_sahin: 2, ihsan_bapli: 4, guluzar_kaya: 3, serra_oguzhan: 3, iler_kiran: 3, ozlem_dulger: 4, didem_dundar: 2, tahsin_kaygisiz: 4, tanju_karaarslan: 3, fahri_celik: 4, mehmet_hamarat: 3, yusuf_yildiz: 4, ruhi_sarikaya: 3, omer_kayhan: 3, sinan_aydin: 3, aysen_eraydin: 3, nursel_yildirim: 3, hatice_bayram: 4, osman_kilic: 3 } },
        { text: "Önce dua eder, sonra hareket ederim", scores: { halil_calis: 4, osman_kilic: 4, ramazan_sarioglu: 3, nursel_yildirim: 2, ali_karadag: 1, seref_turgut: 1, burcu_harem: 2, hatice_selimoglu: 2, tubanur_birkan: 2, aylin_sarioglu: 2, muharrem_sahin: 2, ihsan_bapli: 2, busra_turan: 3, guluzar_kaya: 2, serra_oguzhan: 2, iler_kiran: 1, ozlem_dulger: 2, didem_dundar: 1, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, hatice_ozmen: 3, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 3, ruhi_sarikaya: 2, omer_kayhan: 2, sinan_aydin: 2, inci_sener: 2, aysen_eraydin: 2, hatice_bayram: 3 } },
        { text: "Rahat yaklaşırım, stres yapmam", scores: { ali_karadag: 3, seref_turgut: 3, didem_dundar: 3, muharrem_sahin: 3, burcu_harem: 4, halil_calis: 2, hatice_selimoglu: 2, tubanur_birkan: 3, aylin_sarioglu: 2, ihsan_bapli: 2, busra_turan: 1, guluzar_kaya: 3, serra_oguzhan: 2, iler_kiran: 3, ozlem_dulger: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 1, hatice_ozmen: 2, fahri_celik: 2, mehmet_hamarat: 3, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, ramazan_sarioglu: 1, omer_kayhan: 3, sinan_aydin: 2, inci_sener: 2, aysen_eraydin: 3, nursel_yildirim: 2, hatice_bayram: 2, osman_kilic: 2 } },
        { text: "Ciddi ve disiplinli şekilde üzerine giderim", scores: { inci_sener: 4, burak_yesil: 4, busra_turan: 4, ramazan_sarioglu: 4, hatice_bayram: 3, ali_karadag: 2, seref_turgut: 2, burcu_harem: 2, halil_calis: 3, hatice_selimoglu: 3, tubanur_birkan: 2, aylin_sarioglu: 3, muharrem_sahin: 2, ihsan_bapli: 3, guluzar_kaya: 3, serra_oguzhan: 3, iler_kiran: 2, ozlem_dulger: 3, didem_dundar: 2, tahsin_kaygisiz: 3, tanju_karaarslan: 3, hatice_ozmen: 3, fahri_celik: 3, mehmet_hamarat: 3, yusuf_yildiz: 3, yavuz_inan: 4, ruhi_sarikaya: 3, omer_kayhan: 3, sinan_aydin: 3, aysen_eraydin: 2, nursel_yildirim: 4, osman_kilic: 4 } }
    ]
},
{
    question: "Giyim tarzın nasıldır?",
    options: [
        { text: "Aşırı şık, özentili", scores: { inci_sener: 4, osman_kilic: 3, nursel_yildirim: 3, hatice_bayram: 3, ali_karadag: 2, seref_turgut: 2, burcu_harem: 3, halil_calis: 2, hatice_selimoglu: 3, tubanur_birkan: 2, aylin_sarioglu: 2, muharrem_sahin: 2, ihsan_bapli: 2, busra_turan: 2, guluzar_kaya: 3, serra_oguzhan: 3, iler_kiran: 3, ozlem_dulger: 2, didem_dundar: 3, tahsin_kaygisiz: 1, tanju_karaarslan: 2, burak_yesil: 2, hatice_ozmen: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, ramazan_sarioglu: 2, omer_kayhan: 2, sinan_aydin: 3, aysen_eraydin: 3 } },
        { text: "Klasik pantalon, gömlek", scores: { ozlem_dulger: 4, hatice_ozmen: 4, fahri_celik: 3, mehmet_hamarat: 3, sinan_aydin: 3, ali_karadag: 2, seref_turgut: 3, burcu_harem: 3, halil_calis: 3, hatice_selimoglu: 3, tubanur_birkan: 3, aylin_sarioglu: 3, muharrem_sahin: 3, ihsan_bapli: 3, busra_turan: 3, guluzar_kaya: 3, serra_oguzhan: 4, iler_kiran: 3, didem_dundar: 3, tahsin_kaygisiz: 3, tanju_karaarslan: 3, burak_yesil: 3, yusuf_yildiz: 3, yavuz_inan: 3, ruhi_sarikaya: 3, ramazan_sarioglu: 2, omer_kayhan: 3, inci_sener: 3, aysen_eraydin: 3, nursel_yildirim: 3, hatice_bayram: 3, osman_kilic: 2 } },
        { text: "Öğretmen önlüğü", scores: { ali_karadag: 3, halil_calis: 4, burak_yesil: 4, tahsin_kaygisiz: 3, seref_turgut: 3, burcu_harem: 2, hatice_selimoglu: 2, tubanur_birkan: 3, aylin_sarioglu: 3, muharrem_sahin: 3, ihsan_bapli: 3, busra_turan: 2, guluzar_kaya: 2, serra_oguzhan: 2, iler_kiran: 2, ozlem_dulger: 2, didem_dundar: 3, tanju_karaarslan: 3, hatice_ozmen: 2, fahri_celik: 3, mehmet_hamarat: 3, yusuf_yildiz: 3, yavuz_inan: 3, ruhi_sarikaya: 3, ramazan_sarioglu: 2, omer_kayhan: 3, sinan_aydin: 2, inci_sener: 2, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 2, osman_kilic: 3 } },
        { text: "Spor kıyafetler", scores: { halil_calis: 4, osman_kilic: 4, ramazan_sarioglu: 3, ali_karadag: 1, seref_turgut: 1, burcu_harem: 1, hatice_selimoglu: 2, tubanur_birkan: 2, aylin_sarioglu: 2, muharrem_sahin: 2, ihsan_bapli: 2, busra_turan: 3, guluzar_kaya: 2, serra_oguzhan: 2, iler_kiran: 1, ozlem_dulger: 2, didem_dundar: 1, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, hatice_ozmen: 3, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 3, ruhi_sarikaya: 2, omer_kayhan: 2, sinan_aydin: 2, inci_sener: 2, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 3 } }
    ]
},
   {
    question: "Hangi etkinliği tercih edersin?",
    options: [
        { text: "Futbol maçı izlemek/oynamak", scores: { ali_karadag: 4, seref_turgut: 4, omer_kayhan: 4, burcu_harem: 1, halil_calis: 1, hatice_selimoglu: 2, tubanur_birkan: 1, aylin_sarioglu: 2, muharrem_sahin: 3, ihsan_bapli: 2, busra_turan: 1, guluzar_kaya: 2, serra_oguzhan: 2, iler_kiran: 2, ozlem_dulger: 2, didem_dundar: 3, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, hatice_ozmen: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, ramazan_sarioglu: 2, sinan_aydin: 2, inci_sener: 1, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 2, osman_kilic: 1 } },
        { text: "Seminer, konferans, eğitim", scores: { inci_sener: 5, sinan_aydin: 4, nursel_yildirim: 4, hatice_bayram: 4, tubanur_birkan: 3, ali_karadag: 2, seref_turgut: 2, burcu_harem: 3, halil_calis: 3, hatice_selimoglu: 4, aylin_sarioglu: 3, muharrem_sahin: 2, ihsan_bapli: 3, busra_turan: 3, guluzar_kaya: 4, serra_oguzhan: 3, iler_kiran: 3, ozlem_dulger: 4, didem_dundar: 2, tahsin_kaygisiz: 3, tanju_karaarslan: 3, burak_yesil: 3, hatice_ozmen: 3, fahri_celik: 3, mehmet_hamarat: 3, yusuf_yildiz: 3, yavuz_inan: 3, ruhi_sarikaya: 4, ramazan_sarioglu: 3, omer_kayhan: 2, aysen_eraydin: 4, osman_kilic: 3 } },
        { text: "Bilim merkezleri, deneyler", scores: { ihsan_bapli: 4, busra_turan: 4, tahsin_kaygisiz: 4, tanju_karaarslan: 4, aylin_sarioglu: 4, ali_karadag: 2, seref_turgut: 2, burcu_harem: 3, halil_calis: 2, hatice_selimoglu: 4, tubanur_birkan: 3, muharrem_sahin: 2, guluzar_kaya: 2, serra_oguzhan: 2, iler_kiran: 3, ozlem_dulger: 3, didem_dundar: 2, burak_yesil: 3, hatice_ozmen: 3, fahri_celik: 3, mehmet_hamarat: 3, yusuf_yildiz: 3, yavuz_inan: 3, ruhi_sarikaya: 2, ramazan_sarioglu: 2, omer_kayhan: 2, sinan_aydin: 2, inci_sener: 3, aysen_eraydin: 2, nursel_yildirim: 3, hatice_bayram: 4, osman_kilic: 2 } },
        { text: "Yeni yerler gezip insanlarla tanışmak", scores: { ali_karadag: 4, muharrem_sahin: 4, didem_dundar: 4, omer_kayhan: 3, seref_turgut: 3, burcu_harem: 3, halil_calis: 2, hatice_selimoglu: 3, tubanur_birkan: 3, aylin_sarioglu: 3, ihsan_bapli: 2, busra_turan: 2, guluzar_kaya: 3, serra_oguzhan: 2, iler_kiran: 4, ozlem_dulger: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, hatice_ozmen: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, ramazan_sarioglu: 2, sinan_aydin: 3, inci_sener: 2, aysen_eraydin: 3, nursel_yildirim: 2, hatice_bayram: 2, osman_kilic: 2 } }
    ]
},
{
    question: "Karar verirken neye güvenirsin?",
    options: [
        { text: "Mantık ve kurallara", scores: { burak_yesil: 4, inci_sener: 4, ramazan_sarioglu: 4, tahsin_kaygisiz: 4, busra_turan: 4, ali_karadag: 2, seref_turgut: 2, burcu_harem: 3, halil_calis: 2, hatice_selimoglu: 4, tubanur_birkan: 3, aylin_sarioglu: 4, muharrem_sahin: 2, ihsan_bapli: 4, guluzar_kaya: 3, serra_oguzhan: 3, iler_kiran: 3, ozlem_dulger: 4, didem_dundar: 2, tanju_karaarslan: 4, hatice_ozmen: 3, fahri_celik: 4, mehmet_hamarat: 3, yusuf_yildiz: 4, yavuz_inan: 4, ruhi_sarikaya: 3, omer_kayhan: 3, sinan_aydin: 3, aysen_eraydin: 3, nursel_yildirim: 3, hatice_bayram: 4, osman_kilic: 3 } },
        { text: "Dini değerlere ve vicdana", scores: { halil_calis: 4, osman_kilic: 4, ramazan_sarioglu: 3, nursel_yildirim: 3, ali_karadag: 2, seref_turgut: 2, burcu_harem: 2, hatice_selimoglu: 2, tubanur_birkan: 3, aylin_sarioglu: 2, muharrem_sahin: 3, ihsan_bapli: 2, busra_turan: 3, guluzar_kaya: 2, serra_oguzhan: 2, iler_kiran: 2, ozlem_dulger: 2, didem_dundar: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, hatice_ozmen: 3, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 3, ruhi_sarikaya: 3, omer_kayhan: 2, sinan_aydin: 3, inci_sener: 2, aysen_eraydin: 3, hatice_bayram: 3 } },
        { text: "İçgüdülerime ve deneyimime", scores: { ali_karadag: 3, burcu_harem: 4, muharrem_sahin: 3, seref_turgut: 3, halil_calis: 2, hatice_selimoglu: 2, tubanur_birkan: 4, aylin_sarioglu: 3, ihsan_bapli: 3, busra_turan: 2, guluzar_kaya: 3, serra_oguzhan: 2, iler_kiran: 3, ozlem_dulger: 2, didem_dundar: 4, tahsin_kaygisiz: 2, tanju_karaarslan: 3, burak_yesil: 2, hatice_ozmen: 2, fahri_celik: 2, mehmet_hamarat: 3, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 3, ramazan_sarioglu: 2, omer_kayhan: 3, sinan_aydin: 3, inci_sener: 2, aysen_eraydin: 3, nursel_yildirim: 2, hatice_bayram: 2, osman_kilic: 2 } },
        { text: "Başkalarının görüşlerine", scores: { ozlem_dulger: 3, hatice_ozmen: 4, aysen_eraydin: 3, ali_karadag: 2, seref_turgut: 2, burcu_harem: 3, halil_calis: 3, hatice_selimoglu: 3, tubanur_birkan: 3, aylin_sarioglu: 2, muharrem_sahin: 3, ihsan_bapli: 2, busra_turan: 2, guluzar_kaya: 3, serra_oguzhan: 3, iler_kiran: 3, didem_dundar: 3, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, fahri_celik: 2, mehmet_hamarat: 3, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, ramazan_sarioglu: 2, omer_kayhan: 2, sinan_aydin: 3, inci_sener: 2, nursel_yildirim: 3, hatice_bayram: 3, osman_kilic: 3 } }
    ]
},
{
    question: "Stresli anlarında ne yaparsın?",
    options: [
        { text: "Dua eder, namaz kılarım", scores: { halil_calis: 4, osman_kilic: 4, ramazan_sarioglu: 3, ali_karadag: 1, seref_turgut: 1, burcu_harem: 1, hatice_selimoglu: 2, tubanur_birkan: 2, aylin_sarioglu: 2, muharrem_sahin: 2, ihsan_bapli: 2, busra_turan: 3, guluzar_kaya: 2, serra_oguzhan: 2, iler_kiran: 1, ozlem_dulger: 2, didem_dundar: 1, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, hatice_ozmen: 3, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 3, ruhi_sarikaya: 2, omer_kayhan: 2, sinan_aydin: 2, inci_sener: 2, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 3 } },
        { text: "Sessizce düşünür, plan yaparım", scores: { ozlem_dulger: 4, burak_yesil: 4, tahsin_kaygisiz: 4, hatice_ozmen: 3, ali_karadag: 2, seref_turgut: 2, burcu_harem: 3, halil_calis: 2, hatice_selimoglu: 3, tubanur_birkan: 3, aylin_sarioglu: 3, muharrem_sahin: 2, ihsan_bapli: 4, busra_turan: 4, guluzar_kaya: 3, serra_oguzhan: 3, iler_kiran: 2, didem_dundar: 2, tanju_karaarslan: 4, fahri_celik: 4, mehmet_hamarat: 3, yusuf_yildiz: 4, yavuz_inan: 4, ruhi_sarikaya: 3, ramazan_sarioglu: 3, omer_kayhan: 2, sinan_aydin: 3, inci_sener: 4, aysen_eraydin: 3, nursel_yildirim: 3, hatice_bayram: 4, osman_kilic: 3 } },
        { text: "Arkadaşlarla konuşur, eğlenirim", scores: { ali_karadag: 4, seref_turgut: 3, muharrem_sahin: 4, didem_dundar: 4, burcu_harem: 3, halil_calis: 2, hatice_selimoglu: 2, tubanur_birkan: 3, aylin_sarioglu: 3, ihsan_bapli: 2, busra_turan: 1, guluzar_kaya: 3, serra_oguzhan: 2, iler_kiran: 4, ozlem_dulger: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 1, hatice_ozmen: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, ramazan_sarioglu: 1, omer_kayhan: 3, sinan_aydin: 3, inci_sener: 2, aysen_eraydin: 3, nursel_yildirim: 2, hatice_bayram: 2, osman_kilic: 2 } },
        { text: "Sinirlenip sert tepki veririm", scores: { ramazan_sarioglu: 3, busra_turan: 2, ali_karadag: 1, seref_turgut: 2, burcu_harem: 2, halil_calis: 1, hatice_selimoglu: 2, tubanur_birkan: 2, aylin_sarioglu: 2, muharrem_sahin: 2, ihsan_bapli: 2, guluzar_kaya: 2, serra_oguzhan: 2, iler_kiran: 2, ozlem_dulger: 1, didem_dundar: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, hatice_ozmen: 1, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, omer_kayhan: 2, sinan_aydin: 2, inci_sener: 2, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 2, osman_kilic: 2 } }
    ]
},
    {
    question: "Eğer öğretmen olsaydın derste uyuyan öğrenciye karşı tavrın nasıl olurdu?",
    options: [
        { text: "Çok kızarım, disiplin cezası veririm", scores: { inci_sener: 4, burak_yesil: 4, ramazan_sarioglu: 4, busra_turan: 4, ali_karadag: 1, seref_turgut: 2, burcu_harem: 2, halil_calis: 2, hatice_selimoglu: 3, tubanur_birkan: 2, aylin_sarioglu: 2, muharrem_sahin: 1, ihsan_bapli: 3, guluzar_kaya: 2, serra_oguzhan: 3, iler_kiran: 2, ozlem_dulger: 3, didem_dundar: 1, tahsin_kaygisiz: 3, tanju_karaarslan: 3, hatice_ozmen: 2, fahri_celik: 3, mehmet_hamarat: 2, yusuf_yildiz: 3, yavuz_inan: 3, ruhi_sarikaya: 3, omer_kayhan: 2, sinan_aydin: 3, aysen_eraydin: 2, nursel_yildirim: 3, hatice_bayram: 3, osman_kilic: 3 } },
        { text: "Saygısızlık olarak görür, uyarırım", scores: { osman_kilic: 3, nursel_yildirim: 3, hatice_bayram: 3, yavuz_inan: 3, ali_karadag: 2, seref_turgut: 2, burcu_harem: 2, halil_calis: 3, hatice_selimoglu: 3, tubanur_birkan: 2, aylin_sarioglu: 3, muharrem_sahin: 2, ihsan_bapli: 3, busra_turan: 3, guluzar_kaya: 2, serra_oguzhan: 3, iler_kiran: 2, ozlem_dulger: 3, didem_dundar: 2, tahsin_kaygisiz: 3, tanju_karaarslan: 3, burak_yesil: 3, hatice_ozmen: 3, fahri_celik: 3, mehmet_hamarat: 3, yusuf_yildiz: 3, ruhi_sarikaya: 3, ramazan_sarioglu: 3, omer_kayhan: 3, sinan_aydin: 3, inci_sener: 3, aysen_eraydin: 3 } },
        { text: "Anlayışla yaklaşır, yumuşak uyarırım", scores: { halil_calis: 3, ozlem_dulger: 4, hatice_ozmen: 4, didem_dundar: 4, ali_karadag: 3, seref_turgut: 3, burcu_harem: 3, hatice_selimoglu: 3, tubanur_birkan: 3, aylin_sarioglu: 3, muharrem_sahin: 3, ihsan_bapli: 2, busra_turan: 2, guluzar_kaya: 3, serra_oguzhan: 3, iler_kiran: 3, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, fahri_celik: 3, mehmet_hamarat: 3, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, ramazan_sarioglu: 2, omer_kayhan: 3, sinan_aydin: 3, inci_sener: 2, aysen_eraydin: 4, nursel_yildirim: 3, hatice_bayram: 2, osman_kilic: 3 } },
        { text: "Esprili bir şekilde uyandırırım", scores: { ali_karadag: 4, seref_turgut: 3, muharrem_sahin: 4, burcu_harem: 3, halil_calis: 2, hatice_selimoglu: 2, tubanur_birkan: 3, aylin_sarioglu: 2, ihsan_bapli: 2, busra_turan: 1, guluzar_kaya: 3, serra_oguzhan: 2, iler_kiran: 3, ozlem_dulger: 2, didem_dundar: 3, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 1, hatice_ozmen: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, ramazan_sarioglu: 1, omer_kayhan: 2, sinan_aydin: 2, inci_sener: 1, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 2, osman_kilic: 1 } }
    ]
},
{
    question: "Hangi ifade daha çok ilgini çekti?",
    options: [
        { text: "Bakınız", scores: { hatice_selimoglu: 4, iler_kiran: 3, ozlem_dulger: 3, ali_karadag: 2, seref_turgut: 2, burcu_harem: 3, halil_calis: 1, tubanur_birkan: 2, aylin_sarioglu: 3, muharrem_sahin: 2, ihsan_bapli: 3, busra_turan: 2, guluzar_kaya: 3, serra_oguzhan: 3, didem_dundar: 2, tahsin_kaygisiz: 3, tanju_karaarslan: 3, burak_yesil: 3, hatice_ozmen: 2, fahri_celik: 3, mehmet_hamarat: 2, yusuf_yildiz: 3, yavuz_inan: 3, ruhi_sarikaya: 2, ramazan_sarioglu: 1, omer_kayhan: 2, sinan_aydin: 2, inci_sener: 3, aysen_eraydin: 2, nursel_yildirim: 3, hatice_bayram: 3, osman_kilic: 1 } },
        { text: "Bundan sebep", scores: { tahsin_kaygisiz: 3, tanju_karaarslan: 3, burak_yesil: 3, nursel_yildirim: 3, ali_karadag: 3, seref_turgut: 3, burcu_harem: 3, halil_calis: 3, hatice_selimoglu: 3, tubanur_birkan: 3, aylin_sarioglu: 3, muharrem_sahin: 3, ihsan_bapli: 3, busra_turan: 3, guluzar_kaya: 3, serra_oguzhan: 3, iler_kiran: 3, ozlem_dulger: 3, didem_dundar: 3, hatice_ozmen: 3, fahri_celik: 3, mehmet_hamarat: 3, yusuf_yildiz: 3, yavuz_inan: 3, ruhi_sarikaya: 3, ramazan_sarioglu: 3, omer_kayhan: 3, sinan_aydin: 3, inci_sener: 3, aysen_eraydin: 3, hatice_bayram: 3, osman_kilic: 2 } },
        { text: "Oturun bakalım", scores: { halil_calis: 3, hatice_ozmen: 3, omer_kayhan: 3, sinan_aydin: 3, ali_karadag: 3, seref_turgut: 3, burcu_harem: 2, hatice_selimoglu: 2, tubanur_birkan: 3, aylin_sarioglu: 2, muharrem_sahin: 3, ihsan_bapli: 2, busra_turan: 3, guluzar_kaya: 2, serra_oguzhan: 2, iler_kiran: 2, ozlem_dulger: 2, didem_dundar: 3, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, fahri_celik: 2, mehmet_hamarat: 3, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 3, ramazan_sarioglu: 3, inci_sener: 2, aysen_eraydin: 3, nursel_yildirim: 2, hatice_bayram: 2, osman_kilic: 3 } },
        { text: "Gençler...", scores: { osman_kilic: 4, ramazan_sarioglu: 3, ruhi_sarikaya: 3, ali_karadag: 2, seref_turgut: 2, burcu_harem: 2, halil_calis: 3, hatice_selimoglu: 1, tubanur_birkan: 2, aylin_sarioglu: 2, muharrem_sahin: 2, ihsan_bapli: 2, busra_turan: 2, guluzar_kaya: 2, serra_oguzhan: 2, iler_kiran: 2, ozlem_dulger: 2, didem_dundar: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, hatice_ozmen: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 2, omer_kayhan: 2, sinan_aydin: 2, inci_sener: 2, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 2 } }
    ]
},
{
    question: "Favori alanın hangisi?",
    options: [
        { text: "Doğasal ve evrensel alanlar", scores: { inci_sener: 4, burak_yesil: 4, ramazan_sarioglu: 4, busra_turan: 4, ali_karadag: 2, seref_turgut: 2, burcu_harem: 2, halil_calis: 3, hatice_selimoglu: 3, tubanur_birkan: 2, aylin_sarioglu: 3, muharrem_sahin: 2, ihsan_bapli: 3, guluzar_kaya: 3, serra_oguzhan: 3, iler_kiran: 2, ozlem_dulger: 3, didem_dundar: 2, tahsin_kaygisiz: 3, tanju_karaarslan: 3, hatice_ozmen: 3, fahri_celik: 3, mehmet_hamarat: 3, yusuf_yildiz: 3, yavuz_inan: 4, ruhi_sarikaya: 3, omer_kayhan: 3, sinan_aydin: 3, aysen_eraydin: 2, nursel_yildirim: 3, hatice_bayram: 3, osman_kilic: 3 } },
        { text: "Dil dersleri", scores: { halil_calis: 4, osman_kilic: 4, ramazan_sarioglu: 3, ali_karadag: 2, seref_turgut: 2, burcu_harem: 2, hatice_selimoglu: 2, tubanur_birkan: 3, aylin_sarioglu: 2, muharrem_sahin: 3, ihsan_bapli: 2, busra_turan: 3, guluzar_kaya: 2, serra_oguzhan: 2, iler_kiran: 2, ozlem_dulger: 2, didem_dundar: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, hatice_ozmen: 3, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 3, ruhi_sarikaya: 3, omer_kayhan: 2, sinan_aydin: 3, inci_sener: 2, aysen_eraydin: 3, nursel_yildirim: 3, hatice_bayram: 3 } },
        { text: "Fen alanı", scores: { ali_karadag: 4, seref_turgut: 4, muharrem_sahin: 4, didem_dundar: 4, burcu_harem: 4, halil_calis: 1, hatice_selimoglu: 2, tubanur_birkan: 3, aylin_sarioglu: 3, ihsan_bapli: 2, busra_turan: 1, guluzar_kaya: 3, serra_oguzhan: 2, iler_kiran: 4, ozlem_dulger: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 1, hatice_ozmen: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, yavuz_inan: 1, ruhi_sarikaya: 2, ramazan_sarioglu: 1, omer_kayhan: 3, sinan_aydin: 3, inci_sener: 1, aysen_eraydin: 3, nursel_yildirim: 2, hatice_bayram: 2, osman_kilic: 1 } },
        { text: "Matematiksel işler", scores: { tahsin_kaygisiz: 4, tanju_karaarslan: 4, ihsan_bapli: 4, aylin_sarioglu: 4, ali_karadag: 2, seref_turgut: 2, burcu_harem: 3, halil_calis: 2, hatice_selimoglu: 4, tubanur_birkan: 4, muharrem_sahin: 2, busra_turan: 3, guluzar_kaya: 3, serra_oguzhan: 3, iler_kiran: 3, ozlem_dulger: 4, didem_dundar: 2, burak_yesil: 3, hatice_ozmen: 3, fahri_celik: 4, mehmet_hamarat: 3, yusuf_yildiz: 4, yavuz_inan: 3, ruhi_sarikaya: 3, ramazan_sarioglu: 3, omer_kayhan: 3, sinan_aydin: 3, inci_sener: 3, aysen_eraydin: 3, nursel_yildirim: 3, hatice_bayram: 4, osman_kilic: 2 } }
    ]
},
{
    question: "Öğretmen olsaydın diğer öğrencilerle ilişkin nasıl olurdu?",
    options: [
        { text: "Çok sıkı, mesafeli ve kuralcı", scores: { inci_sener: 4, burak_yesil: 4, ramazan_sarioglu: 4, busra_turan: 4, yavuz_inan: 3, tahsin_kaygisiz: 2, tanju_karaarslan: 2, fahri_celik: 2, serra_oguzhan: 3, nursel_yildirim: 2, hatice_bayram: 2, ozlem_dulger: 2, hatice_ozmen: 2, ihsan_bapli: 2, aylin_sarioglu: 2, guluzar_kaya: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, ruhi_sarikaya: 2, ali_karadag: 1, seref_turgut: 1, muharrem_sahin: 1, didem_dundar: 1, halil_calis: 1, osman_kilic: 1, burcu_harem: 1, tubanur_birkan: 1, hatice_selimoglu: 2, iler_kiran: 2, omer_kayhan: 2, sinan_aydin: 2, aysen_eraydin: 2 } },
        { text: "Dengeli", scores: { ozlem_dulger: 4, hatice_ozmen: 4, nursel_yildirim: 4, osman_kilic: 3, hatice_bayram: 3, serra_oguzhan: 3, guluzar_kaya: 3, mehmet_hamarat: 3, tahsin_kaygisiz: 3, tanju_karaarslan: 3, fahri_celik: 3, yusuf_yildiz: 3, ihsan_bapli: 3, aylin_sarioglu: 3, ruhi_sarikaya: 3, halil_calis: 3, ali_karadag: 2, seref_turgut: 2, muharrem_sahin: 2, didem_dundar: 2, inci_sener: 2, burak_yesil: 2, ramazan_sarioglu: 2, busra_turan: 2, yavuz_inan: 2, burcu_harem: 3, tubanur_birkan: 3, hatice_selimoglu: 3, iler_kiran: 3, omer_kayhan: 3, sinan_aydin: 3, aysen_eraydin: 3 } },
        { text: "Arkadaş gibi, samimi", scores: { ali_karadag: 4, seref_turgut: 4, muharrem_sahin: 4, didem_dundar: 4, iler_kiran: 3, omer_kayhan: 3, burcu_harem: 3, tubanur_birkan: 3, aysen_eraydin: 3, guluzar_kaya: 3, sinan_aydin: 3, hatice_selimoglu: 2, aylin_sarioglu: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, ozlem_dulger: 2, hatice_ozmen: 2, nursel_yildirim: 2, hatice_bayram: 2, serra_oguzhan: 2, halil_calis: 2, osman_kilic: 2, inci_sener: 1, burak_yesil: 1, ramazan_sarioglu: 1, busra_turan: 1, yavuz_inan: 1, ihsan_bapli: 2, ruhi_sarikaya: 2, fahri_celik: 2 } },
        { text: "Manevi danışman gibi", scores: { halil_calis: 4, osman_kilic: 4, ramazan_sarioglu: 3, aysen_eraydin: 3, sinan_aydin: 3, ruhi_sarikaya: 3, nursel_yildirim: 2, hatice_bayram: 2, guluzar_kaya: 2, serra_oguzhan: 2, ozlem_dulger: 2, hatice_ozmen: 2, mehmet_hamarat: 2, fahri_celik: 2, yusuf_yildiz: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, ihsan_bapli: 2, aylin_sarioglu: 2, busra_turan: 2, hatice_selimoglu: 2, tubanur_birkan: 2, burcu_harem: 2, omer_kayhan: 2, ali_karadag: 1, seref_turgut: 1, muharrem_sahin: 1, didem_dundar: 1, iler_kiran: 1, inci_sener: 1, burak_yesil: 1, yavuz_inan: 1 } }
    ]
},
{
    question: "Futbol ve bunun gibi sporlar ilgini çeker mi?",
    options: [
        { text: "Çok çeker, tutkuyla takip ederim", scores: { ali_karadag: 4, seref_turgut: 4, omer_kayhan: 4, muharrem_sahin: 3, didem_dundar: 3, tahsin_kaygisiz: 2, tanju_karaarslan: 2, iler_kiran: 2, aylin_sarioglu: 2, ihsan_bapli: 2, guluzar_kaya: 2, serra_oguzhan: 2, ozlem_dulger: 2, mehmet_hamarat: 2, fahri_celik: 2, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, ramazan_sarioglu: 2, sinan_aydin: 2, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 2, hatice_selimoglu: 2, hatice_ozmen: 2, burak_yesil: 2, busra_turan: 1, inci_sener: 1, halil_calis: 1, osman_kilic: 1, burcu_harem: 1, tubanur_birkan: 1 } },
        { text: "Biraz ilgim var, bazen izlerim", scores: { tahsin_kaygisiz: 3, muharrem_sahin: 3, didem_dundar: 2, ali_karadag: 2, seref_turgut: 2, omer_kayhan: 2, tanju_karaarslan: 2, iler_kiran: 2, aylin_sarioglu: 2, ihsan_bapli: 2, guluzar_kaya: 2, serra_oguzhan: 2, ozlem_dulger: 2, mehmet_hamarat: 2, fahri_celik: 2, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, ramazan_sarioglu: 2, sinan_aydin: 2, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 2, hatice_selimoglu: 2, hatice_ozmen: 2, burak_yesil: 2, busra_turan: 2, inci_sener: 2, halil_calis: 2, osman_kilic: 2, burcu_harem: 2, tubanur_birkan: 2 } },
        { text: "Çok az ilgilenirim", scores: { burak_yesil: 3, inci_sener: 3, busra_turan: 3, hatice_ozmen: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, iler_kiran: 2, aylin_sarioglu: 2, ihsan_bapli: 2, guluzar_kaya: 2, serra_oguzhan: 2, ozlem_dulger: 2, mehmet_hamarat: 2, fahri_celik: 2, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, ramazan_sarioglu: 2, sinan_aydin: 2, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 2, hatice_selimoglu: 2, halil_calis: 2, osman_kilic: 2, burcu_harem: 2, tubanur_birkan: 2, ali_karadag: 1, seref_turgut: 1, omer_kayhan: 1, muharrem_sahin: 1, didem_dundar: 1 } },
        { text: "Hiç ilgilenmem", scores: { halil_calis: 3, osman_kilic: 4, burcu_harem: 4, tubanur_birkan: 4, busra_turan: 2, inci_sener: 2, burak_yesil: 2, hatice_ozmen: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, iler_kiran: 2, aylin_sarioglu: 2, ihsan_bapli: 2, guluzar_kaya: 2, serra_oguzhan: 2, ozlem_dulger: 2, mehmet_hamarat: 2, fahri_celik: 2, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, ramazan_sarioglu: 2, sinan_aydin: 2, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 2, hatice_selimoglu: 2, ali_karadag: 1, seref_turgut: 1, omer_kayhan: 1, muharrem_sahin: 1, didem_dundar: 1 } }
    ]
},
{
    question: "Kendini disiplinli biri olarak tanımlayabilir misin?",
    options: [
        { text: "Evet, aşırı disiplinliyim", scores: { inci_sener: 4, burak_yesil: 4, ramazan_sarioglu: 4, busra_turan: 4, yavuz_inan: 4, nursel_yildirim: 3, hatice_bayram: 3, ozlem_dulger: 3, serra_oguzhan: 3, guluzar_kaya: 3, tahsin_kaygisiz: 3, tanju_karaarslan: 3, fahri_celik: 3, yusuf_yildiz: 3, ihsan_bapli: 3, aylin_sarioglu: 3, hatice_selimoglu: 3, osman_kilic: 2, halil_calis: 2, hatice_ozmen: 2, omer_kayhan: 2, mehmet_hamarat: 2, ruhi_sarikaya: 2, sinan_aydin: 2, aysen_eraydin: 2, iler_kiran: 2, burcu_harem: 2, tubanur_birkan: 2, ali_karadag: 1, seref_turgut: 1, muharrem_sahin: 1, didem_dundar: 1 } },
        { text: "Evet, oldukça disiplinliyim", scores: { osman_kilic: 3, nursel_yildirim: 4, hatice_bayram: 4, ozlem_dulger: 3, serra_oguzhan: 3, guluzar_kaya: 3, tahsin_kaygisiz: 3, tanju_karaarslan: 3, fahri_celik: 3, yusuf_yildiz: 3, ihsan_bapli: 3, aylin_sarioglu: 3, hatice_selimoglu: 3, inci_sener: 3, burak_yesil: 3, ramazan_sarioglu: 3, busra_turan: 3, yavuz_inan: 3, halil_calis: 2, hatice_ozmen: 2, omer_kayhan: 2, mehmet_hamarat: 2, ruhi_sarikaya: 2, sinan_aydin: 2, aysen_eraydin: 2, iler_kiran: 2, burcu_harem: 2, tubanur_birkan: 2, ali_karadag: 2, seref_turgut: 2, muharrem_sahin: 2, didem_dundar: 2 } },
        { text: "Orta seviyede", scores: { halil_calis: 3, hatice_ozmen: 3, omer_kayhan: 3, tahsin_kaygisiz: 3, tanju_karaarslan: 2, mehmet_hamarat: 2, fahri_celik: 2, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, sinan_aydin: 2, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 2, ozlem_dulger: 2, serra_oguzhan: 2, guluzar_kaya: 2, ihsan_bapli: 2, aylin_sarioglu: 2, hatice_selimoglu: 2, iler_kiran: 2, burcu_harem: 2, tubanur_birkan: 2, osman_kilic: 2, inci_sener: 2, burak_yesil: 2, ramazan_sarioglu: 2, busra_turan: 2, ali_karadag: 2, seref_turgut: 2, muharrem_sahin: 2, didem_dundar: 2 } },
        { text: "Hayır, rahat biriyim", scores: { ali_karadag: 3, seref_turgut: 3, muharrem_sahin: 3, didem_dundar: 3, burcu_harem: 3, tubanur_birkan: 3, iler_kiran: 3, omer_kayhan: 2, halil_calis: 2, hatice_ozmen: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, mehmet_hamarat: 2, fahri_celik: 2, yusuf_yildiz: 2, yavuz_inan: 2, ruhi_sarikaya: 2, sinan_aydin: 2, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 2, ozlem_dulger: 2, serra_oguzhan: 2, guluzar_kaya: 2, ihsan_bapli: 2, aylin_sarioglu: 2, hatice_selimoglu: 2, osman_kilic: 1, inci_sener: 1, burak_yesil: 1, ramazan_sarioglu: 1, busra_turan: 1 } }
    ]
},
   {
    question: "Sinirli biri misin?",
    options: [
        { text: "Evet, çabuk sinirlenirim", scores: { ramazan_sarioglu: 4, busra_turan: 3, inci_sener: 2, burak_yesil: 2, yavuz_inan: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, ruhi_sarikaya: 2, omer_kayhan: 2, sinan_aydin: 2, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 2, ozlem_dulger: 2, serra_oguzhan: 2, guluzar_kaya: 2, ihsan_bapli: 2, aylin_sarioglu: 2, hatice_selimoglu: 2, iler_kiran: 2, burcu_harem: 2, tubanur_birkan: 2, hatice_ozmen: 2, halil_calis: 2, osman_kilic: 2, ali_karadag: 1, seref_turgut: 1, muharrem_sahin: 1, didem_dundar: 1 } },
        { text: "Bazen sinirlenirim", scores: { inci_sener: 3, burak_yesil: 3, yavuz_inan: 3, ramazan_sarioglu: 2, busra_turan: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, ruhi_sarikaya: 2, omer_kayhan: 2, sinan_aydin: 2, aysen_eraydin: 2, nursel_yildirim: 2, hatice_bayram: 2, ozlem_dulger: 2, serra_oguzhan: 2, guluzar_kaya: 2, ihsan_bapli: 2, aylin_sarioglu: 2, hatice_selimoglu: 2, iler_kiran: 2, burcu_harem: 2, tubanur_birkan: 2, hatice_ozmen: 2, halil_calis: 2, osman_kilic: 2, ali_karadag: 2, seref_turgut: 2, muharrem_sahin: 2, didem_dundar: 2 } },
        { text: "Nadiren sinirlenirim", scores: { ozlem_dulger: 4, hatice_ozmen: 4, halil_calis: 3, nursel_yildirim: 3, osman_kilic: 3, ali_karadag: 2, seref_turgut: 2, muharrem_sahin: 2, didem_dundar: 2, inci_sener: 2, burak_yesil: 2, yavuz_inan: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, ruhi_sarikaya: 2, omer_kayhan: 2, sinan_aydin: 2, aysen_eraydin: 2, hatice_bayram: 2, serra_oguzhan: 2, guluzar_kaya: 2, ihsan_bapli: 2, aylin_sarioglu: 2, hatice_selimoglu: 2, iler_kiran: 2, burcu_harem: 2, tubanur_birkan: 2, ramazan_sarioglu: 1, busra_turan: 1 } },
        { text: "Çok sabırlıyım, sakinim", scores: { halil_calis: 4, osman_kilic: 4, ali_karadag: 3, muharrem_sahin: 3, ozlem_dulger: 3, hatice_ozmen: 3, nursel_yildirim: 2, hatice_bayram: 2, didem_dundar: 2, seref_turgut: 2, inci_sener: 2, burak_yesil: 2, yavuz_inan: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, ruhi_sarikaya: 2, omer_kayhan: 2, sinan_aydin: 2, aysen_eraydin: 2, serra_oguzhan: 2, guluzar_kaya: 2, ihsan_bapli: 2, aylin_sarioglu: 2, hatice_selimoglu: 2, iler_kiran: 2, burcu_harem: 2, tubanur_birkan: 2, ramazan_sarioglu: 1, busra_turan: 1 } }
    ]
},
{
    question: "Teknoloji kullanımın nasıl?",
    options: [
        { text: "İleri seviyedir her şeyi bilirim", scores: { hatice_selimoglu: 4, iler_kiran: 3, ozlem_dulger: 3, burak_yesil: 3, tahsin_kaygisiz: 3, tanju_karaarslan: 3, aylin_sarioglu: 3, ihsan_bapli: 3, guluzar_kaya: 3, serra_oguzhan: 3, fahri_celik: 3, yusuf_yildiz: 3, yavuz_inan: 3, inci_sener: 3, nursel_yildirim: 3, hatice_bayram: 3, ali_karadag: 2, seref_turgut: 2, burcu_harem: 2, muharrem_sahin: 2, didem_dundar: 2, hatice_ozmen: 2, mehmet_hamarat: 2, omer_kayhan: 2, sinan_aydin: 2, aysen_eraydin: 2, ruhi_sarikaya: 2, tubanur_birkan: 2, busra_turan: 2, halil_calis: 1, osman_kilic: 1, ramazan_sarioglu: 1 } },
        { text: "İyi seviyededir gerekli şeyleri kullanırım", scores: { tahsin_kaygisiz: 3, tanju_karaarslan: 3, burak_yesil: 3, nursel_yildirim: 3, hatice_selimoglu: 3, iler_kiran: 3, ozlem_dulger: 3, aylin_sarioglu: 3, ihsan_bapli: 3, guluzar_kaya: 3, serra_oguzhan: 3, fahri_celik: 3, yusuf_yildiz: 3, yavuz_inan: 3, inci_sener: 3, hatice_bayram: 3, ali_karadag: 3, seref_turgut: 3, burcu_harem: 3, muharrem_sahin: 3, didem_dundar: 3, hatice_ozmen: 3, mehmet_hamarat: 3, omer_kayhan: 3, sinan_aydin: 3, aysen_eraydin: 3, ruhi_sarikaya: 3, tubanur_birkan: 3, busra_turan: 3, halil_calis: 3, osman_kilic: 2, ramazan_sarioglu: 2 } },
        { text: "Orta seviyedir temel şeyleri bilirim", scores: { halil_calis: 3, hatice_ozmen: 3, omer_kayhan: 3, sinan_aydin: 3, ali_karadag: 3, seref_turgut: 3, muharrem_sahin: 3, didem_dundar: 3, mehmet_hamarat: 3, ruhi_sarikaya: 3, ramazan_sarioglu: 3, aysen_eraydin: 3, tubanur_birkan: 3, burcu_harem: 2, hatice_selimoglu: 2, iler_kiran: 2, ozlem_dulger: 2, aylin_sarioglu: 2, ihsan_bapli: 2, busra_turan: 3, guluzar_kaya: 2, serra_oguzhan: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, fahri_celik: 2, yusuf_yildiz: 2, yavuz_inan: 2, inci_sener: 2, nursel_yildirim: 2, hatice_bayram: 2, osman_kilic: 3 } },
        { text: "Zayıfdır teknolojiye uzağım", scores: { osman_kilic: 4, ramazan_sarioglu: 3, ruhi_sarikaya: 3, halil_calis: 3, hatice_ozmen: 2, omer_kayhan: 2, sinan_aydin: 2, ali_karadag: 2, seref_turgut: 2, burcu_harem: 2, muharrem_sahin: 2, didem_dundar: 2, mehmet_hamarat: 2, aysen_eraydin: 2, tubanur_birkan: 2, hatice_selimoglu: 1, iler_kiran: 2, ozlem_dulger: 2, aylin_sarioglu: 2, ihsan_bapli: 2, busra_turan: 2, guluzar_kaya: 2, serra_oguzhan: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, fahri_celik: 2, yusuf_yildiz: 2, yavuz_inan: 2, inci_sener: 2, nursel_yildirim: 2, hatice_bayram: 2 } }
    ]
},
{
    question: "Öğretmen olsanız çok ödev verir misiniz?",
    options: [
        { text: "Aşırı bir şekilde", scores: { inci_sener: 4, burak_yesil: 4, ramazan_sarioglu: 4, busra_turan: 4, yavuz_inan: 4, nursel_yildirim: 3, hatice_bayram: 3, ozlem_dulger: 3, serra_oguzhan: 3, guluzar_kaya: 3, tahsin_kaygisiz: 3, tanju_karaarslan: 3, fahri_celik: 3, yusuf_yildiz: 3, ihsan_bapli: 3, aylin_sarioglu: 3, hatice_selimoglu: 3, ruhi_sarikaya: 3, omer_kayhan: 3, sinan_aydin: 3, osman_kilic: 3, halil_calis: 3, hatice_ozmen: 3, mehmet_hamarat: 3, aysen_eraydin: 2, burcu_harem: 2, tubanur_birkan: 2, iler_kiran: 2, ali_karadag: 2, seref_turgut: 2, muharrem_sahin: 2, didem_dundar: 2 } },
        { text: "Evet", scores: { halil_calis: 4, osman_kilic: 4, ramazan_sarioglu: 3, tubanur_birkan: 3, muharrem_sahin: 3, ruhi_sarikaya: 3, sinan_aydin: 3, aysen_eraydin: 3, nursel_yildirim: 3, hatice_bayram: 3, hatice_ozmen: 3, yavuz_inan: 3, busra_turan: 3, guluzar_kaya: 2, serra_oguzhan: 2, iler_kiran: 2, ozlem_dulger: 2, didem_dundar: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, burak_yesil: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, omer_kayhan: 2, inci_sener: 2, aylin_sarioglu: 2, ihsan_bapli: 2, hatice_selimoglu: 2, burcu_harem: 2, ali_karadag: 2, seref_turgut: 2 } },
        { text: "Yani gerekli olduğunda", scores: { ali_karadag: 4, seref_turgut: 4, muharrem_sahin: 4, didem_dundar: 4, burcu_harem: 4, iler_kiran: 4, tubanur_birkan: 3, aylin_sarioglu: 3, guluzar_kaya: 3, omer_kayhan: 3, sinan_aydin: 3, aysen_eraydin: 3, hatice_selimoglu: 2, ihsan_bapli: 2, serra_oguzhan: 2, ozlem_dulger: 2, tahsin_kaygisiz: 2, tanju_karaarslan: 2, hatice_ozmen: 2, fahri_celik: 2, mehmet_hamarat: 2, yusuf_yildiz: 2, ruhi_sarikaya: 2, nursel_yildirim: 2, hatice_bayram: 2, osman_kilic: 1, halil_calis: 1, busra_turan: 1, burak_yesil: 1, inci_sener: 1, yavuz_inan: 1, ramazan_sarioglu: 1 } },
        { text: "Ödevler öğrencileri yoran bir beladır", scores: { tahsin_kaygisiz: 4, tanju_karaarslan: 4, ihsan_bapli: 4, aylin_sarioglu: 4, hatice_selimoglu: 4, tubanur_birkan: 4, ozlem_dulger: 4, fahri_celik: 4, yusuf_yildiz: 4, hatice_bayram: 4, nursel_yildirim: 3, burak_yesil: 3, busra_turan: 3, guluzar_kaya: 3, serra_oguzhan: 3, iler_kiran: 3, hatice_ozmen: 3, mehmet_hamarat: 3, yavuz_inan: 3, ruhi_sarikaya: 3, ramazan_sarioglu: 3, omer_kayhan: 3, sinan_aydin: 3, inci_sener: 3, aysen_eraydin: 3, burcu_harem: 3, osman_kilic: 2, halil_calis: 2, ali_karadag: 2, seref_turgut: 2, muharrem_sahin: 2, didem_dundar: 2 } }
    ]
}
];


let currentQuestionIndex = 0;
let userAnswers = [];
let scores = {};


function resetScores() {
    scores = {};
    Object.keys(personNames).forEach(person => {
        scores[person] = 0;
    });
}


function startQuiz() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    currentQuestionIndex = 0;
    userAnswers = [];
    resetScores();
    loadQuestion();
}


function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = questions.length;
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectOption(index);
        
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <div class="option-label">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option.text}</div>
        `;
        
        container.appendChild(optionDiv);
    });
    
    
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').textContent = 
        currentQuestionIndex === questions.length - 1 ? 'Bitir' : 'Sonraki →';
}


function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
  
    const options = document.querySelectorAll('.option');
    options.forEach((opt, i) => {
        if (i === index) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
}


function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('Lütfen bir seçenek seçin!');
        return;
    }
    
    
    const selectedOption = questions[currentQuestionIndex].options[userAnswers[currentQuestionIndex]];
    Object.keys(selectedOption.scores).forEach(person => {
        scores[person] += selectedOption.scores[person];
    });
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}


function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}


function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    
  
    const sortedScores = Object.entries(scores)
        .sort((a, b) => b[1] - a[1]);
    
    const winner = sortedScores[0];
    const second = sortedScores[1];
    
    document.getElementById('winningPerson').textContent = personNames[winner[0]];
    document.getElementById('winningScore').textContent = winner[1];
    document.getElementById('descriptionText').textContent = personDescriptions[winner[0]];
    document.getElementById('secondPerson').textContent = 
        personNames[second[0]] + ' (Puan: ' + second[1] + ')';
}

function restartQuiz() {
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
    currentQuestionIndex = 0;
    userAnswers = [];
    resetScores();
}