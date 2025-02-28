window.sr = ScrollReveal();

sr.reveal('.audio', {
    duration: 2000,
    origin: 'bottom',
    distance: '-80px'
});

sr.reveal('.effectLeft', {
    duration: 1500,
    origin: 'left',
    distance: '200px'
});

sr.reveal('.effectRight', {
    duration: 1500,
    origin: 'right',
    distance: '200px',
});

sr.reveal('.effectTop', {
    duration: 2000,
    origin: 'top',
    distance: '50px'
});

sr.reveal('.effectOpacity', {
    duration: 3000,
    origin: 'bottom',
    opacity: '0px'
});

sr.reveal('.effectOpacitydelay', {
    duration: 2500,
    origin: 'bottom',
    opacity: '0px',
    delay: 1000
});

sr.reveal('.effectLeftdelay', {
    duration: 3000,
    origin: 'left',
    distance: '800px',
    elay: 3000
});