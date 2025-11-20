document.addEventListener("DOMContentLoaded", function() { 
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.addEventListener("DOMContentLoaded", function() {
    const links = [...document.querySelectorAll(".animated-menu a")];
    const light = document.querySelector(".animated-menu .tubelight");

    const offsetCorrection = 0;

    let ticking = false;
    let ignoreScrollUpdate = false;
    let scrollTimeout;

    function updateLightPosition(activeLink) {
        const linkRect = activeLink.getBoundingClientRect();
        const menuRect = activeLink.closest('.animated-menu').getBoundingClientRect();
        const linkCenter = linkRect.left - menuRect.left + linkRect.width / 2;
        light.style.left = `${linkCenter + offsetCorrection}px`;
    }

    if (links[0].classList.contains("active")) {
        updateLightPosition(links[0]);
    }

    links.forEach((link, index) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            ignoreScrollUpdate = true;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                ignoreScrollUpdate = false;
            }, 1000);
            
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            
            updateLightPosition(link);
            
            switch(index) {
                case 0:
                    scrollToTop();
                    break;
                case 1:
                    scrollToSection('beats');
                    break;
                case 2:
                    scrollToSection('price');
                    break;
                case 3:
                    scrollToContact();
                    break;
            }
        });
    });

    function updateMenuOnScroll() {
        if (ignoreScrollUpdate) {
            ticking = false;
            return;
        }
        
        const currentSection = getCurrentSection();
        
        if (links[currentSection] && !links[currentSection].classList.contains('active')) {
            links.forEach(l => l.classList.remove("active"));
            links[currentSection].classList.add("active");
            updateLightPosition(links[currentSection]);
        }
        
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking && !ignoreScrollUpdate) {
            requestAnimationFrame(function() {
                updateMenuOnScroll();
            });
            ticking = true;
        }
    });

    updateMenuOnScroll();
});

function getCurrentSection() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollPosition + windowHeight >= documentHeight - 150) {
        return 3; 
    }
    
    const header = document.querySelector('.header');
    const beats = document.getElementById('beats');
    const price = document.getElementById('price');

    if (!header || !beats || !price) return 0;

    const headerBottom = header.offsetTop + header.offsetHeight;
    const beatsBottom = beats.offsetTop + beats.offsetHeight;
    const priceBottom = price.offsetTop + price.offsetHeight;

    if (scrollPosition < headerBottom - 100) {
        return 0; 
    } else if (scrollPosition < beatsBottom - 100) {
        return 1; 
    } else if (scrollPosition < priceBottom - 100) {
        return 2; 
    } else {
        return 3; 
    }
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToContact() {
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}


function generateBeats() {
  const beatsContainer = document.getElementById('beats-container');
  const template = document.getElementById('beat-template');
  
  if (!beatsContainer || !template) {
    console.error('Не найден beats-container или beat-template');
    return;
  }
  
  beatsContainer.innerHTML = '';
  
  songs.forEach((song) => {
    const clone = template.content.cloneNode(true);
    
    const container = clone.querySelector('.image-info-container');
    container.setAttribute('data-genre', song.genre);
    container.setAttribute('data-id', song.id);
    
    const img = clone.querySelector('.imagemusic');
    img.src = song.poster;
    img.alt = song.songName;
    
    const playBtn = clone.querySelector('.playListPlay');
    playBtn.id = song.id;
    
    const title = clone.querySelector('.title');
    title.textContent = song.songName;
    
    const type = clone.querySelector('.type');
    type.textContent = `Type: ${getGenreDisplayName(song.genre)}`;
    
    const buyText = clone.querySelector('.buy-text');
    buyText.setAttribute('data-translate', "Придбати від");
    buyText.textContent = song.buyButton.text;
    const minPrice = clone.querySelector('.min-price');
    
    buyText.textContent = song.buyButton.text;
    minPrice.textContent = song.buyButton.minPrice;
    
    generateLicenseOptions(clone, song);
    
    beatsContainer.appendChild(clone);
  });
  
  initBeatInteractions();
}

function generateLicenseOptions(clone, song) {
  const pricingOptions = clone.querySelector('.pricing-options');
  pricingOptions.innerHTML = '';
  
  song.licenses.forEach((license) => {
    const licenseOption = document.createElement('div');
    licenseOption.className = 'license-option';
    licenseOption.setAttribute('data-license', license.type);
    licenseOption.setAttribute('data-price', license.price);
    
    licenseOption.innerHTML = `
      <div class="license-info">
        <span class="license-name">${license.name}</span>
        <span class="license-price">${license.price}<span class="license-currency">€</span></span>
      </div>
      <div class="license-desc" data-translate="${license.description}">${license.description}</div>
    `;
    
    pricingOptions.appendChild(licenseOption);
  });
  
  const contactHint = document.createElement('div');
contactHint.className = 'contact-hint';
contactHint.innerHTML = `
  <i class="bi bi-telegram"></i>
  <span class="contact-text" data-translate="Виберіть ліцензію для зв'язку в Telegram">Виберіть ліцензію для зв’язку в Telegram</span>
`;
  pricingOptions.appendChild(contactHint);
}
    
function getGenreDisplayName(genre) {
  const genreMap = {
    'Basic beats': 'Basic Beats',
    'Sample beats': 'Sample Beats', 
    'Piano beats': 'Piano Beats',
    'guitar beats': 'guitar Beats',
    'Strings beats': 'Strings Beats',
    'Golden beats': 'Golden Beats'
  };
  return genreMap[genre] || genre;
}

function initBeatInteractions() {
  document.querySelectorAll('.playListPlay').forEach(element => {
    element.addEventListener('click', (e) => {
      e.stopPropagation();
      const trackIndex = songs.findIndex(song => song.id === element.id);
      if (trackIndex !== -1) playTrack(trackIndex);
    });
  });
  
  document.querySelectorAll('.pricing-dropdown').forEach((dropdown) => {
    const button = dropdown.querySelector('.buy-btn');
    
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      document.querySelectorAll('.pricing-dropdown').forEach(other => {
        if (other !== dropdown) other.classList.remove('active');
      });
      dropdown.classList.toggle('active');
    });
    
    dropdown.querySelectorAll('.license-option').forEach(option => {
      option.addEventListener('click', function() {
        const licenseType = this.getAttribute('data-license');
        const price = this.getAttribute('data-price');
        const licenseName = this.querySelector('.license-name').textContent;
        const beatTitle = dropdown.closest('.image-info-container').querySelector('.title').textContent;
        
        const message = `Привіт! Хочу придбати біт "${beatTitle}"\nЛицензия: ${licenseName} (${price}$)`;
        const encodedMessage = encodeURIComponent(message);
        const telegramUrl = `https://t.me/sixbmxbo?text=${encodedMessage}`;
        
        window.open(telegramUrl, '_blank');
        dropdown.classList.remove('active');
      });
    });
  });
  
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.pricing-dropdown')) {
      document.querySelectorAll('.pricing-dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
}


function filterBeats(genre) {
  const beatItems = document.querySelectorAll('.image-info-container');
  const filterButtons = document.querySelectorAll('.genre-filter');
  
  filterButtons.forEach(button => {
    button.classList.remove('active');
  });
  
  event.target.classList.add('active');
  
  beatItems.forEach((item) => {
    const songGenre = item.getAttribute('data-genre');
    if (genre === 'all') {
      item.style.display = 'flex';
    } else {
      if (songGenre === genre) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    }
  });
}




document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.genre-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const genre = this.getAttribute('data-genre');
            filterBeats.call(this, genre);
        });
    });
    

    const allButton = document.querySelector('.genre-filter[data-genre="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }
});



const newPlayer = document.querySelector('.new-player');
const newPlayPauseBtn = document.getElementById('new-play-pause');
const newBackBtn = document.getElementById('new-back');
const newNextBtn = document.getElementById('new-next');
const newVolumeBtn = document.getElementById('new-volume-btn');
const newVolumeSlider = document.getElementById('new-volume-slider');
const newTrackImage = document.getElementById('new-track-image');
const newTrackTitle = document.getElementById('new-track-title');
const newTrackType = document.getElementById('new-track-type');
const playerProgress = document.querySelector('.player-progress');
const volumeProgress = document.querySelector('.volume-progress');

const music = new Audio();
let currentTrackIndex = 0;
let isPlaying = false;

const logo = document.querySelector('.logo');
let rotationAngle = 0;
let animationFrameId = null;

function animateLogo() {
    rotationAngle += 0.5;
    logo.style.transform = `rotate(${rotationAngle}deg)`;
    animationFrameId = requestAnimationFrame(animateLogo);
}

function toggleLogoSpin(shouldSpin) {
    if (shouldSpin) {
        if (!animationFrameId) {
            animationFrameId = requestAnimationFrame(animateLogo);
        }
    } else {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    }
}

music.addEventListener('play', () => {
    toggleLogoSpin(true);
});

music.addEventListener('pause', () => {
    toggleLogoSpin(false);
});

music.addEventListener('ended', () => {
    toggleLogoSpin(false);
});

function initNewPlayer() {
  updateVolume(50);
}

function updateTrackInfo(index) {
  const track = songs[index];
  if (track) {
    newTrackImage.src = track.poster;
    newTrackTitle.textContent = track.songName;
    newTrackType.textContent = getTrackTypeText(track.genre);
  }
}

function getTrackTypeText(genre) {
  const types = {
    'Basic beats': 'Basic Beat',
    'Sample beats': 'Sample Beat',
    'Piano beats': 'Piano Beat',
    'guitar beats': 'guitar Beat',
    'Strings beats': 'Strings Beat',
    'Golden beats': 'Golden Beat'
  };
  return types[genre] || 'Beat';
}

function playTrack(index) {
  if (index < 0 || index >= songs.length) return;
  
  const track = songs[index];
  const audioPath = track.url;
  
  console.log('🎵 Loading RAW:', audioPath);
  
  if (currentTrackIndex === index && music.src) {
    if (music.paused) {
      music.play().then(() => {
        isPlaying = true;
        updatePlayPauseButton();
        updateAllPlayIcons();
      });
    } else {
      music.pause();
      isPlaying = false;
      updatePlayPauseButton();
      updateAllPlayIcons();
    }
    return;
  }
  
  currentTrackIndex = index;
  music.src = audioPath;
  
  updateTrackInfo(index);
  newPlayer.classList.remove('hidden');
  
  music.play().then(() => {
    isPlaying = true;
    updatePlayPauseButton();
    updateAllPlayIcons();
    console.log('✅ Playing:', track.songName);
  }).catch(error => {
    console.error('❌ Play error:', error);
  });
}

function updatePlayPauseButton() {
  const icon = newPlayPauseBtn.querySelector('i');
  if (isPlaying) {
    icon.classList.remove('bi-play-fill');
    icon.classList.add('bi-pause-fill');
  } else {
    icon.classList.remove('bi-pause-fill');
    icon.classList.add('bi-play-fill');
  }
}

function updateVolume(value) {
  const volume = value / 100;
  music.volume = volume;
  newVolumeSlider.value = value;
  volumeProgress.style.width = value + '%';
  
  const volumeIcon = newVolumeBtn.querySelector('i');
  volumeIcon.className = 'bi ';
  
  if (value == 0) {
    volumeIcon.classList.add('bi-volume-mute-fill');
  } else if (value <= 50) {
    volumeIcon.classList.add('bi-volume-down-fill');
  } else {
    volumeIcon.classList.add('bi-volume-up-fill');
  }
}

music.addEventListener('play', () => {
  isPlaying = true;
  updatePlayPauseButton();
  updateAllPlayIcons();
});

music.addEventListener('pause', () => {
  isPlaying = false;
  updatePlayPauseButton();
  updateAllPlayIcons();
});

let lastUpdateTime = 0;
let lastCurrentTime = 0;
let nextCurrentTime = 0;

music.addEventListener('timeupdate', () => {
  lastUpdateTime = performance.now();
  lastCurrentTime = music.currentTime;
  nextCurrentTime = lastCurrentTime + 0.25;
});

let progressAnimationFrame;

function startProgressAnimation() {
  cancelAnimationFrame(progressAnimationFrame);
  const animate = () => {
    if (music.duration && !isDragging) {
      const progress = (music.currentTime / music.duration) * 100;
      playerProgress.style.width = `${progress}%`;

      const currentMinutes = Math.floor(music.currentTime / 60);
      const currentSeconds = Math.floor(music.currentTime % 60);
      currentTimeTooltip.textContent = `${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`;
      currentTimeTooltip.style.left = `${progress}%`;
    }

    if (!music.paused) {
      progressAnimationFrame = requestAnimationFrame(animate);
    }
  };
  progressAnimationFrame = requestAnimationFrame(animate);
}


music.addEventListener('play', startProgressAnimation);
music.addEventListener('pause', () => cancelAnimationFrame(progressAnimationFrame));



music.addEventListener('ended', () => {
  music.currentTime = 0;
  music.play();
});



function toggleMute() {
  if (music.volume > 0) {
    music.dataset.previousVolume = music.volume;
    music.volume = 0;
    newVolumeSlider.value = 0;
    updateVolume(0);
  } else {
    const previousVolume = music.dataset.previousVolume || 0.5;
    music.volume = previousVolume;
    const volumePercent = Math.round(previousVolume * 100);
    newVolumeSlider.value = volumePercent;
    updateVolume(volumePercent);
  }
}

function updateAllPlayIcons() {
  Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    const elementId = element.id;
    const trackIndex = songs.findIndex(song => song.id === elementId);
    
    if (trackIndex === currentTrackIndex && !music.paused) {
      element.classList.remove('bi-play-circle');
      element.classList.add('bi-pause-circle');
    } else {
      element.classList.remove('bi-pause-circle');
      element.classList.add('bi-play-circle');
    }
  });
}

newPlayPauseBtn.addEventListener('click', () => {
  if (music.paused) {
    if (!music.src) {
      playTrack(0);
    } else {
      music.play();
    }
  } else {
    music.pause();
  }
});

newVolumeSlider.addEventListener('input', (e) => {
  updateVolume(e.target.value);
});

document.querySelector('.player-progress-bar').addEventListener('click', (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  music.currentTime = percent * music.duration;
});

const progressBar = document.querySelector('.player-progress-bar');
let isDragging = false;
let dragPercent = 0;

progressBar.addEventListener('mousedown', (e) => {
  isDragging = true;
  updateDragProgress(e);
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    updateDragProgress(e);
  }
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    if (music.duration) {
      music.currentTime = dragPercent * music.duration;
    }
  }
});

function updateDragProgress(e) {
  const rect = progressBar.getBoundingClientRect();
  dragPercent = (e.clientX - rect.left) / rect.width;
  dragPercent = Math.max(0, Math.min(1, dragPercent));

  document.querySelector('.player-progress').style.width = (dragPercent * 100) + '%';
  currentTimeTooltip.style.left = `${dragPercent * 100}%`;

  if (music.duration) {
    const previewTime = dragPercent * music.duration;
    const mins = Math.floor(previewTime / 60);
    const secs = Math.floor(previewTime % 60);
    currentTimeTooltip.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
}


newBackBtn.addEventListener('click', () => {
  let newIndex = currentTrackIndex - 1;
  if (newIndex < 0) newIndex = songs.length - 1;
  playTrack(newIndex);
});

newNextBtn.addEventListener('click', () => {
  let newIndex = currentTrackIndex + 1;
  if (newIndex >= songs.length) newIndex = 0;
  playTrack(newIndex);
});

newVolumeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMute();
});

document.addEventListener('DOMContentLoaded', function() {
  const volumeControl = document.querySelector('.volume-control');
  const volumeSlider = document.getElementById('new-volume-slider');
  
  volumeControl.addEventListener('wheel', function(e) {
    e.preventDefault();
    
    const delta = e.deltaY > 0 ? -5 : 5;
    let newVolume = parseInt(volumeSlider.value) + delta;
    
    newVolume = Math.max(0, Math.min(100, newVolume));
    volumeSlider.value = newVolume;
    updateVolume(newVolume);
  });
});
  
const currentTimeTooltip = document.querySelector('.current-time');
const durationTimeTooltip = document.querySelector('.duration-time');

function updateTimeTooltips() {
  if (!music.duration) return;
  
  const progressPercent = (music.currentTime / music.duration) * 100;
  const currentMinutes = Math.floor(music.currentTime / 60);
  const currentSeconds = Math.floor(music.currentTime % 60);
  
  currentTimeTooltip.textContent = `${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`;
  currentTimeTooltip.style.left = `${progressPercent}%`;
  
  const durationMinutes = Math.floor(music.duration / 60);
  const durationSeconds = Math.floor(music.duration % 60);
  
  durationTimeTooltip.textContent = `${durationMinutes.toString().padStart(2, '0')}:${durationSeconds.toString().padStart(2, '0')}`;
}

music.addEventListener('timeupdate', () => {
  updateTimeTooltips();
});

music.addEventListener('loadedmetadata', () => {
  updateTimeTooltips();
});


function updateProgress(e) {
  const progressBar = document.querySelector('.player-progress-bar');
  const rect = progressBar.getBoundingClientRect();
  let percent = (e.clientX - rect.left) / rect.width;
  
  percent = Math.max(0, Math.min(1, percent));
  
  if (music.duration) {
    music.currentTime = percent * music.duration;
  }
  
  document.querySelector('.player-progress').style.width = (percent * 100) + '%';
  updateTimeTooltips();
}




document.addEventListener('DOMContentLoaded', function() {
  initNewPlayer();
});



const translations = {
  ua: {
    "instrumentals": "instrumentals",
    "Жанри": "Жанри",
    "All Beats": "All Beats",
    "Basic beats": "Basic beats",
    "Sample beats": "Sample beats", 
    "Piano beats": "Piano beats",
    "guitar beats": "guitar beats",
    "Strings beats": "Strings beats",
    "Golden beats": "Golden beats",
    "Придбати від": "Придбати від",
    "Базові права": "Базові права",
    "Ексклюзивні права": "Ексклюзивні права",
    "Всі треки + ексклюзив": "Всі треки + ексклюзив",
    "Виберіть ліцензію для зв'язку в Telegram": "Виберіть ліцензію для зв’язку в Telegram",
    "🎧 WAV Lease (ліцензія на оренду у форматі WAV)": "🎧 WAV Lease (ліцензія на оренду у форматі WAV)",
    "💿 WAV Exclusive (ексклюзивна ліцензія у форматі WAV)": "💿 WAV Exclusive (ексклюзивна ліцензія у форматі WAV)",
    "🎚️ Track Out Exclusive (ексклюзив із розділеними доріжками)": "🎚️ Track Out Exclusive (ексклюзив із розділеними доріжками)",
    "Отримай високоякісний біт у форматі WAV для комерційного використання. Можеш записати свій трек, випустити його на всіх платформах і заробляти на монетизації. Біт залишається у продажу для інших артистів.": "Отримай високоякісний біт у форматі WAV для комерційного використання. Можеш записати свій трек, випустити його на всіх платформах і заробляти на монетизації. Біт залишається у продажу для інших артистів.",
    "• WAV-файл повної версії біта;": "• WAV-файл повної версії біта;",
    "• Комерційне використання (Spotify, YouTube, Apple Music тощо);": "• Комерційне використання (Spotify, YouTube, Apple Music тощо);",
    "• До 100 000 стрімів;": "• До 100 000 стрімів;",
    "• Право виступати з треком на концертах;": "• Право виступати з треком на концертах;",
    "• Не можна продавати або передавати права іншим.": "• Не можна продавати або передавати права іншим.",
     "Отримай ексклюзивні права на біт. Після покупки він видаляється з продажу та переходить у твоє повне користування. Ідеально для артистів, які хочуть унікальне звучання, яке більше ніхто не отримає.": "Отримай ексклюзивні права на біт. Після покупки він видаляється з продажу та переходить у твоє повне користування. Ідеально для артистів, які хочуть унікальне звучання, яке більше ніхто не отримає.",
    "Включає:": "Включає:",
    "• WAV-файл біта у найвищій якості;": "• WAV-файл біта у найвищій якості;",
    "• Необмежене комерційне використання;": "• Необмежене комерційне використання;",
    "• Ексклюзивні права;": "• Ексклюзивні права;",
    "• Біт більше не продається іншим;": "• Біт більше не продається іншим;",
    "• Можеш реєструвати трек у дистриб'юторах, збирати роялті тощо.": "• Можеш реєструвати трек у дистриб'юторах, збирати роялті тощо.",
    "• При покупці ексклюзива підписується юридичний контракт, який закріплює авторські права та умови використання бита.": "• При покупці ексклюзива підписується юридичний контракт, який закріплює авторські права та умови використання бита.",
    
    "Ексклюзивна ліцензія + усі окремі треки (stems) для професійного зведення. Це максимальний рівень контролю над звучанням — ти можеш змінювати баланс, ефекти, структуру біта.": "Ексклюзивна ліцензія + усі окремі треки (stems) для професійного зведення. Це максимальний рівень контролю над звучанням — ти можеш змінювати баланс, ефекти, структуру біта.",
    "• Усі доріжки біта (інструменти, ударні, бас тощо) у форматі WAV;": "• Усі доріжки біта (інструменти, ударні, бас тощо) у форматі WAV;",
    "• Біт видаляється з каталогу після покупки;": "• Біт видаляється з каталогу після покупки;",
    "• Ідеально для студійного продакшну та міксу.": "• Ідеально для студійного продакшну та міксу."
  },
  en: {
    "instrumentals": "instrumentals", 
    "Жанри": "Genres",
    "All Beats": "All Beats",
    "Basic beats": "Basic beats",
    "Sample beats": "Sample beats", 
    "Piano beats": "Piano beats",
    "guitar beats": "guitar beats",
    "Strings beats": "Strings beats",
    "Golden beats": "Golden beats",
    "Придбати від": "Buy from",
    "Базові права": "Basic rights",
    "Ексклюзивні права": "Exclusive rights", 
    "Всі треки + ексклюзив": "All tracks + exclusive",
    "Виберіть ліцензію для зв'язку в Telegram": "Select license for Telegram contact",
    "🎧 WAV Lease (ліцензія на оренду у форматі WAV)": "🎧 WAV Lease (license for rental in WAV format)",
    "💿 WAV Exclusive (ексклюзивна ліцензія у форматі WAV)": "💿 WAV Exclusive (exclusive license in WAV format)",
    "🎚️ Track Out Exclusive (ексклюзив із розділеними доріжками)": "🎚️ Track Out Exclusive (exclusive license with separated stems))",
    "Отримай високоякісний біт у форматі WAV для комерційного використання. Можеш записати свій трек, випустити його на всіх платформах і заробляти на монетизації. Біт залишається у продажу для інших артистів.": "Get exclusive rights to the beat. After purchase, it is removed from sale and becomes your full property. Perfect for artists who want a unique sound that no one else will have.",
    "• WAV-файл повної версії біта;": "• Full version WAV file of the beat;",
    "• Комерційне використання (Spotify, YouTube, Apple Music тощо);": "• Commercial use (Spotify, YouTube, Apple Music, etc.);",
    "• До 100 000 стрімів;": "• Up to 100,000 streams;",
    "• Право виступати з треком на концертах;": "• Right to perform the track at concerts;",
    "• Не можна продавати або передавати права іншим.": "• You cannot sell or transfer the rights to others.",
    "Отримай ексклюзивні права на біт. Після покупки він видаляється з продажу та переходить у твоє повне користування. Ідеально для артистів, які хочуть унікальне звучання, яке більше ніхто не отримає.": "Get exclusive rights to the beat. After purchase, it is removed from sale and becomes your full property. Ideal for artists who want unique sound that no one else will get.",
    "Включає:": "Includes:",
    "• WAV-файл біта у найвищій якості;": "• Highest-quality WAV file of the beat;",
    "• Необмежене комерційне використання;": "• Unlimited commercial use;",
    "• Ексклюзивні права;": "• Exclusive rights;",
    "• Біт більше не продається іншим;": "• The beat will no longer be sold to others;",
    "• Можеш реєструвати трек у дистриб'юторах, збирати роялті тощо.": "• You can register the track with distributors, collect royalties, etc.;",
    "• При покупці ексклюзива підписується юридичний контракт, який закріплює авторські права та умови використання бита.": "• Upon purchasing the exclusive license, a legal contract is signed to confirm copyright and usage terms of the beat.",
    
    "Ексклюзивна ліцензія + усі окремі треки (stems) для професійного зведення. Це максимальний рівень контролю над звучанням — ти можеш змінювати баланс, ефекти, структуру біта.": "An exclusive license plus all individual tracks (stems) for professional mixing. This is the highest level of control over the sound — you can adjust balance, effects, and the structure of the beat.",
    "• Усі доріжки біта (інструменти, ударні, бас тощо) у форматі WAV;": "• All beat tracks (instruments, drums, bass, etc.) in WAV format;",
    "• Біт видаляється з каталогу після покупки;": "• The beat is removed from the catalog after purchase;",
    "• Ідеально для студійного продакшну та міксу.": "• Perfect for studio production and mixing;"
  },
  de: {
    "instrumentals": "instrumentals",
    "Жанри": "Genres", 
    "Усі бити": "Alle Beats",
    "Basic beats": "Basic beats",
    "Sample beats": "Sample beats", 
    "Piano beats": "Piano beats",
    "guitar beats": "guitar beats",
    "Strings beats": "Strings beats",
    "Golden beats": "Golden beats",
    "Придбати від": "Kaufen ab",
    "Базові права": "Basisrechte",
    "Ексклюзивні права": "Exklusivrechte",
    "Всі треки + ексклюзив": "Alle Tracks + Exklusiv",
    "Виберіть ліцензію для зв'язку в Telegram": "Lizenz für Telegram-Kontakt auswählen",
    "🎧 WAV Lease (ліцензія на оренду у форматі WAV)": "🎧 WAV Lease (Lizenz zur Nutzung im WAV-Format)",
    "💿 WAV Exclusive (ексклюзивна ліцензія у форматі WAV)": "💿 WAV Exclusive (exklusive Lizenz im WAV-Format)",
    "🎚️ Track Out Exclusive (ексклюзив із розділеними доріжками)": "🎚️ Track Out Exclusive (exklusive Lizenz mit getrennten Spuren)",
    "Отримай високоякісний біт у форматі WAV для комерційного використання. Можеш записати свій трек, випустити його на всіх платформах і заробляти на монетизації. Біт залишається у продажу для інших артистів.": "Erhalte exklusive Rechte an dem Beat. Nach dem Kauf wird er aus dem Verkauf genommen und geht vollständig in deinen Besitz über. Ideal für Künstler, die einen einzigartigen Sound möchten, den niemand sonst bekommt.",
    "• WAV-файл повної версії біта;": "• WAV-Datei der vollständigen Beat-Version;",
    "• Комерційне використання (Spotify, YouTube, Apple Music тощо);": "• Kommerzielle Nutzung (Spotify, YouTube, Apple Music usw.);",
    "• До 100 000 стрімів;": "• Bis zu 100.000 Streams;",
    "• Право виступати з треком на концертах;": "• Recht, den Track bei Konzerten aufzuführen;",
    "• Не можна продавати або передавати права іншим.": "• Weiterverkauf oder Übertragung der Rechte an Dritte ist nicht erlaubt.",
    "Отримай ексклюзивні права на біт. Після покупки він видаляється з продажу та переходить у твоє повне користування. Ідеально для артистів, які хочуть унікальне звучання, яке більше ніхто не отримає.": "Erhalte exklusive Rechte am Beat. Nach dem Kauf wird er aus dem Verkauf entfernt und geht in dein volles Eigentum über. Ideal für Künstler, die einen einzigartigen Sound wollen, den niemand sonst bekommt.",
    "Включає:": "Beinhaltet:",
    "• WAV-файл біта у найвищій якості;": "• WAV-Datei des Beats in höchster Qualität;",
    "• Необмежене комерційне використання;": "• Unbegrenzte kommerzielle Nutzung;",
    "• Ексклюзивні права;": "• Exklusive Rechte;",
    "• Біт більше не продається іншим;": "• Der Beat wird nicht mehr an andere verkauft;",
    "• Можеш реєструвати трек у дистриб'юторах, збирати роялті тощо.": "• Du kannst den Track bei Distributoren registrieren, Tantiemen sammeln usw.;",
    "• При покупці ексклюзива підписується юридичний контракт, який закріплює авторські права та умови використання бита.": "• Beim Kauf der Exklusivlizenz wird ein rechtsgültiger Vertrag unterzeichnet, der die Urheberrechte und Nutzungsbedingungen des Beats festlegt.",
    
    "Ексклюзивна ліцензія + усі окремі треки (stems) для професійного зведення. Це максимальний рівень контролю над звучанням — ти можеш змінювати баланс, ефекти, структуру біта.": "Exklusive Lizenz plus alle einzelnen Spuren (Stems) für professionelles Mixing. Das ist die höchste Kontrolle über den Sound – du kannst Balance, Effekte und die Struktur des Beats anpassen.",
    "• Усі доріжки біта (інструменти, ударні, бас тощо) у форматі WAV;": "• Alle Spuren des Beats (Instrumente, Drums, Bass usw.) im WAV-Format;",
    "• Біт видаляється з каталогу після покупки;": "• Der Beat wird nach dem Kauf aus dem Katalog entfernt;",
    "• Ідеально для студійного продакшну та міксу.": "• Ideal für Studio-Production und Mixing;"
  }
};

function changeLanguage(lang) {
  document.body.classList.remove('lang-ua', 'lang-en', 'lang-de');
  document.body.classList.add(`lang-${lang}`);
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(btn => {
    btn.classList.add('active');
  });
  
  const translation = translations[lang];
  
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translation[key]) {
      element.textContent = translation[key];
    }
  });
  
  localStorage.setItem('preferredLanguage', lang);
}

function initLanguageSwitcher() {
  const savedLang = localStorage.getItem('preferredLanguage') || 'ua';
  
  changeLanguage(savedLang);
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
}



document.addEventListener('DOMContentLoaded', function() {
    generateBeats();
    initLanguageSwitcher();
});

const mobileFixCSS = `
@media (max-width: 768px) {
  .pricing-dropdown .pricing-options {
    position: absolute !important;
    left: 0 !important;
    top: 100% !important;
    transform: none !important;
    width: 100% !important;
    max-width: 100% !important;
    z-index: 1000 !important;
  }
  
  .license-option {
    padding: 12px !important;
    min-height: auto !important;
  }
  
  .buy-btn, .license-option {
    cursor: pointer !important;
    -webkit-tap-highlight-color: transparent !important;
  }
  
  /* Увеличиваем область клика для мобильных */
  .license-option {
    min-height: 44px !important;
    display: flex !important;
    align-items: center !important;
  }
}
`;

const style = document.createElement('style');
style.textContent = mobileFixCSS;
document.head.appendChild(style);

(function() {
    'use strict';
    
    function isLocalHost() {
        const hostname = window.location.hostname;
        const protocol = window.location.protocol;
        
        if (protocol === 'file:') return true;
        if (hostname === '') return true;
        if (hostname === 'localhost') return true;
        if (hostname === '127.0.0.1') return true;
        if (hostname.startsWith('192.168.')) return true;
        if (hostname.startsWith('10.0.')) return true;
        if (hostname.startsWith('172.')) return true;
        if (hostname.endsWith('.local')) return true;
        
        return false;
    }
    
    const isLocal = isLocalHost();
    
    if (!isLocal) {
        console.log('🔒 Активирована защита Oksyol Production');
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12') {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            
            if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            
            if (e.ctrlKey && e.shiftKey && e.key === 'J') {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            
            if (e.ctrlKey && e.shiftKey && e.key === 'C') {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            
            if (e.ctrlKey && e.key === 'U') {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            
            if (e.ctrlKey && e.key === 'S') {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            
            if (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }, true);
        
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }, true);
        
        
        function detectDevTools() {
            const start = Date.now();
            debugger;
            const end = Date.now();
            
            if (end - start > 100) {
                document.body.innerHTML = `
                    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #0a0a0a; color: white; font-family: Arial, sans-serif;">
                        <div style="text-align: center; padding: 20px;">
                            <h1 style="color: #ff4444; margin-bottom: 50px;">🚫 Инструменты разработчика отключены</h1>
                            <p>В целях безопасности использование DevTools запрещено.</p>
                            <p style="color: #888; margin-top: 20px; font-size: 14px;">Oksyol Prod Security System</p>
                        </div>
                    </div>
                `;
                setInterval(() => { debugger; }, 100);
            }
        }
        
        setInterval(detectDevTools, 1000);
        
        const originalConsole = {
            log: console.log,
            warn: console.warn,
            error: console.error,
            info: console.info,
            debug: console.debug
        };
        
        console.log = function() {};
        console.warn = function() {};
        console.error = function() {};
        console.info = function() {};
        console.debug = function() {};
        console.clear = function() {};
        
        Object.defineProperty(window, 'console', {
            get: function() {
                return {
                    log: function() {},
                    warn: function() {},
                    error: function() {},
                    info: function() {},
                    debug: function() {},
                    clear: function() {}
                };
            },
            set: function() {}
        });
        
    } else {
        console.log('🔓 Локальный режим - все инструменты доступны');
    }
    
})();

function updateLanguageButtonPosition() {
  const languageBtn = document.querySelector('.floating-language');
  const player = document.querySelector('.new-player');
  
  if (player && !player.classList.contains('hidden')) {
    languageBtn.style.bottom = '90px';
  } else {
    languageBtn.style.bottom = '40px';
  }
}

music.addEventListener('play', () => {
  setTimeout(updateLanguageButtonPosition, 100);
});

music.addEventListener('pause', () => {
  setTimeout(updateLanguageButtonPosition, 100);
});

window.addEventListener('resize', updateLanguageButtonPosition);