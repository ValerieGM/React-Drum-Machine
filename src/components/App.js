import React, { Component } from 'react';

const audioKeys = [
  {
    code: 81,
    char: "Q",
    id: "light",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    code: 87,
    char: "W",
    id: "dry-ohh",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    code: 69,
    char: "E",
    id: "bld-h1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    code: 65,
    char: "A",
    id: "punchy-kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    code: 83,
    char: "S",
    id: "side-chick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    code: 68,
    char: "D",
    id: "brk-snr",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  },
  {
    code: 90,
    char: "Z",
    id: "chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    code: 88,
    char: "X",
    id: "chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    code: 67,
    char: "C",
    id: "chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  }
];

class Pads extends Component {
  constructor(props) {
    super(props);

    this.playAudio = this.playAudio.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  playAudio(e) {
    let clip = document.getElementById(this.props.char);
    clip.currentTime = 0;
    clip.play();
  }

  handleKey(e) {
    if (e.keyCode === this.props.code) {
      this.playAudio();
      // display.innerText = this.props.id;
    }
  
  }

  handleClick(e) {
    this.playAudio();
    // display.innerText = this.props.id;
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }
 
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }

  render() {
    return (
      <button
        className="drum-pad"
        id={this.props.id}
        onClick={this.handleClick}
        onKeyDown={this.handleKey}
      >
        {this.props.char}
        <audio
          className="clip"
          id={this.props.char}
          src={this.props.url}
        ></audio>
      </button>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    
    const pads = audioKeys.map((pads, count, keys) => {
      return (
        <Pads 
          code={keys[count].code}
          char={keys[count].char}
          id={keys[count].id}
          url={keys[count].url}
        />
      );
    });
    
    return (
      <div id="drum-machine" className="drum-machine">
        <h1>Drum Machine</h1>

        <div id="display" className="display col-11 mx-auto my-2">
          Display
        </div>

        <div id="drum">{pads}</div>

        <footer>
          <nav
            id="footer"
            class="navbar navbar-expand-lg navbar-dark fixed-bottom text-center"
          >
            <ul class="navbar-nav mx-auto">
              <li>
                <a class="nav-link" href="www.codepen.io/ValerieGM">
                  By ValerieGM
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }
}

export default App;
