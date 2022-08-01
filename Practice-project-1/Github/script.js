let form = document.querySelector('form')
let inputSearch = document.querySelector('.input-box')
let profileContainer = document.querySelector('.profile-card-conatiner')
form.addEventListener('submit', submitForm)
profileContainer.innerHTML = ''

function submitForm(e) {
    e.preventDefault();
    let inputString = inputSearch.value
    searchUser(inputString);
}

async function searchUser(query) {
    profileContainer.style.opacity = 0
    let html  = ``;
    try {
        let {data} = await axios('https://api.github.com/users/'+query)
        console.log(data)
        
        html  = `<div class="profile-avator">
        <div class="avator-pic" style="background-image: url(${data.avatar_url});">
        </div>
        <div class="avator-name">
            <p style="color: aliceblue;">${data.name}</p>
        </div>
    </div>
    <div class="profile-info">
        <h1><a href="${data.html_url}" style="color: white;cursor:pointer" target="_blank">${data.login}</a></h1>
        <p>${data.bio}</p>
        <p>Location : ${data.location}</p>
        <ul>
            <li><span>Repsitories : ${data.public_repos}</span>
            </li>
            <li><span>Followers : ${data.followers}</span></li>
            <li><span>Following : ${data.following}</span></li>
        </ul>
          
    </div>`;
    } catch (error) {
        console.log(error)
        html = `<div class="error-handling">
          <p> No such profile found , please enter correct user name </p>
    </div>` 
    }
    profileContainer.innerHTML = html;
    profileContainer.style['align-items'] = 'center'
    profileContainer.style.opacity = 1
    
}