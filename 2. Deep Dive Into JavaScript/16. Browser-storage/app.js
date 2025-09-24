const toggleThemeBtn = document.getElementById("toggleTheme");
const noteTitleInput = document.getElementById("noteTitle");
const noteBodyInput = document.getElementById("noteBody");
const notesListSection = document.getElementById("notesList");
const notesUl = notesListSection.querySelector("ul");
const statusDiv = document.getElementById("status");
const saveNoteBtn = document.getElementById("saveNote");
const clearDraftBtn = document.getElementById("clearDraft");
const loginSection = document.getElementById("login");
const noteEditor = document.getElementById("noteEditor");
const greetingSection = document.createElement("section");

greetingSection.id = "greeting";
greetingSection.style.display = "none";
document.body.insertBefore(greetingSection, noteEditor);

const greetingStrong = document.createElement("strong");
greetingSection.appendChild(greetingStrong);

function greetUser(name) {
  greetingStrong.textContent = `Привіт, ${name}!`;
  greetingSection.style.display = "block";
}

async function initApp() {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  const savedName = getCookie("userName");
  if (savedName) {
    loginSection.style.display = "none";
    greetUser(savedName);
    noteEditor.style.display = "block";
    notesListSection.style.display = "block";
    await openDB();
    await updateNoteList();
  } else {
    loginSection.style.display = "block";
    greetingSection.style.display = "none";
    noteEditor.style.display = "none";
    notesListSection.style.display = "none";
  }
  loadDraft();
}
window.addEventListener("DOMContentLoaded", initApp);

const saveNameBtn = document.getElementById("saveName");
const userNameInput = document.getElementById("userName");

saveNameBtn.addEventListener("click", () => {
  const name = userNameInput.value.trim();
  if (!name) {
    alert("Введіть, будь ласка, ваше ім'я");
    return;
  }
  setCookie("userName", name, 7);
  greetUser(name);
  loginSection.style.display = "none";
  noteEditor.style.display = "block";
  notesListSection.style.display = "block";
  openDB().then(updateNoteList);
});

function setCookie(name, value) {
  const dateFinish = "; expires=" + new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + dateFinish + "; path=/";
}

function getCookie(name) {
  const cookies = document.cookie.split("; ").map(c => c.split("="));
  for (const [key, value] of cookies) {
    if (key === name) 
      return decodeURIComponent(value);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const body = document.body;

function setTheme(theme) {
  if (theme === "dark") {
    body.classList.add('dark');
    toggleThemeBtn.textContent = "Вимкнути темну тему";
  } else {
    body.classList.remove('dark');
    toggleThemeBtn.textContent = "Увімкнути темну тему";
  }
  localStorage.setItem("theme", theme);
}

toggleThemeBtn.addEventListener('click', () => {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  setTheme(newTheme);
});

function saveDraft() {
  sessionStorage.setItem("draftTitle", noteTitleInput.value);
  sessionStorage.setItem("draftBody", noteBodyInput.value);
}

function loadDraft() {
  const draftTitle = sessionStorage.getItem("draftTitle") || "";
  const draftBody = sessionStorage.getItem("draftBody") || "";
  noteTitleInput.value = draftTitle;
  noteBodyInput.value = draftBody;
}

noteTitleInput.addEventListener("input", saveDraft);
noteBodyInput.addEventListener("input", saveDraft);

const DB_NAME = "NotesDB";
const DB_VERSION = 1;
const STORE_NAME = "notes";

let db;

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = (e) => {
      console.error("Помилка відкриття БД:", e);
      reject(e);
    };
    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };
    request.onupgradeneeded = (e) => {
      db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };
  });
}

function addNote(note) {
  return new Promise((resolve, reject) => {
    showStatus("Збереження…");
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const request = store.add(note);
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = (e) => {
      console.error("Помилка додавання нотатки:", e);
      reject(e);
    };
    tx.oncomplete = () => {
      hideStatus();
    };
  });
}

function getAllNotes() {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = (e) => {
      console.error("Помилка читання нотаток:", e);
      reject(e);
    };
  });
}

function deleteNote(id) {
  return new Promise((resolve, reject) => {
    showStatus("Видалення…");
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const request = store.delete(id);
    request.onsuccess = () => {
      resolve();
    };
    request.onerror = (e) => {
      console.error("Помилка видалення нотатки:", e);
      reject(e);
    };
    tx.oncomplete = () => {
      hideStatus();
    };
  });
}

function showStatus(text) {
  statusDiv.textContent = text;
}

function hideStatus() {
  statusDiv.textContent = "";
}

function renderNotes(notes) {
  notesUl.innerHTML = "";
  if (notes.length === 0) {
    notesUl.innerHTML = "<li>Нотаток немає</li>";
    return;
  }
  for (const note of notes) {
    const li = document.createElement("li");

    const titleSpan = document.createElement("span");
    titleSpan.className = "note-title";
    titleSpan.textContent = note.title;

    const dateSpan = document.createElement("span");
    dateSpan.className = "note-date";

    const date = new Date(note.created);
    dateSpan.textContent = date.toLocaleString();

    const actionSpan = document.createElement("span");
    actionSpan.className = "note-actions";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";

    deleteBtn.addEventListener("click", async () => {
      try {
        await deleteNote(note.id);
        await updateNoteList()
      } catch (e) {
        console.error("Помилка видалення нотатки: ", e);
      }
    });

    actionSpan.appendChild(deleteBtn);

    li.appendChild(titleSpan);
    li.appendChild(dateSpan);
    li.appendChild(actionSpan);

    notesUl.appendChild(li);
  }
}

async function updateNoteList() {
  try {
    const notes = await getAllNotes();
    renderNotes(notes);
  } catch (e) {
    console.error("Помилка оновлення списку нотаток:", e);
  }
}

saveNoteBtn.addEventListener('click', async () => {
  const title = noteTitleInput.value.trim();
  const body = noteBodyInput.value.trim();

  if (!title) {
    alert("Заголовок не може бути пустим");
    return;
  }
  try {
    await addNote({ title, body, created: Date.now() });
    sessionStorage.removeItem("draftTitle");
    sessionStorage.removeItem("draftBody");
    noteTitleInput.value = "";
    noteBodyInput.value = "";
    await updateNoteList();
  } catch (e) {
    console.error(e);
  }
});

clearDraftBtn.addEventListener('click', () => {
  noteTitleInput.value = "";
  noteBodyInput.value = "";
  sessionStorage.removeItem("draftTitle");
  sessionStorage.removeItem("draftBody");
});



