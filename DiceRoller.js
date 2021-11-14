let total = 0;
setInterval(function() {
  document.getElementById('total').textContent = "Total: " + total;
}, 200);

let high = 0;
setInterval(function() {
  document.getElementById('high').textContent = "Highest Die Roll: " + high;
}, 200);

let low = 0;
setInterval(function() {
  document.getElementById('low').textContent = "Lowest Die Roll: " + low;
}, 200);

function rollDie(max) {
  return Math.floor(Math.random() * max + 1);
};


function rollD4() {
  let dieRollD4 = document.createElement('img')
  const num = rollDie(4);
  if(num === 4) {
    dieRollD4.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d4/d4_4.png"
  } else if(num === 3) {
    dieRollD4.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d4/d4_3.png"
  } else if(num === 2) {
    dieRollD4.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d4/d4_2.png"
  } else if(num === 1) {
    dieRollD4.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d4/d4_1.png"
  } else {
    console.log("error!");
  }
  document.getElementById("roller_table").appendChild(dieRollD4);
  dieRollD4.style.animation = "dice_roll .1s ease-out 2";
  total += num;
  if(num > high) {
    high = num;
  }
  if(low === 0) {
    low = num;
  } else if(num < low) {
    low = num;
  }
};

function rollD6() {
  let dieRollD6 = document.createElement('img')
  const num = rollDie(6);
  if(num === 6) {
    dieRollD6.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d6/d6_6.png"
  } else if(num === 5) {
    dieRollD6.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d6/d6_5.png"
  } else if(num === 4) {
    dieRollD6.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d6/d6_4.png"
  } else if(num === 3) {
    dieRollD6.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d6/d6_3.png"
  } else if(num === 2) {
    dieRollD6.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d6/d6_2.png"
  } else if(num === 1) {
    dieRollD6.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d6/d6_1.png"
  } else {
    console.log("error!");
  }
  document.getElementById("roller_table").appendChild(dieRollD6);
  dieRollD6.style.animation = "dice_roll .1s ease-out 2";
  total += num;
  if(num > high) {
    high = num;
  }
  if(low === 0) {
    low = num;
  } else if(num < low) {
    low = num;
  }
};

function rollD8() {
  let dieRollD8 = document.createElement('img')
  const num = rollDie(8);
  if(num === 8) {
    dieRollD8.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d8/d8_8.png"
  } else if(num === 7) {
    dieRollD8.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d8/d8_7.png"
  } else if(num === 6) {
    dieRollD8.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d8/d8_6.png"
  } else if(num === 5) {
    dieRollD8.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d8/d8_5.png"
  } else if(num === 4) {
    dieRollD8.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d8/d8_4.png"
  } else if(num === 3) {
    dieRollD8.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d8/d8_3.png"
  } else if(num === 2) {
    dieRollD8.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d8/d8_2.png"
  } else if(num === 1) {
    dieRollD8.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d8/d8_1.png"
  } else {
    console.log("error!");
  }
  document.getElementById("roller_table").appendChild(dieRollD8);
  dieRollD8.style.animation = "dice_roll .1s ease-out 2";
  total += num;
  if(num > high) {
    high = num;
  }
  if(low === 0) {
    low = num;
  } else if(num < low) {
    low = num;
  }
};

function rollD10() {
  let dieRollD10 = document.createElement('img')
  const num = rollDie(10);
  if(num === 10) {
    dieRollD10.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d10/d10_10.png"
  } else if(num === 9) {
    dieRollD10.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d10/d10_9.png"
  } else if(num === 8) {
    dieRollD10.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d10/d10_8.png"
  } else if(num === 7) {
    dieRollD10.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d10/d10_7.png"
  } else if(num === 6) {
    dieRollD10.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d10/d10_6.png"
  } else if(num === 5) {
    dieRollD10.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d10/d10_5.png"
  } else if(num === 4) {
    dieRollD10.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d10/d10_4.png"
  } else if(num === 3) {
    dieRollD10.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d10/d10_3.png"
  } else if(num === 2) {
    dieRollD10.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d10/d10_2.png"
  } else if(num === 1) {
    dieRollD10.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d10/d10_1.png"
  } else {
    console.log("error!");
  }
  document.getElementById("roller_table").appendChild(dieRollD10);
  dieRollD10.style.animation = "dice_roll .1s ease-out 2";
  total += num;
  if(num > high) {
    high = num;
  }
  if(low === 0) {
    low = num;
  } else if(num < low) {
    low = num;
  }
};

function rollD12() {
  let dieRollD12 = document.createElement('img')
  const num = rollDie(12);
  if(num === 12) {
    dieRollD12.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d12/d12_12.png"
  } else if(num === 11) {
    dieRollD12.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d12/d12_11.png"
  } else if(num === 10) {
    dieRollD12.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d12/d12_10.png"
  } else if(num === 9) {
    dieRollD12.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d12/d12_9.png"
  } else if(num === 8) {
    dieRollD12.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d12/d12_8.png"
  } else if(num === 7) {
    dieRollD12.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d12/d12_7.png"
  } else if(num === 6) {
    dieRollD12.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d12/d12_6.png"
  } else if(num === 5) {
    dieRollD12.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d12/d12_5.png"
  } else if(num === 4) {
    dieRollD12.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d12/d12_4.png"
  } else if(num === 3) {
    dieRollD12.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d12/d12_3.png"
  } else if(num === 2) {
    dieRollD12.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d12/d12_2.png"
  } else if(num === 1) {
    dieRollD12.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d12/d12_1.png"
  } else {
    console.log("error!");
  }
  document.getElementById("roller_table").appendChild(dieRollD12);
  dieRollD12.style.animation = "dice_roll .1s ease-out 2";
  total += num;
  if(num > high) {
    high = num;
  }
  if(low === 0) {
    low = num;
  } else if(num < low) {
    low = num;
  }
};

function rollD20() {
  let dieRollD20 = document.createElement('img')
  const num = rollDie(20);
  if(num === 20) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_20.png"
  } else if(num === 19) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_19.png"
  } else if(num === 18) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_18.png"
  } else if(num === 17) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_17.png"
  } else if(num === 16) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_16.png"
  } else if(num === 15) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_15.png"
  } else if(num === 14) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_14.png"
  } else if(num === 13) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_13.png"
  } else if(num === 12) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_12.png"
  } else if(num === 11) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_11.png"
  } else if(num === 10) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_10.png"
  } else if(num === 9) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_9.png"
  } else if(num === 8) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_8.png"
  } else if(num === 7) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_7.png"
  } else if(num === 6) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_6.png"
  } else if(num === 5) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_5.png"
  } else if(num === 4) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_4.png"
  } else if(num === 3) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_3.png"
  } else if(num === 2) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_2.png"
  } else if(num === 1) {
    dieRollD20.src = "file:///C:/Users/Tharin/Pictures/Dice%20Images/d20/d20_1.png"
  } else {
    console.log("error!");
  }
  document.getElementById("roller_table").appendChild(dieRollD20);
  dieRollD20.style.animation = "dice_roll .1s ease-out 2";
  total += num;
  if(num > high) {
    high = num;
  }
  if(low === 0) {
    low = num;
  } else if(num < low) {
    low = num;
  }
};

function clickRemove() {
  const table = document.querySelector('section');
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
removeAllChildNodes(table);
  total = 0;
  high = 0;
  low = 0;
};
