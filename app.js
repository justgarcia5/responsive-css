// modile

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

// function to switch tabs inside accordion for mobile container
function openTab(tab) {
  let x = document.getElementsByClassName('tab');
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  document.getElementById(tab).style.display = 'block';
}

// function for active tabs for inner accordion mobile view
let accTabsContainer = document.getElementById("tabs");
let accTab = accTabsContainer.getElementsByClassName("acc-tab");
for (let i = 0; i < accTab.length; i++) {
  accTab[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("acc-tab active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// desktop

// function for switching tabs on desktop view
function openDeskTab(tabId) {
  let tabs = document.getElementsByClassName("desk-tab");
  for (let x = 0; x < tabs.length; x++) {
    tabs[x].style.display = "none";
  }
  document.getElementById(tabId).style.display = "block";
}

// function for opening and switching tabs inside DeskTap
function openInnerTab(tabId) {
  let innerTabs = document.getElementsByClassName("tab-desk");
  for (let x = 0; x < innerTabs.length; x++) {
    innerTabs[x].style.display = "none";
  }
  document.getElementById(tabId).style.display = "block";
}

// switching and replacing active class name inside DeskTab
let innerTabsContainer = document.getElementById('inner-tab-links-div');
let tabs = innerTabsContainer.getElementsByClassName('inner-tab-link');
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("inner-tab-link active");
    current[0].className = current[0].className.replace(" active", "");
    console.log(current[1])
    this.className += " active";
  });
}

// switching and replacing active class name for DeskTab
let deskTabsContainer = document.getElementById('tab-links-div');
let deskTabs = deskTabsContainer.getElementsByClassName('tab-link');
for (let i = 0; i < deskTabs.length; i++) {
  deskTabs[i].addEventListener("click", function() {
    let current = document.getElementsByClassName('tab-link active');
    current[0].className = current[0].className.replace(" active", "");
    console.log(current[1])
    this.className += " active";
  });
}
