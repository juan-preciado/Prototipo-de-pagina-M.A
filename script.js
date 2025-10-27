<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const formularios = document.querySelectorAll("form");

  formularios.forEach(form => {
    form.addEventListener("submit", e => {
      const inputs = form.querySelectorAll("input[required], textarea[required]");
      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.border = "2px solid red";
        } else {
          input.style.border = "2px solid green";
        }
      });

      if (!valid) {
        e.preventDefault();
        alert("Por favor, completa todos los campos obligatorios.");
      }
    });
  });
});
=======
document.addEventListener("DOMContentLoaded", () => {
  const formularios = document.querySelectorAll("form");

  formularios.forEach(form => {
    form.addEventListener("submit", e => {
      const inputs = form.querySelectorAll("input[required], textarea[required]");
      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.border = "2px solid red";
        } else {
          input.style.border = "2px solid green";
        }
      });

      if (!valid) {
        e.preventDefault();
        alert("Por favor, completa todos los campos obligatorios.");
      }
    });
  });
});
>>>>>>> 7e1dd6c (Cambios de la página)
