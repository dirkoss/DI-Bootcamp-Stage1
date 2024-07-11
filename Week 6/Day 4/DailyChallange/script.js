const form = document.querySelector('form');
document.getElementById('submit').addEventListener('click', handleSubmit)

function handleSubmit(e){
    e.preventDefault();

    const form = document.querySelector("form");
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    const stringified = JSON.stringify(data);

    const element = document.createElement("p");
    element.innerText = stringified;
    document.querySelector("body").appendChild(element);
}