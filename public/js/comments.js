const postId = document.querySelector('input[name="postId"]').value;

const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#comment').value.trim();
    const post_id = postId;

    try {
        if (comment_text) {
            await fetch(`/api/posts/comment`, {
                method: 'POST',
                body: JSON.stringify({ comment_text, post_id }),
                headers: { 'Content-Type': 'application/json' }, //what is the header for? is this even correct?
            });
    
            
            console.log('success in comment form handler');
        } 
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

document
.querySelector('#commentBtn')
.addEventListener('click', commentFormHandler);