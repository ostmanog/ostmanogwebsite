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

const songs = [
    {
        id:'1',
        songName: `No 1`,
        poster: "assets/images/8.jpg",
        genre: "trap",
        url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/1.mp3"
    },
    {
        id:'2',
        songName: `ya medaly`,
        poster: "assets/images/8.jpg", 
        genre: "trap",
        url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/2.mp3"
    },
    {
        id:'3',
        songName: `No 3`,
        poster: "assets/images/8.jpg",
        genre: "rap",
        url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/3.mp3"
    },
    {
        id:'4', 
        songName: `No 2`,
        poster: "assets/images/8.jpg",
        genre: "rap",
        url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/4.mp3"
    },
    {
        id:'5',
        songName: `trap 4`,
        poster: "assets/images/8.jpg",
        genre: "boom-bap", 
        url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/5.mp3"
    },
    {
        id:'6',
        songName: `litovsky`,
        poster: "assets/images/8.jpg",
        genre: "trap",
        url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/6.mp3"
    },
    {
        id:'7',
        songName: `knof`,
        poster: "assets/images/8.jpg", 
        genre: "trap",
        url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/7.mp3"
    },
    {
        id:'8',
        songName: `demo`,
        poster: "assets/images/8.jpg",
        genre: "trap",
        url: "https://raw.githubusercontent.com/ostmanog/ostmanogwebsite/main/assets/beats/8.mp3"
    }
];




function filterBeats(genre) {
    const beatItems = document.querySelectorAll('.image-info-container');
    const filterButtons = document.querySelectorAll('.genre-filter');
    
    filterButtons.forEach(button => {
        button.classList.remove('active');
    });
    

    event.target.classList.add('active');
    
    beatItems.forEach((item, index) => {
        if (genre === 'all') {
            item.style.display = 'flex';
        } else {
            const songGenre = songs[index]?.genre;
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


Array.from(document.getElementsByClassName('image-info-container')).forEach((container, i)=>{
  const img = container.querySelector('.image-container img');
  const title = container.querySelector('.info h2');
  
  if (img && songs[i]) {
    img.src = songs[i].poster;
  }
  if (title && songs[i]) {
    title.innerHTML = songs[i].songName;
  }
  
  if (songs[i]) {
    container.setAttribute('data-genre', songs[i].genre);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.pricing-dropdown').forEach((dropdown, index) => {
    const button = dropdown.querySelector('.buy-btn');
    
    const beatTitleElement = dropdown.closest('.image-info-container').querySelector('#title');
    const beatTitle = beatTitleElement ? beatTitleElement.textContent : 'Unknown Beat';
    
    button.addEventListener('click', function(e) {
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

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.pricing-dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
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
  updateVolume(70);
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
    'trap': 'Trap Beat',
    'rap': 'Rap Beat', 
    'boom-bap': 'Boom Bap Beat'
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
  let newIndex = currentTrackIndex + 1;
  if (newIndex >= songs.length) newIndex = 0;
  playTrack(newIndex);
});

Array.from(document.getElementsByClassName('playListPlay')).forEach((element, index) => {
  element.addEventListener('click', (e) => {
    e.stopPropagation();
    
    const elementId = element.id;
    console.log('Clicked element ID:', elementId, 'Array index:', index);
    
    const trackIndex = songs.findIndex(song => song.id === elementId);
    console.log('Found track index:', trackIndex);
    
    if (trackIndex !== -1) {
      playTrack(trackIndex);
    } else {
      console.error('Трек не найден для ID:', elementId);
    }
  });
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

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.pricing-dropdown').forEach((dropdown, index) => {
    const button = dropdown.querySelector('.buy-btn');
    
    const newButton = button.cloneNode(true);
    button.parentNode.replaceChild(newButton, button);
    
    newButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      document.querySelectorAll('.pricing-dropdown').forEach(other => {
        if (other !== dropdown) other.classList.remove('active');
      });
      dropdown.classList.toggle('active');
    });
    
    newButton.addEventListener('touchend', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      document.querySelectorAll('.pricing-dropdown').forEach(other => {
        if (other !== dropdown) other.classList.remove('active');
      });
      dropdown.classList.toggle('active');
    });

    dropdown.querySelectorAll('.license-option').forEach(option => {
      const newOption = option.cloneNode(true);
      option.parentNode.replaceChild(newOption, option);
      
      newOption.addEventListener('click', function() {
        const licenseType = this.getAttribute('data-license');
        const price = this.getAttribute('data-price');
        const licenseName = this.querySelector('.license-name').textContent;
        const beatTitle = dropdown.closest('.image-info-container').querySelector('#title').textContent;
        
        const message = `Привіт! Хочу придбати біт "${beatTitle}"\nЛицензия: ${licenseName} (${price}$)`;
        const encodedMessage = encodeURIComponent(message);
        const telegramUrl = `https://t.me/sixbmxbo?text=${encodedMessage}`;
        
        window.open(telegramUrl, '_blank');
        dropdown.classList.remove('active');
      });
      
      newOption.addEventListener('touchend', function(e) {
        e.preventDefault();
        const licenseType = this.getAttribute('data-license');
        const price = this.getAttribute('data-price');
        const licenseName = this.querySelector('.license-name').textContent;
        const beatTitle = dropdown.closest('.image-info-container').querySelector('#title').textContent;
        
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

  document.addEventListener('touchstart', function(e) {
    if (!e.target.closest('.pricing-dropdown')) {
      document.querySelectorAll('.pricing-dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
});

// Языковые данные
const translations = {
  ua: {
    "instrumentals": "instrumentals",
    "Жанри": "Жанри",
    "Усі бити": "Усі бити",
    "Треп": "Треп", 
    "Реп": "Реп",
    "Бум-беп": "Бум-беп",
    "Придбати від": "Придбати від",
    "Базові права": "Базові права",
    "Ексклюзивні права": "Ексклюзивні права",
    "Всі треки + ексклюзив": "Всі треки + ексклюзив",
    "Виберіть ліцензію для зв'язку в Telegram": "Виберіть ліцензію для зв'язку в Telegram",
    "🎧 WAV Lease (ліцензія на оренду у форматі WAV)": "🎧 WAV Lease (ліцензія на оренду у форматі WAV)",
    "💿 WAV Exclusive (ексклюзивна ліцензія у форматі WAV)": "💿 WAV Exclusive (ексклюзивна ліцензія у форматі WAV)",
    "🎚️ Track Out Exclusive (ексклюзив із розділеними доріжками)": "🎚️ Track Out Exclusive (ексклюзив із розділеними доріжками)",
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
    "Усі бити": "All Beats",
    "Треп": "Trap",
    "Реп": "Rap",
    "Бум-беп": "Boom Bap",
    "Придбати від": "Buy from",
    "Базові права": "Basic rights",
    "Ексклюзивні права": "Exclusive rights", 
    "Всі треки + ексклюзив": "All tracks + exclusive",
    "Виберіть ліцензію для зв'язку в Telegram": "Select license for Telegram contact",
    "🎧 WAV Lease (ліцензія на оренду у форматі WAV)": "🎧 WAV Lease (WAV format rental license)",
    "💿 WAV Exclusive (ексклюзивна ліцензія у форматі WAV)": "💿 WAV Exclusive (exclusive license in WAV format)",
    "🎚️ Track Out Exclusive (ексклюзив із розділеними доріжками)": "🎚️ Track Out Exclusive (exclusive with separate tracks)",
    "Отримай високоякісний біт у форматі WAV для комерційного використання. Можеш записати свій трек, випустити його на всіх платформах і заробляти на монетизації. Біт залишається у продажу для інших артистів.": "Get a high-quality beat in WAV format for commercial use. You can record your track, release it on all platforms and earn from monetization. The beat remains on sale for other artists.",
    "• WAV-файл повної версії біта;": "• WAV file of the full beat version;",
    "• Комерційне використання (Spotify, YouTube, Apple Music тощо);": "• Commercial use (Spotify, YouTube, Apple Music, etc.);",
    "• До 100 000 стрімів;": "• Up to 100,000 streams;",
    "• Право виступати з треком на концертах;": "• Right to perform the track at concerts;",
    "• Не можна продавати або передавати права іншим.": "• Cannot sell or transfer rights to others.",
    "Отримай ексклюзивні права на біт. Після покупки він видаляється з продажу та переходить у твоє повне користування. Ідеально для артистів, які хочуть унікальне звучання, яке більше ніхто не отримає.": "Get exclusive rights to the beat. After purchase, it is removed from sale and becomes your full property. Ideal for artists who want unique sound that no one else will get.",
    "Включає:": "Includes:",
    "• WAV-файл біта у найвищій якості;": "• WAV file of the beat in highest quality;",
    "• Необмежене комерційне використання;": "• Unlimited commercial use;",
    "• Ексклюзивні права;": "• Exclusive rights;",
    "• Біт більше не продається іншим;": "• Beat is no longer sold to others;",
    "• Можеш реєструвати трек у дистриб'юторах, збирати роялті тощо.": "• You can register the track with distributors, collect royalties, etc.",
    "• При покупці ексклюзива підписується юридичний контракт, який закріплює авторські права та умови використання бита.": "• When purchasing exclusive, a legal contract is signed that secures copyright and terms of beat usage.",
    
    "Ексклюзивна ліцензія + усі окремі треки (stems) для професійного зведення. Це максимальний рівень контролю над звучанням — ти можеш змінювати баланс, ефекти, структуру біта.": "Exclusive license + all separate tracks (stems) for professional mixing. This is the maximum level of control over the sound - you can change the balance, effects, structure of the beat.",
    "• Усі доріжки біта (інструменти, ударні, бас тощо) у форматі WAV;": "• All beat tracks (instruments, drums, bass, etc.) in WAV format;",
    "• Біт видаляється з каталогу після покупки;": "• Beat is removed from catalog after purchase;",
    "• Ідеально для студійного продакшну та міксу.": "• Ideal for studio production and mixing."
  },
  de: {
    "instrumentals": "instrumentals",
    "Жанри": "Genres", 
    "Усі бити": "Alle Beats",
    "Треп": "Trap",
    "Реп": "Rap",
    "Бум-беп": "Boom Bap",
    "Придбати від": "Kaufen ab",
    "Базові права": "Basisrechte",
    "Ексклюзивні права": "Exklusivrechte",
    "Всі треки + ексклюзив": "Alle Tracks + Exklusiv",
    "Виберіть ліцензію для зв'язку в Telegram": "Lizenz für Telegram-Kontakt auswählen",
    "🎧 WAV Lease (ліцензія на оренду у форматі WAV)": "🎧 WAV Lease (Lizenz zur Miete im WAV-Format)",
    "💿 WAV Exclusive (ексклюзивна ліцензія у форматі WAV)": "💿 WAV Exclusive (exklusive Lizenz im WAV-Format)",
    "🎚️ Track Out Exclusive (ексклюзив із розділеними доріжками)": "🎚️ Track Out Exclusive (Exklusiv mit getrennten Spuren)",
    "Отримай високоякісний біт у форматі WAV для комерційного використання. Можеш записати свій трек, випустити його на всіх платформах і заробляти на монетизації. Біт залишається у продажу для інших артистів.": "Erhalte einen hochwertigen Beat im WAV-Format für die kommerzielle Nutzung. Du kannst deinen Track aufnehmen, auf allen Plattformen veröffentlichen und mit Monetarisierung Geld verdienen. Der Beat bleibt für andere Künstler im Verkauf.",
    "• WAV-файл повної версії біта;": "• WAV-Datei der vollständigen Beat-Version;",
    "• Комерційне використання (Spotify, YouTube, Apple Music тощо);": "• Kommerzielle Nutzung (Spotify, YouTube, Apple Music, etc.);",
    "• До 100 000 стрімів;": "• Bis zu 100.000 Streams;",
    "• Право виступати з треком на концертах;": "• Recht, den Track bei Konzerten aufzuführen;",
    "• Не можна продавати або передавати права іншим.": "• Kann Rechte nicht verkaufen oder an andere übertragen.",
    "Отримай ексклюзивні права на біт. Після покупки він видаляється з продажу та переходить у твоє повне користування. Ідеально для артистів, які хочуть унікальне звучання, яке більше ніхто не отримає.": "Erhalte exklusive Rechte am Beat. Nach dem Kauf wird er aus dem Verkauf entfernt und geht in dein volles Eigentum über. Ideal für Künstler, die einen einzigartigen Sound wollen, den niemand sonst bekommt.",
    "Включає:": "Beinhaltet:",
    "• WAV-файл біта у найвищій якості;": "• WAV-Datei des Beats in höchster Qualität;",
    "• Необмежене комерційне використання;": "• Unbegrenzte kommerzielle Nutzung;",
    "• Ексклюзивні права;": "• Exklusivrechte;",
    "• Біт більше не продається іншим;": "• Beat wird nicht mehr an andere verkauft;",
    "• Можеш реєструвати трек у дистриб'юторах, збирати роялті тощо.": "• Du kannst den Track bei Distributoren registrieren, Tantiemen sammeln usw.",
    "• При покупці ексклюзива підписується юридичний контракт, який закріплює авторські права та умови використання бита.": "• Beim Kauf von Exklusiv wird ein rechtlicher Vertrag unterzeichnet, der Urheberrechte und Nutzungsbedingungen des Beats sichert.",
    
    "Ексклюзивна ліцензія + усі окремі треки (stems) для професійного зведення. Це максимальний рівень контролю над звучанням — ти можеш змінювати баланс, ефекти, структуру біта.": "Exklusive Lizenz + alle einzelnen Tracks (Stems) für professionelles Mixing. Dies ist die maximale Kontrolle über den Sound - du kannst das Gleichgewicht, Effekte, Struktur des Beats ändern.",
    "• Усі доріжки біта (інструменти, ударні, бас тощо) у форматі WAV;": "• Alle Beat-Tracks (Instrumente, Drums, Bass etc.) im WAV-Format;",
    "• Біт видаляється з каталогу після покупки;": "• Beat wird nach dem Kauf aus dem Katalog entfernt;",
    "• Ідеально для студійного продакшну та міксу.": "• Ideal für Studio-Produktion und Mixing."
  }
};

// Функция смены языка
function changeLanguage(lang) {
  // Обновляем активные кнопки
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(btn => {
    btn.classList.add('active');
  });
  
  const translation = translations[lang];
  
  // Обновляем текст на странице
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translation[key]) {
      element.textContent = translation[key];
    }
  });
  
  // Сохраняем выбор языка
  localStorage.setItem('preferredLanguage', lang);
}

// Инициализация языкового переключателя
function initLanguageSwitcher() {
  // Проверяем сохраненный язык
  const savedLang = localStorage.getItem('preferredLanguage') || 'ua';
  
  // Устанавливаем сохраненный язык
  changeLanguage(savedLang);
  
  // Обработчики для кнопок выбора языка
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
}

// Пранк-заставка
function initPrankOverlay() {
  const overlay = document.getElementById('prank-overlay');
  const okBtn = document.getElementById('prank-ok-btn');
  const countdownEl = document.getElementById('countdown');
  const randomIpEl = document.getElementById('random-ip');
  const deviceTypeEl = document.getElementById('device-type');
  
  // Генерируем случайный IP
  function generateRandomIP() {
    return Math.floor(Math.random() * 255);
  }
  
  // Определяем тип устройства
  function getDeviceType() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return isMobile ? 'Мобильное устройство' : 'Компьютер';
  }
  
  // Запускаем обратный отсчет
  function startCountdown() {
    let seconds = 10;
    const countdownInterval = setInterval(() => {
      countdownEl.textContent = seconds;
      seconds--;
      
      if (seconds < 0) {
        clearInterval(countdownInterval);
        // Если не нажали кнопку - все равно скрываем
        hidePrankOverlay();
      }
    }, 1000);
  }
  
  // Скрываем заставку
  function hidePrankOverlay() {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      overlay.style.display = 'none';
      // Запускаем нормальную инициализацию сайта
      initNormalSite();
    }, 500);
  }
  
  // Инициализация нормального сайта
  function initNormalSite() {
    // Здесь твой обычный код инициализации
    console.log('Сайт загружен нормально');
  }
  
  // Инициализация пранка
  function initPrank() {
    // Устанавливаем случайные данные
    randomIpEl.textContent = generateRandomIP();
    deviceTypeEl.textContent = getDeviceType();
    
    // Запускаем отсчет
    startCountdown();
    
    // Обработчик кнопки
    okBtn.addEventListener('click', hidePrankOverlay);
    
    // Добавляем звук (опционально)
    playPrankSound();
  }
  
  // Звук для пранка (опционально)
  function playPrankSound() {
    try {
      const audio = new Audio();
      audio.src = "https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3";
      audio.volume = 0.3;
      audio.play();
    } catch (error) {
      console.log("Звук не воспроизводится");
    }
  }
  
  // Запускаем пранк при загрузке
  setTimeout(initPrank, 500);
}

// Запускаем когда DOM загружен
document.addEventListener('DOMContentLoaded', function() {
  // Сначала показываем пранк, потом остальную инициализацию
  initPrankOverlay();
});

// Отключаем скролл во время пранка
document.body.style.overflow = 'hidden';

// После скрытия пранка возвращаем скролл
function initNormalSite() {
  document.body.style.overflow = '';
  // Твоя обычная инициализация
  if (typeof initLanguageSwitcher === 'function') initLanguageSwitcher();
  // другие твои функции инициализации...
}

// Добавляем в DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
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

