
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE U KICIK🤏').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
<!-- Music -->
  <h1> Audio / Video Autoplay </h1>
  <audio autoplay>
    <source src = "Moment.mp3" type="audio/mp3/>
      </audio>
