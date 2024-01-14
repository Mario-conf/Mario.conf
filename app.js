document.addEventListener('DOMContentLoaded', function () {

  const data = [
      { image: 'https://github.com/Mario-conf/Snake-lite/blob/main/snake.png?raw=true', description: 'Snake Game', link: 'https://mario-conf.github.io/Snake-lite/' },
      { image: 'https://github.com/Mario-conf/MinesWeeper-lite/raw/main/minesweeper.png', description: 'MinesWeeper', link: 'https://mario-conf.github.io/MinesWeeper-lite/' },
      { image: 'https://github.com/Mario-conf/TicTacToe-lite/raw/main/src/main.png', description: 'Tic-Tac-Toe', link: 'https://mario-conf.github.io/TicTacToe-lite/' },
      { image: 'https://github.com/Mario-conf/AtariBreackout-lite/blob/main/atari_breakout.png?raw=true', description: 'Atari Breakout', link: 'https://mario-conf.github.io/AtariBreackout-lite/' },
      { image: 'https://github.com/Mario-conf/FlappyBird-lite/raw/main/src/Read.png', description: 'Flappy Bird', link: 'https://mario-conf.github.io/FlappyBird-lite/' },

      { image: 'https://github.com/Mario-conf/Calculator-JS/raw/main/src/image.png', description: 'Scientific Calculator', link: 'https://mario-conf.github.io/Calculator-JS/' },
      { image: 'https://github.com/Mario-conf/Tetris-lite/raw/main/tetris.png', description: 'Tetris', link: 'https://mario-conf.github.io/Tetris-lite/' },
      { image: 'https://github.com/Mario-conf/SoundBTM/raw/main/src/soundbtm.png', description: 'SoundBoard App', link: 'https://mario-conf.github.io/SoundBTM/' },
      { image: 'https://github.com/Mario-conf/SketchFlow/raw/main/sketchflow.png', description: 'BoardDesign App', link: 'https://mario-conf.github.io/SketchFlow/' },
      { image: 'https://github.com/Mario-conf/WordDash/raw/main/src/wow.png', description: 'WordDash', link: 'https://mario-conf.github.io/WordDash/' },

      { image: 'https://camo.githubusercontent.com/1c31003c01aa908d827116e8f86937186a0f5cf451c62812953a72d3170036d3/68747470733a2f2f69302e77702e636f6d2f676c6173676f77677561726469616e2e636f2e756b2f77702d636f6e74656e742f75706c6f6164732f73697465732f322f323032302f30322f53747564796772616d2e6a70673f73736c3d31', description: 'Notapp', link: 'https://mario-conf.github.io/Notapp/' },
      { image: 'https://camo.githubusercontent.com/f7a1fd09885241da58ff8e09bc52ea3f723c83767db1ee66ffb47d5eef59fe8a/68747470733a2f2f7374617469632e77696b69612e6e6f636f6f6b69652e6e65742f686973746f726961732d66616b656d6f6e2f696d616765732f622f62372f506f6b2543332541396465785f47656e495f4b616e746f2e706e672f7265766973696f6e2f6c61746573743f63623d323031363032303130333333313126706174682d7072656669783d6573', description: 'Pokedex', link: 'https://mario-conf.github.io/Pokedex-lite/' },
      { image: 'https://github.com/Mario-conf/Mario.conf/raw/main/src/wallpaper.png', description: 'Portfolio', link: 'https://mario-conf.github.io/Mario.conf/' },
      { image: 'https://camo.githubusercontent.com/37fceec588466bbebf50401e78e71e75b1ed81703d7c3fd7a21d1c4bc3ce6693/68747470733a2f2f7374617469632e7665637465657a792e636f6d2f73797374656d2f7265736f75726365732f70726576696577732f3030302f3639332f3130352f6f726967696e616c2f636172746f6f6e2d726f636b2d70617065722d73636973736f72732d766563746f722d636861726163746572732e6a7067', description: 'Rock-Paper-Scissors game', link: 'https://mario-conf.github.io/Rock-Paper-Scissors-lite/' },
      { image: 'https://github.com/Mario-conf/App-del-Tiempo/raw/main/src/_e3eaca39-855f-42e2-9568-33fb23d5d277.jpeg?raw=true', description: 'Weather App', link: 'https://mario-conf.github.io/SkyInsight/' },
  ];

  const cardContainer = document.getElementById('card_container');

  data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = 'Imagen';
      card.appendChild(img);

      const description = document.createElement('p');
      description.textContent = item.description;
      card.appendChild(description);

      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = 'Ver más';
      card.appendChild(link);

      // Agrega el fondo rectangular a cada tarjeta
      const rectangle = document.createElement('div');
      rectangle.classList.add('rectangle');
      card.appendChild(rectangle);

      cardContainer.appendChild(card);
  });

});
