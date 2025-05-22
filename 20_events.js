fetch('https://api.github.com/users/sujan3647')
    .then((response) => {
        console.log(response)
    })
    .then((data) => {
        console.log(data);

    })
    .catch((error) => {
        console.log(error)
    })

