// Wait for page to load
window.addEventListener('load', function () {
    // Hide loader
    document.querySelector('.loader').classList.add('hidden');

    // Animate skill bars
    document.querySelectorAll('.progress').forEach(bar => {
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
        }, 500);
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
    // { // Toggle the state (now using the same variable name)
    //     const newThemeState = !isLight;

    //     // Apply changes
    //     document.body.classList.toggle('light-mode', newThemeState);
    //     themeToggle.textContent = newThemeState ? '🌙' : '🌓';

    //     // Store as string 'light'/'dark' to match your existing code
    //     localStorage.setItem('userThemePreference', newThemeState ? 'light' : 'dark');

    //     // Update CSS variables
    //     document.documentElement.style.setProperty('--dark', newThemeState ? '#f8f9fa' : '#121212');
    //     document.documentElement.style.setProperty('--light', newThemeState ? '#121212' : '#f8f9fa');
    // }
    // localStorage.setItem('userThemePreference', isLight ? 'light' : 'dark');
    themeToggle.textContent = isLight ? '🌙' : '🌓';

    
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

// Form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    // Validate Name
    const name = document.getElementById('name');
    if (name.value.length < 3) {
        name.classList.add('invalid');
        isValid = false;
    } else {
        name.classList.remove('invalid');
    }

    // Validate Email
    const email = document.getElementById('email');
    if (!email.checkValidity()) {
        email.classList.add('invalid');
        isValid = false;
    } else {
        email.classList.remove('invalid');
    }

    // Validate Message
    const message = document.getElementById('message');
    if (message.value.length < 10) {
        message.classList.add('invalid');
        isValid = false;
    } else {
        message.classList.remove('invalid');
    }

    if (isValid) {
        alert('Thank you! Your message has been sent.');
        this.reset();
    }
});

// Real-time validation
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', function () {
        this.classList.remove('invalid');
    });
});

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
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