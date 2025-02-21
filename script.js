document.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;

    document.body.style.setProperty('--cursorX', x + 'px');
    document.body.style.setProperty('--cursorY', y + 'px');
});
