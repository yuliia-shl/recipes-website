// Отримуємо всі елементи з прихованим контентом
const allBlogContents = document.querySelectorAll('.blog-content');

allBlogContents.forEach(content => {
  const title = content.querySelector('.blog-post-title');
  const image = content.querySelector('.blog-image');
  const hiddenContent = content.querySelector('.blog-hidden-content');
  const blogText = content.querySelector('.blog-post-text');

  // Функція для показу/приховування тексту
  function toggleHiddenContent() {
    hiddenContent.classList.toggle('visible');
  }

  // Додаємо обробники подій для заголовка, тексту та зображення
  title.addEventListener('click', toggleHiddenContent);
  image.addEventListener('click', toggleHiddenContent);
  blogText.addEventListener('click', toggleHiddenContent);
});
