const handleCurrentYear = () => {
    const yearText = document.querySelector('.footer__copyright-year')
    const year = (new Date).getFullYear();
    yearText.innerText = year;
}

handleCurrentYear();