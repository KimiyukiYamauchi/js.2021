'use strict';

{
  class Panel {
    constructor() {
      this.el = document.createElement('li');
    }

    getEl() {
      return this.el;
    }

    activate(num) {
      this.el.textContent = num;
    }

  }

  class Mae {
    constructor() {
      this.panels = [];
      for (let i = 0; i < 5; i++) {
        this.panels.push(new Panel());
      }

      this.setup();
      this.activate();
    }

    setup() {
      const board = document.getElementById('mae');
      this.panels.forEach(panel => {
        board.appendChild(panel.getEl()); // カプセル化
      });
    }

    activate() {
      const nums = [];
      for (let i = 0; i < 100; i++) {
        nums.push(i);
      }

      this.panels.forEach(panel => {
        const num = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
        panel.activate(num);
      });
    }

    getNums() {
      const nums = [];
      this.panels.forEach(panel => {
        nums.push(parseInt(panel.getEl().textContent, 10));
      });

      return nums;
    }
  }
  class Ato {
    constructor() {
      this.panels = [];
      for (let i = 0; i < 5; i++) {
        this.panels.push(new Panel());
      }

      this.setup();
    }

    setup() {
      const board = document.getElementById('ato');
      this.panels.forEach(panel => {
        board.appendChild(panel.getEl()); // カプセル化
      });
    }

    putNums(nums) {
      let i = 0;
      this.panels.forEach(panel => {
        panel.getEl().textContent = nums[i++];
      });
    }
  }
  
  function sort(nums) {
    // nums.sort((a, b) => a - b);
    nums.sort((a, b) => b - a);
  }

  const mae = new Mae();
  const ato = new Ato();
  
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    const nums = mae.getNums();
    sort(nums);
    ato.putNums(nums);
  });


}