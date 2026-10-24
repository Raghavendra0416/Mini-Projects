function displayUserData(event) {
    event.preventDefault();

    // Pass the form element into FormData
    const formData = new FormData(event.target);

    const textArea = formData.get('expectedOutput');

    // Convert it into a standard JavaScript object
    // const formProps = Object.fromEntries(formData);

    console.log(textArea);
    document.getElementById("UserOutput").innerText = textArea;
}

export {
    displayUserData
}



