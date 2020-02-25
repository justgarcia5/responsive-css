
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

// function to switch tabs
function openTab(tab, elemClass) {
  let x = document.getElementsByClassName(elemClass);
  console.log(x)
  for (let i = 0; i < x.length; i++) {
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

// switching and replacing active class name inside desktop tab
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

// switching and replacing active class name for parent desktop tab
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
