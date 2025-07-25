const loadUsersBtn = document.getElementById('loadUsers');
const usersList = document.getElementById('usersList');

const postsSection = document.getElementById("postsSection");
const userName = document.getElementById("userName");
const loadPosts = document.getElementById("loadPosts");
const postsList = document.getElementById("postsList");
const loadPostsBtn = document.getElementById('loadPosts');

const cancelFetch = document.getElementById("cancelFetch");

let selectedUserId = null;
let selectedUserName = "";
let postFetchController = null;

function fetchWithTimeout(url, ms, signal) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout"));
   
    }, ms);
  });
  return Promise.race([
    fetch(url, { signal }),
    timeoutPromise
  ]);
} 

function fetchUsersPromise() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
}

function fetchPostPromise(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
}

loadUsersBtn.onclick = () => {
  usersList.innerHTML = 'Завантаження...';

  fetchUsersPromise()
    .then(users => {
      usersList.innerHTML = '';
      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        li.dataset.id = user.id;
        li.dataset.name = user.name;
        usersList.appendChild(li);
      });
      console.log("Список користувачів успішно завантажено.");
    })
    .catch(error => {
      usersList.innerHTML = "Помилка при завантаженні користувачів:";
      console.error("Помилка при завантаженні користувачів:", error.message);
    });

 
  }
 usersList.onclick = (e) => {
    if (e.target.tagName !== "LI")
      return;

 selectedUserId = e.target.dataset.id;
  selectedUserName = e.target.dataset.name;
  userName.textContent = selectedUserName;
  postsSection.hidden = false;
  postsList.innerHTML = '';
};

async function loadPostsForUser(userId) {
  postFetchController = new AbortController();
  try {
    const postIds = [1, 2, 3];
    const fetchPromises = postIds.map((postId) =>
      fetchWithTimeout(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        5000,
        postFetchController.signal
      ).then((response) => {
        if (!response.ok)
          throw new Error(`HTTP помилка! Статус: ${response.status}`);
        return response.json();
      })
    );

    const posts = await Promise.all(fetchPromises);

    postsList.innerHTML = "";

    posts.forEach((post) => {
      if (post.userId.toString() === userId.toString()) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
        postsList.appendChild(li);
      }
    });
  } catch (error) {
    if (error.name === 'AbortError') {
    postsList.innerHTML = `<li style="color: red;">Запит скасовано</li>`;
    console.log('Запит скасовано користувачем');
    } else {
      postsList.innerHTML = `<li style="color: red;">Помилка: ${error.message}</li>`;
      console.error(error);
  }
} finally {
  postFetchController = null;
}
}

loadPostsBtn.onclick = async () => {
  if (!selectedUserId) {
    postsList.innerHTML = "<li>Будь ласка, оберіть користувача.</li>";
    return;
  }
  postsList.innerHTML = "Завантаження постів...";
  await loadPostsForUser(selectedUserId);
};

cancelFetch.addEventListener('click', () => {
  if (postFetchController) postFetchController.abort();
  postsList.innerHTML = '';
});
