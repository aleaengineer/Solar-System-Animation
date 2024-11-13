// Membuat bintang secara acak
for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(star);
}

// Membuat meteor jatuh
for (let i = 0; i < 10; i++) {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    meteor.style.top = Math.random() * -100 + 'vh';
    meteor.style.left = Math.random() * 100 + 'vw';
    meteor.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(meteor);
}