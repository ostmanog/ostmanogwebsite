const songs = [
  {
    id: '1',
    songName: `No 1`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/1.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '2', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/2.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '3', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/3.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '4', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/4.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '5', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/5.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '6', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/6.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '7', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/7.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '8', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/8.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '9', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/9.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '10', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/10.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '11', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/11.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '12', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/12.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '13', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/13.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '14', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/14.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '15', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/15.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '16', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/16.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '17', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/17.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '18', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/18.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '19', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/19.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '20', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/20.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '21', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/21.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '22', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/22.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '23', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/23.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '24', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/24.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '25', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/25.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '26', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/26.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '27', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/27.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '28', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/28.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '29', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/29.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '30', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/30.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '31', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/31.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '32', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/32.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '33', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/33.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '34', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/34.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '35', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/35.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '36', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/36.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '37', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/37.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '38', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/38.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '39', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/39.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '40', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/40.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '41', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/41.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '42', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/42.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '43', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/43.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '44', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/44.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '45', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/45.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '46', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/46.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  },
  {
    id: '47', 
    songName: `ya medaly`,
    poster: "assets/images/5.png",
    genre: "trap",
    url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/47.mp3",
    buyButton: { text: "Придбати від", minPrice: 10 },
    licenses: [
      { type: "lease", name: "WAV Lease", price: 10, description: "Базові права" },
      { type: "exclusive", name: "WAV Exclusive", price: 20, description: "Ексклюзивні права" },
      { type: "trackout", name: "Track Out Exclusive", price: 50, description: "Всі треки + ексклюзив" }
    ]
  }
];