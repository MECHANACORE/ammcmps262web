const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    if (data.id == "" || data.name == "" || data.rating || == "") {
        $.toaster({ priority: 'danger', title: 'Error', message: 'Oops something went wrong and did not save' });
    }
    else {
        fetch('amintusapi.onrender.com/api/v1/vegetables', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => console.log(data))
            .then(error => console.log(error))
        $.toaster({ priority: 'success', title: 'Vegetbales', message: 'Vegetable Added' });
    }

});