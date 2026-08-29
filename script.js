// Update time every minute
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 60000);
updateTime();

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Balance Toggle Functionality
let balanceVisible = true;

function toggleBalance() {
    balanceVisible = !balanceVisible;
    const displayBalance = document.getElementById('displayBalance');
    const accountBalance = document.getElementById('accountBalance');
    const ledgerBalance = document.getElementById('ledgerBalance');
    
    if (!balanceVisible) {
        displayBalance.textContent = '••••';
        accountBalance.textContent = '••••';
        ledgerBalance.textContent = '••••';
    } else {
        displayBalance.textContent = '₦81.67';
        accountBalance.textContent = '₦81.67';
        ledgerBalance.textContent = '₦81.67';
    }
}

const hideBalanceBtn = document.getElementById('hideBalanceBtn');
const hideBalance2 = document.getElementById('hideBalance2');
const balanceToggle = document.getElementById('balanceToggle');
const balanceToggle2 = document.getElementById('balanceToggle2');

hideBalanceBtn.addEventListener('click', toggleBalance);
hideBalance2.addEventListener('click', toggleBalance);
balanceToggle.addEventListener('click', () => {
    balanceToggle.classList.toggle('active');
    balanceToggle2.classList.toggle('active');
    toggleBalance();
});
balanceToggle2.addEventListener('click', () => {
    balanceToggle.classList.toggle('active');
    balanceToggle2.classList.toggle('active');
    toggleBalance();
});

// Modal Functionality
const modal = document.getElementById('actionModal');
const modalClose = document.getElementById('modalClose');
const modalButton = document.getElementById('modalButton');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');

function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

modalClose.addEventListener('click', closeModal);
modalButton.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// eaZyLinks Click Handlers
const eazyLinkItems = document.querySelectorAll('.eazylink-item');
const eazyLinksMessages = {
    'qr-payments': 'QR Payments',
    'travel': 'Travel & Leisure',
    'cable-tv': 'Cable TV Services',
    'cards': 'Cards Management',
    'mybvn': 'MyBVN Service',
    'scheduled-payments': 'Scheduled Payments',
    'customize': 'Customize eaZylinks',
    'settings': 'Settings'
};

eazyLinkItems.forEach(item => {
    item.addEventListener('click', () => {
        const action = item.getAttribute('data-action');
        const title = eazyLinksMessages[action];
        showModal(title, `${title} feature is coming soon! Please check back later.`);
    });
});

// Bottom Navigation
const navItems = document.querySelectorAll('.nav-item');
const pages = {
    'overview': 'Overview Page',
    'airtime': 'Airtime Services',
    'transfer': 'Money Transfer',
    'bills': 'Bills Payment'
};

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        const page = item.getAttribute('data-page');
        showModal('Navigation', `Welcome to ${pages[page]}. This feature is under development.`);
    });
});

// History Button
document.getElementById('historyBtn').addEventListener('click', () => {
    showModal('Transaction History', 'No transactions available. Your transaction history will appear here.');
});

// Prevent default link behavior in menu
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const text = link.textContent;
        showModal('Menu', `${text} section is coming soon!`);
    });
});

// Add smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});

// Simulate data refresh
function refreshData() {
    console.log('Data refreshed at:', new Date().toLocaleTimeString());
}

// Optional: Add pull-to-refresh functionality for mobile
let startY = 0;
const mainContent = document.querySelector('.main-content');

mainContent.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

mainContent.addEventListener('touchend', (e) => {
    const endY = e.changedTouches[0].clientY;
    if (endY > startY + 100 && mainContent.scrollTop === 0) {
        refreshData();
    }
});