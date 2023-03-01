let user = [];
let gridProfile = document.querySelector('#gridProfile');
let email;
let genre;
let nameFirst;
let dayConnection;
let image;

function fetchUsers(){
    fetch("https://randomuser.me/api/?results=20")
    .then((response)=>response.json())
    .then((data)=>{
        user = data.results;
        console.log(user);
        caseUsers(user);
    });
}

fetchUsers();

function caseUsers(u) {
    u.forEach(elem => {
        email = elem.email;
        genre = elem.gender;
        image = elem.picture['large'];
        nameFirst = `${elem.name['first']} ${elem.name['last']}`;
        gridProfile.innerHTML += `
            <div id="profile">
                <div class="iconeGenre">
                    ${genre == 'male' ? `<i class="fa-solid fa-mars" id="${genre}"></i>` : `<i class="fa-solid fa-venus" id="${genre}"></i>`}
                </div>
                <div class="photoProfile">
                    <img src="${image}" alt="photo">
                </div>
                <div class="nomPrenom">${nameFirst}</div>
                <div class="email">${email}</div>
                <div class="inscription">
                    Inscrit depuis 6530 jours
                </div>
            </div>
        `
        // console.log(image);
        // console.log(email);
        // console.log(nameFirst);
    });
} 