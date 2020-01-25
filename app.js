
// accordion logic for mobile container
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
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

// logic to switch tabs inside accordion for mobile container
function openTab(tab) {
  let i;
  let x = document.getElementsByClassName('tab');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  document.getElementById(tab).style.display = 'block';
}

// logic for active tabs for inner accordion mobile view
let accTabsContainer = document.getElementById("tabs");
let accTab = accTabsContainer.getElementsByClassName("acc-tab");

for (let i = 0; i < accTab.length; i++) {
  accTab[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("acc-tab active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


function openDeskTab(tabId) {
  let x;
  let tabs = document.getElementsByClassName("desk-tab");
  for (x = 0; x < tabs.length; x++) {
    tabs[x].style.display = "none";
  }
  document.getElementById(tabId).style.display = "block";
}


function openInnerTab(tabId) {
  let x;
  let innerTabs = document.getElementsByClassName("inner-tab");
  // console.log(innerTabs)

  for (x = 0; x < innerTabs.length; x++) {
    innerTabs[x].style.display = "none";
  }
  document.getElementById(tabId).style.display = "block";
}
