function toggleArticle(articleNumber) {
    const article = document.getElementById(`article-${articleNumber}`);
    article.classList.toggle('expanded');
}


function toggleLanguages(isHover) {
    const languagesList = document.querySelector('.languages-list');
    if (isHover) {
        languagesList.classList.add('show');
    } else {
        languagesList.classList.remove('show');
    }
}
