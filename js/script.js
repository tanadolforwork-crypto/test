// ─────────────────────────────────────────────────────────────────
// PORTFOLIO - STANDALONE HTML/CSS/JS VERSION
// ─────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────
// DATA MANAGEMENT
// ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'portfolio_data';
const ADMIN_PASSWORD = 'admin123';

const defaultData = {
    about: 'นิพัฒนาเว็บไซต์และผู้เชี่ยวชาญด้านเทคโนโลยีสารสนเทศที่มีประสบการณ์ดูแลเว็บไซต์ให้กับองค์กรชั้นนำของประเทศไทย',
    skills: ['HTML / CSS', 'CMS Management', 'Website Update & Maintenance', 'Web Content Management'],
    projects: [
        {
            id: '1',
            title: 'เว็บไซต์ขายรถยนต์',
            description: 'ออกแบบและพัฒนาเว็บไซต์สำหรับขายรถยนต์ ครบครันด้วยระบบแสดงรายการสินค้า ค้นหา และรายละเอียดรถ',
            technologies: ['HTML', 'CSS', 'Web Design'],
            imageUrl: 'https://via.placeholder.com/600x300?text=Car+Sales+Website'
        },
        {
            id: '2',
            title: 'ระบบตรวจจับผู้มีอาวุธปืน',
            description: 'ระบบตรวจจับผู้มีอาวุธปืนและตรวจวัดอุณหภูมิด้วย Computer Vision สำหรับการรักษาความปลอดภัย',
            technologies: ['Computer Vision', 'AI', 'Python'],
            imageUrl: 'https://via.placeholder.com/600x300?text=Weapon+Detection'
        },
        {
            id: '3',
            title: 'เว็บไซต์ขายเสื้อฟุตบอลมือสอง',
            description: 'แพลตฟอร์มซื้อขายเสื้อฟุตบอลมือสอง พร้อมระบบจัดการสินค้าและการสั่งซื้อออนไลน์',
            technologies: ['HTML', 'CSS', 'E-commerce'],
            imageUrl: 'https://via.placeholder.com/600x300?text=Football+Shop'
        },
        {
            id: '4',
            title: 'แอปพลิเคชันดูดวง',
            description: 'แอปพลิเคชันมือถือสำหรับดูดวงและทำนายอนาคต พร้อมฟีเจอร์ที่หลากหลาย',
            technologies: ['React Native', 'Node.js', 'PostgreSQL'],
            imageUrl: 'https://via.placeholder.com/600x300?text=Fortune+App'
        }
    ],
    clients: [
        { id: '1', name: 'บริษัท ดุสิตธานี จำกัด (มหาชน)', imageUrl: '' },
        { id: '2', name: 'บริษัท กลุ่มเซ็นทรัล จำกัด', imageUrl: '' },
        { id: '3', name: 'บริษัท การบินกรุงเทพ จำกัด (มหาชน)', imageUrl: '' },
        { id: '4', name: 'บริษัท ผลิตไฟฟ้า จำกัด (มหาชน)', imageUrl: '' },
        { id: '5', name: 'บริษัท สเตคอน กรุ๊ป จำกัด (มหาชน)', imageUrl: '' },
        { id: '6', name: 'บริษัท เอส โฮเทล แอนด์ รีสอร์ท จำกัด (มหาชน)', imageUrl: '' },
        { id: '7', name: 'บริษัท พีเอสจี คอร์ปอเรชั่น จำกัด (มหาชน)', imageUrl: '' },
        { id: '8', name: 'บริษัท แพทย์รังสิต เฮลท์แคร์กรุ๊ป จำกัด (มหาชน)', imageUrl: '' },
        { id: '9', name: 'บริษัท พีพีพี กรีน คอมเพล็กซ์ จำกัด (มหาชน)', imageUrl: '' },
        { id: '10', name: 'บริษัท อิชิตัน กรุ๊ป จำกัด (มหาชน)', imageUrl: '' },
        { id: '11', name: 'บริษัท เอพี (ไทยแลนด์) จำกัด (มหาชน)', imageUrl: '' },
        { id: '12', name: 'บริษัท ช.การช่าง จำกัด (มหาชน)', imageUrl: '' }
    ]
};

function getPortfolioData() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultData;
}

function savePortfolioData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function resetPortfolioData() {
    localStorage.removeItem(STORAGE_KEY);
}

// ─────────────────────────────────────────────────────────────────
// THEME MANAGEMENT
// ─────────────────────────────────────────────────────────────────

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeButton(next);
}

function updateThemeButton(theme) {
    const btn = document.getElementById('themeToggle');
    btn.textContent = theme === 'light' ? '🌙' : '☀️';
}

// ─────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────

function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ─────────────────────────────────────────────────────────────────
// CAROUSEL
// ─────────────────────────────────────────────────────────────────

class Carousel {
    constructor(trackId, prevBtnId, nextBtnId, indicatorsId) {
        this.track = document.getElementById(trackId);
        this.prevBtn = document.getElementById(prevBtnId);
        this.nextBtn = document.getElementById(nextBtnId);
        this.indicatorsContainer = document.getElementById(indicatorsId);
        this.currentIndex = 0;
        this.items = [];

        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
    }

    setItems(items) {
        this.items = items;
        this.render();
        this.updateIndicators();
    }

    render() {
        this.track.innerHTML = '';
        this.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'carousel-item';
            div.innerHTML = item;
            this.track.appendChild(div);
        });
        this.updatePosition();
    }

    updatePosition() {
        const offset = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${offset}%)`;
    }

    updateIndicators() {
        this.indicatorsContainer.innerHTML = '';
        for (let i = 0; i < this.items.length; i++) {
            const indicator = document.createElement('div');
            indicator.className = `indicator ${i === this.currentIndex ? 'active' : ''}`;
            indicator.addEventListener('click', () => this.goTo(i));
            this.indicatorsContainer.appendChild(indicator);
        }
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updatePosition();
        this.updateIndicators();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.updatePosition();
        this.updateIndicators();
    }

    goTo(index) {
        this.currentIndex = index;
        this.updatePosition();
        this.updateIndicators();
    }
}

// ─────────────────────────────────────────────────────────────────
// RENDER PORTFOLIO CONTENT
// ─────────────────────────────────────────────────────────────────

function renderPortfolio() {
    const data = getPortfolioData();

    // Update about section
    document.getElementById('aboutText').innerHTML = `<p>${data.about}</p>`;

    // Render projects carousel
    const projectItems = data.projects.map(project => `
        <div>
            ${project.imageUrl ? `<img src="${project.imageUrl}" alt="${project.title}">` : ''}
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `);

    projectsCarousel.setItems(projectItems);

    // Render clients carousel
    const clientItems = data.clients.map((client, index) => `
        <div style="text-align: center;">
            ${client.imageUrl ? `<img src="${client.imageUrl}" alt="${client.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;">` : `<div style="width: 100%; height: 200px; background-color: var(--accent-light); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; font-size: 48px; font-weight: bold; color: var(--accent-color);">${index + 1}</div>`}
            <h3>${client.name}</h3>
            <p style="color: var(--text-secondary); font-size: 14px;">บริษัทชั้นนำของประเทศไทย</p>
        </div>
    `);

    clientsCarousel.setItems(clientItems);
}

// ─────────────────────────────────────────────────────────────────
// ADMIN PANEL
// ─────────────────────────────────────────────────────────────────

let adminAuthenticated = false;

function initAdmin() {
    const adminBtn = document.getElementById('adminBtn');
    const adminModal = document.getElementById('adminModal');
    const modalContent = document.getElementById('modalContent');

    adminBtn.addEventListener('click', () => {
        if (!adminAuthenticated) {
            showLoginForm();
        } else {
            showAdminPanel();
        }
        adminModal.classList.add('active');
    });

    // Close modal when clicking outside
    adminModal.addEventListener('click', (e) => {
        if (e.target === adminModal) {
            adminModal.classList.remove('active');
        }
    });
}

function showLoginForm() {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>Admin Panel</h2>
            <button class="close-btn" onclick="document.getElementById('adminModal').classList.remove('active')">✕</button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label>Password</label>
                <input type="password" id="passwordInput" placeholder="Enter admin password" autofocus>
                <p style="font-size: 12px; color: var(--text-secondary); margin-top: 8px;">Default: admin123</p>
            </div>
            <div style="display: flex; gap: 12px;">
                <button class="btn btn-primary" onclick="loginAdmin()">Login</button>
                <button class="btn btn-secondary" onclick="document.getElementById('adminModal').classList.remove('active')">Cancel</button>
            </div>
        </div>
    `;
    document.getElementById('passwordInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') loginAdmin();
    });
}

function loginAdmin() {
    const password = document.getElementById('passwordInput').value;
    if (password === ADMIN_PASSWORD) {
        adminAuthenticated = true;
        showAdminPanel();
    } else {
        alert('Incorrect password');
        document.getElementById('passwordInput').value = '';
    }
}

function showAdminPanel() {
    const data = getPortfolioData();
    const modalContent = document.getElementById('modalContent');

    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>Admin Panel</h2>
            <button class="close-btn" onclick="logoutAdmin()">✕</button>
        </div>
        <div class="modal-body">
            <div class="admin-tabs">
                <button class="admin-tab active" onclick="switchTab('projects')">Projects</button>
                <button class="admin-tab" onclick="switchTab('clients')">Clients</button>
                <button class="admin-tab" onclick="switchTab('about')">About</button>
                <button class="admin-tab" onclick="switchTab('settings')">Settings</button>
            </div>

            <!-- Projects Tab -->
            <div id="projects" class="admin-tab-content active">
                <h3>Add New Project</h3>
                <div class="form-group">
                    <label>Project Title *</label>
                    <input type="text" id="projectTitle" placeholder="e.g., Car Sales Website">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea id="projectDesc" placeholder="Project description..."></textarea>
                </div>
                <div class="form-group">
                    <label>Technologies (comma-separated)</label>
                    <input type="text" id="projectTechs" placeholder="e.g., React, Node.js, MongoDB">
                </div>
                <div class="form-group">
                    <label>Image URL</label>
                    <input type="text" id="projectImage" placeholder="https://example.com/image.jpg">
                </div>
                <button class="btn btn-primary" onclick="addProject()">Add Project</button>

                <h3 style="margin-top: 32px;">Existing Projects (${data.projects.length})</h3>
                <div class="item-list">
                    ${data.projects.map(p => `
                        <div class="item-card">
                            ${p.imageUrl ? `<img src="${p.imageUrl}" alt="${p.title}">` : ''}
                            <div class="item-info">
                                <h4>${p.title}</h4>
                                <p>${p.technologies.join(', ')}</p>
                            </div>
                            <button class="btn btn-sm btn-danger" onclick="deleteProject('${p.id}')">Delete</button>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Clients Tab -->
            <div id="clients" class="admin-tab-content">
                <h3>Add New Client</h3>
                <div class="form-group">
                    <label>Client Name *</label>
                    <input type="text" id="clientName" placeholder="e.g., Optiwise Co., Ltd.">
                </div>
                <div class="form-group">
                    <label>Company Image URL</label>
                    <input type="text" id="clientImage" placeholder="https://example.com/image.jpg">
                </div>
                <button class="btn btn-primary" onclick="addClient()">Add Client</button>

                <h3 style="margin-top: 32px;">Existing Clients (${data.clients.length})</h3>
                <div class="item-list">
                    ${data.clients.map(c => `
                        <div class="item-card">
                            ${c.imageUrl ? `<img src="${c.imageUrl}" alt="${c.name}">` : ''}
                            <div class="item-info">
                                <h4>${c.name}</h4>
                            </div>
                            <button class="btn btn-sm btn-danger" onclick="deleteClient('${c.id}')">Delete</button>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- About Tab -->
            <div id="about" class="admin-tab-content">
                <h3>About Section</h3>
                <div class="form-group">
                    <label>About Text</label>
                    <textarea id="aboutText" placeholder="Tell about yourself...">${data.about}</textarea>
                </div>
                <button class="btn btn-primary" onclick="updateAbout()">Save About</button>
            </div>

            <!-- Settings Tab -->
            <div id="settings" class="admin-tab-content">
                <h3>Data Management</h3>
                <button class="btn btn-secondary" onclick="exportData()" style="width: 100%; margin-bottom: 12px;">📥 Export Data as JSON</button>
                <button class="btn btn-secondary" onclick="importData()" style="width: 100%; margin-bottom: 12px;">📤 Import Data from JSON</button>
                <button class="btn btn-danger" onclick="resetData()" style="width: 100%;">🔄 Reset to Default</button>
            </div>
        </div>
    `;
}

function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.admin-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

function addProject() {
    const title = document.getElementById('projectTitle').value;
    if (!title) {
        alert('Project title is required');
        return;
    }

    const data = getPortfolioData();
    data.projects.push({
        id: Date.now().toString(),
        title,
        description: document.getElementById('projectDesc').value,
        technologies: document.getElementById('projectTechs').value.split(',').map(t => t.trim()).filter(t => t),
        imageUrl: document.getElementById('projectImage').value
    });

    savePortfolioData(data);
    renderPortfolio();
    showAdminPanel();
    alert('Project added successfully');
}

function deleteProject(id) {
    if (confirm('Delete this project?')) {
        const data = getPortfolioData();
        data.projects = data.projects.filter(p => p.id !== id);
        savePortfolioData(data);
        renderPortfolio();
        showAdminPanel();
    }
}

function addClient() {
    const name = document.getElementById('clientName').value;
    if (!name) {
        alert('Client name is required');
        return;
    }

    const data = getPortfolioData();
    data.clients.push({
        id: Date.now().toString(),
        name,
        imageUrl: document.getElementById('clientImage').value
    });

    savePortfolioData(data);
    renderPortfolio();
    showAdminPanel();
    alert('Client added successfully');
}

function deleteClient(id) {
    if (confirm('Delete this client?')) {
        const data = getPortfolioData();
        data.clients = data.clients.filter(c => c.id !== id);
        savePortfolioData(data);
        renderPortfolio();
        showAdminPanel();
    }
}

function updateAbout() {
    const text = document.getElementById('aboutText').value;
    const data = getPortfolioData();
    data.about = text;
    savePortfolioData(data);
    renderPortfolio();
    alert('About section updated');
}

function exportData() {
    const data = getPortfolioData();
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-data.json';
    a.click();
    URL.revokeObjectURL(url);
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                savePortfolioData(data);
                renderPortfolio();
                showAdminPanel();
                alert('Data imported successfully');
            } catch (err) {
                alert('Failed to import data: ' + err.message);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function resetData() {
    if (confirm('Reset all data to default? This cannot be undone.')) {
        resetPortfolioData();
        renderPortfolio();
        showAdminPanel();
        alert('Data reset to default');
    }
}

function logoutAdmin() {
    adminAuthenticated = false;
    document.getElementById('adminModal').classList.remove('active');
}

// ─────────────────────────────────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Initialize navigation
    initNavigation();

    // Initialize carousels
    window.projectsCarousel = new Carousel('projectsTrack', 'projectsPrev', 'projectsNext', 'projectsIndicators');
    window.clientsCarousel = new Carousel('clientsTrack', 'clientsPrev', 'clientsNext', 'clientsIndicators');

    // Render portfolio
    renderPortfolio();

    // Initialize admin panel
    initAdmin();
});
