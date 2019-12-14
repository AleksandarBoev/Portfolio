(() => { // IIFE so that there is no "global variable pollution"
    const emailInput = document.querySelectorAll('footer .get-in-touch input')[0];
    const button = document.querySelectorAll('footer .get-in-touch button')[0];
    const copiedParagraph = document.querySelector('footer .get-in-touch .email p.copied');

    button.addEventListener('click', () => {
        emailInput.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        console.log(copiedParagraph.textContent);
        copiedParagraph.style.opacity = '100%';

        setTimeout(() => {
            copiedParagraph.style.opacity = '0';
        }, 1000);
    });
})();