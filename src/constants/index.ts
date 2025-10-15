export const navigationLinks = [
  {
    href: '/library',
    label: 'Library'
  },
  {
    img: '/icons/user.svg',
    selectedImg: '/icons/user-fill.svg',
    href: '/my-profile',
    label: 'My Profile'
  }
];

export const adminSideBarLinks = [
  {
    img: '/icons/admin/home.svg',
    route: '/admin',
    text: 'Home'
  },
  {
    img: '/icons/admin/users.svg',
    route: '/admin/users',
    text: 'All Users'
  },
  {
    img: '/icons/admin/book.svg',
    route: '/admin/books',
    text: 'All Books'
  }
];

export const FIELD_NAMES = {
  fullName: 'Full name',
  email: 'Email',
  universityId: 'University ID Number',
  password: 'Password',
  universityCard: 'Upload University ID Card'
};

export const FIELD_TYPES = {
  fullName: 'text',
  email: 'email',
  universityId: 'number',
  password: 'password'
};

export const sampleBooks = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    genre: 'Fantasy / Fiction',
    rating: 4.6,
    ratingCount: 20,
    pages: 10,
    total_copies: 50,
    available_copies: 12,
    description: 'A dazzling novel about all the choices that go into a life well lived.',
    color: '#1fc1f0',
    cover: 'https://m.media-amazon.com/images/I/812whWLbqAL._SY522_.jpg',
    video: 'sample-video.mp4?updatedAt=1722593504152',
    summary: 'A dazzling novel about all the choices that go into a life well lived.'
  },
  {
    id: 2,
    title: 'Echoes of Tomorrow',
    author: 'Lena Voss',
    genre: 'Science Fiction',
    rating: 4.3,
    ratingCount: 45,
    pages: 320,
    total_copies: 40,
    available_copies: 18,
    description: 'A gripping tale of time travel and moral dilemmas.',
    color: '#ff6f61',
    cover: 'https://picsum.photos/200/300/',
    video: 'echoes.mp4?updatedAt=1722593504152',
    summary: 'Can one decision reshape the future?'
  },
  {
    id: 3,
    title: 'Beneath the Willow',
    author: 'James Cartwright',
    genre: 'Historical Drama',
    rating: 4.7,
    ratingCount: 33,
    pages: 280,
    total_copies: 35,
    available_copies: 9,
    description: 'A heartfelt story of love and loss during wartime.',
    color: '#a3d977',
    cover: 'https://picsum.photos/200/300/',
    video: 'willow.mp4?updatedAt=1722593504152',
    summary: 'A family torn apart by history finds hope in memory.'
  },
  {
    id: 4,
    title: 'Digital Souls',
    author: 'Aria Chen',
    genre: 'Cyberpunk / Thriller',
    rating: 4.5,
    ratingCount: 58,
    pages: 410,
    total_copies: 60,
    available_copies: 27,
    description: 'In a world ruled by algorithms, one hacker fights for freedom.',
    color: '#2e2e2e',
    cover: 'https://picsum.photos/200/300/',
    video: 'digital.mp4?updatedAt=1722593504152',
    summary: 'What does it mean to be human in a digital age?'
  },
  {
    id: 5,
    title: 'The Silent Grove',
    author: 'Nora Elwood',
    genre: 'Mystery / Suspense',
    rating: 4.2,
    ratingCount: 39,
    pages: 295,
    total_copies: 42,
    available_copies: 14,
    description: 'A detective uncovers secrets buried deep in a quiet town.',
    color: '#6b8e23',
    cover: 'https://picsum.photos/200/300/',
    video: 'grove.mp4?updatedAt=1722593504152',
    summary: 'Silence hides the loudest truths.'
  },
  {
    id: 6,
    title: 'Canvas of Dreams',
    author: 'Miguel Alvarez',
    genre: 'Romance / Drama',
    rating: 4.8,
    ratingCount: 72,
    pages: 350,
    total_copies: 55,
    available_copies: 31,
    description: 'An artist finds love and redemption through his paintings.',
    color: '#f4c2c2',
    cover: 'https://picsum.photos/200/300/',
    video: 'canvas.mp4?updatedAt=1722593504152',
    summary: 'Every brushstroke tells a story of the heart.'
  },
  {
    id: 7,
    title: 'Quantum Veil',
    author: 'Dr. Elise Morgan',
    genre: 'Science / Philosophy',
    rating: 4.4,
    ratingCount: 51,
    pages: 230,
    total_copies: 38,
    available_copies: 20,
    description: 'Exploring the intersection of quantum physics and consciousness.',
    color: '#9370db',
    cover: 'https://picsum.photos/200/300/',
    video: 'quantum.mp4?updatedAt=1722593504152',
    summary: 'Reality is stranger than we think.'
  },
  {
    id: 8,
    title: 'Ashes and Embers',
    author: 'Tariq Mahmood',
    genre: 'Post-Apocalyptic Fiction',
    rating: 4.1,
    ratingCount: 29,
    pages: 310,
    total_copies: 47,
    available_copies: 11,
    description: 'Survivors navigate a scorched world in search of hope.',
    color: '#d2691e',
    cover: 'https://picsum.photos/200/300/',
    video: 'ashes.mp4?updatedAt=1722593504152',
    summary: 'Even in ruin, humanity endures.'
  },
  {
    id: 9,
    title: 'Whispers in Code',
    author: 'Sofia Petrov',
    genre: 'Techno Thriller',
    rating: 4.6,
    ratingCount: 64,
    pages: 360,
    total_copies: 52,
    available_copies: 22,
    description: 'A cryptographer uncovers a conspiracy hidden in encrypted messages.',
    color: '#4682b4',
    cover: 'https://picsum.photos/200/300/',
    video: 'whispers.mp4?updatedAt=1722593504152',
    summary: 'Some secrets were never meant to be decoded.'
  },
  {
    id: 10,
    title: 'The Last Orchard',
    author: 'Haruto Tanaka',
    genre: 'Literary Fiction',
    rating: 4.9,
    ratingCount: 88,
    pages: 275,
    total_copies: 30,
    available_copies: 6,
    description: 'A poetic meditation on aging, memory, and nature.',
    color: '#98fb98',
    cover: 'https://picsum.photos/200/300/',
    video: 'orchard.mp4?updatedAt=1722593504152',
    summary: 'In the quiet of the orchard, life speaks.'
  }
];
