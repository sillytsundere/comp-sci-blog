const loadNewPostForm = async () => {
    console.log("load new post form");
    const response = await fetch("/dashboard/new", {
        method: "GET",
    });
    if (response.ok) {
        document.location.replace('/dashboard/new');
    } else {
        alert("Could not load page to create a new post.");
    }
};

console.log(document.querySelector('#create-new'));

document.querySelector('#create-new').addEventListener('click', loadNewPostForm);