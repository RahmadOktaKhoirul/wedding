import { WeddingConfig } from "./types";

export const WEDDING_DATA: WeddingConfig = {
  bride: {
    nickname: "Renata",
    fullName: "Renata Putri Andriani, S.Pd",
    parents: "Putri Pertama dari Bapak Andriani & Ibu Andriani",
    father: "Bapak Andriani",
    mother: "Ibu Andriani",
    instagram: "https://instagram.com",
    photo: "/assets/woman.png",
  },
  groom: {
    nickname: "Rahmad",
    fullName: "Rahmad Okta Khoirul, S.Kom",
    parents: "Putra Terakhir dari Bapak Khoirul & Ibu Khoirul",
    father: "Bapak Khoirul",
    mother: "Ibu Khoirul",
    instagram: "https://instagram.com",
    photo: "/assets/men.png",
  },
  monogram: {
    brideInitial: "R",
    groomInitial: "R",
  },
  countdownDate: "2026-10-02T08:00:00",
  weddingDateFormatted: "02 . 10 . 2026",
  quote: {
    verse:
      "“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”",
    reference: "(QS. Ar-Rum : 21)",
  },
  events: {
    akad: {
      title: "AKAD NIKAH",
      day: "Jumat",
      dateNumber: "02",
      monthYear: "Oktober 2026",
      fullDate: "Jumat, 02 Oktober 2026",
      time: "Pukul : 08.00 WIB",
      locationName: "Kediaman Mempelai Wanita",
      address: "Jalan Giok 2, Driyorejo, Gresik, Jawa Timur",
      mapsUrl: "https://maps.google.com/?q=Jalan+Giok+2+Driyorejo+Gresik",
    },
    resepsi: {
      title: "RESEPSI",
      day: "Jumat",
      dateNumber: "02",
      monthYear: "Oktober 2026",
      fullDate: "Jumat, 02 Oktober 2026",
      time: "Pukul : 11.00 WIB - Selesai",
      locationName: "Kediaman Mempelai Wanita",
      address: "Jalan Giok 2, Driyorejo, Gresik, Jawa Timur",
      mapsUrl: "https://maps.google.com/?q=Jalan+Giok+2+Driyorejo+Gresik",
    },
    ngunduhMantu: {
      title: "NGUNDUH MANTU",
      day: "Minggu",
      dateNumber: "04",
      monthYear: "Oktober 2026",
      fullDate: "Minggu, 04 Oktober 2026",
      time: "Pukul : 10.00 WIB - Selesai",
      locationName: "Kediaman Mempelai Pria",
      address: "Gresik, Jawa Timur",
      mapsUrl: "https://maps.google.com/?q=Gresik+Jawa+Timur",
    },
  },
  loveStory: {
    title: "love story",
    quote: "Setiap Kisah Cinta Itu Indah,\nTapi Miliki Kamu Adalah Favoritku",
    mainPhoto: "/foto/IMG_0778.webp",
    stories: [
      {
        phase: "Perkenalan dan Pendekatan",
        story:
          "Awal perkenalan, kami bertemu tanpa disengaja pada tahun 2023. Dari obrolan ringan hingga diskusi mendalam, kami menemukan bahwa kami saling melengkapi dan membawa kami lebih dekat satu sama lain. Jarak bukan halangan, justru menjadi alasan untuk saling menjaga dan menghargai setiap temu.",
      },
      {
        phase: "Lamaran",
        story:
          "Setelah cukup mengenal satu sama lain dan menjalin hubungan penuh komitmen, pada tahun 2025 akhirnya kami memutuskan untuk melangkah ke jenjang yang lebih serius dengan mempertemukan kedua keluarga besar.",
      },
      {
        phase: "Menikah",
        story:
          "Dengan penuh rasa syukur dan doa restu keluarga, kami memilih untuk menyatukan langkah dalam ikatan suci pernikahan. Menjadi dua pribadi yang sepakat saling mengasihi dan mengarungi masa depan bersama selamanya.",
      },
    ],
  },
  gallery: {
    photos: [
      "/foto/IMG_0778.webp",
      "/foto/IMG_0802.webp",
      "/foto/IMG_0811.webp",
      "/foto/IMG_20251113_210855.webp",
      "/foto/IMG_20251115_190141.webp",
      "/foto/IMG_20251115_190448.webp",
      "/foto/IMG_20251115_191010.webp",
      "/foto/IMG_20251115_191042_2.webp",
      "/foto/IMG_20251115_191113.webp",
      "/foto/main.webp",
      "/assets/intro.webp",
      "/assets/woman.png",
      "/assets/men.png",
    ],
  },
  gift: {
    bankAccounts: [
      {
        bank: "BRI",
        account: "185901006217506",
        holder: "Renata Putri Andriani",
      },
      {
        bank: "BCA / Mandiri",
        account: "1550012163161",
        holder: "Rahmad Okta Khoirul",
      },
    ],
    physicalGift: {
      recipientName: "Renata Putri Andriani",
      phone: "083179906019",
      address: "Jalan Giok 2, Driyorejo, Gresik, Jawa Timur",
    },
  },
  closing: {
    quote:
      "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir dan memberikan doa restunya untuk pernikahan kami.\n\nAtas doa & restunya, kami ucapkan terima kasih.",
    photo: "/foto/IMG_0778.webp",
  },
  audio: {
    src: "https://hi.punakawandigital.net/wp-content/uploads/2025/08/Donkgedank-GANGSINGAN-Backsound-Nusantara.mp3",
    title: "Gangsingan - Backsound Nusantara",
  },
};
