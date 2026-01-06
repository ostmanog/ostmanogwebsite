const songs = [
  {
    id: '1',
    songName: `B 1`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/1.mp3",
    buyButton: { text: "Придбати від", minPrice: 15 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 15, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 39, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 49, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '2', 
    songName: `P 1`,
    poster: "assets/images/p.png",
    genre: "Piano beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/2.mp3",
    buyButton: { text: "Придбати від", minPrice: 19 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 19, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 49, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 59, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '3', 
    songName: `B 2`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/3.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 59, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 69, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '4', 
    songName: `S 1`,
    poster: "assets/images/s.png",
    genre: "Sample beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/4.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 69, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 79, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '5', 
    songName: `B 3`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/5.mp3",
    buyButton: { text: "Придбати від", minPrice: 19 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 19, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 59, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 69, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '6', 
    songName: `S 2`,
    poster: "assets/images/s.png",
    genre: "Sample beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/6.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 69, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 79, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '7', 
    songName: `S 3`,
    poster: "assets/images/s.png",
    genre: "Sample beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/7.mp3",
    buyButton: { text: "Придбати від", minPrice: 30 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 30, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 69, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 79, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '8', 
    songName: `b 4`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/8.mp3",
    buyButton: { text: "Придбати від", minPrice: 15 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 15, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 39, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 49, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '9', 
    songName: `P 2`,
    poster: "assets/images/p.png",
    genre: "Piano beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/9.mp3",
    buyButton: { text: "Придбати від", minPrice: 19 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 19, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 39, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 49, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '10', 
    songName: `b 5`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/10.mp3",
    buyButton: { text: "Придбати від", minPrice: 15 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 15, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 39, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 49, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '11', 
    songName: `p 3`,
    poster: "assets/images/p.png",
    genre: "Piano beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/11.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 59, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 69, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '12', 
    songName: `s 4`,
    poster: "assets/images/s.png",
    genre: "Sample beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/12.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 89, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 99, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '13', 
    songName: `p 4`,
    poster: "assets/images/p.png",
    genre: "Piano beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/13.mp3",
    buyButton: { text: "Придбати від", minPrice: 15 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 15, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 39, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 49, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '14', 
    songName: `p 5`,
    poster: "assets/images/p.png",
    genre: "Piano beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/14.mp3",
    buyButton: { text: "Придбати від", minPrice: 19 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 19, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 49, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 59, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '15', 
    songName: `b 6`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/15.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 59, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 69, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '16', 
    songName: `g 1`,
    poster: "assets/images/g.png",
    genre: "guitar beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/16.mp3",
    buyButton: { text: "Придбати від", minPrice: 29 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 29, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 69, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 79, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '17', 
    songName: `g 1`,
    poster: "assets/images/gb.png",
    genre: "Golden beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/17.mp3",
    buyButton: { text: "Придбати від", minPrice: 49 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 49, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 119, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 129, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '18', 
    songName: `b 7`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/18.mp3",
    buyButton: { text: "Придбати від", minPrice: 19 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 19, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 59, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 69, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '19', 
    songName: `g 2`,
    poster: "assets/images/gb.png",
    genre: "Golden beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/19.mp3",
    buyButton: { text: "Придбати від", minPrice: 39 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 39, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 89, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 99, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '20', 
    songName: `s 5`,
    poster: "assets/images/s.png",
    genre: "Sample beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/20.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 59, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 69, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '21', 
    songName: `b 8`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/21.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 69, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 79, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '22', 
    songName: `p 6`,
    poster: "assets/images/p.png",
    genre: "Piano beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/22.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 69, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 79, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '23', 
    songName: `St 1`,
    poster: "assets/images/st.png",
    genre: "Strings beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/23.mp3",
    buyButton: { text: "Придбати від", minPrice: 19 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 19, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 49, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 59, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '24', 
    songName: `St 2`,
    poster: "assets/images/st.png",
    genre: "Strings beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/24.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 69, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 79, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '25', 
    songName: `g 3`,
    poster: "assets/images/gb.png",
    genre: "Golden beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/25.mp3",
    buyButton: { text: "Придбати від", minPrice: 39 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 39, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 89, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 99, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '26', 
    songName: `g 2`,
    poster: "assets/images/g.png",
    genre: "guitar beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/26.mp3",
    buyButton: { text: "Придбати від", minPrice: 19 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 19, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 49, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 59, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '27', 
    songName: `g 4`,
    poster: "assets/images/gb.png",
    genre: "Golden beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/27.mp3",
    buyButton: { text: "Придбати від", minPrice: 49 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 49, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 139, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 149, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '28', 
    songName: `g 5`,
    poster: "assets/images/gb.png",
    genre: "Golden beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/28.mp3",
    buyButton: { text: "Придбати від", minPrice: 39 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 39, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 89, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 99, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '29', 
    songName: `b 9`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/29.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 59, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 69, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '30', 
    songName: `g 3`,
    poster: "assets/images/g.png",
    genre: "guitar beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/30.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 69, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 79, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '31', 
    songName: `B 10`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/31.mp3",
    buyButton: { text: "Придбати від", minPrice: 15 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 15, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 49, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 59, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '32', 
    songName: `s 6`,
    poster: "assets/images/s.png",
    genre: "Sample beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/32.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 59, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 69, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '33', 
    songName: `g 4`,
    poster: "assets/images/g.png",
    genre: "guitar beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/33.mp3",
    buyButton: { text: "Придбати від", minPrice: 15 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 15, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 39, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 49, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '34', 
    songName: `g 6`,
    poster: "assets/images/gb.png",
    genre: "Golden beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/34.mp3",
    buyButton: { text: "Придбати від", minPrice: 39 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 39, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 89, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 99, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '36', 
    songName: `b 11`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/36.mp3",
    buyButton: { text: "Придбати від", minPrice: 19 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 19, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 69, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 79, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '37', 
    songName: `b 12`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/37.mp3",
    buyButton: { text: "Придбати від", minPrice: 19 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 19, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 59, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 69, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '38', 
    songName: `b 13`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/38.mp3",
    buyButton: { text: "Придбати від", minPrice: 19 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 19, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 59, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 69, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '39', 
    songName: `g 5`,
    poster: "assets/images/g.png",
    genre: "guitar beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/39.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 69, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 79, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '40', 
    songName: `g 7`,
    poster: "assets/images/gb.png",
    genre: "Golden beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/40.mp3",
    buyButton: { text: "Придбати від", minPrice: 49 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 49, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 119, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 129, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '41', 
    songName: `g 8`,
    poster: "assets/images/gb.png",
    genre: "Golden beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/41.mp3",
    buyButton: { text: "Придбати від", minPrice: 35 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 35, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 99, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 109, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '42', 
    songName: `s 7`,
    poster: "assets/images/s.png",
    genre: "Sample beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/42.mp3",
    buyButton: { text: "Придбати від", minPrice: 19 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 19, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 59, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 69, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '43', 
    songName: `g 9`,
    poster: "assets/images/gb.png",
    genre: "Golden beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/43.mp3",
    buyButton: { text: "Придбати від", minPrice: 35 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 35, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 99, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 109, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '44', 
    songName: `b 14`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/44.mp3",
    buyButton: { text: "Придбати від", minPrice: 15 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 15, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 39, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 49, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '45', 
    songName: `g 10`,
    poster: "assets/images/gb.png",
    genre: "Golden beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/45.mp3",
    buyButton: { text: "Придбати від", minPrice: 25 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 25, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 79, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 89, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '46', 
    songName: `p 7`,
    poster: "assets/images/p.png",
    genre: "Piano beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/46.mp3",
    buyButton: { text: "Придбати від", minPrice: 15 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 15, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 39, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 49, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '47', 
    songName: `b 15`,
    poster: "assets/images/b.png",
    genre: "Basic beats",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/master/assets/beats/47.mp3",
    buyButton: { text: "Придбати від", minPrice: 19 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 19, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 59, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 69, description: "Всі треки + ексклюзив" }
    ]
  }
];
