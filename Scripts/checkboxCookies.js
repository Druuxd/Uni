function setCheckboxStatus(id, value) {
  document.cookie = `${id}=${value}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
}

function readCheckboxStatus(id) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === id) {
      document.getElementById(id).checked = value === "true";
    }
  }
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    setCheckboxStatus(this.id, this.checked);
  });

  readCheckboxStatus(checkbox.id);
});
