export interface BankAccount {
  bank: string;
  account: string;
  holder: string;
  logo?: string;
}

export interface PhysicalGiftInfo {
  recipientName: string;
  phone: string;
  address: string;
}

export interface EventDetail {
  title: string;
  day: string;
  dateNumber: string;
  monthYear: string;
  fullDate: string; // e.g. "Jumat, 02 Oktober 2026"
  time: string;
  locationName: string;
  address: string;
  mapsUrl: string;
}

export interface LoveStoryPhase {
  phase: string;
  title?: string;
  story: string;
}

export interface WeddingConfig {
  bride: {
    nickname: string;
    fullName: string;
    parents: string;
    father: string;
    mother: string;
    instagram?: string;
    photo: string;
  };
  groom: {
    nickname: string;
    fullName: string;
    parents: string;
    father: string;
    mother: string;
    instagram?: string;
    photo: string;
  };
  monogram: {
    brideInitial: string;
    groomInitial: string;
  };
  countdownDate: string; // ISO string e.g. "2026-10-02T08:00:00"
  weddingDateFormatted: string; // "02 . 10 . 2026"
  quote: {
    verse: string;
    reference: string;
  };
  events: {
    akad: EventDetail;
    resepsi: EventDetail;
    ngunduhMantu?: EventDetail;
  };
  loveStory: {
    title: string;
    quote: string;
    mainPhoto: string;
    stories: LoveStoryPhase[];
  };
  gallery: {
    photos: string[];
  };
  gift: {
    bankAccounts: BankAccount[];
    physicalGift: PhysicalGiftInfo;
  };
  closing: {
    quote: string;
    photo: string;
  };
  audio: {
    src: string;
    title: string;
  };
}

export interface RSVPComment {
  id?: string;
  name: string;
  message: string;
  status: "Hadir" | "Tidak hadir" | "Masih ragu";
  guestCount?: number;
  domicile?: string;
  createdAt?: any;
}
