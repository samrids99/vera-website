// replace text in header

const checkReplace = document.querySelector('.replace-me');

if(checkReplace) {
    const replace = new ReplaceMe(checkReplace, {
        animation: 'animated fadeIn',
        speed: 2000,
        separator: ',',
        loopCount: 'infinite',
        autoRun: true
    });
}