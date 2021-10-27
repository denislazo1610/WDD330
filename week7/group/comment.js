class CommentTemplate {
  constructor(type) {
    this.type = type;
    this.comments = getCommentFromLS(this.type) || [];
  }

  createComment(hikeName, comment) {
    const newComment = {
      name: hikeName,
      date: new Date(),
      content: comment,
    };

    this.comments.push(newComment);
    saveToLS(this.type, this.comments);
  }
}

function saveToLS(key, info) {
  //   window
  localStorage.setItem(key, JSON.stringify(info));
}

function getCommentFromLS(key) {
  //   window
  return JSON.parse(localStorage.getItem(key));
}

const commentForm = `
<div>
<h2>Comment</h2>
<input type="text" id="commentInput"/>
<button id="submitComment">Submit Comment</button>
</div>
`;
