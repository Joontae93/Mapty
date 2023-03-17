export function handleSidebar() {
  const filtersList = document.querySelector('aside.filters');
  filtersList.addEventListener('click', ({ target }) => {
    const hide = document.querySelector('span.hide-filters');
    const filter = target.querySelector('input');
    if (target === hide && !filtersList.classList.contains('hide')) {
      filtersList.classList.add('hide');
      hide.innerText = 'Show Options';
      return;
    } else if (target === hide && filtersList.classList.contains('hide')) {
      filtersList.classList.remove('hide');
      hide.innerText = 'Hide Options';
    }
    filter.checked = filter.checked === true ? false : true;
    if (filter.checked) filter.closest('.filter').classList.toggle('selected');
  });
}
