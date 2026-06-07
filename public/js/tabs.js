function initTabs() {
  const tabs = document.querySelectorAll('.tab-buttons button');
  const contents = document.querySelectorAll('.tab-contents .content');

  if (!tabs.length || !contents.length) return;

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      document.querySelector('.tab-buttons .active')?.classList.remove('active');
      document.querySelector('.tab-contents .active')?.classList.remove('active');

      tab.classList.add('active');
      contents[index].classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', initTabs);