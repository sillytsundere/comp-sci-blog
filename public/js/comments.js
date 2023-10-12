const postId = document.querySelector('input[name="postId"]').value;

const commentFormHandler = async (event) => {
    event.preventDefault();
    console.log('button click'); //logs

    const comment_text = document.querySelector('#comment').value.trim();
    const post_id = postId;

    try {
        console.log('beginning of try'); //logging
        if (comment_text) {
            await fetch(`/api/posts/comment`, {
                method: 'POST',
                body: JSON.stringify({ comment_text, post_id }),
                headers: { 'Content-Type': 'application/json' },
            });
            console.log('log before document replace after fetch request'); //not logging
            document.location.replace(`/post/${postId}`);
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