
// accordion logic
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

// logic to switch tabs inside accordion
function openTab(tab) {
  let i;
  let x = document.getElementsByClassName('tab');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  document.getElementById(tab).style.display = 'block';
}

// logic that changes class to and from acive inside acc-tab elem
let tabContainer = document.getElementById('tabs');
let tabs = tabContainer.getElementsByClassName('acc-tab');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function() {
    let current = document.getElementsByClassName('acc-tab active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }
    this.className += ' active';
  });
}


// let btnsContainer = document.getElementById('container');
// let btns = btnsContainer.getElementsByClassName('btn');
// // console.log(btns)

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function() {
//     let current = document.getElementsByClassName('btn active');
//     console.log(current)
//     if (current.length > 0) {
//       // tabs[i].style.display = 'none'
//       current[0].className = current[0].className.replace(' active', '');
//     }
//     this.className += ' active';
//     // document.getElementById("pannel").style.display = 'block';
//   });
// }
