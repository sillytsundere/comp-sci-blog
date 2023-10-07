const postId = document.querySelector('input[name="postId"]').value;

const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-editpost').value.trim();
    const content = document.querySelector('#content-editpost').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' }, //what is the header for? is this even correct?
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert("Could not edit post.");
        }
    }
};

const deleteFormHandler = async (event) => {
    await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
    })
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert("Could not delete post.");
    }
}

document
.querySelector('#editBtn')
.addEventListener('submit', editFormHandler);

document
.querySelector('#deleteBtn')
.addEventListener('click', deleteFormHandler);