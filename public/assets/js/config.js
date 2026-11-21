/**
 * CLIENT CONFIGURATION
 * --------------------
 * Change client-specific content here. Keep quotation marks and commas intact.
 * File paths are relative so this template works at the site root or any folder.
 */

window.INVITATION_CONFIG = {
site: {
  title: "Zainab & Sadiq — Nikah Invitation",
  description:
    "You are warmly invited to celebrate the Nikah of Zainab Fathima and Sadiq Rahman.",
},

couple: {
  brideInitial: "Z",
  groomInitial: "S",

  bride: {
    name: "Zainab Fathima",
    relation: "Daughter of",
    parents: "Mohammed Ismail & Rahmath Nisha",
  },

  groom: {
    name: "Sadiq Rahman",
    relation: "Son of",
    parents: "Abdul Rahman & Ayesha Siddiqa",
  },
},

  copy: {
      bismillah: "",
    bismillahTranslation:
      "",
    welcomeLine: "We request the honour of your\npresence at the wedding of",
    invitation:
      "",
    heroClosing:
      "as they begin their forever in\nfaith and love.",
    welcomeTitle: "With Love & Blessings",
    welcomeBody:
      "With grateful hearts, we invite you to join our families as we celebrate a beautiful new beginning, surrounded by love, laughter, and the warmth of those dearest to us.",
    gifts:
      "Your presence and blessings are all we ask for.",
    closing: "We look forward to celebrating with you..",
    dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation:
      "May Allah bless you both, shower His blessings upon you, and join you together in goodness.",
  },

  wedding: {
    // Use a valid ISO date with the local UTC offset for an accurate countdown.
    isoDate: "2027-10-17T19:00:00+05:30",
    date: "17 October 2027",
    day: "Sunday",
    time: "07:00 PM",
    timezone: "IST",
  },

  media: {
    // Replace these two files inside the /media folder.
    introVideo: "./media/intro-final.mp4",
    introPoster:
      "./media/intro-placeholder.webp",
    music: "./media/music-placeholder.mp3",

    // Replace gallery URLs with your own hosted files or image URLs.
    gallery: [
      {
        src: "./media/gallery/01.webp",
        alt: "A softly lit wedding detail",
        caption: "",
      },
      {
        src: "./media/gallery/02.webp",
        alt: "A joyful wedding celebration",
        caption: "",
      },
      {
        src: "./media/gallery/03.webp",
        alt: "Elegant wedding florals and table setting",
        caption: "",
      },
    ],
  },

  program: [
    {
      time: "6:30 PM",
      title: "Guest Arrival",
      note: "",
    },
    {
      time: "07:00 PM",
      title: "Nikah Ceremony",
      note: "Solemnisation & duas",
    },
    {
      time: "07:30 PM",
      title: "Blessings",
      note: "Family greetings & photographs",
    },
    {
      time: "08:00 PM",
      title: "Dinner",
      note: "A feast shared with love",
    },
  ],

  venue: {
    name: "Gulshan Mahal",
    address:
      "Big Street, Triplicane, Chennai",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Triplicane+Chennai+Tamil+Nadu",
  },

dressCode: {
  title: "Traditional Festive",

  description:
    "Traditional or festive formal attire is encouraged. Sarees, salwar suits, anarkalis, kurtas, sherwanis, veshtis, suits, and formal dresses are all welcome.",

  swatches: [
    "#7A4037",
    "#5E6B43",
    "#B58A4A",
    "#482B24",
    "#D8C4A5",
  ],
},

preWeddingEvents: [
  {
    name: "Mehendi Evening",
    date: "14 October",
    time: "04:00 PM",
    location: "Bride’s Residence, Chennai",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Royapettah+Chennai+Tamil+Nadu",
  },
  {
    name: "Reception",
    date: "18 October",
    time: "07:30 PM",
    location: "Sea Pearl Lawns, ECR, Chennai",
    mapLink: "https://www.google.com/maps/search/?api=1&query=East+Coast+Road+Chennai+Tamil+Nadu",
  },
],

  rsvp: {
    deadline: "Kindly respond by September 15, 2027",
    contact: "For assistance, call +91 70254 23395",
    fields: {
      name: "Your full name",
      email: "Email address",
      attendance: ["Joyfully accepts", "Regretfully declines"],
      guests: ["1 guest", "2 guests", "3 guests", "4 guests"],
      note: "Dietary notes or a message for the couple",
    },
  },

theme: {
  ivory: "#F4EBDD",       /* warm limewashed ivory */
  plum: "#482B24",        /* deep teak brown */
  lavender: "#7A4037",    /* muted heritage maroon */
  mauve: "#9A6848",       /* sandalwood / terracotta */
  lilac: "#D8C4A5",       /* sunlit stone beige */
  champagne: "#B58A4A",   /* antique brass */
  olive: "#5E6B43",       /* muted banana-leaf green */
},
};
