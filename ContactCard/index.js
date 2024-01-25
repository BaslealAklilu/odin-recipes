const user = document.querySelector('.user-list')
async function main(){
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const userData = await users.json();
    console.log(userData)
    user.innerHTML += userData.map((data) =>(
        `
            <div class="user-card">
                <div class="user-card_container">
                    <h3>${data.name}</h3>
                    <p><b>Email:</b>${data.email}/p>
                    <p><b>Phone:</b>${data.phone}</p>
                    <p><b>Website:</b><a href="${data.website}">${data.website}</a></p>
                </div>
            </div>
            `
    )).join("")
}
main()