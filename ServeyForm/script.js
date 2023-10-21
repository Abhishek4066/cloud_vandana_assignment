document.addEventListener("DOMContentLoaded", function() {
  const surveyForm = document.getElementById("surveyForm");
  const popup = document.getElementById("popup");
  const resetButton = document.getElementById("reset-button");
  const genderCheckboxes = document.querySelectorAll('input[name="gender"]');

  surveyForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(surveyForm);
    let popupContent = "<h2>Survey Results</h2>";

    for (const [key, value] of formData.entries()) {
      popupContent += `<div class="popup-content"><strong>${key}:</strong> ${value}</div>`;
    }

    popupContent += '<button class="blue-button popup-close" onclick="closePopup()">Close</button>';
    popup.innerHTML = popupContent;
    popup.style.display = "block";
  });

  resetButton.addEventListener("click", function() {
    popup.style.display = "none";
  });

  genderCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        genderCheckboxes.forEach(cb => {
          if (cb !== this) {
            cb.checked = false;
          }
        });
      }
    });
  });
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
  const surveyForm = document.getElementById("surveyForm");
  const popup = document.getElementById("popup");
  const resetButton = document.getElementById("reset-button");

  surveyForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(surveyForm);
    let popupContent = "<h2>Survey Results</h2>";

    for (const [key, value] of formData.entries()) {
      popupContent += `<div class="popup-content"><strong>${key}:</strong> ${value}</div>`;
    }

    popupContent += '<button class="blue-button popup-close" onclick="closePopup()">Close</button>';
    popup.innerHTML = popupContent;
    popup.style.display = "block";
  });

  resetButton.addEventListener("click", function() {
    popup.style.display = "none";
  });
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
