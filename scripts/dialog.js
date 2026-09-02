/* Открытие модального окна по кнопке «Сохранить на память».
   Закрывается окно нативно: кнопка «ОК» отправляет форму с method="dialog". */

const saveButton = document.querySelector('.footer__button');
const saveDialog = document.querySelector('.dialog');

saveButton.addEventListener('click', () => {
  saveDialog.showModal();
});
