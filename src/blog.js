

document.addEventListener('DOMContentLoaded', () => {
  // Знаходимо обидва блоки (blog-post-clock та blog-post-sugar)
  const blogSections = document.querySelectorAll('.blog-post-clock, .blog-post-sugar');

  // Обробляємо кожен блок окремо
  blogSections.forEach((section) => {
    const title = section.querySelector('.blog-post-title');
    const textBlock = section.querySelector('.blog-post-text');
    const moreText = section.querySelector('.blog-more-text');

    // Перевіряємо, чи існують елементи
    if (title && textBlock && moreText) {
      // Додаємо обробник події на заголовок
      title.addEventListener('click', () => {
        // Перемикаємо клас 'visible' для всього текстового блоку та додаткового тексту
        textBlock.classList.toggle('visible');
        moreText.classList.toggle('visible');
      });

      // Додаємо обробник події на основний текст
      textBlock.addEventListener('click', () => {
        textBlock.classList.toggle('visible');
        moreText.classList.toggle('visible');
      });
    }
  });
});
