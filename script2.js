// Wait for page to load
window.addEventListener('load', function () {
    // Hide loader
    document.querySelector('.loader').classList.add('hidden');

    // Animate project cards sequentially
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
        }, 200 * index);
    });
});

// Detect device theme preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme based on device preference
if (prefersDarkScheme.matches) {
    document.body.classList.remove('light-mode');
    document.getElementById('themeToggle').textContent = '🌓';
} else {
    document.body.classList.add('light-mode');
    document.getElementById('themeToggle').textContent = '🌙';
}

// Listen for system theme changes
prefersDarkScheme.addListener((e) => {
    if (e.matches) {
        document.body.classList.remove('light-mode');
        document.getElementById('themeToggle').textContent = '🌓';
    } else {
        document.body.classList.add('light-mode');
        document.getElementById('themeToggle').textContent = '🌙';
    }
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    // localStorage.setItem('userThemePreference', isLight ? 'light' : 'dark');
    themeToggle.textContent = isLight ? '🌙' : '🌓';

    // Update theme colors
    if (isLight) {
        document.documentElement.style.setProperty('--dark', '#f8f9fa');
        document.documentElement.style.setProperty('--light', '#121212');
    } else {
        document.documentElement.style.setProperty('--dark', '#121212');
        document.documentElement.style.setProperty('--light', '#f8f9fa');
    }
});

// Check for saved user preference on load
window.addEventListener('DOMContentLoaded', () => {
    const savedPreference = localStorage.getItem('userThemePreference');
    if (savedPreference) {
        if (savedPreference === 'light') {
            document.body.classList.add('light-mode');
            document.getElementById('themeToggle').textContent = '🌙';
        } else {
            document.body.classList.remove('light-mode');
            document.getElementById('themeToggle').textContent = '🌓';
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuIcon.style.display = navMenu.classList.contains('active') ? 'none' : 'block';
    closeIcon.style.display = navMenu.classList.contains('active') ? 'block' : 'none';
});

// Close menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });
});