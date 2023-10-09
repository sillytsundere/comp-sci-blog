const postId = document.querySelector('input[name="postId"]').value;

const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-editpost').value.trim();
    const content = document.querySelector('#content-editpost').value.trim();
    console.log('edit form handler after consts before update');
    
    try {
        if (title && content) {
            await fetch(`/api/posts/edit/${postId}`, {
                method: 'PUT',
                body: JSON.stringify({ title, content }),
                headers: { 'Content-Type': 'application/json' }, //what is the header for? is this even correct?
            });
    
            document.location.replace('/dashboard');
            console.log('success in edit form handler');
        } 
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

const deleteFormHandler = async (event) => {
    try {
        await fetch(`/api/posts/delete/${postId}`, {
            method: 'DELETE',
        });
        document.location.replace('/dashboard');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

document
.querySelector('#editBtn')
.addEventListener('click', editFormHandler);

document
.querySelector('#deleteBtn')
.addEventListener('click', deleteFormHandler);