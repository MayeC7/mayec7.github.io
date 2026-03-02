const gameProjects = [
  {
    title: "Runner's Grave",
    subhead: "HTML5 Game Demo",
    dateRange: "Jun 2022--",
    roles: ["Solo Developer", "Programmer", "Designer", "Artist",],
    skills: ["Javascript", "Phaser"],
    summary: `Arcade-style maze runner made in Javascript with Phaser.js
    Randomly generated mazes using depth-first backtracker
    Data-driven level design using a JSON with level parameters`,
    img: "runners-grave/runnergrave.png",
    alt: "black-and-white pixel art of a character in a dark maze",
    url: "runners-grave",
    images: [
      "runners-grave/run2.gif", 
      "runners-grave/die.gif", 
      "runners-grave/fight.gif",
    ],
    page: `
      
      <i>Arcade-style HTML5 maze escape game</i>
      <p>
      I made this game as a project in the summer of 2022, as a sort of re-make of an older experiment done in Unity. 
      It is a 2D arcade-style game where you are tasked with escaping procedurally generated mazes.
      As you continue, you will be assailed by new hazards and more complex mazes, but you will also gain access to new tool for your survival.
      </p>

      <p>
      I started this project to apply what I learned about the Phaser.js engine in a previous course, including tilemap editing, object groups, timers, and physics.
      Phaser is a really robust engine in itself, and as a Javascript library it is simple to work with and create games quickly.
      To generate unique mazes, I used a depth-first search backtracker algorithm. I used a json to store data for each level including maze size, 
      hazard types and quantities, player loadout, and even color scheme. I also made all the pixel art myself.
      </p>

      <p>You can read more about the development in this <a href="https://sevenstudios.itch.io/runners-grave/devlog/787585/devlog-inside-runners-grave">devlog
      </a> I wrote!</p>

      <p><a href="https://sevenstudios.itch.io/runners-grave">Play on itch.io</a></p>
      `

  },
  {
    title: "Antimony",
    subhead: "Narrative Adventure Game",
    skills: ["Unity", "C#", "Puzzle Design", "Narrative Design"],
    roles: ["Programmer", "Designer", "Writer"],
    url: "antimony",
    img: "antimony/antimony.png",
    alt: "three game characters in a dark forest with the title Antimony above. a shadowy figure stands in the background.",
    images: [
      "antimony/cooper.png",
      "antimony/puzzle.png",
    ],
    page: `
    <p>
     In this narrative point-and-click adventure, begin to uncover the mystery behind
     your missing memories with the help of a fascinating cast of characters.
    </p>
    <p>Made for CMPM 172 at UCSC</p>

    <p>
      As a programmer on this project, I created reusable clickable prototypes that encapsulate
      the behaviors of an inspectable or collectible item. I also worked to make it possible to easily
      connect lines of dialog (written in the scripting language Ink) to events happening in the game (e.g.
      a new item appearing). This was accomplished with Ink's Unity package, external events, and 
      Unity's event system.
    </p>

    <p> I also planned out and iterated the game's story flow, and helped write and edit sections of the game. </p>

    <h3>Credits</h3>

    <ul>
    <li>Producer: Ethan Nguyen</li>
    <li>Writing: Ethan Nguyen, Maye Cowan</li>
    <li>Programming: Kofi Quansah, Mrinmoyee Mishra, Ethan Nguyen, Maye Cowan</li>
    <li>Music and Sound Design: Omar Bahlool</li>
    <li>Character Design/Art: Kennedy Thomas</li>
    <li>UI Design/Art: Marshall Zhao, Ethan Nguyen</li>
    <li>Background Art: Ethan Nguyen</li>
    </ul>

    <p><a href="https://sevenstudios.itch.io/antimony">Download from itch.io</a></p>

    <h3 id="videoLabel">Video Playthrough</h3>
    <iframe src="https://drive.google.com/file/d/1bJGW34wHkqd-GVx7Hjl4vabqendFiupj/preview" aria-labelledby="videoLabel"></iframe>

    `
  },
  {
    title: "The Solar Punk",
    subhead: "Isometric Action-Adventure Prototype",
    roles: ["Programmer", "Designer"],
    skills: ["Unity", "Unity3D", "C#", ],
    url: "solar-punk",
    img: "solar-punk/cover.png",
    alt: "game screenshot where a red turret shoots balls at a blue box on a board. They are floating on an ocean near a submerged skyscraper",
    images: [
      "solar-punk/screen1.png",
      "solar-punk/screen3.png"
    ],
    page: `

    <p>A movement-based adventure game set in a Solarpunk post-apocalypse where the water levels have risen dramatically. 
    Use your solar-powered board to race through the remnants of the old civilization in an attempt to reconnect society.</p>
    <p>Playable with either keyboard or gamepad controls.</p>
    <p>Made for CMPM/ARTG 171 at UCSC</p>
    
    <p> We assembled two levels of greyboxed gameplay, and an ending scene for this demo </p>
    <p> For this project I designed and programmed the turret enemies, coded the UI, implemented usability/UX improvements, and sound playback.
    I also enabled seamless gamepad support using the new Unity Input System </p>

    <h3>Credits</h3>
    <ul>
    <li>Ethan Nguyen - Programming, Music</li>
    <li>Maye Cowan - Programming</li>
    <li>Kofi Quansah - Programming</li>
    <li>Mrinmoyee Mishra - Programming</li>
    <li>Robert Newlin - 3D Art</li>
    <li>Omar Bahlool - 3D Art</li>
    </ul>

    <p><a href="https://steerevo.itch.io/the-solar-punk">Download from itch.io</a></p>

    `
  },
  {
    title: "Spaceship Odyssey",
    subhead: "narrative adventure",
    skills: ["Phaser", "Javascript", "Minigames", "Accessiblity", "Tutorial"],
    roles: ["Programmer", "Designer"],
    url: "spaceship-odyssey",
    img: "https://img.itch.zone/aW1nLzkxMjM4ODgucG5n/315x250%23c/7%2BYkLj.png",
    images: [
      "spaceship/spaceship1.gif", 
      "spaceship/spaceship2.gif",
      "spaceship/spaceship3.gif",
    ],
    page: `
    <p> Spaceship Odyssey is a "micro" time management sim set on a space station. 
    The player must balance the need for sleep, relaxation, and contact with home 
    while choosing how best to spend their limited time on the ship. By playing different
    minigames, the player adds points towards different goals, resulting in different outcomes by the end.
    </p>
    <p>
        The game was made as a final group project for the course, "Game Development Experience".
    </p>
    <p> 
        As a designer, I worked and iterated on the overall gameplay loop, as well as the control schemes and movement.
        Thanks to advice and guidance from my class professor, I made the game playable with mouse and keyboard, only the mouse, or touch on mobile.
    </p>
    <p>
        As lead programmer, I worked on simplyfing minigame and event implementation using polymorphism through an expandable Activity class.
        I also implemented the main countdown and data meters using timers, and had a hand in most minigames.
    </p>
    <h3>Credits</h3>
    <ul>
          <li>Programming: Maye Cowan and Jason Chen</li>
          <li>Art: Nic Stepp, Chris Pau, and Maye</li>
          <li>Music: Chris</li>
          <li>Sounds: Chris and Maye</li>
        </ul>
    
    <a href="https://chrispy-chxcken.itch.io/ss-odyssey"> Play on itch.io</a> or <a href="https://github.com/MayeC7/Spaceship-Odyssey"> view the source</a>
    `
  },
  {
    title: "One-Button Microgames",
    subhead: "A collection of three small games playable with only one button",
    skills: ["Typescript"],
    roles: ["Programmer", "Designer"],
    url: "one-button-games",
    img: "one-button/microgames.png",
    page: `
    <p> 
        These web-base games were all completed in the span of two weeks, from learning about the library to implementation. 
        The library used to make them is <a href="">crisp-game-lib</a>, a fun minigame engine for typescript.
        The process was a great excercise in ideation under constraints, iterating on a design, and working with a new tool with minimal documentation.
        All games are playable on itch.io:
    </p>
      <a href="https://sevenstudios.itch.io/sine-surfer"><img src="one-button/sine-surfer.gif"></a>
      <a href="https://sevenstudios.itch.io/fruitfall"><img src="one-button/fruitfall.gif"></a>
      <a href="https://sevenstudios.itch.io/downhill-ski"><img src="one-button/downhill-ski.gif"></a>
      <ul>
      <li><a href="https://sevenstudios.itch.io/sine-surfer">sine-surfer</a> I developed solo.</li>
      <li><a href="https://sevenstudios.itch.io/fruitfall">fruitfall</a> was co-developed with Mrinmoyee Mishra</li>
      <li><a href="https://sevenstudios.itch.io/downhill-ski">Downhill Ski</a> was created by Allan Moua, Manny Fluss and I</li>
      </ul>
    `,
  },
  {
    title: "Bugsy Battle",
    subhead: "A turn-based tactical RPG Demo",
    skills: ["Godot", "GDScript",],
    roles: ["Programmer", "Designer"],
    url: "bugsy-battles",
    img: "https://img.itch.zone/aW1nLzEwNzM0MDkwLnBuZw==/315x250%23c/mDSgQd.png",
    images: [
      "bugsy-battle/combat.gif",
      "bugsy-battle/cutscene.gif"
    ],
    page: `
    <p>In this tactical turn-based RPG command the bee fighters and help them defend the hive from the evil wasps!</p>
    <p>Made for ARTG/CMPM 170 at UC Santa Cruz</p>

    <p>This was my first time working in Godot. There was a lot to learn in a short time period, but I feel Godot is fairly beginner-friendly.
    GDScript is a lot like Python so there was some familiarity there from the start. I primarily designed the combat system, implemented parts of unit movement, turn-based gameplay, 
    and rudimentary combat animations using tweens with the unit sprites. A major challenge was figuring out coroutines in Godot. 
    We had to use some rough code in the end to time the start of next turn with the end of the combat animation. Unfortunately, it took us
    most of our time to get these basic mechanics working (tilemap, unit movement, enemy AI/pathfinding, combat sequences), so we were unable to implement 
    some of our more innovative ideas, such as special formations and sacrificial moves. Some details about our cut features can be found in the design document.</p>

    <a href="https://sevenstudios.itch.io/bugsy-battles"> Play on itch.io</a>
    <h3>Credits</h3>
    <ul>
      <li>Art and Animation by Emery Plyler and Sadie Hower</li>
      <li>Programming by Maye Cowan,&nbsp;Salil Tantamjarik,&nbsp;Ethan Nguyen,&nbsp;Nathan Laureta, and&nbsp;Christopher Pau.</li>
      <li>Music and SFX by Sadie Hower</li>
    </ul>
    <h3> Documents </h3>
    <ul>
        <li><a href="bugsy-battle/BugsyBattleDesignDoc.pdf">Design Document</a></li>
        <li><a href="https://docs.google.com/presentation/d/1rnNV1We6ZBDkeD04zH5X2XzBdQDeIaKMdlOcvkR6bfs/edit?usp=sharing">Turn-Based RPG Research</a></li>
    </ul>
    `

  },
  {
    title: "Game Jam Games",
    subhead: "",
    skills: ["Phaser", "Javascript", "Unity", "C#", "Puzzle Design"],
    roles: ["Programmer", "Designer", "Artist"],
    url: "jam-games",
    img: "jam-games/witdCover.PNG",
    page: `
    <p> I participated in the GMTK Game Jam in both 2022 and 23</p>
    <img src="jam-games/boostorbust2.gif" width=75%>
    <p> In 2022, I made <a href="https://sevenstudios.itch.io/boost-or-bust"> Boost or Bust</a>, 
    a silly infinite platformer about an alien with a broken jetpack. I made it using Phaser 3 and a mix of my own and free online assets. It was my first game jam, and I had a lot of fun.</p>
    <img src="jam-games/screenshot1.PNG" width=75%">
    <p> In 2023, with the theme of "role reversal" in mind, I made this <a href="https://sevenstudios.itch.io/where-is-the-dungeon">puzzle game</a> where the player has to make a level for 
    a pre-programmed character. I develped a tile-based level editor that let players quickly make and test solutions to each puzzle.
    `
  }

];

export default gameProjects;