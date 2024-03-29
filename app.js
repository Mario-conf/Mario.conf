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
      { image: 'https://github.com/Mario-conf/WordDash/raw/main/src/wow.png', description: 'Fast-Words game', link: 'https://mario-conf.github.io/WordDash/' },

      { image: 'https://camo.githubusercontent.com/1c31003c01aa908d827116e8f86937186a0f5cf451c62812953a72d3170036d3/68747470733a2f2f69302e77702e636f6d2f676c6173676f77677561726469616e2e636f2e756b2f77702d636f6e74656e742f75706c6f6164732f73697465732f322f323032302f30322f53747564796772616d2e6a70673f73736c3d31', description: 'Notes App', link: 'https://mario-conf.github.io/Notapp/' },
      { image: 'https://camo.githubusercontent.com/f7a1fd09885241da58ff8e09bc52ea3f723c83767db1ee66ffb47d5eef59fe8a/68747470733a2f2f7374617469632e77696b69612e6e6f636f6f6b69652e6e65742f686973746f726961732d66616b656d6f6e2f696d616765732f622f62372f506f6b2543332541396465785f47656e495f4b616e746f2e706e672f7265766973696f6e2f6c61746573743f63623d323031363032303130333333313126706174682d7072656669783d6573', description: 'Pokedex', link: 'https://mario-conf.github.io/Pokedex-lite/' },
      { image: 'https://camo.githubusercontent.com/677a1dfb8b41d39b921e269fc6e2d34c4f3af5fd28ac3c7478d640c71cac6b79/68747470733a2f2f696d672e6672656570696b2e636f6d2f666f746f732d7072656d69756d2f6772616669636f2d6d65726361646f2d76616c6f7265732d7175652d6272696c6c612d696e74656e73616d656e74652d657374696c6f2d61627374726163746f2d736f6272652d666f6e646f2d636c61726f2d6772616669636f2d6573746164697374696361732d636f6d65726369616c65732d666f6e646f2d70616e74616c6c612d6675747572697374612d6772616669636f2d6d65726361646f2d62656e65666963696f2d64696e65726f2d696e76657273696f6e2d66696e616e63696572612d6d65726361646f2d76616c6f7265735f3135353830372d393032322e6a7067', description: 'Charts app', link: 'https://mario-conf.github.io/ChartCraft/' },
      { image: 'https://camo.githubusercontent.com/37fceec588466bbebf50401e78e71e75b1ed81703d7c3fd7a21d1c4bc3ce6693/68747470733a2f2f7374617469632e7665637465657a792e636f6d2f73797374656d2f7265736f75726365732f70726576696577732f3030302f3639332f3130352f6f726967696e616c2f636172746f6f6e2d726f636b2d70617065722d73636973736f72732d766563746f722d636861726163746572732e6a7067', description: 'Rock-Paper-Scissors game', link: 'https://mario-conf.github.io/Rock-Paper-Scissors-lite/' },
      { image: 'https://github.com/Mario-conf/App-del-Tiempo/raw/main/src/_e3eaca39-855f-42e2-9568-33fb23d5d277.jpeg?raw=true', description: 'Weather App', link: 'https://mario-conf.github.io/SkyInsight/' },

      { image: 'https://github.com/Mario-conf/Hikify/blob/main/src/hikify_logo.png?raw=true', description: 'Hiking Website', link: 'https://mario-conf.github.io/Hikify/' },
      { image: 'https://camo.githubusercontent.com/ef652caefccaaf636bdacbf97b6a67a56a730683abbafa0b66e17fc3df95632f/68747470733a2f2f63646e2d696d616765732e7a6574792e636f6d2f70616765732f706c61696e5f746578745f726573756d655f6578616d706c655f74656d706c6174655f6e616e6963612e706e67', description: 'CV Generator App', link: 'https://mario-conf.github.io/Quick-CV/' },
      { image: 'https://camo.githubusercontent.com/dde4dcd16a0d7f106c090099ec959c5ecd9c64f94a71478958af8be1b528fe95/68747470733a2f2f7777772e617564696f2d746563686e6963612e636f6d2f65732d65732f6d656469612f777973697779672f706172616c6c61782f4154343034374d505f506172616c61785f30312e706e67', description: 'E-Commerce Website', link: 'https://mario-conf.github.io/SoundVFX/' },
      { image: 'https://camo.githubusercontent.com/cbee17b9fac7d5d0433855afbf3281ed99759d7a5c669335d1fd524c5f66caab/68747470733a2f2f77616c6c70617065726163636573732e636f6d2f66756c6c2f363037353638392e706e67', description: 'Gameflix App', link: 'https://mario-conf.github.io/Gameflix/' },
      { image: 'https://imgs.search.brave.com/-llmcXEtwBiqLf8nk2-ydueHtUa-x94q4IGKcDQGOt0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/MTM0NDU5My9lcy9m/b3RvL2JhbmRlcmEt/Y29tdW5pdGFyaWEt/ZGUtYW5kYWx1YyVD/MyVBRGEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPW5EMVlQ/TlZ2UzNDaVNfRzVN/ZDdfSnh1Vmd1SnNW/OFBUUUd4NGtCalVD/NnM9', description: 'Andalusian website', link: 'https://mario-conf.github.io/Andalucia/' },

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
