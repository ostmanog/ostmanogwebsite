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
        genre: "trap"
    },
    {
        id:'2',
        songName: `ya medaly`,
        poster: "assets/images/8.jpg", 
        genre: "trap"
    },
    {
        id:'3',
        songName: `No 3`,
        poster: "assets/images/8.jpg",
        genre: "rap"
    },
    {
        id:'4',
        songName: `No 2`,
        poster: "assets/images/8.jpg",
        genre: "rap"
    },
    {
        id:'5',
        songName: `trap 4`,
        poster: "assets/images/8.jpg",
        genre: "boom-bap"
    },
    {
        id:'6',
        songName: `litovsky`,
        poster: "assets/images/8.jpg",
        genre: "trap"
    },
    {
        id:'7',
        songName: `knof`,
        poster: "assets/images/8.jpg",
        genre: "trap"
    },
    {
        id:'8',
        songName: `demo 😈`,
        poster: "assets/images/8.jpg",
        genre: "trap"
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

function initNewPlayer() {
  updateVolume(1);
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
  const audioPath = `assets/beats/${track.id}.mp3?v=${Date.now()}`;
  
  if (currentTrackIndex === index && music.src) {
    if (music.paused) {
      music.play().then(() => {
        isPlaying = true;
        updatePlayPauseButton();
        updateAllPlayIcons();
      }).catch(error => {
        console.error('Ошибка воспроизведения:', error);
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
  
  music.onerror = function() {
    console.error('Ошибка загрузки аудио:', audioPath);
  };
  
  updateTrackInfo(index);
  newPlayer.classList.remove('hidden');
  
  music.play().then(() => {
    isPlaying = true;
    updatePlayPauseButton();
    updateAllPlayIcons();
  }).catch(error => {
    console.error('Ошибка воспроизведения:', error);
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

// Кнопки плеера
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

// ФИКС ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ - РАБОТАЕТ КАК НА ПК
document.addEventListener('DOMContentLoaded', function() {
  // Переинициализация выпадающих меню для мобильных
  document.querySelectorAll('.pricing-dropdown').forEach((dropdown, index) => {
    const button = dropdown.querySelector('.buy-btn');
    
    // Удаляем старые обработчики
    const newButton = button.cloneNode(true);
    button.parentNode.replaceChild(newButton, button);
    
    // Добавляем обработчики для новой кнопки
    newButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      document.querySelectorAll('.pricing-dropdown').forEach(other => {
        if (other !== dropdown) other.classList.remove('active');
      });
      dropdown.classList.toggle('active');
    });
    
    // Добавляем touch события для мобильных
    newButton.addEventListener('touchend', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      document.querySelectorAll('.pricing-dropdown').forEach(other => {
        if (other !== dropdown) other.classList.remove('active');
      });
      dropdown.classList.toggle('active');
    });

    // Обновляем обработчики для опций лицензий
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
      
      // Добавляем touch события для опций
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

  // Закрытие меню при клике вне его
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

// Убираем фиксированное позиционирование для мобильных - оставляем как на ПК
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

// Добавляем стили в head
const style = document.createElement('style');
style.textContent = mobileFixCSS;
document.head.appendChild(style);

