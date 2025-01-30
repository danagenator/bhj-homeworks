const tabs = Array.from(document.querySelectorAll('.tab'));
let activeTab = document.querySelector('.tab_active');

const contents = Array.from(document.querySelectorAll('.tab__content'));
let activeContent = document.querySelector('.tab__content_active');

tabs.forEach(clickTab => {
    clickTab.addEventListener('click', () => {
    let index = tabs.indexOf(clickTab);

activeTab.classList.remove('tab_active');
activeTab = clickTab;
activeTab.classList.toggle('tab_active');

activeContent.classList.remove('tab__content_active');
activeContent = contents[index];
activeContent.classList.toggle('tab__content_active')
    })
})