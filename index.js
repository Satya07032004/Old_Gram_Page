const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const container = document.getElementById("all-posts");

function displayPosts() {
  // DRY: Destructure properties directly so we don't repeat posts[i].property
  container.innerHTML = posts
    .map(
      ({ name, username, location, avatar, post, comment, likes }, index) => `
            <section class="post">
                <div class="user-info">
                    <img class="avatar" src="${avatar}" alt="${name} avatar" />
                    <div>
                        <h2>${name}</h2>
                        <p>${location}</p>
                    </div>
                </div>
                <img class="post-img" src="${post}" alt="Post by ${name}" data-index="${index}" />
                <div class="post-footer">
                    <div class="icons">
                        <i id="heart-btn" class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <p class="likes"><strong>${likes} likes</strong></p>
                    <p class="comment"><strong>${username}</strong> ${comment}</p>
                </div>
            </section>
        `,
    )
    .join("");
}

// Bonus DRY Event Delegation: Clicking the heart (or double-clicking the post image) increments likes
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("like-btn")) {
    const index = e.target.dataset.index;
    posts[index].likes++;
    displayPosts();
  }
});

displayPosts();

const heartBtn = document.getElementById("heart-btn");

heartBtn.addEventListener("click", function () {
  // Swap between the empty outline and solid fill
  this.classList.toggle("fa-regular");
  this.classList.toggle("fa-solid");

  // Toggle the red color
  this.classList.toggle("liked");
});
