function DrumKit() {
    this.keysNodeList = document.querySelectorAll('.key');
    this.keys = Array.prototype.slice.call(this.keysNodeList);
}

DrumKit.prototype = {
    init: function () {
        this.addEventListeners();
    },

    addEventListeners: function () {
        var self = this;

        window.addEventListener('keydown', event => {
            self.handleKeyDown(event);
        });
    },

    handleKeyDown: function (event) {
        let found = document.querySelector(`[data-key="${event.keyCode}"]`);

        if (found) {
            this.doTheMagic(event, found);
        }
    },

    doTheMagic: function (event, found) {
        let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        found.classList.add('playing');
        audio.play();

        audio.addEventListener('ended', () => {
            found.classList.remove('playing');
        });
    }
}

var drumkit = new DrumKit();
drumkit.init();