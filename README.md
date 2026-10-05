# 🌹 Pehchaan (पहचान) • Lucknow Campus Blind Dating Web App

> **"Connect by Vibe, Reveal by Choice"**  
> *Exclusively built for college students across Lucknow.*

---

## 🌟 Concept & Highlights (User Requirements Met)

1. **Lucknow College Verification & Selection**:
   - Curated specifically for Lucknow institutions:
     - **IET Lucknow** (Institute of Engineering & Technology)
     - **University of Lucknow (LU)**
     - **BBD University** (Babu Banarasi Das)
     - **Amity University Lucknow Campus**
     - **Integral University**
     - **KGMU** (King George's Medical University)
     - **SRMCEM** (Shri Ramswaroop Memorial)
     - **Dr. RMLNLU** (Ram Manohar Lohiya National Law University)
     - **IIM Lucknow**
   - Filter students by individual Lucknow campuses or view all across the city.

2. **Blind Dating / Masked Photo Mechanism**:
   - **Initial State**: Profiles showcase the student's **Name, Age, Lucknow College, Course, Hobbies, Lucknow Hangout Spots (e.g. 1090 Chatori Gali, Sharma Chai, Gomti Riverfront), and Bio**.
   - **Photo is Strictly Locked & Masked**: Depicted as an artistic, glowing mystery silhouette with a pulsing security scanner.

3. **Vibe Request & Mutual Accept Flow**:
   - Send "Connect Request ❤️" to any campus profile.
   - Dedicated **Requests Tab** showing incoming requests.
   - Both students remain mystery profiles until accepted.

4. **The Reveal Moment (पहचान Unveiled)**:
   - Clicking **"Accept & Reveal 🔓"** triggers:
     - 🎶 Melodic audio chime synthesized via Web Audio API.
     - 🎊 High-energy confetti particle burst.
     - 🖼️ Instant unmasking of the real high-definition photo.
     - 🔓 Unlocks Direct Chat, Audio Calling, and Video Calling!

5. **Audio Call & Video Call Suite**:
   - **Video Call**:
     - Connects directly to local camera and microphone via WebRTC `navigator.mediaDevices.getUserMedia`.
     - Remote video visual with real-time soundwave visualizer.
     - Call duration timer, Mute/Unmute mic, Camera on/off toggles, and End call.
   - **Audio Call**:
     - Luxury voice call modal with pulsing radar ring, live audio wave animation, speaker toggle, and mute controls.

6. **Interactive Chat with Lucknow Icebreakers**:
   - Lucknow-themed conversation starters:
     - *"Sharma ji ki chai kab chal rahe hain? ☕"*
     - *"1090 Chatori Gali food crawl plan karein? 🥟"*
     - *"Gomti Riverfront sunset walk? 🌅"*
   - Realistic automated responses for instant testing.

---

## 🚀 Quick Start / How to Run

### Method 1: Double-click to open
Simply open the file in your favorite browser (Google Chrome, Brave, Safari):
```bash
open /Users/vibhu/.gemini/antigravity/scratch/lucknow-campus-dating/index.html
```

### Method 2: Run with Local Server (Best for WebRTC camera/mic permissions)
Run the included launcher in terminal:
```bash
cd /Users/vibhu/.gemini/antigravity/scratch/lucknow-campus-dating
./start.sh
```
Or with Ruby directly:
```bash
ruby server.rb
```
Then visit: **`http://localhost:8080`**

---

## 📂 Project Structure
```
lucknow-campus-dating/
├── index.html        # Main luxury glassmorphic responsive UI & Calling Modals
├── styles.css        # Custom neon glow, ambient light orbs, soundwaves & animations
├── app.js            # State engine, Web Audio synthesis, camera/mic calling, & reveal logic
├── server.rb         # Ruby WEBrick server for seamless local testing
├── start.sh          # One-click launch script
└── README.md         # Complete guide & documentation
```
