async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // const data = response.json()
        // console.log(data)
        console.log(response);

    } catch (error) {
        console.log('ERROR')
    }
}
getAllUsers()