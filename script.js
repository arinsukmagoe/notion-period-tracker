// ===============================
// 🌸 Bloom Cycle v1.0
// ===============================

const settingsBtn = document.getElementById("settingsBtn");
const overlay = document.getElementById("overlay");
const cancelBtn = document.getElementById("cancelBtn");
const saveBtn = document.getElementById("saveBtn");

const lastPeriodInput = document.getElementById("lastPeriod");
const cycleLengthInput = document.getElementById("cycleLength");

const countdown = document.getElementById("countdown");
const nextDate = document.getElementById("nextDate");


// ===============================
// Open Popup
// ===============================

settingsBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    overlay.classList.remove("hidden");

});


// ===============================
// Close Popup
// ===============================

cancelBtn.addEventListener("click", () => {

    overlay.classList.add("hidden");

});

overlay.addEventListener("click", (e) => {

    if(e.target === overlay){

        overlay.classList.add("hidden");

    }

});


// ===============================
// Save Data
// ===============================

saveBtn.addEventListener("click", () => {

    const lastPeriod = lastPeriodInput.value;
    const cycleLength = Number(cycleLengthInput.value);

    if(!lastPeriod){

        alert("Please select your last period date 🌸");

        return;

    }

    localStorage.setItem("lastPeriod", lastPeriod);
    localStorage.setItem("cycleLength", cycleLength);

    updateWidget();

    overlay.classList.add("hidden");

});


// ===============================
// Update Widget
// ===============================

function updateWidget(){

    const savedDate = localStorage.getItem("lastPeriod");
    const savedCycle = Number(localStorage.getItem("cycleLength"));

    if(!savedDate){

        countdown.textContent = "--";

        nextDate.textContent = "Set up your cycle";

        return;

    }

    lastPeriodInput.value = savedDate;
    cycleLengthInput.value = savedCycle;

    const last = new Date(savedDate);

    const next = new Date(last);

    next.setDate(last.getDate() + savedCycle);

    const today = new Date();

    today.setHours(0,0,0,0);

    const diff = next - today;

    const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if(daysLeft >= 0){

        countdown.textContent = `${daysLeft} Days`;

    }else{

        countdown.textContent = "Today";

    }

    nextDate.textContent =
        "Next • " +
        next.toLocaleDateString("en-US",{

            month:"short",
            day:"numeric"

        });

}


// ===============================
// Start
// ===============================

updateWidget();
