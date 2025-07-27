document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("status"); 
  const btnSubmit = document.getElementById("btnSubmit");
  const attachmentInput = document.getElementById("attachmentInput");
  const filePreview = document.getElementById("filePreview");
  const nameInput = form.elements["name"];
  const emailInput = form.elements["email"];
  const messageInput = form.elements["message"];

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (localStorage.getItem('name')) {
    nameInput.value = localStorage.getItem('name').trim();
  }

  if (localStorage.getItem('email')) {
    emailInput.value = localStorage.getItem('email').trim();
  }

  attachmentInput.addEventListener('change', () => {
    const file = attachmentInput.files[0];

    if (file) {
      const sizeKB = (file.size / 1024).toFixed(1);
      filePreview.textContent = `Обрано файл: ${file.name} (${sizeKB} KB)`;
    } else {
      filePreview.textContent = '';
    }
  });

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    
    nameInput.setCustomValidity("");
    emailInput.setCustomValidity("");
    messageInput.setCustomValidity("");
    statusEl.textContent = "";

    let valid = true;

    if (nameInput.value.trim().length < 2) {
      nameInput.setCustomValidity("Імʼя має містити більше за 2 символи");
      valid = false;
    }

    if (!emailPattern.test(emailInput.value.trim())) {
      emailInput.setCustomValidity("Ви ввели неправильний email");
      valid = false;
    }

    if (messageInput.value.trim() === "") {
      messageInput.setCustomValidity(
        "Напишіть, будь ласка, повідомлення. Поле не має бути порожнім!"
      );
      valid = false;
    }

    if (!valid) {
      nameInput.reportValidity();
      emailInput.reportValidity();
      messageInput.reportValidity();
      return;
    }

    const data = new FormData(form);

    if (attachmentInput.files.length > 0) {
      data.append('attachment', attachmentInput.files[0]);
    }

    for (const [key, value] of data.entries()) {
      console.log(key + ": " + value);
    }

    btnSubmit.disabled = true;
    statusEl.textContent = "Відправка…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        statusEl.textContent =
          "Дякуємо! Ми зв’яжемося з вами найближчим часом.";

        localStorage.setItem('name', nameInput.value.trim());
        localStorage.setItem('email', emailInput.value.trim());

        messageInput.value = '';
        attachmentInput.value = "";
        filePreview.textContent = "";


        disableForm(true);
        setTimeout(() => disableForm(false), 5000);

      } else {
        statusEl.textContent = "Сталася помилка. Спробуйте ще раз.";
        btnSubmit.disabled = false; 
      }
    } catch (error) {
      statusEl.textContent = "Сталася помилка. Спробуйте ще раз.";
      btnSubmit.disabled = false;
      console.error("Fetch error:", error);
    }
  }); 
  function disableForm(flag) {
    nameInput.disabled = flag;
    emailInput.disabled = flag;
    messageInput.disabled = flag;
    attachmentInput.disabled = flag;
    btnSubmit.disabled = flag;
  }
}); 
