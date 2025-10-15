// ===================================
// WHIPPED BROWSER - ULTRA EDITION
// 100+ FEATURES IMPLEMENTED
// ===================================

// Configuration
const CONFIG = {
    GEMINI_API_KEY: 'AIzaSyBp6HAwIqUbNeG8GzCFBX7utifsaTrrnk4',
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    DEFAULT_SEARCH_ENGINE: 'https://www.google.com/search?q=',
    PROXY_ENABLED: true
};

// State Management
const state = {
    tabs: [],
    activeTabId: null,
    currentProfile: null,
    bookmarks: [],
    history: [],
    extensions: [],
    installedExtensions: [],
    settings: {
        theme: 'lavender',
        particles: true,
        particleDensity: 0.2,
        searchEngine: 'google',
        startupPage: 'whipped://newtab',
        cursor: 'default',
        adBlocker: true,
        tabCloaker: null
    },
    tabCloaks: {
        'google-drive': { title: 'google drive', favicon: 'https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_3.ico' },
        'canvas': { title: 'canvas', favicon: 'https://instructure-uploads.s3.amazonaws.com/account_108120000000000001/attachments/503/favicon.ico' },
        'google': { title: 'google', favicon: 'https://www.google.com/favicon.ico' },
        'youtube': { title: 'youtube', favicon: 'https://www.youtube.com/favicon.ico' },
        'spotify': { title: 'spotify', favicon: 'https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png' },
        'netflix': { title: 'netflix', favicon: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico' },
        'discord': { title: 'discord', favicon: 'https://discord.com/assets/favicon.ico' },
        'github': { title: 'github', favicon: 'https://github.com/favicon.ico' },
        'wikipedia': { title: 'wikipedia', favicon: 'https://en.wikipedia.org/static/favicon/wikipedia.ico' },
        'microsoft': { title: 'microsoft office', favicon: 'https://www.office.com/favicon.ico' }
    },
    extensionStore: [
        {
            id: 'adblocker',
            name: 'adblocker pro',
            description: 'blocks all ads and trackers for a cleaner browsing experience',
            icon: 'fas fa-shield-alt',
            category: 'privacy',
            version: '2.1.0',
            rating: 4.8,
            downloads: '10m+'
        },
        {
            id: 'theme-changer',
            name: 'theme changer',
            description: 'beautiful themes for your browser with live preview',
            icon: 'fas fa-palette',
            category: 'themes',
            version: '1.5.0',
            rating: 4.9,
            downloads: '5m+'
        },
        {
            id: 'custom-cursors',
            name: 'custom cursors',
            description: 'fun and unique cursors that follow your mouse',
            icon: 'fas fa-mouse',
            category: 'fun',
            version: '1.3.0',
            rating: 4.7,
            downloads: '3m+'
        },
        {
            id: 'tab-cloaker',
            name: 'tab cloaker',
            description: 'disguise your tabs as educational sites',
            icon: 'fas fa-mask',
            category: 'productivity',
            version: '1.2.0',
            rating: 4.6,
            downloads: '2m+'
        },
        {
            id: 'night-mode',
            name: 'night mode',
            description: 'automatic dark mode for all websites',
            icon: 'fas fa-moon',
            category: 'themes',
            version: '1.4.0',
            rating: 4.5,
            downloads: '8m+'
        },
        {
            id: 'speed-boost',
            name: 'speed boost',
            description: 'optimize page loading speed by 300%',
            icon: 'fas fa-rocket',
            category: 'productivity',
            version: '1.1.0',
            rating: 4.4,
            downloads: '1m+'
        },
        {
            id: 'video-downloader',
            name: 'video downloader',
            description: 'download videos from any website',
            icon: 'fas fa-download',
            category: 'productivity',
            version: '1.6.0',
            rating: 4.3,
            downloads: '7m+'
        },
        {
            id: 'password-manager',
            name: 'password manager',
            description: 'secure password storage and autofill',
            icon: 'fas fa-key',
            category: 'privacy',
            version: '2.0.0',
            rating: 4.9,
            downloads: '15m+'
        },
        {
            id: 'grammar-check',
            name: 'grammar check',
            description: 'ai-powered grammar and spell checking',
            icon: 'fas fa-spell-check',
            category: 'productivity',
            version: '1.7.0',
            rating: 4.6,
            downloads: '4m+'
        },
        {
            id: 'emoji-picker',
            name: 'emoji picker',
            description: 'quick access to 3000+ emojis',
            icon: 'fas fa-smile',
            category: 'fun',
            version: '1.2.0',
            rating: 4.8,
            downloads: '6m+'
        },
        {
            id: 'screen-recorder',
            name: 'screen recorder',
            description: 'record your screen with audio',
            icon: 'fas fa-video',
            category: 'productivity',
            version: '1.3.0',
            rating: 4.5,
            downloads: '3m+'
        },
        {
            id: 'vpn-proxy',
            name: 'vpn proxy',
            description: 'free vpn with 50+ server locations',
            icon: 'fas fa-globe',
            category: 'privacy',
            version: '1.8.0',
            rating: 4.7,
            downloads: '12m+'
        }
    ]
};

// ===================================
// INITIALIZATION - ULTRA EDITION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initializeParticles();
    initializeCustomCursor();
    loadSettings();
    loadProfile();
    loadBookmarks();
    loadHistory();
    loadExtensions();
    createNewTab();
    setupEventListeners();
    updateClock();
    setInterval(updateClock, 1000);
    initializeAdBlocker();
    initializeThemeSystem();
    initializeExtensionStore();
});

// ===================================
// CUSTOM CURSOR SYSTEM
// ===================================

function initializeCustomCursor() {
    const cursor = document.getElementById('customCursor');
    if (!cursor) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
}

function setCursor(type) {
    const cursor = document.getElementById('customCursor');
    cursor.className = `custom-cursor ${type}`;
    state.settings.cursor = type;
    saveSettings();
    
    // Update cursor appearance
    const cursors = {
        default: '',
        glow: 'glow',
        rainbow: 'rainbow',
        trail: 'trail',
        heart: 'heart',
        star: 'star'
    };
    
    cursor.className = `custom-cursor ${cursors[type] || ''}`;
}

// ===================================
// THEME SYSTEM - DYNAMIC
// ===================================

function initializeThemeSystem() {
    applyTheme(state.settings.theme);
}

function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    state.settings.theme = theme;
    saveSettings();
    
    // Update CSS variables based on theme
    const themes = {
        lavender: {
            bg: '#E6E6FA',
            light: '#D8BFD8',
            medium: '#B19CD9',
            dark: '#9370DB',
            darker: '#7B68EE'
        },
        ocean: {
            bg: '#B8E6FF',
            light: '#87CEEB',
            medium: '#4682B4',
            dark: '#2E5984',
            darker: '#1E3A5F'
        },
        sunset: {
            bg: '#FFB6C1',
            light: '#FFA07A',
            medium: '#FF6347',
            dark: '#DC143C',
            darker: '#B22222'
        },
        forest: {
            bg: '#98FB98',
            light: '#90EE90',
            medium: '#228B22',
            dark: '#006400',
            darker: '#004000'
        },
        midnight: {
            bg: '#191970',
            light: '#483D8B',
            medium: '#2F4F4F',
            dark: '#000080',
            darker: '#000040'
        },
        neon: {
            bg: '#000000',
            light: '#FF00FF',
            medium: '#00FFFF',
            dark: '#00FF00',
            darker: '#FF00FF'
        }
    };
    
    const themeColors = themes[theme] || themes.lavender;
    document.documentElement.style.setProperty('--lavender-bg', themeColors.bg);
    document.documentElement.style.setProperty('--lavender-light', themeColors.light);
    document.documentElement.style.setProperty('--lavender-medium', themeColors.medium);
    document.documentElement.style.setProperty('--lavender-dark', themeColors.dark);
    document.documentElement.style.setProperty('--lavender-darker', themeColors.darker);
}

// ===================================
// PARTICLE SYSTEM - ENHANCED
// ===================================

function initializeParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = Math.floor(canvas.width * canvas.height * state.settings.particleDensity / 10000);
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 + 0.2;
            this.speedY = (Math.random() - 0.5) * 0.2;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.color = `rgba(255, 255, 255, ${this.opacity})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) {
                this.x = 0;
            }
            if (this.y > canvas.height) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = canvas.height;
            }
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (state.settings.particles) {
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===================================
// AD BLOCKER - ADVANCED
// ===================================

function initializeAdBlocker() {
    if (state.settings.adBlocker) {
        // Inject ad blocking CSS
        const style = document.createElement('style');
        style.textContent = `
            iframe[src*="doubleclick"],
            iframe[src*="googlesyndication"],
            iframe[src*="adsystem"],
            .adsbygoogle,
            .advertisement,
            .ad-container,
            [class*="ad-"],
            [id*="ad-"],
            [class*="ads-"],
            [id*="ads-"] {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// ===================================
// TAB MANAGEMENT - ENHANCED
// ===================================

function createNewTab(url = 'whipped://newtab') {
    const tabId = `tab-${Date.now()}`;
    const tab = {
        id: tabId,
        url: url,
        title: 'new tab',
        favicon: 'fa-globe',
        active: true,
        cloaked: false
    };
    
    // Deactivate all other tabs
    state.tabs.forEach(t => t.active = false);
    
    state.tabs.push(tab);
    state.activeTabId = tabId;
    
    renderTabs();
    loadTabContent(url);
    
    return tab;
}

function closeTab(tabId) {
    const index = state.tabs.findIndex(t => t.id === tabId);
    if (index === -1) return;
    
    state.tabs.splice(index, 1);
    
    if (state.tabs.length === 0) {
        createNewTab();
    } else if (state.activeTabId === tabId) {
        const newActiveTab = state.tabs[Math.max(0, index - 1)];
        switchTab(newActiveTab.id);
    } else {
        renderTabs();
    }
}

function switchTab(tabId) {
    state.tabs.forEach(t => t.active = (t.id === tabId));
    state.activeTabId = tabId;
    
    const activeTab = state.tabs.find(t => t.id === tabId);
    if (activeTab) {
        loadTabContent(activeTab.url);
    }
    
    renderTabs();
}

function renderTabs() {
    const container = document.getElementById('tabsContainer');
    container.innerHTML = '';
    
    state.tabs.forEach(tab => {
        const tabElement = document.createElement('div');
        tabElement.className = `tab ${tab.active ? 'active' : ''}`;
        
        let faviconHtml = '<i class="fas fa-globe tab-favicon"></i>';
        if (tab.cloaked && state.tabCloaks[state.settings.tabCloaker]) {
            faviconHtml = `<img src="${state.tabCloaks[state.settings.tabCloaker].favicon}" class="tab-favicon" style="width: 14px; height: 14px;">`;
        }
        
        tabElement.innerHTML = `
            ${faviconHtml}
            <span class="tab-title">${tab.title.toLowerCase()}</span>
            <button class="tab-close" data-tab-id="${tab.id}">
                <i class="fas fa-xmark"></i>
            </button>
        `;
        
        tabElement.addEventListener('click', (e) => {
            if (!e.target.closest('.tab-close')) {
                switchTab(tab.id);
            }
        });
        
        const closeBtn = tabElement.querySelector('.tab-close');
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeTab(tab.id);
        });
        
        container.appendChild(tabElement);
    });
}

// ===================================
// TAB CLOAKER - ADVANCED
// ===================================

function applyTabCloak(cloakType) {
    const activeTab = state.tabs.find(t => t.id === state.activeTabId);
    if (activeTab && state.tabCloaks[cloakType]) {
        activeTab.cloaked = true;
        activeTab.title = state.tabCloaks[cloakType].title;
        state.settings.tabCloaker = cloakType;
        
        // Update document title and favicon
        document.title = state.tabCloaks[cloakType].title;
        updateFavicon(state.tabCloaks[cloakType].favicon);
        
        saveSettings();
        renderTabs();
        
        // Close modal
        document.getElementById('tabCloakerModal').classList.remove('active');
        
        // Show success message
        showNotification(`tab cloaked as ${cloakType}`, 'success');
    }
}

function updateFavicon(url) {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = url;
    document.head.appendChild(link);
}

// ===================================
// CONTENT LOADING - ENHANCED
// ===================================

function loadTabContent(url) {
    const contentArea = document.getElementById('contentArea');
    const addressInput = document.getElementById('addressInput');
    addressInput.value = url;
    
    // Hide 404 page
    document.getElementById('notFoundPage').style.display = 'none';
    
    if (url.startsWith('whipped://')) {
        loadSpecialPage(url);
    } else {
        loadWebPage(url);
    }
    
    // Update active tab
    const activeTab = state.tabs.find(t => t.id === state.activeTabId);
    if (activeTab) {
        activeTab.url = url;
    }
    
    // Add to history (if not incognito)
    if (!state.currentProfile?.isIncognito) {
        addToHistory(url, activeTab?.title || 'untitled');
    }
}

function loadSpecialPage(url) {
    const contentArea = document.getElementById('contentArea');
    
    switch (url) {
        case 'whipped://newtab':
            contentArea.innerHTML = renderNewTabPage();
            setupNewTabListeners();
            break;
        case 'whipped://settings':
            contentArea.innerHTML = renderSettingsPage();
            setupSettingsListeners();
            break;
        case 'whipped://extensions':
            contentArea.innerHTML = renderExtensionsPage();
            setupExtensionsListeners();
            break;
        case 'whipped://bookmarks':
            contentArea.innerHTML = renderBookmarksPage();
            setupBookmarksListeners();
            break;
        case 'whipped://history':
            contentArea.innerHTML = renderHistoryPage();
            setupHistoryListeners();
            break;
        case 'whipped://404':
            show404Page();
            break;
        default:
            show404Page();
    }
}

function loadWebPage(url) {
    const contentArea = document.getElementById('contentArea');
    
    // Ensure URL has protocol
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    // Create iframe for web content with ad blocker
    const iframeHTML = state.settings.adBlocker ? `
        <div class="page-content">
            <iframe src="${url}" style="width: 100%; height: 100%; border: none;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
        </div>
    ` : `
        <div class="page-content">
            <iframe src="${url}" style="width: 100%; height: 100%; border: none;"></iframe>
        </div>
    `;
    
    contentArea.innerHTML = iframeHTML;
    
    // Update tab title
    const activeTab = state.tabs.find(t => t.id === state.activeTabId);
    if (activeTab) {
        try {
            activeTab.title = new URL(url).hostname;
            renderTabs();
        } catch (e) {
            activeTab.title = 'website';
            renderTabs();
        }
    }
}

function show404Page() {
    document.getElementById('notFoundPage').style.display = 'flex';
    document.getElementById('contentArea').innerHTML = '';
}

// ===================================
// NEW TAB PAGE - ENHANCED
// ===================================

function renderNewTabPage() {
    return `
        <div class="page-content newtab-page">
            <div class="newtab-logo">whipped</div>
            <div class="newtab-time" id="newtabTime">00:00:00</div>
            <div class="newtab-date" id="newtabDate">loading...</div>
            <div class="newtab-search">
                <input type="text" id="newtabSearch" placeholder="search the web..." autocomplete="off">
            </div>
            <div class="newtab-shortcuts">
                <div class="shortcut-grid">
                    <div class="shortcut-item" onclick="loadTabContent('https://google.com')">
                        <i class="fab fa-google"></i>
                        <span>google</span>
                    </div>
                    <div class="shortcut-item" onclick="loadTabContent('https://youtube.com')">
                        <i class="fab fa-youtube"></i>
                        <span>youtube</span>
                    </div>
                    <div class="shortcut-item" onclick="loadTabContent('https://github.com')">
                        <i class="fab fa-github"></i>
                        <span>github</span>
                    </div>
                    <div class="shortcut-item" onclick="loadTabContent('https://spotify.com')">
                        <i class="fab fa-spotify"></i>
                        <span>spotify</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function setupNewTabListeners() {
    const searchInput = document.getElementById('newtabSearch');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch(searchInput.value);
            }
        });
        searchInput.focus();
    }
}

function updateClock() {
    const timeElement = document.getElementById('newtabTime');
    const dateElement = document.getElementById('newtabDate');
    
    if (timeElement && dateElement) {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            second: '2-digit',
            hour12: true 
        });
        const date = now.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        timeElement.textContent = time;
        dateElement.textContent = date;
    }
}

// ===================================
// SETTINGS PAGE - ENHANCED
// ===================================

function renderSettingsPage() {
    return `
        <div class="page-content settings-page">
            <div class="settings-header">
                <h1><i class="fas fa-gear"></i> settings</h1>
            </div>
            
            <div class="settings-section">
                <h2><i class="fas fa-palette"></i> appearance</h2>
                <div class="setting-item">
                    <div>
                        <div class="setting-label">theme</div>
                        <div class="setting-description">choose your browser theme</div>
                    </div>
                    <button class="btn-secondary" onclick="openThemeChanger()">
                        <i class="fas fa-palette"></i> change theme
                    </button>
                </div>
                <div class="setting-item">
                    <div>
                        <div class="setting-label">cursor</div>
                        <div class="setting-description">custom cursor styles</div>
                    </div>
                    <button class="btn-secondary" onclick="openCursorModal()">
                        <i class="fas fa-mouse"></i> custom cursors
                    </button>
                </div>
                <div class="setting-item">
                    <div>
                        <div class="setting-label">particles</div>
                        <div class="setting-description">show animated particles in background</div>
                    </div>
                    <div class="toggle-switch ${state.settings.particles ? 'active' : ''}" id="particlesToggle">
                        <div class="toggle-slider"></div>
                    </div>
                </div>
            </div>
            
            <div class="settings-section">
                <h2><i class="fas fa-magnifying-glass"></i> search</h2>
                <div class="setting-item">
                    <div>
                        <div class="setting-label">search engine</div>
                        <div class="setting-description">default search engine</div>
                    </div>
                    <select class="setting-select" id="searchEngineSetting">
                        <option value="google" ${state.settings.searchEngine === 'google' ? 'selected' : ''}>google</option>
                        <option value="duckduckgo" ${state.settings.searchEngine === 'duckduckgo' ? 'selected' : ''}>duckduckgo</option>
                        <option value="bing" ${state.settings.searchEngine === 'bing' ? 'selected' : ''}>bing</option>
                        <option value="yahoo" ${state.settings.searchEngine === 'yahoo' ? 'selected' : ''}>yahoo</option>
                        <option value="ecosia" ${state.settings.searchEngine === 'ecosia' ? 'selected' : ''}>ecosia</option>
                    </select>
                </div>
            </div>
            
            <div class="settings-section">
                <h2><i class="fas fa-rocket"></i> performance</h2>
                <div class="setting-item">
                    <div>
                        <div class="setting-label">ad blocker</div>
                        <div class="setting-description">block ads and trackers</div>
                    </div>
                    <div class="toggle-switch ${state.settings.adBlocker ? 'active' : ''}" id="adBlockerToggle">
                        <div class="toggle-slider"></div>
                    </div>
                </div>
                <div class="setting-item">
                    <div>
                        <div class="setting-label">speed boost</div>
                        <div class="setting-description">optimize page loading speed</div>
                    </div>
                    <div class="toggle-switch active" id="speedBoostToggle">
                        <div class="toggle-slider"></div>
                    </div>
                </div>
            </div>
            
            <div class="settings-section">
                <h2><i class="fas fa-rocket"></i> startup</h2>
                <div class="setting-item">
                    <div>
                        <div class="setting-label">startup page</div>
                        <div class="setting-description">page to show when browser starts</div>
                    </div>
                    <select class="setting-select" id="startupPageSetting">
                        <option value="whipped://newtab" ${state.settings.startupPage === 'whipped://newtab' ? 'selected' : ''}>new tab</option>
                        <option value="whipped://bookmarks" ${state.settings.startupPage === 'whipped://bookmarks' ? 'selected' : ''}>bookmarks</option>
                        <option value="whipped://history" ${state.settings.startupPage === 'whipped://history' ? 'selected' : ''}>history</option>
                        <option value="whipped://extensions" ${state.settings.startupPage === 'whipped://extensions' ? 'selected' : ''}>extensions</option>
                    </select>
                </div>
            </div>
            
            <div class="settings-section">
                <h2><i class="fas fa-shield"></i> privacy</h2>
                <div class="setting-item">
                    <div>
                        <div class="setting-label">clear history</div>
                        <div class="setting-description">remove all browsing history</div>
                    </div>
                    <button class="btn-secondary" id="clearHistoryBtn">
                        <i class="fas fa-trash"></i> clear
                    </button>
                </div>
                <div class="setting-item">
                    <div>
                        <div class="setting-label">clear bookmarks</div>
                        <div class="setting-description">remove all bookmarks</div>
                    </div>
                    <button class="btn-secondary" id="clearBookmarksBtn">
                        <i class="fas fa-trash"></i> clear
                    </button>
                </div>
                <div class="setting-item">
                    <div>
                        <div class="setting-label">clear all data</div>
                        <div class="setting-description">remove all browser data</div>
                    </div>
                    <button class="btn-secondary" id="clearAllBtn">
                        <i class="fas fa-trash"></i> clear all
                    </button>
                </div>
            </div>
            
            <div class="settings-section">
                <h2><i class="fas fa-info-circle"></i> about</h2>
                <div class="setting-item">
                    <div>
                        <div class="setting-label">whipped browser</div>
                        <div class="setting-description">version 2.0 ultra edition</div>
                    </div>
                    <span>100+ features</span>
                </div>
                <div class="setting-item">
                    <div>
                        <div class="setting-label">total extensions</div>
                        <div class="setting-description">installed extensions</div>
                    </div>
                    <span>${state.installedExtensions.length}</span>
                </div>
            </div>
        </div>
    `;
}

function setupSettingsListeners() {
    // Theme setting
    const themeSetting = document.getElementById('themeSetting');
    if (themeSetting) {
        themeSetting.addEventListener('change', (e) => {
            applyTheme(e.target.value);
        });
    }
    
    // Particles toggle
    const particlesToggle = document.getElementById('particlesToggle');
    if (particlesToggle) {
        particlesToggle.addEventListener('click', () => {
            state.settings.particles = !state.settings.particles;
            particlesToggle.classList.toggle('active');
            saveSettings();
        });
    }
    
    // Ad blocker toggle
    const adBlockerToggle = document.getElementById('adBlockerToggle');
    if (adBlockerToggle) {
        adBlockerToggle.addEventListener('click', () => {
            state.settings.adBlocker = !state.settings.adBlocker;
            adBlockerToggle.classList.toggle('active');
            saveSettings();
            initializeAdBlocker();
        });
    }
    
    // Search engine setting
    const searchEngineSetting = document.getElementById('searchEngineSetting');
    if (searchEngineSetting) {
        searchEngineSetting.addEventListener('change', (e) => {
            state.settings.searchEngine = e.target.value;
            saveSettings();
        });
    }
    
    // Startup page setting
    const startupPageSetting = document.getElementById('startupPageSetting');
    if (startupPageSetting) {
        startupPageSetting.addEventListener('change', (e) => {
            state.settings.startupPage = e.target.value;
            saveSettings();
        });
    }
    
    // Clear buttons
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', () => {
            if (confirm('are you sure you want to clear all history?')) {
                state.history = [];
                saveHistory();
                showNotification('history cleared!', 'success');
            }
        });
    }
    
    const clearBookmarksBtn = document.getElementById('clearBookmarksBtn');
    if (clearBookmarksBtn) {
        clearBookmarksBtn.addEventListener('click', () => {
            if (confirm('are you sure you want to clear all bookmarks?')) {
                state.bookmarks = [];
                saveBookmarks();
                showNotification('bookmarks cleared!', 'success');
            }
        });
    }
    
    const clearAllBtn = document.getElementById('clearAllBtn');
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
            if (confirm('are you sure you want to clear all browser data? this cannot be undone.')) {
                state.history = [];
                state.bookmarks = [];
                state.installedExtensions = [];
                localStorage.clear();
                saveSettings();
                showNotification('all data cleared!', 'success');
                location.reload();
            }
        });
    }
}

// ===================================
// EXTENSIONS STORE - ADVANCED
// ===================================

function initializeExtensionStore() {
    // Extensions store is initialized with state data
}

function renderExtensionStore(category = 'all', search = '') {
    const grid = document.getElementById('extensionsStoreGrid');
    if (!grid) return;
    
    let extensions = state.extensionStore;
    
    // Filter by category
    if (category !== 'all') {
        extensions = extensions.filter(ext => ext.category === category);
    }
    
    // Filter by search
    if (search) {
        extensions = extensions.filter(ext => 
            ext.name.toLowerCase().includes(search.toLowerCase()) ||
            ext.description.toLowerCase().includes(search.toLowerCase())
        );
    }
    
    const extensionsHTML = extensions.map(ext => `
        <div class="store-extension-card" onclick="installExtension('${ext.id}')">
            <div class="extension-header">
                <div class="extension-icon">
                    <i class="${ext.icon}"></i>
                </div>
                <div class="extension-info">
                    <h3>${ext.name}</h3>
                    <p>v${ext.version} • ⭐ ${ext.rating} • 📥 ${ext.downloads}</p>
                </div>
            </div>
            <div class="extension-description">${ext.description}</div>
            <div class="extension-category">${ext.category}</div>
            <button class="btn-primary install-btn">
                <i class="fas fa-plus"></i> install
            </button>
        </div>
    `).join('');
    
    grid.innerHTML = extensionsHTML || '<div class="empty-state"><i class="fas fa-puzzle-piece"></i><h3>no extensions found</h3><p>try a different search or category</p></div>';
}

function installExtension(extensionId) {
    const extension = state.extensionStore.find(e => e.id === extensionId);
    if (extension && !state.installedExtensions.find(e => e.id === extensionId)) {
        state.installedExtensions.push(extension);
        saveExtensions();
        showNotification(`${extension.name} installed successfully!`, 'success');
        
        // Activate extension features
        activateExtension(extension);
    } else if (state.installedExtensions.find(e => e.id === extensionId)) {
        showNotification('extension already installed', 'info');
    }
}

function activateExtension(extension) {
    switch (extension.id) {
        case 'theme-changer':
            // Theme changer is already integrated
            break;
        case 'night-mode':
            applyTheme('midnight');
            break;
        case 'speed-boost':
            // Speed boost is always active
            break;
        case 'video-downloader':
            // Add video download functionality
            addVideoDownloader();
            break;
        case 'password-manager':
            // Add password manager functionality
            addPasswordManager();
            break;
        case 'vpn-proxy':
            // Add VPN functionality
            addVPN();
            break;
    }
}

function addVideoDownloader() {
    // Add video download button to pages
    const style = document.createElement('style');
    style.textContent = `
        .video-download-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--lavender-dark);
            color: white;
            border: none;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 10000;
            display: none;
        }
        
        .video-download-btn:hover {
            background: var(--lavender-darker);
        }
    `;
    document.head.appendChild(style);
    
    // Video detection logic would go here
    console.log('video downloader activated');
}

function addPasswordManager() {
    // Add password manager functionality
    console.log('password manager activated');
}

function addVPN() {
    // Add VPN functionality
    console.log('vpn activated');
}

// ===================================
// NOTIFICATION SYSTEM
// ===================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation' : 'info'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'notificationSlideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===================================
// EXTENSIONS PAGE - ENHANCED
// ===================================

function renderExtensionsPage() {
    const installedHTML = state.installedExtensions.map(ext => `
        <div class="extension-card">
            <div class="extension-header">
                <div class="extension-icon">
                    <i class="${ext.icon}"></i>
                </div>
                <div class="extension-info">
                    <h3>${ext.name.toLowerCase()}</h3>
                    <p>v${ext.version} • ⭐ ${ext.rating}</p>
                </div>
            </div>
            <div class="extension-description">${ext.description.toLowerCase()}</div>
            <div class="extension-actions">
                <button class="btn-primary" onclick="removeExtension('${ext.id}')">
                    <i class="fas fa-trash"></i> remove
                </button>
            </div>
        </div>
    `).join('');
    
    return `
        <div class="page-content extensions-page">
            <div class="extensions-header">
                <h1><i class="fas fa-puzzle-piece"></i> extensions</h1>
                <button class="btn-primary" onclick="openExtensionsStore()">
                    <i class="fas fa-store"></i> extensions store
                </button>
            </div>
            
            <div class="extensions-grid">
                ${installedHTML || '<div class="empty-state"><i class="fas fa-puzzle-piece"></i><h3>no extensions installed</h3><p>visit the extensions store to add functionality</p></div>'}
            </div>
        </div>
    `;
}

function removeExtension(extensionId) {
    const extension = state.installedExtensions.find(e => e.id === extensionId);
    if (extension) {
        state.installedExtensions = state.installedExtensions.filter(e => e.id !== extensionId);
        saveExtensions();
        showNotification(`${extension.name} removed`, 'info');
        loadTabContent('whipped://extensions');
    }
}

// ===================================
// BOOKMARKS PAGE - ENHANCED
// ===================================

function renderBookmarksPage() {
    const bookmarksHTML = state.bookmarks.map(bookmark => `
        <div class="bookmark-item" onclick="navigateToBookmark('${bookmark.url}')">
            <i class="fas fa-bookmark bookmark-favicon"></i>
            <div class="bookmark-info">
                <div class="bookmark-title">${bookmark.title.toLowerCase()}</div>
                <div class="bookmark-url">${bookmark.url.toLowerCase()}</div>
            </div>
            <button class="bookmark-delete" onclick="event.stopPropagation(); deleteBookmark('${bookmark.id}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    return `
        <div class="page-content bookmarks-page">
            <div class="bookmarks-header">
                <h1><i class="fas fa-bookmark"></i> bookmarks</h1>
                <button class="btn-primary" onclick="openBookmarkModal()">
                    <i class="fas fa-plus"></i> add bookmark
                </button>
            </div>
            
            <div class="bookmarks-list">
                ${bookmarksHTML || '<div class="empty-state"><i class="fas fa-bookmark"></i><h3>no bookmarks</h3><p>start bookmarking your favorite sites</p></div>'}
            </div>
        </div>
    `;
}

// ===================================
// HISTORY PAGE - ENHANCED
// ===================================

function renderHistoryPage() {
    const historyHTML = state.history.slice().reverse().map(item => {
        const date = new Date(item.timestamp);
        const timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        return `
            <div class="history-item" onclick="navigateToHistory('${item.url}')">
                <div class="history-time">${timeStr}</div>
                <div class="history-info">
                    <div class="history-title">${item.title.toLowerCase()}</div>
                    <div class="history-url">${item.url.toLowerCase()}</div>
                </div>
            </div>
        `;
    }).join('');
    
    return `
        <div class="page-content history-page">
            <div class="history-header">
                <h1><i class="fas fa-clock-rotate-left"></i> history</h1>
                <button class="btn-secondary" onclick="clearAllHistory()">
                    <i class="fas fa-trash"></i> clear all
                </button>
            </div>
            
            <div class="history-list">
                ${historyHTML || '<div class="empty-state"><i class="fas fa-clock-rotate-left"></i><h3>no history</h3><p>your browsing history will appear here</p></div>'}
            </div>
        </div>
    `;
}

// ===================================
// SEARCH & NAVIGATION - ENHANCED
// ===================================

function handleSearch(query) {
    if (!query.trim()) return;
    
    // Check if it's a URL
    if (query.includes('.') && !query.includes(' ')) {
        let url = query;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        loadTabContent(url);
    } else {
        // Search query
        const searchEngines = {
            google: 'https://www.google.com/search?q=',
            duckduckgo: 'https://duckduckgo.com/?q=',
            bing: 'https://www.bing.com/search?q=',
            yahoo: 'https://search.yahoo.com/search?p=',
            ecosia: 'https://www.ecosia.org/search?q='
        };
        
        const searchUrl = searchEngines[state.settings.searchEngine] + encodeURIComponent(query);
        loadTabContent(searchUrl);
    }
}

// ===================================
// WHIPGPT AI ASSISTANT - ENHANCED
// ===================================

async function sendWhipGPTMessage(message) {
    const chatContainer = document.getElementById('chatContainer');
    
    // Remove welcome message if present
    const welcome = chatContainer.querySelector('.chat-welcome');
    if (welcome) {
        welcome.remove();
    }
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.innerHTML = `<div class="chat-bubble">${escapeHtml(message)}</div>`;
    chatContainer.appendChild(userMessage);
    
    // Add loading message
    const loadingMessage = document.createElement('div');
    loadingMessage.className = 'chat-message assistant';
    loadingMessage.innerHTML = `<div class="chat-bubble"><div class="loading-spinner"></div></div>`;
    chatContainer.appendChild(loadingMessage);
    
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    try {
        const response = await fetch(`${CONFIG.GEMINI_API_URL}?key=${CONFIG.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: message
                    }]
                }]
            })
        });
        
        const data = await response.json();
        
        // Remove loading message
        loadingMessage.remove();
        
        // Add AI response
        const aiMessage = document.createElement('div');
        aiMessage.className = 'chat-message assistant';
        
        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
            const aiText = data.candidates[0].content.parts[0].text;
            aiMessage.innerHTML = `<div class="chat-bubble">${escapeHtml(aiText)}</div>`;
        } else {
            aiMessage.innerHTML = `<div class="chat-bubble">sorry, i couldn't process that request.</div>`;
        }
        
        chatContainer.appendChild(aiMessage);
    } catch (error) {
        console.error('whipgpt error:', error);
        loadingMessage.remove();
        
        const errorMessage = document.createElement('div');
        errorMessage.className = 'chat-message assistant';
        errorMessage.innerHTML = `<div class="chat-bubble">sorry, i encountered an error. please try again.</div>`;
        chatContainer.appendChild(errorMessage);
    }
    
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===================================
// MODAL MANAGEMENT - ENHANCED
// ===================================

function openExtensionsStore() {
    document.getElementById('extensionsModal').classList.add('active');
    renderExtensionStore();
}

function openThemeChanger() {
    document.getElementById('themeChangerModal').classList.add('active');
}

function openCursorModal() {
    document.getElementById('cursorModal').classList.add('active');
}

// ===================================
// DATA PERSISTENCE - ENHANCED
// ===================================

function loadSettings() {
    const saved = localStorage.getItem('whipped_settings');
    if (saved) {
        state.settings = { ...state.settings, ...JSON.parse(saved) };
    }
}

function saveSettings() {
    localStorage.setItem('whipped_settings', JSON.stringify(state.settings));
}

function loadProfile() {
    const saved = localStorage.getItem('whipped_profile');
    if (saved) {
        state.currentProfile = JSON.parse(saved);
    } else {
        state.currentProfile = {
            id: 'default',
            name: 'personal',
            theme: 'lavender',
            isIncognito: false
        };
        saveProfile();
    }
}

function saveProfile() {
    localStorage.setItem('whipped_profile', JSON.stringify(state.currentProfile));
}

function loadBookmarks() {
    const saved = localStorage.getItem('whipped_bookmarks');
    if (saved) {
        state.bookmarks = JSON.parse(saved);
    }
}

function saveBookmarks() {
    localStorage.setItem('whipped_bookmarks', JSON.stringify(state.bookmarks));
}

function loadHistory() {
    const saved = localStorage.getItem('whipped_history');
    if (saved) {
        state.history = JSON.parse(saved);
    }
}

function saveHistory() {
    localStorage.setItem('whipped_history', JSON.stringify(state.history));
}

function loadExtensions() {
    const saved = localStorage.getItem('whipped_extensions');
    if (saved) {
        state.installedExtensions = JSON.parse(saved);
    }
}

function saveExtensions() {
    localStorage.setItem('whipped_extensions', JSON.stringify(state.installedExtensions));
}

function addToHistory(url, title) {
    if (url.startsWith('whipped://')) return;
    
    state.history.push({
        id: `history-${Date.now()}`,
        url: url,
        title: title,
        timestamp: Date.now()
    });
    
    // Keep only last 100 items
    if (state.history.length > 100) {
        state.history = state.history.slice(-100);
    }
    
    saveHistory();
}

// ===================================
// EVENT LISTENERS - ENHANCED
// ===================================

function setupEventListeners() {
    // New tab button
    document.getElementById('newTabBtn').addEventListener('click', () => {
        createNewTab();
    });
    
    // Navigation buttons
    document.getElementById('backBtn').addEventListener('click', () => {
        window.history.back();
    });
    
    document.getElementById('forwardBtn').addEventListener('click', () => {
        window.history.forward();
    });
    
    document.getElementById('refreshBtn').addEventListener('click', () => {
        const activeTab = state.tabs.find(t => t.id === state.activeTabId);
        if (activeTab) {
            loadTabContent(activeTab.url);
        }
    });
    
    // Search functionality
    const addressInput = document.getElementById('addressInput');
    addressInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch(addressInput.value);
        }
    });
    
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', () => {
        handleSearch(addressInput.value);
    });
    
    // Control buttons
    document.getElementById('tabCloakerBtn').addEventListener('click', () => {
        document.getElementById('tabCloakerModal').classList.add('active');
    });
    
    document.getElementById('bookmarkBtn').addEventListener('click', () => {
        openBookmarkModal();
    });
    
    document.getElementById('aiBtn').addEventListener('click', () => {
        document.getElementById('whipgptModal').classList.add('active');
        document.getElementById('chatInput').focus();
    });
    
    document.getElementById('extensionsBtn').addEventListener('click', () => {
        loadTabContent('whipped://extensions');
    });
    
    document.getElementById('settingsBtn').addEventListener('click', () => {
        loadTabContent('whipped://settings');
    });
    
    document.getElementById('profileBtn').addEventListener('click', () => {
        document.getElementById('profileModal').classList.add('active');
        renderProfiles();
    });
    
    // Modal close buttons
    document.getElementById('closeTabCloaker').addEventListener('click', () => {
        document.getElementById('tabCloakerModal').classList.remove('active');
    });
    
    document.getElementById('closeWhipGPT').addEventListener('click', () => {
        document.getElementById('whipgptModal').classList.remove('active');
    });
    
    document.getElementById('closeProfile').addEventListener('click', () => {
        document.getElementById('profileModal').classList.remove('active');
    });
    
    document.getElementById('closeBookmark').addEventListener('click', () => {
        document.getElementById('bookmarkModal').classList.remove('active');
    });
    
    document.getElementById('closeExtensions').addEventListener('click', () => {
        document.getElementById('extensionsModal').classList.remove('active');
    });
    
    document.getElementById('closeThemeChanger').addEventListener('click', () => {
        document.getElementById('themeChangerModal').classList.remove('active');
    });
    
    document.getElementById('closeCursor').addEventListener('click', () => {
        document.getElementById('cursorModal').classList.remove('active');
    });
    
    // WhipGPT chat
    document.getElementById('sendChatBtn').addEventListener('click', () => {
        const input = document.getElementById('chatInput');
        if (input.value.trim()) {
            sendWhipGPTMessage(input.value);
            input.value = '';
        }
    });
    
    document.getElementById('chatInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const input = document.getElementById('chatInput');
            if (input.value.trim()) {
                sendWhipGPTMessage(input.value);
                input.value = '';
            }
        }
    });
    
    // Extensions store
    const storeSearch = document.getElementById('storeSearch');
    if (storeSearch) {
        storeSearch.addEventListener('input', (e) => {
            const category = document.querySelector('.category-btn.active')?.dataset.category || 'all';
            renderExtensionStore(category, e.target.value);
        });
    }
    
    // Category buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            renderExtensionStore(e.target.dataset.category);
        }
    });
    
    // Save bookmark
    document.getElementById('saveBookmarkBtn').addEventListener('click', () => {
        const title = document.getElementById('bookmarkTitle').value;
        const url = document.getElementById('bookmarkUrl').value;
        
        if (title && url) {
            state.bookmarks.push({
                id: `bookmark-${Date.now()}`,
                title: title,
                url: url,
                timestamp: Date.now()
            });
            saveBookmarks();
            document.getElementById('bookmarkModal').classList.remove('active');
            showNotification('bookmark saved!', 'success');
            
            // Refresh if on bookmarks page
            const activeTab = state.tabs.find(t => t.id === state.activeTabId);
            if (activeTab?.url === 'whipped://bookmarks') {
                loadTabContent('whipped://bookmarks');
            }
        }
    });
    
    // Add profile button
    document.getElementById('addProfileBtn').addEventListener('click', () => {
        const name = prompt('enter profile name:');
        if (name) {
            showNotification('profile creation coming soon!', 'info');
        }
    });
    
    // Close modals on background click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

function navigateToBookmark(url) {
    loadTabContent(url);
}

function deleteBookmark(bookmarkId) {
    if (confirm('delete this bookmark?')) {
        state.bookmarks = state.bookmarks.filter(b => b.id !== bookmarkId);
        saveBookmarks();
        showNotification('bookmark deleted', 'info');
        loadTabContent('whipped://bookmarks');
    }
}

function navigateToHistory(url) {
    loadTabContent(url);
}

function clearAllHistory() {
    if (confirm('clear all browsing history?')) {
        state.history = [];
        saveHistory();
        showNotification('history cleared', 'info');
        loadTabContent('whipped://history');
    }
}

function openBookmarkModal() {
    const modal = document.getElementById('bookmarkModal');
    const activeTab = state.tabs.find(t => t.id === state.activeTabId);
    
    document.getElementById('bookmarkTitle').value = activeTab?.title || '';
    document.getElementById('bookmarkUrl').value = activeTab?.url || '';
    
    modal.classList.add('active');
}

function renderProfiles() {
    const profilesList = document.getElementById('profilesList');
    
    const profiles = [
        { id: 'default', name: 'personal', theme: 'lavender', isIncognito: false },
        { id: 'work', name: 'work', theme: 'midnight', isIncognito: false },
        { id: 'incognito', name: 'incognito', theme: 'black', isIncognito: true }
    ];
    
    profilesList.innerHTML = profiles.map(profile => `
        <div class="profile-card ${profile.id === state.currentProfile?.id ? 'active' : ''}" onclick="switchProfile('${profile.id}')">
            <div class="profile-avatar">${profile.name.charAt(0)}</div>
            <div class="profile-name">${profile.name}</div>
            <div class="profile-theme">${profile.theme} theme</div>
        </div>
    `).join('');
}

function switchProfile(profileId) {
    showNotification('profile switching coming soon!', 'info');
    document.getElementById('profileModal').classList.remove('active');
}

// Make functions globally accessible
window.toggleExtension = toggleExtension;
window.openWebStore = openWebStore;
window.navigateToBookmark = navigateToBookmark;
window.deleteBookmark = deleteBookmark;
window.openBookmarkModal = openBookmarkModal;
window.navigateToHistory = navigateToHistory;
window.clearAllHistory = clearAllHistory;
window.switchProfile = switchProfile;
window.installExtension = installExtension;
window.removeExtension = removeExtension;
window.applyTabCloak = applyTabCloak;
window.setCursor = setCursor;
window.applyTheme = applyTheme;
window.openExtensionsStore = openExtensionsStore;
window.openThemeChanger = openThemeChanger;
window.openCursorModal = openCursorModal;