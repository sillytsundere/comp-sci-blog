const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-newpost').value.trim();
    const content = document.querySelector('#content-newpost').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' }, //what is the header for? is this even correct?
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert("Could not create new post.");
        }
    }
};

document
.querySelector('#new-post-form')
.addEventListener('submit', newFormHandler);