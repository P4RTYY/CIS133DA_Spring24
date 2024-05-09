var currentPageUrl = window.location.href;

var pageName = currentPageUrl.split('/').pop().split('.')[0];

pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

document.getElementById('pageName').textContent = pageName;
