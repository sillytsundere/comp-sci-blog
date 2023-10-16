const loadNewPostForm = async () => {

    const response = await fetch("/dashboard/new", {
        method: "GET",
    });
    if (response.ok) {
        document.location.replace('/dashboard/new');
    } else {
        alert("Could not load page to create a new post.");
    }
};

document.querySelector('#create-new').addEventListener('click', loadNewPostForm);
