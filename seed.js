import mongoose from 'mongoose';

import City from './models/City.js';
import Itinerary from './models/Itinerary.js';
import Activity from './models/Activity.js';
import Comment from './models/Comment.js';

await mongoose.connect(process.env.MONGO_URI);
console.log('Connected to database');

await Promise.all([
  City.deleteMany({}),
  Itinerary.deleteMany({}),
  Activity.deleteMany({}),
  Comment.deleteMany({}),
]);
console.log('Cleared existing data');

// ─── Cities ───────────────────────────────────────────────────────────────────

const cities = await City.insertMany([
  { city: 'Buenos Aires', country: 'Argentina', img: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=800' },
  { city: 'Barcelona', country: 'Spain', img: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800' },
  { city: 'Cape Town', country: 'South Africa', img: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800' },
  { city: 'Tokyo', country: 'Japan', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800' },
  { city: 'Lisbon', country: 'Portugal', img: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800' },
  { city: 'Amsterdam', country: 'Netherlands', img: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=800' },
  { city: 'New York', country: 'USA', img: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800' },
  { city: 'Rome', country: 'Italy', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800' },
  { city: 'Bangkok', country: 'Thailand', img: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800' },
  { city: 'Sydney', country: 'Australia', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800' },
  { city: 'Marrakech', country: 'Morocco', img: 'https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800' },
  { city: 'Copenhagen', country: 'Denmark', img: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800' },
]);
console.log(`Inserted ${cities.length} cities`);

const [
  buenosAires,
  barcelona,
  capeTown,
  tokyo,
  lisbon,
  amsterdam,
  newYork,
  rome,
  bangkok,
  sydney,
  marrakech,
  copenhagen,
] = cities;

// ─── Itineraries ──────────────────────────────────────────────────────────────

const itineraries = await Itinerary.insertMany([
  // Buenos Aires
  {
    title: 'Tango, Steak & Culture',
    username: 'Maria G.',
    profilePic: 'https://i.pravatar.cc/150?img=1',
    rating: 4,
    duration: 3,
    price: '$$',
    hashtag: ['#tango', '#food', '#culture'],
    cityId: buenosAires._id.toString(),
  },
  {
    title: 'Street Art & Palermo Vibes',
    username: 'Lucas R.',
    profilePic: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
    duration: 1,
    price: '$',
    hashtag: ['#streetart', '#palermo', '#hipster'],
    cityId: buenosAires._id.toString(),
  },
  // Barcelona
  {
    title: 'Gaudí & Gothic Quarter',
    username: 'Sofia M.',
    profilePic: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    duration: 2,
    price: '$$',
    hashtag: ['#gaudi', '#architecture', '#history'],
    cityId: barcelona._id.toString(),
  },
  {
    title: 'Beach, Tapas & Nightlife',
    username: 'Carlos V.',
    profilePic: 'https://i.pravatar.cc/150?img=4',
    rating: 4,
    duration: 1,
    price: '$$$',
    hashtag: ['#beach', '#tapas', '#nightlife'],
    cityId: barcelona._id.toString(),
  },
  // Cape Town
  {
    title: 'Table Mountain & Waterfront',
    username: 'Amara N.',
    profilePic: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    duration: 2,
    price: '$$',
    hashtag: ['#nature', '#hiking', '#views'],
    cityId: capeTown._id.toString(),
  },
  {
    title: 'Cape Winelands Day Trip',
    username: 'James K.',
    profilePic: 'https://i.pravatar.cc/150?img=6',
    rating: 4,
    duration: 1,
    price: '$$$',
    hashtag: ['#wine', '#stellenbosch', '#daytrip'],
    cityId: capeTown._id.toString(),
  },
  // Tokyo
  {
    title: 'Shibuya to Shinjuku',
    username: 'Yuki T.',
    profilePic: 'https://i.pravatar.cc/150?img=7',
    rating: 5,
    duration: 1,
    price: '$$',
    hashtag: ['#shibuya', '#shinjuku', '#urban'],
    cityId: tokyo._id.toString(),
  },
  {
    title: 'Temples, Ramen & Harajuku',
    username: 'Kenji A.',
    profilePic: 'https://i.pravatar.cc/150?img=8',
    rating: 5,
    duration: 2,
    price: '$',
    hashtag: ['#temples', '#ramen', '#harajuku'],
    cityId: tokyo._id.toString(),
  },
  // Lisbon
  {
    title: 'Fado, Pastéis & Alfama',
    username: 'Ana P.',
    profilePic: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    duration: 1,
    price: '$',
    hashtag: ['#fado', '#pasteis', '#alfama'],
    cityId: lisbon._id.toString(),
  },
  {
    title: 'Sintra Palace Day Trip',
    username: 'Pedro F.',
    profilePic: 'https://i.pravatar.cc/150?img=10',
    rating: 4,
    duration: 1,
    price: '$$',
    hashtag: ['#sintra', '#palaces', '#daytrip'],
    cityId: lisbon._id.toString(),
  },
  // Amsterdam
  {
    title: 'Canals, Museums & Bikes',
    username: 'Emma V.',
    profilePic: 'https://i.pravatar.cc/150?img=11',
    rating: 4,
    duration: 2,
    price: '$$',
    hashtag: ['#canals', '#museums', '#biking'],
    cityId: amsterdam._id.toString(),
  },
  {
    title: 'Jordaan & Street Food',
    username: 'Lars B.',
    profilePic: 'https://i.pravatar.cc/150?img=12',
    rating: 4,
    duration: 1,
    price: '$',
    hashtag: ['#jordaan', '#streetfood', '#local'],
    cityId: amsterdam._id.toString(),
  },
  // New York
  {
    title: 'Manhattan Icons & Central Park',
    username: 'Jake T.',
    profilePic: 'https://i.pravatar.cc/150?img=13',
    rating: 5,
    duration: 2,
    price: '$$',
    hashtag: ['#manhattan', '#centralpark', '#iconic'],
    cityId: newYork._id.toString(),
  },
  {
    title: 'Brooklyn Food & Art Scene',
    username: 'Maya L.',
    profilePic: 'https://i.pravatar.cc/150?img=14',
    rating: 4,
    duration: 1,
    price: '$$',
    hashtag: ['#brooklyn', '#foodie', '#art'],
    cityId: newYork._id.toString(),
  },
  // Rome
  {
    title: 'Ancient Rome in a Day',
    username: 'Giovanni R.',
    profilePic: 'https://i.pravatar.cc/150?img=15',
    rating: 5,
    duration: 1,
    price: '$$',
    hashtag: ['#colosseum', '#ancient', '#history'],
    cityId: rome._id.toString(),
  },
  {
    title: 'Gelato, Piazzas & Vatican',
    username: 'Chiara B.',
    profilePic: 'https://i.pravatar.cc/150?img=16',
    rating: 5,
    duration: 2,
    price: '$$$',
    hashtag: ['#vatican', '#gelato', '#piazzas'],
    cityId: rome._id.toString(),
  },
  // Bangkok
  {
    title: 'Temples & Street Food Trails',
    username: 'Pim S.',
    profilePic: 'https://i.pravatar.cc/150?img=17',
    rating: 5,
    duration: 2,
    price: '$',
    hashtag: ['#temples', '#streetfood', '#local'],
    cityId: bangkok._id.toString(),
  },
  {
    title: 'Floating Markets & Rooftop Bars',
    username: 'Niran K.',
    profilePic: 'https://i.pravatar.cc/150?img=18',
    rating: 4,
    duration: 1,
    price: '$$',
    hashtag: ['#markets', '#rooftop', '#nightlife'],
    cityId: bangkok._id.toString(),
  },
  // Sydney
  {
    title: 'Opera House & Harbour Walk',
    username: 'Claire M.',
    profilePic: 'https://i.pravatar.cc/150?img=19',
    rating: 5,
    duration: 1,
    price: '$$',
    hashtag: ['#opera', '#harbour', '#iconic'],
    cityId: sydney._id.toString(),
  },
  {
    title: 'Bondi to Coogee Coastal Walk',
    username: 'Tom W.',
    profilePic: 'https://i.pravatar.cc/150?img=20',
    rating: 5,
    duration: 1,
    price: '$',
    hashtag: ['#bondi', '#coastal', '#outdoors'],
    cityId: sydney._id.toString(),
  },
  // Marrakech
  {
    title: 'Souks, Spices & Riads',
    username: 'Fatima H.',
    profilePic: 'https://i.pravatar.cc/150?img=21',
    rating: 5,
    duration: 2,
    price: '$',
    hashtag: ['#souks', '#medina', '#culture'],
    cityId: marrakech._id.toString(),
  },
  {
    title: 'Atlas Mountains Day Trip',
    username: 'Omar B.',
    profilePic: 'https://i.pravatar.cc/150?img=22',
    rating: 4,
    duration: 1,
    price: '$$',
    hashtag: ['#atlas', '#hiking', '#daytrip'],
    cityId: marrakech._id.toString(),
  },
  // Copenhagen
  {
    title: 'Nyhavn, Design & Danish Pastries',
    username: 'Astrid L.',
    profilePic: 'https://i.pravatar.cc/150?img=23',
    rating: 4,
    duration: 1,
    price: '$$$',
    hashtag: ['#nyhavn', '#design', '#hygge'],
    cityId: copenhagen._id.toString(),
  },
  {
    title: 'Freetown Christiania & Local Brunch',
    username: 'Erik N.',
    profilePic: 'https://i.pravatar.cc/150?img=24',
    rating: 4,
    duration: 1,
    price: '$$',
    hashtag: ['#christiania', '#brunch', '#local'],
    cityId: copenhagen._id.toString(),
  },
]);
console.log(`Inserted ${itineraries.length} itineraries`);

// ─── Activities ───────────────────────────────────────────────────────────────

const activities = await Activity.insertMany([
  // Buenos Aires — Tango, Steak & Culture
  {
    actPlace: 'La Boca neighbourhood',
    actPic: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=400',
    itinId: itineraries[0]._id.toString(),
  },
  {
    actPlace: 'El Ateneo Grand Splendid bookstore',
    actPic: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400',
    itinId: itineraries[0]._id.toString(),
  },
  {
    actPlace: 'Tango show at Café Tortoni',
    actPic: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400',
    itinId: itineraries[0]._id.toString(),
  },
  // Buenos Aires — Street Art & Palermo
  {
    actPlace: 'Palermo Hollywood street murals',
    actPic: 'https://images.unsplash.com/photo-1561059488-916d69792237?w=400',
    itinId: itineraries[1]._id.toString(),
  },
  {
    actPlace: 'MALBA Museum of Latin American Art',
    actPic: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400',
    itinId: itineraries[1]._id.toString(),
  },
  {
    actPlace: 'Sunday fair at Plaza Serrano',
    actPic: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400',
    itinId: itineraries[1]._id.toString(),
  },
  // Barcelona — Gaudí & Gothic
  {
    actPlace: 'Sagrada Família',
    actPic: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=400',
    itinId: itineraries[2]._id.toString(),
  },
  {
    actPlace: 'Park Güell',
    actPic: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400',
    itinId: itineraries[2]._id.toString(),
  },
  {
    actPlace: 'Gothic Quarter walking tour',
    actPic: 'https://images.unsplash.com/photo-1464790719320-516ecd75af6c?w=400',
    itinId: itineraries[2]._id.toString(),
  },
  // Barcelona — Beach & Tapas
  {
    actPlace: 'Barceloneta Beach',
    actPic: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    itinId: itineraries[3]._id.toString(),
  },
  {
    actPlace: 'La Boqueria market',
    actPic: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400',
    itinId: itineraries[3]._id.toString(),
  },
  {
    actPlace: 'Tapas bar crawl in El Born',
    actPic: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=400',
    itinId: itineraries[3]._id.toString(),
  },
  // Cape Town — Table Mountain
  {
    actPlace: 'Table Mountain cable car',
    actPic: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400',
    itinId: itineraries[4]._id.toString(),
  },
  {
    actPlace: 'V&A Waterfront',
    actPic: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=400',
    itinId: itineraries[4]._id.toString(),
  },
  {
    actPlace: 'Boulders Beach penguins',
    actPic: 'https://images.unsplash.com/photo-1599458252573-56ae36120de1?w=400',
    itinId: itineraries[4]._id.toString(),
  },
  // Cape Town — Winelands
  {
    actPlace: 'Stellenbosch wine tasting',
    actPic: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400',
    itinId: itineraries[5]._id.toString(),
  },
  {
    actPlace: 'Franschhoek wine tram',
    actPic: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400',
    itinId: itineraries[5]._id.toString(),
  },
  // Tokyo — Shibuya to Shinjuku
  {
    actPlace: 'Shibuya Crossing',
    actPic: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400',
    itinId: itineraries[6]._id.toString(),
  },
  {
    actPlace: 'Meiji Shrine',
    actPic: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400',
    itinId: itineraries[6]._id.toString(),
  },
  {
    actPlace: 'Shinjuku Gyoen garden',
    actPic: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=400',
    itinId: itineraries[6]._id.toString(),
  },
  // Tokyo — Temples & Ramen
  {
    actPlace: 'Senso-ji Temple in Asakusa',
    actPic: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?w=400',
    itinId: itineraries[7]._id.toString(),
  },
  {
    actPlace: 'Ramen street in Shinjuku',
    actPic: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
    itinId: itineraries[7]._id.toString(),
  },
  {
    actPlace: 'Harajuku Takeshita Street',
    actPic: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400',
    itinId: itineraries[7]._id.toString(),
  },
  // Lisbon — Fado & Alfama
  {
    actPlace: 'Alfama neighbourhood & São Jorge Castle',
    actPic: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=400',
    itinId: itineraries[8]._id.toString(),
  },
  {
    actPlace: 'Pastéis de Belém pastry shop',
    actPic: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400',
    itinId: itineraries[8]._id.toString(),
  },
  {
    actPlace: 'Fado show in Mouraria',
    actPic: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400',
    itinId: itineraries[8]._id.toString(),
  },
  // Lisbon — Sintra
  {
    actPlace: 'Pena Palace',
    actPic: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=400',
    itinId: itineraries[9]._id.toString(),
  },
  {
    actPlace: 'Moorish Castle ruins',
    actPic: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=400',
    itinId: itineraries[9]._id.toString(),
  },
  {
    actPlace: 'Quinta da Regaleira gardens',
    actPic: 'https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?w=400',
    itinId: itineraries[9]._id.toString(),
  },
  // Amsterdam — Canals & Museums
  {
    actPlace: 'Rijksmuseum',
    actPic: 'https://images.unsplash.com/photo-1576924542622-772281b13aa0?w=400',
    itinId: itineraries[10]._id.toString(),
  },
  {
    actPlace: 'Canal boat tour',
    actPic: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=400',
    itinId: itineraries[10]._id.toString(),
  },
  {
    actPlace: 'Vondelpark by bike',
    actPic: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
    itinId: itineraries[10]._id.toString(),
  },
  // Amsterdam — Jordaan
  {
    actPlace: 'Jordaan neighbourhood walk',
    actPic: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400',
    itinId: itineraries[11]._id.toString(),
  },
  {
    actPlace: 'Albert Cuyp Market',
    actPic: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400',
    itinId: itineraries[11]._id.toString(),
  },
  {
    actPlace: 'Anne Frank House',
    actPic: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=400',
    itinId: itineraries[11]._id.toString(),
  },
  // New York — Manhattan
  {
    actPlace: 'Central Park morning walk',
    actPic: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400',
    itinId: itineraries[12]._id.toString(),
  },
  {
    actPlace: 'Top of the Rock at sunset',
    actPic: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=400',
    itinId: itineraries[12]._id.toString(),
  },
  {
    actPlace: 'High Line park walk',
    actPic: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=400',
    itinId: itineraries[12]._id.toString(),
  },
  // New York — Brooklyn
  {
    actPlace: 'Brooklyn Bridge walk',
    actPic: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400',
    itinId: itineraries[13]._id.toString(),
  },
  {
    actPlace: 'DUMBO neighbourhood & SMORGASBURG',
    actPic: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400',
    itinId: itineraries[13]._id.toString(),
  },
  {
    actPlace: 'Brooklyn Museum',
    actPic: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400',
    itinId: itineraries[13]._id.toString(),
  },
  // Rome — Ancient Rome
  {
    actPlace: 'Colosseum & Roman Forum',
    actPic: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400',
    itinId: itineraries[14]._id.toString(),
  },
  {
    actPlace: 'Palatine Hill',
    actPic: 'https://images.unsplash.com/photo-1529154166925-574a0236a4f4?w=400',
    itinId: itineraries[14]._id.toString(),
  },
  {
    actPlace: 'Circus Maximus at dusk',
    actPic: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400',
    itinId: itineraries[14]._id.toString(),
  },
  // Rome — Vatican & Gelato
  {
    actPlace: 'Vatican Museums & Sistine Chapel',
    actPic: 'https://images.unsplash.com/photo-1565711561500-49678a10a63f?w=400',
    itinId: itineraries[15]._id.toString(),
  },
  {
    actPlace: 'Trevi Fountain & Pantheon',
    actPic: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400',
    itinId: itineraries[15]._id.toString(),
  },
  {
    actPlace: 'Gelato crawl in Trastevere',
    actPic: 'https://images.unsplash.com/photo-1567206563114-c179706b56b9?w=400',
    itinId: itineraries[15]._id.toString(),
  },
  // Bangkok — Temples & Street Food
  {
    actPlace: 'Wat Phra Kaew & Grand Palace',
    actPic: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400',
    itinId: itineraries[16]._id.toString(),
  },
  {
    actPlace: 'Wat Arun at sunset',
    actPic: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=400',
    itinId: itineraries[16]._id.toString(),
  },
  {
    actPlace: 'Yaowarat Road night food market',
    actPic: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
    itinId: itineraries[16]._id.toString(),
  },
  // Bangkok — Floating Markets
  {
    actPlace: 'Damnoen Saduak Floating Market',
    actPic: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400',
    itinId: itineraries[17]._id.toString(),
  },
  {
    actPlace: 'Chatuchak Weekend Market',
    actPic: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400',
    itinId: itineraries[17]._id.toString(),
  },
  {
    actPlace: 'Vertigo rooftop bar at Banyan Tree',
    actPic: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400',
    itinId: itineraries[17]._id.toString(),
  },
  // Sydney — Opera House
  {
    actPlace: 'Sydney Opera House tour',
    actPic: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400',
    itinId: itineraries[18]._id.toString(),
  },
  {
    actPlace: 'Circular Quay & Harbour Bridge climb',
    actPic: 'https://images.unsplash.com/photo-1530198405673-855bdf0e7e28?w=400',
    itinId: itineraries[18]._id.toString(),
  },
  {
    actPlace: 'The Rocks neighbourhood',
    actPic: 'https://images.unsplash.com/photo-1524293581917-878a6d017c71?w=400',
    itinId: itineraries[18]._id.toString(),
  },
  // Sydney — Bondi
  {
    actPlace: 'Bondi Beach surf lesson',
    actPic: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    itinId: itineraries[19]._id.toString(),
  },
  {
    actPlace: 'Bondi to Coogee coastal walk',
    actPic: 'https://images.unsplash.com/photo-1476900543704-4312b650dbb7?w=400',
    itinId: itineraries[19]._id.toString(),
  },
  {
    actPlace: 'Bronte Beach fish & chips',
    actPic: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400',
    itinId: itineraries[19]._id.toString(),
  },
  // Marrakech — Souks & Riads
  {
    actPlace: 'Djemaa el-Fna square',
    actPic: 'https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=400',
    itinId: itineraries[20]._id.toString(),
  },
  {
    actPlace: 'Spice souk in the medina',
    actPic: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400',
    itinId: itineraries[20]._id.toString(),
  },
  {
    actPlace: 'Bahia Palace & Saadian Tombs',
    actPic: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400',
    itinId: itineraries[20]._id.toString(),
  },
  // Marrakech — Atlas Mountains
  {
    actPlace: 'Imlil village hike',
    actPic: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
    itinId: itineraries[21]._id.toString(),
  },
  {
    actPlace: 'Ourika Valley waterfalls',
    actPic: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    itinId: itineraries[21]._id.toString(),
  },
  {
    actPlace: 'Berber village lunch',
    actPic: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400',
    itinId: itineraries[21]._id.toString(),
  },
  // Copenhagen — Nyhavn & Design
  {
    actPlace: 'Nyhavn colourful harbour',
    actPic: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=400',
    itinId: itineraries[22]._id.toString(),
  },
  {
    actPlace: 'Danish Design Museum',
    actPic: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400',
    itinId: itineraries[22]._id.toString(),
  },
  {
    actPlace: 'Torvehallerne food market',
    actPic: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400',
    itinId: itineraries[22]._id.toString(),
  },
  // Copenhagen — Christiania
  {
    actPlace: 'Freetown Christiania',
    actPic: 'https://images.unsplash.com/photo-1561059488-916d69792237?w=400',
    itinId: itineraries[23]._id.toString(),
  },
  {
    actPlace: 'Tivoli Gardens',
    actPic: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400',
    itinId: itineraries[23]._id.toString(),
  },
  {
    actPlace: 'Brunch at La Glace patisserie',
    actPic: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400',
    itinId: itineraries[23]._id.toString(),
  },
]);
console.log(`Inserted ${activities.length} activities`);

// ─── Comments ─────────────────────────────────────────────────────────────────

await Comment.insertMany([
  {
    itinId: itineraries[0]._id.toString(),
    text: 'The tango show at Café Tortoni was unforgettable!',
    user: { username: 'TravellerJoe', profilePic: 'https://i.pravatar.cc/150?img=30' },
  },
  {
    itinId: itineraries[0]._id.toString(),
    text: 'La Boca is stunning — go early to avoid crowds.',
    user: { username: 'NomadSara', profilePic: 'https://i.pravatar.cc/150?img=31' },
  },
  {
    itinId: itineraries[2]._id.toString(),
    text: 'Book Sagrada Família tickets weeks in advance!',
    user: { username: 'ArchLover', profilePic: 'https://i.pravatar.cc/150?img=32' },
  },
  {
    itinId: itineraries[2]._id.toString(),
    text: 'Park Güell at sunrise before the crowds arrive is magical.',
    user: { username: 'EarlyBird', profilePic: 'https://i.pravatar.cc/150?img=33' },
  },
  {
    itinId: itineraries[4]._id.toString(),
    text: 'Table Mountain views are breathtaking — go on a clear day.',
    user: { username: 'HikerMax', profilePic: 'https://i.pravatar.cc/150?img=34' },
  },
  {
    itinId: itineraries[5]._id.toString(),
    text: 'The Franschhoek wine tram is the best way to spend an afternoon.',
    user: { username: 'WineOhana', profilePic: 'https://i.pravatar.cc/150?img=35' },
  },
  {
    itinId: itineraries[6]._id.toString(),
    text: 'Shibuya Crossing at night is pure magic.',
    user: { username: 'TokyoDreamer', profilePic: 'https://i.pravatar.cc/150?img=36' },
  },
  {
    itinId: itineraries[7]._id.toString(),
    text: 'Senso-ji at dawn before the tourist rush is otherworldly.',
    user: { username: 'ZenTraveller', profilePic: 'https://i.pravatar.cc/150?img=37' },
  },
  {
    itinId: itineraries[8]._id.toString(),
    text: 'The pastéis de nata are absolutely worth the queue.',
    user: { username: 'FoodieAna', profilePic: 'https://i.pravatar.cc/150?img=38' },
  },
  {
    itinId: itineraries[12]._id.toString(),
    text: 'Top of the Rock beats the Empire State for views every time.',
    user: { username: 'NYCLover', profilePic: 'https://i.pravatar.cc/150?img=39' },
  },
  {
    itinId: itineraries[14]._id.toString(),
    text: 'The Roman Forum feels like stepping into a history book.',
    user: { username: 'HistoryBuff', profilePic: 'https://i.pravatar.cc/150?img=40' },
  },
  {
    itinId: itineraries[16]._id.toString(),
    text: 'Grand Palace is stunning — dress modestly to get in.',
    user: { username: 'AsiaExplorer', profilePic: 'https://i.pravatar.cc/150?img=41' },
  },
  {
    itinId: itineraries[18]._id.toString(),
    text: 'The Opera House tour is worth every cent.',
    user: { username: 'OzzieTraveller', profilePic: 'https://i.pravatar.cc/150?img=42' },
  },
  {
    itinId: itineraries[19]._id.toString(),
    text: 'Bondi to Coogee is one of the best coastal walks in the world.',
    user: { username: 'CoastalRunner', profilePic: 'https://i.pravatar.cc/150?img=43' },
  },
  {
    itinId: itineraries[20]._id.toString(),
    text: 'Djemaa el-Fna at sunset with the food stalls coming alive — incredible.',
    user: { username: 'MoroccanNights', profilePic: 'https://i.pravatar.cc/150?img=44' },
  },
  {
    itinId: itineraries[22]._id.toString(),
    text: 'Nyhavn on a sunny day is straight out of a postcard.',
    user: { username: 'ScandiFan', profilePic: 'https://i.pravatar.cc/150?img=45' },
  },
]);
console.log('Inserted comments');

await mongoose.disconnect();
console.log('\n✓ Database seeded successfully!');
console.log(
  `  ${cities.length} cities, ${itineraries.length} itineraries, ${activities.length} activities`
);
