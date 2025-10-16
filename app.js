// ===================================
// WHIPPED BROWSER - ULTRA EDITION
// 100+ FEATURES IMPLEMENTED
// ===================================

// Configuration
const CONFIG = {
    GEMINI_API_KEY: 'AIzaSyBp6HAwIqUbNeG8GzCFBX7utifsaTrrnk4',
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    SEARCH_ENGINES: {
        google: 'https://www.google.com/search?q=',
        bing: 'https://www.bing.com/search?q=',
        duckduckgo: 'https://duckduckgo.com/?q=',
        ecosia: 'https://www.ecosia.org/search?q='
    },
    // Scramjet Proxy Configuration
    SCRAMJET_PROXY: 'https://scramjet.mercurywork.shop/' // Official public Scramjet instance
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
    tabHistory: [],
    tabHistoryIndex: -1,
    profiles: [
        { id: 'default', name: 'Default', type: 'normal', isIncognito: false },
        { id: 'work', name: 'Work', type: 'normal', isIncognito: false },
        { id: 'incognito', name: 'Incognito', type: 'incognito', isIncognito: true }
    ],
    settings: {
        theme: 'lavender',
        particles: true,
        particleDensity: 0.2,
        searchEngine: 'google',
        startupPage: 'whipped://newtab',
        cursor: 'default',
        adBlocker: true,
        tabCloaker: null,
        useScramjetProxy: true
    },
    tabCloaks: {
        'google-drive': { title: 'Google Drive', favicon: 'https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_3.ico' },
        'canvas': { title: 'Canvas', favicon: 'https://instructure-uploads.s3.amazonaws.com/account_108120000000000001/attachments/503/favicon.ico' },
        'google': { title: 'Google', favicon: 'https://www.google.com/favicon.ico' },
        'youtube': { title: 'YouTube', favicon: 'https://www.youtube.com/favicon.ico' },
        'spotify': { title: 'Spotify', favicon: 'https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png' },
        'netflix': { title: 'Netflix', favicon: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico' },
        'discord': { title: 'Discord', favicon: 'https://discord.com/assets/favicon.ico' },
        'github': { title: 'GitHub', favicon: 'https://github.com/favicon.ico' },
        'wikipedia': { title: 'Wikipedia', favicon: 'https://en.wikipedia.org/static/favicon/wikipedia.ico' },
        'microsoft': { title: 'Microsoft Office', favicon: 'https://www.office.com/favicon.ico' }
    },
    extensionStore: [
        {
            id: 'adblocker',
            name: 'AdBlocker Pro',
            description: 'Blocks all ads and trackers for a cleaner browsing experience',
            icon: 'fas fa-shield-alt',
            category: 'privacy',
            version: '2.1.0',
            rating: 4.8,
            downloads: '10m+'
        },
        {
            id: 'theme-changer',
            name: 'Theme Changer',
            description: 'Beautiful themes for your browser with live preview',
            icon: 'fas fa-palette',
            category: 'themes',
            version: '1.5.0',
            rating: 4.9,
            downloads: '5m+'
        },
        {
            id: 'custom-cursors',
            name: 'Custom Cursors',
            description: 'Fun and unique cursors that follow your mouse',
            icon: 'fas fa-mouse',
            category: 'fun',
            version: '1.3.0',
            rating: 4.7,
            downloads: '3m+'
        },
        {
            id: 'tab-cloaker',
            name: 'Tab Cloaker',
            description: 'Disguise your tabs as educational sites',
            icon: 'fas fa-mask',
            category: 'productivity',
            version: '1.2.0',
            rating: 4.6,
            downloads: '2m+'
        },
        {
            id: 'night-mode',
            name: 'Night Mode',
            description: 'Automatic dark mode for all websites',
            icon: 'fas fa-moon',
            category: 'themes',
            version: '1.4.0',
            rating: 4.5,
            downloads: '8m+'
        },
        {
            id: 'speed-boost',
            name: 'Speed Boost',
            description: 'Optimize page loading speed by 300%',
            icon: 'fas fa-rocket',
            category: 'productivity',
            version: '1.1.0',
            rating: 4.4,
            downloads: '1m+'
        },
        {
            id: 'video-downloader',
            name: 'Video Downloader',
            description: 'Download videos from any website',
            icon: 'fas fa-download',
            category: 'productivity',
            version: '1.6.0',
            rating: 4.3,
            downloads: '7m+'
        },
        {
            id: 'password-manager',
            name: 'Password Manager',
            description: 'Secure password storage and autofill',
            icon: 'fas fa-key',
            category: 'privacy',
            version: '2.0.0',
            rating: 4.9,
            downloads: '15m+'
        },
        {
            id: 'grammar-check',
            name: 'Grammar Check',
            description: 'AI-powered grammar and spell checking',
            icon: 'fas fa-spell-check',
            category: 'productivity',
            version: '1.7.0',
            rating: 4.6,
            downloads: '4m+'
        },
        {
            id: 'emoji-picker',
            name: 'Emoji Picker',
            description: 'Quick access to 3000+ emojis',
            icon: 'fas fa-smile',
            category: 'fun',
            version: '1.2.0',
            rating: 4.8,
            downloads: '6m+'
        },
        {
            id: 'screen-recorder',
            name: 'Screen Recorder',
            description: 'Record your screen with audio',
            icon: 'fas fa-video',
            category: 'productivity',
            version: '1.3.0',
            rating: 4.5,
            downloads: '3m+'
        },
        {
            id: 'vpn-proxy',
            name: 'VPN Proxy',
            description: 'Free VPN with 50+ server locations',
            icon: 'fas fa-globe',
            category: 'privacy',
            version: '1.8.0',
            rating: 4.7,
            downloads: '12m+'
        }
    ]
};

// ===================================
// INITIALIZATION
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
    const cursors = {
        default: '',
        glow: 'glow',
        rainbow: 'rainbow',
        trail: 'trail',
        heart: 'heart',
        star: 'star'
    };
    
    cursor.className = `custom-cursor ${cursors[type] || ''}`;
    state.settings.cursor = type;
    saveSettings();
}

// ===================================
// THEME SYSTEM
// ===================================

function initializeThemeSystem() {
    applyTheme(state.settings.theme);
}

function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    state.settings.theme = theme;
    saveSettings();
    
    const themes = {
        lavender: { bg: '#E6E6FA', light: '#D8BFD8', medium: '#B19CD9', dark: '#9370DB', darker: '#7B68EE' },
        ocean: { bg: '#B8E6FF', light: '#87CEEB', medium: '#4682B4', dark: '#2E5984', darker: '#1E3A5F' },
        sunset: { bg: '#FFB6C1', light: '#FFA07A', medium: '#FF6347', dark: '#DC143C', darker: '#B22222' },
        forest: { bg: '#98FB98', light: '#90EE90', medium: '#228B22', dark: '#006400', darker: '#004000' },
        midnight: { bg: '#191970', light: '#483D8B', medium: '#2F4F4F', dark: '#000080', darker: '#000040' },
        neon: { bg: '#000000', light: '#FF00FF', medium: '#00FFFF', dark: '#00FF00', darker: '#FF00FF' }
    };
    
    const themeColors = themes[theme] || themes.lavender;
    document.documentElement.style.setProperty('--lavender-bg', themeColors.bg);
    document.documentElement.style.setProperty('--lavender-light', themeColors.light);
    document.documentElement.style.setProperty('--lavender-medium', themeColors.medium);
    document.documentElement.style.setProperty('--lavender-dark', themeColors.dark);
    document.documentElement.style.setProperty('--lavender-darker', themeColors.darker);
}

// ===================================
// PARTICLE SYSTEM
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
            
            if (this.x > canvas.width) this.x = 0;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
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
// AD BLOCKER
// ===================================

function initializeAdBlocker() {
    if (state.settings.adBlocker) {
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
// TAB MANAGEMENT
// ===================================

function createNewTab(url = null) {
    if (!url) url = state.settings.startupPage;
    
    const tabId = `tab-${Date.now()}`;
    const tab = {
        id: tabId,
        url: url,
        title: 'new tab',
        favicon: 'fa-globe',
        active: true,
        cloaked: false,
        history: [url],
        historyIndex: 0
    };
    
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
            faviconHtml = `<img src="${state.tabCloaks[state.settings.tabCloaker].favicon}" class="tab-favicon" style="width: 16px; height: 16px;">`;
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
// TAB CLOAKER
// ===================================

function applyTabCloak(cloakType) {
    const activeTab = state.tabs.find(t => t.id === state.activeTabId);
    if (activeTab && state.tabCloaks[cloakType]) {
        activeTab.cloaked = true;
        activeTab.title = state.tabCloaks[cloakType].title;
        state.settings.tabCloaker = cloakType;
        
        document.title = state.tabCloaks[cloakType].title;
        updateFavicon(state.tabCloaks[cloakType].favicon);
        
        saveSettings();
        renderTabs();
        document.getElementById('tabCloakerModal').classList.remove('active');
        showNotification(`Tab cloaked as ${cloakType}`, 'success');
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
// NAVIGATION HISTORY
// ===================================

function goBack() {
    const activeTab = state.tabs.find(t => t.id === state.activeTabId);
    if (!activeTab) return;
    
    if (activeTab.historyIndex > 0) {
        activeTab.historyIndex--;
        loadTabContent(activeTab.history[activeTab.historyIndex]);
    }
}

function goForward() {
    const activeTab = state.tabs.find(t => t.id === state.activeTabId);
    if (!activeTab) return;
    
    if (activeTab.historyIndex < activeTab.history.length - 1) {
        activeTab.historyIndex++;
        loadTabContent(activeTab.history[activeTab.historyIndex]);
    }
}

function refreshPage() {
    const activeTab = state.tabs.find(t => t.id === state.activeTabId);
    if (!activeTab) return;
    
    loadTabContent(activeTab.url);
}

function addToTabHistory(url) {
    const activeTab = state.tabs.find(t => t.id === state.activeTabId);
    if (!activeTab) return;
    
    if (activeTab.historyIndex < activeTab.history.length - 1) {
        activeTab.history = activeTab.history.slice(0, activeTab.historyIndex + 1);
    }
    
    activeTab.history.push(url);
    activeTab.historyIndex = activeTab.history.length - 1;
}

// ===================================
// CONTENT LOADING
// ===================================

function loadTabContent(url) {
    const contentArea = document.getElementById('contentArea');
    const addressInput = document.getElementById('addressInput');
    addressInput.value = url;
    
    document.getElementById('notFoundPage').style.display = 'none';
    
    if (url.startsWith('whipped://')) {
        loadSpecialPage(url);
    } else {
        loadWebPage(url);
        addToTabHistory(url);
    }
    
    const activeTab = state.tabs.find(t => t.id === state.activeTabId);
    if (activeTab) {
        activeTab.url = url;
    }
    
    if (!state.currentProfile?.isIncognito) {
        addToHistory(url, activeTab?.title || 'untitled');
    }
}

// ===================================
// SCRAMJET PROXY INTEGRATION
// ===================================
// 
// Scramjet is a web proxy that allows accessing blocked/restricted websites
// by routing all web traffic through the proxy server.
//
// How it works:
// 1. User inputs a URL (e.g., "youtube.com")
// 2. wrapWithScramjetProxy() encodes it: "https://scramjet.mercurywork.shop/?url=..."
// 3. The iframe loads the Scramjet proxy page with the target URL
// 4. Scramjet fetches and proxies the content back to the browser
//
// Benefits:
// - Access restricted/blocked websites
// - Bypass network filters and firewalls
// - Improved privacy and anonymity
// - Support for CAPTCHA and advanced site features
//
// Configuration:
// - Toggle in Settings > Privacy & Proxy > Scramjet Proxy
// - Setting persists across sessions in localStorage
// - Can be enabled/disabled without page reload
//

function wrapWithScramjetProxy(targetUrl) {
    if (!state.settings.useScramjetProxy) {
        return targetUrl;
    }
    
    try {
        // Ensure proper URL format
        if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
            targetUrl = 'https://' + targetUrl;
        }
        
        // Encode the target URL
        const encodedUrl = encodeURIComponent(targetUrl);
        
        // Return Scramjet proxy URL
        // Scramjet uses ?url= parameter for target URL
        return `${CONFIG.SCRAMJET_PROXY}?url=${encodedUrl}`;
    } catch (e) {
        console.error('Error wrapping URL with Scramjet proxy:', e);
        return targetUrl;
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
        default:
            show404Page();
    }
}

function loadWebPage(url) {
    const contentArea = document.getElementById('contentArea');
    
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    // Wrap URL with Scramjet proxy if enabled
    const proxiedUrl = wrapWithScramjetProxy(url);
    
    // Remove sandbox restrictions when using proxy (proxy provides isolation)
    // Keep sandbox for direct loading
    let sandboxAttr = '';
    if (!state.settings.useScramjetProxy && state.settings.adBlocker) {
        sandboxAttr = 'sandbox="allow-scripts allow-same-origin allow-forms"';
    }
    
    // If using Scramjet proxy, load content seamlessly without showing proxy UI
    if (state.settings.useScramjetProxy) {
        const iframeHTML = `
            <div class="page-content iframe-wrapper">
                <iframe id="scramjet-iframe" ${sandboxAttr} allow="camera; microphone; geolocation; accelerometer; gyroscope; magnetometer"></iframe>
            </div>
        `;
        contentArea.innerHTML = iframeHTML;
        
        // Load proxied content seamlessly
        loadScramjetContentSeamlessly(proxiedUrl);
    } else {
        // Direct loading without proxy
        const iframeHTML = `
            <div class="page-content iframe-wrapper">
                <iframe src="${proxiedUrl}" ${sandboxAttr} allow="camera; microphone; geolocation"></iframe>
            </div>
        `;
        contentArea.innerHTML = iframeHTML;
    }
    
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

function loadScramjetContentSeamlessly(proxiedUrl) {
    const iframe = document.getElementById('scramjet-iframe');
    loadScramjetViaIframe(proxiedUrl, iframe);
}

function loadScramjetViaIframe(proxiedUrl, iframe) {
    // Create wrapper that crops out the Scramjet UI from the top
    const wrapperHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                * {
                    margin: 0;
                    padding: 0;
                }
                html, body {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                #content-frame {
                    width: 100%;
                    height: 100%;
                    border: none;
                    display: block;
                    margin-top: -80px;
                    margin-left: 0;
                }
            </style>
        </head>
        <body>
            <iframe id="content-frame" src="${proxiedUrl}"></iframe>
        </body>
        </html>
    `;
    
    iframe.srcdoc = wrapperHTML;
}

function createCleanScramjetContent(html) {
    // Extract body content and create clean HTML
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const bodyContent = bodyMatch ? bodyMatch[1] : html;
    
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                * { margin: 0; padding: 0; }
                body { width: 100%; height: 100%; overflow: auto; }
                iframe { width: 100%; height: 100%; border: none; }
            </style>
        </head>
        <body>
            ${bodyContent}
        </body>
        </html>
    `;
}

function show404Page() {
    document.getElementById('notFoundPage').style.display = 'flex';
    document.getElementById('contentArea').innerHTML = '';
}

function goBack() {
    const activeTab = state.tabs.find(t => t.id === state.activeTabId);
    if (!activeTab) return;
    
    if (activeTab.historyIndex > 0) {
        activeTab.historyIndex--;
        loadTabContent(activeTab.history[activeTab.historyIndex]);
    }
}

// ===================================
// NEW TAB PAGE
// ===================================

function renderNewTabPage() {
    return `
        <div class="newtab-page">
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
    updateClock();
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
// SEARCH FUNCTIONALITY
// ===================================

function handleSearch(query) {
    if (!query) return;
    
    const searchEngine = state.settings.searchEngine;
    const searchUrl = CONFIG.SEARCH_ENGINES[searchEngine] || CONFIG.SEARCH_ENGINES.google;
    const url = searchUrl + encodeURIComponent(query);
    
    loadTabContent(url);
}

// ===================================
// BOOKMARKS
// ===================================

function renderBookmarksPage() {
    let bookmarksHTML = '<div class="bookmarks-page"><h1>Bookmarks</h1><div class="bookmarks-grid">';
    
    state.bookmarks.forEach((bookmark, index) => {
        bookmarksHTML += `
            <div class="bookmark-card" onclick="loadTabContent('${bookmark.url}')">
                <div class="bookmark-icon">
                    <i class="fas fa-star"></i>
                </div>
                <div class="bookmark-title">${bookmark.title}</div>
                <div class="bookmark-actions">
                    <button onclick="event.stopPropagation(); deleteBookmark(${index})">Delete</button>
                </div>
            </div>
        `;
    });
    
    bookmarksHTML += '</div></div>';
    return bookmarksHTML;
}

function setupBookmarksListeners() {
    
}

function addBookmark(title, url) {
    state.bookmarks.push({ title, url });
    saveBookmarks();
}

function deleteBookmark(index) {
    state.bookmarks.splice(index, 1);
    saveBookmarks();
    loadTabContent('whipped://bookmarks');
}

// ===================================
// HISTORY
// ===================================

function renderHistoryPage() {
    let historyHTML = '<div class="settings-page"><h1>History</h1><div class="bookmarks-grid">';
    
    state.history.reverse().forEach((item, index) => {
        historyHTML += `
            <div class="bookmark-card" onclick="loadTabContent('${item.url}')">
                <div class="bookmark-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="bookmark-title">${item.title}</div>
            </div>
        `;
    });
    
    historyHTML += '</div></div>';
    return historyHTML;
}

function setupHistoryListeners() {
    
}

function addToHistory(url, title) {
    state.history.push({ url, title, timestamp: Date.now() });
    saveHistory();
}

// ===================================
// SETTINGS PAGE
// ===================================

function renderSettingsPage() {
    return `
        <div class="settings-page">
            <div class="settings-header">
                <h1><i class="fas fa-gear"></i> Settings</h1>
            </div>
            
            <div class="settings-section">
                <h2><i class="fas fa-palette"></i> Appearance</h2>
                <div class="setting-item">
                    <label class="setting-label">Theme</label>
                    <button class="btn-primary" onclick="document.getElementById('themeChangerModal').classList.add('active')">
                        Change Theme
                    </button>
                </div>
                <div class="setting-item">
                    <label class="setting-label">Cursor</label>
                    <button class="btn-primary" onclick="document.getElementById('cursorModal').classList.add('active')">
                        Change Cursor
                    </button>
                </div>
                <div class="setting-item">
                    <label class="setting-label">Particles</label>
                    <input type="checkbox" ${state.settings.particles ? 'checked' : ''} onchange="toggleParticles()">
                </div>
            </div>
            
            <div class="settings-section">
                <h2><i class="fas fa-search"></i> Search</h2>
                <div class="setting-item">
                    <label class="setting-label">Search Engine</label>
                    <div class="custom-dropdown" id="searchEngineDropdown">
                        <button class="dropdown-button" onclick="toggleDropdown('searchEngineDropdown')">
                            ${state.settings.searchEngine}
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="dropdown-menu">
                            <div class="dropdown-option" onclick="setSearchEngine('google')">Google</div>
                            <div class="dropdown-option" onclick="setSearchEngine('bing')">Bing</div>
                            <div class="dropdown-option" onclick="setSearchEngine('duckduckgo')">DuckDuckGo</div>
                            <div class="dropdown-option" onclick="setSearchEngine('ecosia')">Ecosia</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="settings-section">
                <h2><i class="fas fa-home"></i> Startup</h2>
                <div class="setting-item">
                    <label class="setting-label">Startup Page</label>
                    <div class="custom-dropdown" id="startupPageDropdown">
                        <button class="dropdown-button" onclick="toggleDropdown('startupPageDropdown')">
                            ${state.settings.startupPage === 'whipped://newtab' ? 'New Tab' : 'Custom'}
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="dropdown-menu">
                            <div class="dropdown-option" onclick="setStartupPage('whipped://newtab')">New Tab</div>
                            <div class="dropdown-option" onclick="setStartupPage('whipped://bookmarks')">Bookmarks</div>
                            <div class="dropdown-option" onclick="setStartupPage('whipped://newtab')">Default</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="settings-section">
                <h2><i class="fas fa-shield-alt"></i> Privacy & Proxy</h2>
                <div class="setting-item">
                    <label class="setting-label">Ad Blocker</label>
                    <input type="checkbox" ${state.settings.adBlocker ? 'checked' : ''} onchange="toggleAdBlocker()">
                </div>
                <div class="setting-item">
                    <label class="setting-label">Scramjet Proxy</label>
                    <input type="checkbox" ${state.settings.useScramjetProxy ? 'checked' : ''} onchange="toggleScramjetProxy()">
                </div>
                <div class="setting-item" style="font-size: 0.85rem; color: #999; margin-top: -8px;">
                    <span>Proxy web traffic through Scramjet for better access to restricted sites</span>
                </div>
            </div>
            
            <div class="settings-section">
                <h2><i class="fas fa-undo"></i> Reset</h2>
                <button class="btn-primary" onclick="resetToDefault()">
                    Reset to Default
                </button>
            </div>
        </div>
    `;
}

function setupSettingsListeners() {
    
}

function toggleParticles() {
    state.settings.particles = !state.settings.particles;
    saveSettings();
}

function toggleAdBlocker() {
    state.settings.adBlocker = !state.settings.adBlocker;
    saveSettings();
}

function toggleScramjetProxy() {
    state.settings.useScramjetProxy = !state.settings.useScramjetProxy;
    saveSettings();
    showNotification(`Scramjet Proxy ${state.settings.useScramjetProxy ? 'enabled' : 'disabled'}`, 'success');
    
    // Reload current page if browsing to apply new proxy setting
    const activeTab = state.tabs.find(t => t.id === state.activeTabId);
    if (activeTab && !activeTab.url.startsWith('whipped://')) {
        loadTabContent(activeTab.url);
    }
    
    loadTabContent('whipped://settings');
}

function setSearchEngine(engine) {
    state.settings.searchEngine = engine;
    saveSettings();
    loadTabContent('whipped://settings');
    showNotification(`Search engine set to ${engine}`, 'success');
}

function setStartupPage(page) {
    state.settings.startupPage = page;
    saveSettings();
    loadTabContent('whipped://settings');
    showNotification('Startup page updated', 'success');
}

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const menu = dropdown.querySelector('.dropdown-menu');
    const button = dropdown.querySelector('.dropdown-button');
    
    menu.classList.toggle('show');
    button.classList.toggle('active');
}

function resetToDefault() {
    if (confirm('Are you sure you want to reset all settings to default?')) {
        state.settings = {
            theme: 'lavender',
            particles: true,
            particleDensity: 0.2,
            searchEngine: 'google',
            startupPage: 'whipped://newtab',
            cursor: 'default',
            adBlocker: true,
            tabCloaker: null,
            useScramjetProxy: true
        };
        saveSettings();
        applyTheme('lavender');
        setCursor('default');
        showNotification('Settings reset to default', 'success');
        loadTabContent('whipped://settings');
    }
}

// ===================================
// EXTENSIONS
// ===================================

function renderExtensionsPage() {
    let extensionsHTML = `
        <div class="extensions-store">
            <div class="store-categories">
                <button class="category-btn active" data-category="all" onclick="filterExtensions('all')">All</button>
                <button class="category-btn" data-category="productivity" onclick="filterExtensions('productivity')">Productivity</button>
                <button class="category-btn" data-category="privacy" onclick="filterExtensions('privacy')">Privacy</button>
                <button class="category-btn" data-category="themes" onclick="filterExtensions('themes')">Themes</button>
                <button class="category-btn" data-category="fun" onclick="filterExtensions('fun')">Fun</button>
            </div>
            <div class="store-search">
                <input type="text" id="storeSearch" placeholder="search extensions..." onkeyup="searchExtensions()">
            </div>
            <div class="extensions-grid" id="extensionsStoreGrid">
    `;
    
    state.extensionStore.forEach(ext => {
        const installed = state.installedExtensions.find(e => e.id === ext.id);
        extensionsHTML += `
            <div class="store-extension-card" data-category="${ext.category}">
                <div class="extension-header">
                    <div class="extension-icon">
                        <i class="${ext.icon}"></i>
                    </div>
                    <div class="extension-info">
                        <h3>${ext.name}</h3>
                        <p>v${ext.version}</p>
                    </div>
                </div>
                <div class="extension-description">${ext.description}</div>
                <div style="display: flex; gap: 8px; margin-bottom: 12px;">
                    <span class="extension-category">${ext.category}</span>
                    <span style="color: white; font-size: 11px; opacity: 0.7;">⭐ ${ext.rating}</span>
                </div>
                <div class="extension-actions">
                    ${installed ? 
                        `<button onclick="uninstallExtension('${ext.id}')">Uninstall</button>` :
                        `<button onclick="installExtension('${ext.id}', '${ext.name}')">Install</button>`
                    }
                </div>
            </div>
        `;
    });
    
    extensionsHTML += '</div></div>';
    return extensionsHTML;
}

function setupExtensionsListeners() {
    
}

function filterExtensions(category) {
    const cards = document.querySelectorAll('.store-extension-card');
    const buttons = document.querySelectorAll('.category-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function searchExtensions() {
    const searchTerm = document.getElementById('storeSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.store-extension-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function installExtension(id, name) {
    if (!state.installedExtensions.find(e => e.id === id)) {
        state.installedExtensions.push({ id, name });
        saveExtensions();
        showNotification(`${name} installed successfully`, 'success');
        loadTabContent('whipped://extensions');
    }
}

function uninstallExtension(id) {
    state.installedExtensions = state.installedExtensions.filter(e => e.id !== id);
    saveExtensions();
    showNotification('Extension uninstalled', 'info');
    loadTabContent('whipped://extensions');
}

function initializeExtensionStore() {
    
}

// ===================================
// PROFILES
// ===================================

function loadProfile() {
    const profileData = localStorage.getItem('currentProfile');
    if (profileData) {
        state.currentProfile = JSON.parse(profileData);
    } else {
        state.currentProfile = state.profiles[0];
        saveProfile();
    }
}

function saveProfile() {
    localStorage.setItem('currentProfile', JSON.stringify(state.currentProfile));
}

function switchProfile(profileId) {
    const profile = state.profiles.find(p => p.id === profileId);
    if (profile) {
        state.currentProfile = profile;
        saveProfile();
        state.tabs = [];
        createNewTab();
        showNotification(`Switched to ${profile.name} profile`, 'info');
    }
}

// ===================================
// STORAGE
// ===================================

function saveSettings() {
    localStorage.setItem('settings', JSON.stringify(state.settings));
}

function loadSettings() {
    const settings = localStorage.getItem('settings');
    if (settings) {
        state.settings = JSON.parse(settings);
    }
}

function saveBookmarks() {
    if (!state.currentProfile?.isIncognito) {
        localStorage.setItem(`bookmarks_${state.currentProfile?.id || 'default'}`, JSON.stringify(state.bookmarks));
    }
}

function loadBookmarks() {
    const bookmarks = localStorage.getItem(`bookmarks_${state.currentProfile?.id || 'default'}`);
    if (bookmarks) {
        state.bookmarks = JSON.parse(bookmarks);
    }
}

function saveHistory() {
    if (!state.currentProfile?.isIncognito) {
        localStorage.setItem(`history_${state.currentProfile?.id || 'default'}`, JSON.stringify(state.history));
    }
}

function loadHistory() {
    if (!state.currentProfile?.isIncognito) {
        const history = localStorage.getItem(`history_${state.currentProfile?.id || 'default'}`);
        if (history) {
            state.history = JSON.parse(history);
        }
    }
}

function saveExtensions() {
    localStorage.setItem('extensions', JSON.stringify(state.installedExtensions));
}

function loadExtensions() {
    const extensions = localStorage.getItem('extensions');
    if (extensions) {
        state.installedExtensions = JSON.parse(extensions);
    }
}

// ===================================
// NOTIFICATIONS
// ===================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'xmark' : 'info'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'notificationSlideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===================================
// EVENT LISTENERS
// ===================================

function setupEventListeners() {
    // Tab controls
    document.getElementById('newTabBtn').addEventListener('click', () => createNewTab());
    
    // Navigation controls
    document.getElementById('backBtn').addEventListener('click', goBack);
    document.getElementById('forwardBtn').addEventListener('click', goForward);
    document.getElementById('refreshBtn').addEventListener('click', refreshPage);
    
    // Address bar
    document.getElementById('addressInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch(document.getElementById('addressInput').value);
        }
    });
    
    document.getElementById('searchBtn').addEventListener('click', () => {
        handleSearch(document.getElementById('addressInput').value);
    });
    
    // Modal controls
    document.getElementById('tabCloakerBtn').addEventListener('click', () => {
        document.getElementById('tabCloakerModal').classList.add('active');
    });
    
    document.getElementById('bookmarkBtn').addEventListener('click', () => {
        document.getElementById('bookmarkModal').classList.add('active');
    });
    
    document.getElementById('aiBtn').addEventListener('click', () => {
        document.getElementById('whipgptModal').classList.add('active');
    });
    
    document.getElementById('extensionsBtn').addEventListener('click', () => {
        document.getElementById('extensionsModal').classList.add('active');
        loadTabContent('whipped://extensions');
        document.getElementById('extensionsModal').classList.add('active');
    });
    
    document.getElementById('settingsBtn').addEventListener('click', () => {
        loadTabContent('whipped://settings');
    });
    
    document.getElementById('profileBtn').addEventListener('click', () => {
        document.getElementById('profileModal').classList.add('active');
    });
    
    // Close modals
    document.getElementById('closeTabCloaker').addEventListener('click', () => {
        document.getElementById('tabCloakerModal').classList.remove('active');
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
    
    document.getElementById('closeWhipGPT').addEventListener('click', () => {
        document.getElementById('whipgptModal').classList.remove('active');
    });
    
    document.getElementById('closeProfile').addEventListener('click', () => {
        document.getElementById('profileModal').classList.remove('active');
    });
    
    // Bookmark form
    document.getElementById('saveBookmarkBtn').addEventListener('click', () => {
        const title = document.getElementById('bookmarkTitle').value;
        const url = document.getElementById('bookmarkUrl').value;
        if (title && url) {
            addBookmark(title, url);
            document.getElementById('bookmarkTitle').value = '';
            document.getElementById('bookmarkUrl').value = '';
            document.getElementById('bookmarkModal').classList.remove('active');
            showNotification('Bookmark saved', 'success');
        }
    });
    
    // Close modals on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}