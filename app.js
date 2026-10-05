// Pehchaan (पहचान) - Lucknow Campus Blind Dating Engine
// Exclusively for Lucknow College Students

// Web Audio API Sound Synthesizer for Ringing, Chimes, and Reveal effects
class SoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playRevealChime() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.12);
        gain.gain.setValueAtTime(0.3, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.6);
      });
    } catch (e) {
      console.warn('Audio not allowed or supported', e);
    }
  }

  playRingtone() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.frequency.setValueAtTime(440, now);
      osc2.frequency.setValueAtTime(480, now);
      osc1.type = 'sine';
      osc2.type = 'sine';

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.2);
      osc2.stop(now + 1.2);
    } catch (e) {
      console.warn(e);
    }
  }
}

const sounds = new SoundEngine();

// Top Lucknow College Sample Database
const DEFAULT_STUDENTS = [
  {
    id: 'lko-1',
    name: 'Ananya Verma',
    age: 20,
    gender: 'Female',
    college: 'Lucknow University (LU)',
    course: 'B.A. English Hons • 2nd Year',
    hobbies: ['Urdu Poetry', 'Kathak', 'Gomti Riverfront Walks', 'Sharma Ji Chai'],
    bio: 'Looking for deep talks, old Lucknow architecture walks, and genuine vibes. Chai over coffee any day!',
    hangout: 'Gomti Riverfront & Hazratganj',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    matchScore: 96,
    status: 'REQUEST_RECEIVED', // Received request to demonstrate Reveal flow
  },
  {
    id: 'lko-2',
    name: 'Kabir Tripathi',
    age: 21,
    gender: 'Male',
    college: 'IET Lucknow',
    course: 'B.Tech CSE • 3rd Year',
    hobbies: ['Competitive Coding', 'Acoustic Guitar', 'Night Canteen Maggi', 'Indie Rock'],
    bio: 'Hackathon geek by day, guitarist by night. Want someone to vibe with on campus and share Spotify playlists.',
    hangout: 'IET Campus Ground & 1090 Chatori Gali',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80',
    matchScore: 92,
    status: 'MYSTERY',
  },
  {
    id: 'lko-3',
    name: 'Rhea Srivastava',
    age: 21,
    gender: 'Female',
    college: 'Amity Lucknow',
    course: 'B.Des Fashion Tech • 3rd Year',
    hobbies: ['Street Photography', 'Cafe Hopping', 'Vintage Thrift', 'Hazratganj Gedi'],
    bio: 'Design enthusiast who captures Lucknow through 35mm lens. Let\'s explore aesthetic spots together.',
    hangout: 'Roastery Coffee House & Hazratganj',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80',
    matchScore: 95,
    status: 'REQUEST_RECEIVED', // Another pending incoming request
  },
  {
    id: 'lko-4',
    name: 'Aryan Shukla',
    age: 22,
    gender: 'Male',
    college: 'BBD University',
    course: 'BBA Marketing • Final Year',
    hobbies: ['Basketball', 'Royal Enfield Rides', 'Street Food Crawl', 'EDM'],
    bio: 'Campus basketball captain. Life is too short for boring conversations. Looking for someone with great banter.',
    hangout: 'Marine Drive & Phoenix Palassio',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
    matchScore: 89,
    status: 'MYSTERY',
  },
  {
    id: 'lko-5',
    name: 'Zoya Khan',
    age: 20,
    gender: 'Female',
    college: 'Integral University',
    course: 'B.Arch • 2nd Year',
    hobbies: ['Architectural Sketching', 'Rumi Darwaza Sunsets', 'Book Reading', 'Baking'],
    bio: 'Sketching historic Nawabi monuments. Hoping to find someone who appreciates art and silent evenings.',
    hangout: 'Old Lucknow Heritage Trail & Husainabad',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
    matchScore: 94,
    status: 'MYSTERY',
  },
  {
    id: 'lko-6',
    name: 'Devansh Mishra',
    age: 23,
    gender: 'Male',
    college: 'KGMU Lucknow',
    course: 'MBBS • Intern',
    hobbies: ['Badminton', 'Stand-up Comedy', 'Midnight Chai', 'Reading Non-fiction'],
    bio: 'Surviving med school one coffee at a time. Need genuine laughs outside hospital duty rounds.',
    hangout: 'Chowk Street Food & KGMU Campus',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=700&q=80',
    matchScore: 90,
    status: 'MYSTERY',
  },
  {
    id: 'lko-7',
    name: 'Pooja Agarwal',
    age: 21,
    gender: 'Female',
    college: 'SRMCEM',
    course: 'B.Tech IT • 3rd Year',
    hobbies: ['Anime', 'Gaming (Valorant)', 'Pottery', 'Cold Coffee'],
    bio: 'Introvert who turns chaotic once comfortable. Huge anime fan! If you play Valo or love ramen, let\'s connect.',
    hangout: 'Bhootnath Market & Gaming Cafes',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80',
    matchScore: 91,
    status: 'MYSTERY',
  },
  {
    id: 'lko-8',
    name: 'Raghavendra Singh',
    age: 22,
    gender: 'Male',
    college: 'Dr. RMLNLU',
    course: 'B.A. LL.B. • 4th Year',
    hobbies: ['Parliamentary Debating', 'History', 'Bullet Journaling', 'Old Lucknow Kebabs'],
    bio: 'Law student who argues for fun. Love discussing philosophy, politics, and the best galawati kebabs in town.',
    hangout: 'Hazratganj Indian Coffee House',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80',
    matchScore: 88,
    status: 'MYSTERY',
  }
];

class LucknowDatingApp {
  constructor() {
    this.students = this.loadStudents();
    this.currentUser = this.loadCurrentUser();
    this.currentTab = 'feed';
    this.collegeFilter = 'ALL';
    this.activeCall = null;
    this.callTimerInterval = null;
    this.callSeconds = 0;
    this.activeChatStudent = null;
    this.localStream = null;
    this.isMicMuted = false;
    this.isCameraOff = false;
    this.chats = this.loadChats();
  }

  init() {
    this.renderNavProfile();
    this.render();
    this.updateBadges();
    lucide.createIcons();
  }

  // Storage
  loadStudents() {
    const saved = localStorage.getItem('lko_students_v1');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return DEFAULT_STUDENTS;
  }

  saveStudents() {
    localStorage.setItem('lko_students_v1', JSON.stringify(this.students));
    this.updateBadges();
  }

  loadCurrentUser() {
    const saved = localStorage.getItem('lko_curr_user_v1');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return {
      name: 'Vibhu',
      age: 21,
      gender: 'Male',
      college: 'IET Lucknow',
      course: 'B.Tech CSE • 3rd Year',
      hobbies: ['Coding', 'Sharma Chai', 'Gomti Riverfront', 'Acoustic Music'],
      bio: 'Engineering student in Lucknow. Exploring blind connections based on genuine vibes and campus conversations.',
      photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80'
    };
  }

  saveCurrentUser() {
    localStorage.setItem('lko_curr_user_v1', JSON.stringify(this.currentUser));
    this.renderNavProfile();
  }

  loadChats() {
    const saved = localStorage.getItem('lko_chats_v1');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return {};
  }

  saveChats() {
    localStorage.setItem('lko_chats_v1', JSON.stringify(this.chats));
  }

  // Navigation
  setTab(tab) {
    this.currentTab = tab;
    ['feed', 'requests', 'matches'].forEach(t => {
      const el = document.getElementById(`view-${t}`);
      const btn = document.getElementById(`tabBtn-${t}`);
      if (el) el.classList.toggle('hidden', t !== tab);
      if (btn) {
        if (t === tab) {
          btn.className = "flex items-center space-x-2 px-5 py-2 rounded-full text-sm font-medium transition-all bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25";
        } else {
          btn.className = "relative flex items-center space-x-2 px-5 py-2 rounded-full text-sm font-medium transition-all text-slate-300 hover:text-white hover:bg-white/5";
        }
      }
    });

    this.render();
    lucide.createIcons();
  }

  setCollegeFilter(college) {
    this.collegeFilter = college;
    document.querySelectorAll('.college-filter-btn').forEach(btn => {
      btn.className = "college-filter-btn px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap bg-white/[0.05] text-slate-300 hover:bg-white/10 transition";
    });

    const activeBtn = document.getElementById(`filter-${college === 'ALL' ? 'ALL' : college.split(' ')[0]}`);
    if (activeBtn) {
      activeBtn.className = "college-filter-btn px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap bg-pink-500 text-white shadow-md shadow-pink-500/20 transition";
    }

    this.renderFeed();
    lucide.createIcons();
  }

  updateBadges() {
    const requests = this.students.filter(s => s.status === 'REQUEST_RECEIVED');
    const matches = this.students.filter(s => s.status === 'REVEALED');

    const reqBadge = document.getElementById('nav-requests-badge');
    const mobReqBadge = document.getElementById('nav-mobile-req-badge');
    const matchBadge = document.getElementById('nav-matches-badge');

    if (reqBadge) {
      reqBadge.textContent = requests.length;
      reqBadge.classList.toggle('hidden', requests.length === 0);
    }
    if (mobReqBadge) {
      mobReqBadge.classList.toggle('hidden', requests.length === 0);
    }
    if (matchBadge) {
      matchBadge.textContent = matches.length;
    }

    const reqLabel = document.getElementById('requestsCountLabel');
    if (reqLabel) reqLabel.textContent = `${requests.length} Pending`;

    const matchLabel = document.getElementById('matchesCountLabel');
    if (matchLabel) matchLabel.textContent = `${matches.length} Connected`;
  }

  renderNavProfile() {
    const nameEl = document.getElementById('navUserName');
    const collegeEl = document.getElementById('navUserCollege');
    const avatarEl = document.getElementById('navUserAvatar');
    if (nameEl) nameEl.textContent = this.currentUser.name;
    if (collegeEl) collegeEl.textContent = this.currentUser.college;
    if (avatarEl) avatarEl.src = this.currentUser.photo;
  }

  render() {
    if (this.currentTab === 'feed') this.renderFeed();
    else if (this.currentTab === 'requests') this.renderRequests();
    else if (this.currentTab === 'matches') this.renderMatches();
  }

  // 1. RENDER FEED
  renderFeed() {
    const grid = document.getElementById('feedGrid');
    if (!grid) return;

    let list = this.students;
    if (this.collegeFilter !== 'ALL') {
      list = list.filter(s => s.college.toLowerCase().includes(this.collegeFilter.toLowerCase()));
    }

    const countEl = document.getElementById('activeStudentsCount');
    if (countEl) countEl.textContent = `${list.length} Students Online in Lucknow`;

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400">
          <i data-lucide="building-2" class="w-12 h-12 mx-auto mb-3 text-pink-400/40"></i>
          <p class="text-base font-medium">Is Lucknow college ke aur students jald join kar rahe hain!</p>
          <button onclick="app.setCollegeFilter('ALL')" class="mt-3 px-4 py-2 rounded-xl bg-pink-500/20 text-pink-300 text-xs font-semibold border border-pink-500/30">
            View All Lucknow Campuses
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(student => {
      const isRevealed = student.status === 'REVEALED';
      const isSent = student.status === 'REQUEST_SENT';
      const isReceived = student.status === 'REQUEST_RECEIVED';

      return `
        <div class="glass-card rounded-3xl p-5 flex flex-col justify-between relative overflow-hidden border ${isRevealed ? 'reveal-glow-border' : 'border-white/10'}">
          
          <!-- Top Badge Bar -->
          <div class="flex items-center justify-between mb-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-lucknow text-xs font-semibold">
              <i data-lucide="graduation-cap" class="w-3.5 h-3.5"></i>
              ${student.college}
            </span>
            <div class="flex items-center gap-1 text-[11px] font-bold text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-full border border-pink-500/20">
              <i data-lucide="flame" class="w-3.5 h-3.5 text-rose-500 fill-rose-500"></i>
              ${student.matchScore}% Match
            </div>
          </div>

          <!-- Photo Container: MASKED vs REVEALED -->
          <div class="photo-mystery-wrap aspect-[4/3] w-full mb-4 relative flex items-center justify-center">
            ${isRevealed ? `
              <img src="${student.photo}" alt="${student.name}" class="w-full h-full object-cover rounded-2xl revealed-photo">
              <div class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold tracking-wide flex items-center gap-1 shadow-lg">
                <i data-lucide="check-check" class="w-3 h-3"></i> Identity Revealed
              </div>
            ` : `
              <div class="w-full h-full photo-mystery-mask rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-white/5 relative">
                <div class="mystery-scanner"></div>
                <div class="w-16 h-16 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center mb-3 shadow-inner shadow-pink-500/20">
                  <i data-lucide="lock" class="w-8 h-8 text-pink-400 animate-pulse"></i>
                </div>
                <p class="text-xs font-bold text-white tracking-wide">Photo Locked 🔒</p>
                <p class="text-[11px] text-pink-300/80 mt-1 max-w-[200px]">Photo request accept hone par hi unveil hogi</p>
                <div class="mt-2.5 px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-slate-400 border border-white/10">
                  Blind Campus Dating
                </div>
              </div>
            `}
          </div>

          <!-- Student Identity Information -->
          <div class="space-y-3 mb-5">
            <div>
              <div class="flex items-baseline justify-between">
                <h3 class="text-lg font-bold text-white tracking-tight">${student.name}, <span class="text-pink-400 font-normal">${student.age}</span></h3>
                <span class="text-xs text-slate-400 font-medium">${student.gender}</span>
              </div>
              <p class="text-xs text-pink-300/90 font-medium mt-0.5">${student.course}</p>
            </div>

            <!-- Lucknow Bio / Spot -->
            <p class="text-xs text-slate-300 leading-relaxed bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
              "${student.bio}"
            </p>

            <!-- Hangout Tag -->
            <div class="flex items-center text-[11px] text-slate-400">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-pink-400 mr-1.5 shrink-0"></i>
              <span>Fav Lucknow Spot: <strong class="text-slate-200">${student.hangout}</strong></span>
            </div>

            <!-- Hobbies Chips -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              ${student.hobbies.map(h => `
                <span class="px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-pink-500/10 text-slate-300 text-[11px] font-medium border border-white/5 transition">
                  ${h}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="pt-2 border-t border-white/5">
            ${isRevealed ? `
              <div class="grid grid-cols-3 gap-2">
                <button onclick="app.startAudioCall('${student.id}')" class="py-2.5 px-3 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 font-semibold text-xs flex items-center justify-center gap-1.5 border border-pink-500/30 transition">
                  <i data-lucide="phone" class="w-3.5 h-3.5"></i> Call
                </button>
                <button onclick="app.startVideoCall('${student.id}')" class="py-2.5 px-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-pink-500/30 hover:scale-[1.02] transition">
                  <i data-lucide="video" class="w-3.5 h-3.5"></i> Video
                </button>
                <button onclick="app.openChat('${student.id}')" class="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition">
                  <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> Chat
                </button>
              </div>
            ` : isReceived ? `
              <div class="flex items-center gap-2">
                <button onclick="app.acceptRequest('${student.id}')" class="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:scale-[1.02] transition">
                  <i data-lucide="sparkles" class="w-4 h-4"></i> Accept & Reveal 🔓
                </button>
                <button onclick="app.declineRequest('${student.id}')" class="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition">
                  <i data-lucide="x" class="w-4 h-4"></i>
                </button>
              </div>
            ` : isSent ? `
              <button disabled class="w-full py-2.5 rounded-xl bg-pink-500/20 text-pink-300 text-xs font-semibold flex items-center justify-center gap-2 border border-pink-500/30 opacity-90 cursor-not-allowed">
                <i data-lucide="clock" class="w-3.5 h-3.5"></i> Vibe Request Sent (Pending Accept)
              </button>
            ` : `
              <div class="flex items-center gap-2">
                <button onclick="app.passStudent('${student.id}')" class="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition" title="Pass">
                  <i data-lucide="x" class="w-4 h-4"></i>
                </button>
                <button onclick="app.sendRequest('${student.id}')" class="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-pink-500/30 hover:scale-[1.02] transition">
                  <i data-lucide="heart" class="w-4 h-4 fill-white"></i> Send Connect Request
                </button>
              </div>
            `}
          </div>

        </div>
      `;
    }).join('');
  }

  // 2. RENDER REQUESTS
  renderRequests() {
    const container = document.getElementById('requestsList');
    if (!container) return;

    const received = this.students.filter(s => s.status === 'REQUEST_RECEIVED');

    if (received.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400 glass-card rounded-3xl p-8">
          <i data-lucide="inbox" class="w-12 h-12 mx-auto mb-3 text-pink-400/40"></i>
          <h4 class="text-base font-semibold text-white">Abhi koi nayi incoming request nahi hai</h4>
          <p class="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            Discover tab me jaakar doosre Lucknow campus students ko connect request bhejein!
          </p>
          <button onclick="app.setTab('feed')" class="mt-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold shadow-md shadow-pink-500/30">
            Explore Lucknow Campuses
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = received.map(student => `
      <div class="glass-card rounded-3xl p-6 border border-pink-500/30 relative flex flex-col justify-between">
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-3">
            <!-- Mystery Silhouette -->
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-900 to-pink-900 flex items-center justify-center border border-pink-500/40 relative overflow-hidden">
              <i data-lucide="lock" class="w-6 h-6 text-pink-400 animate-pulse"></i>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h4 class="font-bold text-white text-base">${student.name}, ${student.age}</h4>
                <span class="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-semibold border border-pink-500/30">
                  Incoming Request
                </span>
              </div>
              <p class="text-xs text-pink-400 font-medium">${student.college}</p>
            </div>
          </div>
          <span class="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            ${student.matchScore}% Match
          </span>
        </div>

        <p class="text-xs text-slate-300 bg-white/[0.03] p-3 rounded-xl border border-white/5 mb-4">
          "${student.bio}"
        </p>

        <div class="flex flex-wrap gap-1.5 mb-5">
          ${student.hobbies.map(h => `<span class="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-300">${h}</span>`).join('')}
        </div>

        <div class="flex items-center gap-3">
          <button onclick="app.acceptRequest('${student.id}')" class="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-pink-500/30 hover:scale-[1.02] transition">
            <i data-lucide="sparkles" class="w-4 h-4"></i> Accept & Reveal Photo 🔓
          </button>
          <button onclick="app.declineRequest('${student.id}')" class="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs font-medium transition">
            Decline
          </button>
        </div>
      </div>
    `).join('');
  }

  // 3. RENDER MATCHES
  renderMatches() {
    const container = document.getElementById('matchesList');
    if (!container) return;

    const matches = this.students.filter(s => s.status === 'REVEALED');

    if (matches.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400 glass-card rounded-3xl p-8">
          <i data-lucide="heart-crack" class="w-12 h-12 mx-auto mb-3 text-pink-400/40"></i>
          <h4 class="text-base font-semibold text-white">Koi Revealed Connection nahi hai abhi</h4>
          <p class="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            Jaise hi koi request accept hoti hai, unki photo reveal ho jayegi aur aap direct Video / Audio call kar sakenge!
          </p>
          <button onclick="app.setTab('requests')" class="mt-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold shadow-md shadow-pink-500/30">
            Check Pending Requests
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = matches.map(student => `
      <div class="glass-card rounded-3xl p-5 border reveal-glow-border flex flex-col justify-between relative overflow-hidden">
        <div class="relative aspect-square w-full rounded-2xl overflow-hidden mb-4">
          <img src="${student.photo}" alt="${student.name}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div class="absolute bottom-3 left-3 right-3 flex items-baseline justify-between text-white">
            <div>
              <h3 class="font-bold text-lg leading-tight">${student.name}, ${student.age}</h3>
              <p class="text-xs text-pink-300">${student.college}</p>
            </div>
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
        </div>

        <p class="text-xs text-slate-300 mb-4 line-clamp-2">
          "${student.bio}"
        </p>

        <div class="grid grid-cols-3 gap-2">
          <button onclick="app.startAudioCall('${student.id}')" class="py-2.5 px-3 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 font-semibold text-xs flex items-center justify-center gap-1.5 border border-pink-500/30 transition">
            <i data-lucide="phone" class="w-3.5 h-3.5"></i> Call
          </button>
          <button onclick="app.startVideoCall('${student.id}')" class="py-2.5 px-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-pink-500/30 hover:scale-[1.02] transition">
            <i data-lucide="video" class="w-3.5 h-3.5"></i> Video
          </button>
          <button onclick="app.openChat('${student.id}')" class="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition">
            <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> Chat
          </button>
        </div>
      </div>
    `).join('');
  }

  // Action Handlers
  sendRequest(id) {
    const student = this.students.find(s => s.id === id);
    if (!student) return;
    student.status = 'REQUEST_SENT';
    this.saveStudents();
    this.render();
    lucide.createIcons();

    // Auto-accept simulation after 4 seconds for interactive testing
    setTimeout(() => {
      student.status = 'REVEALED';
      this.saveStudents();
      this.render();
      sounds.playRevealChime();
      this.triggerConfetti();
      this.showToast(`${student.name} ne aapki connect request accept kar li! Photo reveal ho gayi 🎉`);
      lucide.createIcons();
    }, 4500);
  }

  acceptRequest(id) {
    const student = this.students.find(s => s.id === id);
    if (!student) return;

    student.status = 'REVEALED';
    this.saveStudents();
    
    // Play celebratory sound & particle explosion
    sounds.playRevealChime();
    this.triggerConfetti();

    // Show Reveal Celebration Modal
    this.openRevealModal(student);
    this.render();
    lucide.createIcons();
  }

  declineRequest(id) {
    const student = this.students.find(s => s.id === id);
    if (!student) return;
    student.status = 'MYSTERY';
    this.saveStudents();
    this.render();
    lucide.createIcons();
  }

  passStudent(id) {
    // Moves to end of list
    const index = this.students.findIndex(s => s.id === id);
    if (index > -1) {
      const [item] = this.students.splice(index, 1);
      this.students.push(item);
      this.saveStudents();
      this.render();
      lucide.createIcons();
    }
  }

  // Celebration & Toast
  triggerConfetti() {
    if (window.confetti) {
      window.confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ec4899', '#8b5cf6', '#f43f5e', '#ffffff']
      });
    }
  }

  showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 z-50 bg-[#1e133d] border border-pink-500/40 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 text-xs font-semibold animate-bounce';
    toast.innerHTML = `<i data-lucide="sparkles" class="w-4 h-4 text-pink-400"></i><span>${msg}</span>`;
    document.body.appendChild(toast);
    lucide.createIcons();
    setTimeout(() => toast.remove(), 4000);
  }

  // Reveal Modal
  openRevealModal(student) {
    const modal = document.getElementById('revealCelebrationModal');
    const photo = document.getElementById('revealCelebrationPhoto');
    const name = document.getElementById('revealCelebrationName');
    const college = document.getElementById('revealCelebrationCollege');

    this.activeRevealStudent = student;
    if (photo) photo.src = student.photo;
    if (name) name.textContent = `${student.name}, ${student.age}`;
    if (college) college.textContent = `${student.college} • ${student.course}`;
    if (modal) modal.classList.remove('hidden');
    lucide.createIcons();
  }

  closeRevealModal() {
    const modal = document.getElementById('revealCelebrationModal');
    if (modal) modal.classList.add('hidden');
  }

  startVideoCallFromReveal() {
    this.closeRevealModal();
    if (this.activeRevealStudent) {
      this.startVideoCall(this.activeRevealStudent.id);
    }
  }

  startAudioCallFromReveal() {
    this.closeRevealModal();
    if (this.activeRevealStudent) {
      this.startAudioCall(this.activeRevealStudent.id);
    }
  }

  // ================= VIDEO CALL IMPLEMENTATION =================
  async startVideoCall(studentId) {
    const student = this.students.find(s => s.id === studentId);
    if (!student) return;

    this.activeCall = { student, type: 'video' };
    this.callSeconds = 0;

    const modal = document.getElementById('videoCallModal');
    const nameTop = document.getElementById('callRemoteNameTop');
    const avatarTop = document.getElementById('callRemoteAvatarTop');
    const overlayName = document.getElementById('callRemoteOverlayName');
    const overlayCollege = document.getElementById('callRemoteOverlayCollege');
    const remoteVisual = document.getElementById('remoteVideoVisual');
    const timer = document.getElementById('callDurationTimer');
    const fallbackAvatar = document.getElementById('localVideoAvatarFallback');

    if (nameTop) nameTop.textContent = `Call with ${student.name}`;
    if (avatarTop) avatarTop.src = student.photo;
    if (overlayName) overlayName.textContent = student.name;
    if (overlayCollege) overlayCollege.textContent = student.college;
    if (remoteVisual) remoteVisual.src = student.photo;
    if (fallbackAvatar) fallbackAvatar.src = this.currentUser.photo;
    if (timer) timer.textContent = 'Calling Lucknow campus server...';

    if (modal) modal.classList.remove('hidden');
    lucide.createIcons();

    sounds.playRingtone();

    // Access real local camera and microphone via WebRTC getUserMedia
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        this.localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        const localVideo = document.getElementById('localWebcamVideo');
        const fallback = document.getElementById('localVideoFallback');
        if (localVideo) {
          localVideo.srcObject = this.localStream;
          localVideo.classList.remove('hidden');
        }
        if (fallback) fallback.classList.add('hidden');
      }
    } catch (err) {
      console.warn('Camera access unavailable or declined, using simulated stream', err);
      const localVideo = document.getElementById('localWebcamVideo');
      const fallback = document.getElementById('localVideoFallback');
      if (localVideo) localVideo.classList.add('hidden');
      if (fallback) fallback.classList.remove('hidden');
    }

    // Call connects in 2 seconds
    setTimeout(() => {
      if (!this.activeCall) return;
      if (timer) timer.textContent = 'Connected (00:00)';
      this.startCallTimer();
    }, 2000);
  }

  // ================= AUDIO CALL IMPLEMENTATION =================
  startAudioCall(studentId) {
    const student = this.students.find(s => s.id === studentId);
    if (!student) return;

    this.activeCall = { student, type: 'audio' };
    this.callSeconds = 0;

    const modal = document.getElementById('audioCallModal');
    const avatar = document.getElementById('audioCallAvatar');
    const name = document.getElementById('audioCallName');
    const college = document.getElementById('audioCallCollege');
    const timer = document.getElementById('audioCallTimer');

    if (avatar) avatar.src = student.photo;
    if (name) name.textContent = student.name;
    if (college) college.textContent = `${student.college} • ${student.course}`;
    if (timer) timer.textContent = 'Ringing...';

    if (modal) modal.classList.remove('hidden');
    lucide.createIcons();

    sounds.playRingtone();

    setTimeout(() => {
      if (!this.activeCall) return;
      if (timer) timer.textContent = '00:00';
      this.startCallTimer();
    }, 1800);
  }

  startCallTimer() {
    clearInterval(this.callTimerInterval);
    this.callTimerInterval = setInterval(() => {
      this.callSeconds++;
      const mins = String(Math.floor(this.callSeconds / 60)).padStart(2, '0');
      const secs = String(this.callSeconds % 60).padStart(2, '0');
      const formatted = `${mins}:${secs}`;

      const videoTimer = document.getElementById('callDurationTimer');
      const audioTimer = document.getElementById('audioCallTimer');

      if (videoTimer) videoTimer.textContent = `Connected (${formatted})`;
      if (audioTimer) audioTimer.textContent = formatted;
    }, 1000);
  }

  toggleMic() {
    this.isMicMuted = !this.isMicMuted;
    if (this.localStream) {
      this.localStream.getAudioTracks().forEach(track => {
        track.enabled = !this.isMicMuted;
      });
    }

    const btn = document.getElementById('btnToggleMic');
    const audioBtn = document.getElementById('btnAudioToggleMic');

    if (btn) {
      btn.classList.toggle('bg-red-500/80', this.isMicMuted);
      btn.innerHTML = `<i data-lucide="${this.isMicMuted ? 'mic-off' : 'mic'}" class="w-5 h-5"></i>`;
    }
    if (audioBtn) {
      audioBtn.classList.toggle('bg-red-500/80', this.isMicMuted);
      audioBtn.innerHTML = `<i data-lucide="${this.isMicMuted ? 'mic-off' : 'mic'}" class="w-6 h-6"></i>`;
    }
    lucide.createIcons();
  }

  toggleCamera() {
    this.isCameraOff = !this.isCameraOff;
    if (this.localStream) {
      this.localStream.getVideoTracks().forEach(track => {
        track.enabled = !this.isCameraOff;
      });
    }

    const btn = document.getElementById('btnToggleCamera');
    const localVideo = document.getElementById('localWebcamVideo');
    const fallback = document.getElementById('localVideoFallback');

    if (btn) {
      btn.classList.toggle('bg-red-500/80', this.isCameraOff);
      btn.innerHTML = `<i data-lucide="${this.isCameraOff ? 'video-off' : 'video'}" class="w-5 h-5"></i>`;
    }

    if (this.isCameraOff) {
      if (localVideo) localVideo.classList.add('hidden');
      if (fallback) fallback.classList.remove('hidden');
    } else {
      if (localVideo) localVideo.classList.remove('hidden');
      if (fallback) fallback.classList.add('hidden');
    }
    lucide.createIcons();
  }

  toggleSpeaker() {
    const btn = document.getElementById('btnAudioToggleSpeaker');
    if (btn) {
      btn.classList.toggle('text-pink-400');
    }
  }

  switchToAudioMode() {
    if (!this.activeCall) return;
    const student = this.activeCall.student;
    this.closeVideoCall();
    this.startAudioCall(student.id);
  }

  endActiveCall() {
    clearInterval(this.callTimerInterval);
    if (this.localStream) {
      this.localStream.getTracks().forEach(track => track.stop());
      this.localStream = null;
    }
    this.activeCall = null;
    this.closeVideoCall();
    this.closeAudioCall();
  }

  closeVideoCall() {
    const modal = document.getElementById('videoCallModal');
    if (modal) modal.classList.add('hidden');
  }

  closeAudioCall() {
    const modal = document.getElementById('audioCallModal');
    if (modal) modal.classList.add('hidden');
  }

  // ================= CHAT IMPLEMENTATION =================
  openChat(studentId) {
    const student = this.students.find(s => s.id === studentId);
    if (!student) return;

    this.activeChatStudent = student;
    const modal = document.getElementById('chatModal');
    const avatar = document.getElementById('chatAvatar');
    const name = document.getElementById('chatName');
    const college = document.getElementById('chatCollege');

    if (avatar) avatar.src = student.photo;
    if (name) name.textContent = student.name;
    if (college) college.textContent = student.college;

    this.renderChatMessages();
    if (modal) modal.classList.remove('hidden');
    lucide.createIcons();
  }

  closeChat() {
    const modal = document.getElementById('chatModal');
    if (modal) modal.classList.add('hidden');
    this.activeChatStudent = null;
  }

  renderChatMessages() {
    if (!this.activeChatStudent) return;
    const container = document.getElementById('chatMessages');
    if (!container) return;

    const messages = this.chats[this.activeChatStudent.id] || [
      {
        sender: 'them',
        text: `Hey! Aap bhi Lucknow campus se ho? Request accept ho gayi, nice to connect! 😊`,
        time: 'Just now'
      }
    ];

    container.innerHTML = messages.map(m => `
      <div class="flex flex-col ${m.sender === 'me' ? 'items-end' : 'items-start'}">
        <div class="max-w-[75%] px-4 py-2.5 rounded-2xl text-xs ${
          m.sender === 'me'
            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-tr-none'
            : 'bg-white/10 text-slate-100 rounded-tl-none border border-white/5'
        }">
          ${m.text}
        </div>
        <span class="text-[9px] text-slate-500 mt-1 px-1">${m.time}</span>
      </div>
    `).join('');

    container.scrollTop = container.scrollHeight;
  }

  sendMessage(e) {
    e.preventDefault();
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text || !this.activeChatStudent) return;

    this.addChatMessage(this.activeChatStudent.id, 'me', text);
    input.value = '';

    // Auto reply from student
    const student = this.activeChatStudent;
    setTimeout(() => {
      const replies = [
        "Sahi hai! Mujhe bhi ye pasand hai.",
        "Haan bilkul! Sharma ji ki chai is evergreen! ☕",
        "Acha! Next week college fest me aa rahe ho kya?",
        "Audio/video call lagao na, aaram se baat karte hain! 📞"
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      this.addChatMessage(student.id, 'them', randomReply);
    }, 1200);
  }

  sendIcebreaker(text) {
    if (!this.activeChatStudent) return;
    this.addChatMessage(this.activeChatStudent.id, 'me', text);

    const student = this.activeChatStudent;
    setTimeout(() => {
      this.addChatMessage(student.id, 'them', `Haha sure! Lucknow me isse better spot kya ho sakta hai! Kab chalna hai? 🌸`);
    }, 1200);
  }

  addChatMessage(studentId, sender, text) {
    if (!this.chats[studentId]) this.chats[studentId] = [];
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    this.chats[studentId].push({ sender, text, time });
    this.saveChats();
    this.renderChatMessages();
  }

  startAudioCallFromChat() {
    if (this.activeChatStudent) {
      const id = this.activeChatStudent.id;
      this.closeChat();
      this.startAudioCall(id);
    }
  }

  startVideoCallFromChat() {
    if (this.activeChatStudent) {
      const id = this.activeChatStudent.id;
      this.closeChat();
      this.startVideoCall(id);
    }
  }

  // ================= PROFILE EDIT & REGISTRATION =================
  openEditProfileModal() {
    const modal = document.getElementById('profileModal');
    document.getElementById('formName').value = this.currentUser.name;
    document.getElementById('formAge').value = this.currentUser.age;
    document.getElementById('formGender').value = this.currentUser.gender;
    document.getElementById('formCollege').value = this.currentUser.college;
    document.getElementById('formCourse').value = this.currentUser.course;
    document.getElementById('formHobbies').value = this.currentUser.hobbies.join(', ');
    document.getElementById('formBio').value = this.currentUser.bio;
    document.getElementById('formAvatarPreview').src = this.currentUser.photo;

    if (modal) modal.classList.remove('hidden');
    lucide.createIcons();
  }

  closeEditProfileModal() {
    const modal = document.getElementById('profileModal');
    if (modal) modal.classList.add('hidden');
  }

  handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        document.getElementById('formAvatarPreview').src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile(e) {
    e.preventDefault();
    this.currentUser = {
      name: document.getElementById('formName').value,
      age: parseInt(document.getElementById('formAge').value),
      gender: document.getElementById('formGender').value,
      college: document.getElementById('formCollege').value,
      course: document.getElementById('formCourse').value,
      hobbies: document.getElementById('formHobbies').value.split(',').map(s => s.trim()).filter(Boolean),
      bio: document.getElementById('formBio').value,
      photo: document.getElementById('formAvatarPreview').src
    };

    this.saveCurrentUser();
    this.closeEditProfileModal();
    this.showToast('Profile updated! Your photo will be masked until you accept a connection request.');
  }

  // ================= DEMO ACCOUNT SWITCHER =================
  openDemoSwitchModal() {
    const modal = document.getElementById('demoSwitchModal');
    const container = document.getElementById('demoAccountsList');
    if (!container) return;

    container.innerHTML = `
      <div onclick="app.switchToUser('vibhu')" class="p-3 rounded-2xl bg-pink-500/20 border border-pink-500/40 flex items-center space-x-3 cursor-pointer hover:bg-pink-500/30 transition">
        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80" class="w-10 h-10 rounded-full object-cover">
        <div>
          <h4 class="font-bold text-white text-xs">Vibhu (Active User)</h4>
          <p class="text-[10px] text-pink-300">IET Lucknow • B.Tech CSE</p>
        </div>
      </div>
      ${this.students.map(s => `
        <div onclick="app.simulateIncomingFrom('${s.id}')" class="p-3 rounded-2xl bg-white/[0.04] border border-white/5 flex items-center justify-between cursor-pointer hover:bg-white/10 transition">
          <div class="flex items-center space-x-3">
            <img src="${s.photo}" class="w-10 h-10 rounded-full object-cover">
            <div>
              <h4 class="font-bold text-white text-xs">${s.name}</h4>
              <p class="text-[10px] text-slate-400">${s.college}</p>
            </div>
          </div>
          <span class="text-[10px] text-pink-400 font-semibold">Simulate Request ➔</span>
        </div>
      `).join('')}
    `;

    if (modal) modal.classList.remove('hidden');
    lucide.createIcons();
  }

  closeDemoSwitchModal() {
    const modal = document.getElementById('demoSwitchModal');
    if (modal) modal.classList.add('hidden');
  }

  simulateIncomingFrom(studentId) {
    const student = this.students.find(s => s.id === studentId);
    if (!student) return;
    student.status = 'REQUEST_RECEIVED';
    this.saveStudents();
    this.closeDemoSwitchModal();
    this.setTab('requests');
    sounds.playRevealChime();
    this.showToast(`Nayi connect request aayi hai from ${student.name} (${student.college})! 💌`);
  }
}

// Global instance
const app = new LucknowDatingApp();
window.app = app;

window.addEventListener('DOMContentLoaded', () => {
  app.init();
});
