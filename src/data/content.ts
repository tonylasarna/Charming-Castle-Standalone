export type RentalItem = {
  id: string;
  name: string;
  category: string;
  priceFrom: string;
  image: string;
  description: string;
};

export const rentals: RentalItem[] = [
  {
    id: 'throne-aurora',
    name: 'Aurora Throne Chair',
    category: 'Seating',
    priceFrom: '$220',
    image: '/images/throne-aurora.jpg',
    description: 'Hand-carved frame with plush velvet upholstery, perfect for sweetheart tables.',
  },
  {
    id: 'backdrop-luxe',
    name: 'Luxe Panel Backdrop',
    category: 'Backdrop',
    priceFrom: '$280',
    image: '/images/backdrop-luxe.jpg',
    description: 'Modular arch panels with interchangeable fabrics and florals to fit your palette.',
  },
  {
    id: 'marquee-love',
    name: 'LOVE Marquee Letters',
    category: 'Marquee',
    priceFrom: '$180',
    image: '/images/marquee-love.jpg',
    description: '4ft illuminated marquee letters to anchor proposals, showers, and receptions.',
  },
  {
    id: 'sofa-royal',
    name: 'Royal Settee',
    category: 'Seating',
    priceFrom: '$260',
    image: '/images/sofa-royal.jpg',
    description: 'Tufted cream settee with gold accents for photo-ready lounge groupings.',
  }
];

export const gallery = [
  {
    title: 'Garden Wedding',
    description: 'Soft neutrals with greenery for an outdoor ceremony lounge.',
    image: '/images/gallery-garden.jpg',
  },
  {
    title: 'Modern Baby Shower',
    description: 'Neutral textures, marquee letters, and a warm-toned balloon garland.',
    image: '/images/gallery-shower.jpg',
  },
  {
    title: 'Luxury Quinceañera',
    description: 'Royal blue accents with gold throne seating and mirrored tables.',
    image: '/images/gallery-quince.jpg',
  }
];

export const services = [
  {
    id: 'design',
    slug: 'design',
    name: 'Event Design',
    description: 'Mood boards, sourcing, and full visual direction tailored to your venue and vibe.',
  },
  {
    id: 'coordination',
    slug: 'coordination',
    name: 'Day-Of Coordination',
    description: 'Run of show, vendor confirmations, and on-site management so you can celebrate.',
  },
  {
    id: 'rentals',
    slug: 'rentals',
    name: 'Luxury Rentals',
    description: 'Signature seating, backdrops, marquees, and accents with white-glove delivery.',
  }
];

export const faqs = [
  {
    question: 'Do you deliver and set up rentals?',
    answer: 'Yes, we include white-glove delivery, installation, and strike within Central Florida. Travel beyond is available upon request.',
  },
  {
    question: 'Can I book design without rentals?',
    answer: 'Absolutely. We can design with your venue inventory or source custom pieces that fit your aesthetic and budget.',
  },
  {
    question: 'How soon should we book?',
    answer: 'Popular dates book 3-6 months out. Reach out early so we can hold inventory and align on your vision.',
  }
];
