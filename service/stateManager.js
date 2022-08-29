const baseUrl = "http://localhost:8088";

const appState = {
    categories: [],
    connections: [],
    currentUser: {},
    meetings: [],
    messages: [],
    posts: [],
    savedPosts: [],
    users: [],
    postModal: false,
    categoryModal: false,
    meetingModal: false,
    messageModal: false
}

const body = document.getElementById(".DOM");

export const fetchPosts = () => {
    return fetch(`${baseUrl}/posts`)
    .then(res => res.json)
    .then(post => appState.posts = post)
    .then(() => {body.dispatchEvent(new CustomEvent("state changed: got posts"));
})};

export const sendPost = (newPost) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    };
    return fetch(`${baseUrl}/posts`, fetchOptions)
      .then(response => response.json())
      .then(() => {body.dispatchEvent(new CustomEvent("state changed: post sent"));
      });
  };

  export const deletePost = (id) => {
    return fetch(`${baseUrl}/posts/${id}`,
    { method: "DELETE" }).then(() => {
      body.dispatchEvent(new CustomEvent("state changed: post deleted"));
    });
  };

  export const getPosts = () => {
    return [...appState.posts];
  };