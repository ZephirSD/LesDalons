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
        dayConnection = dateCreation(elem.registered['date']);
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
                    Inscrit depuis ${dayConnection} jours
                </div>
            </div>
        `
    });
} 

function dateCreation(dateCreate) {
    const dateRegister = new Date(dateCreate);
    const dateNow = new Date();
    const betweDate = dateNow.getTime() - dateRegister.getTime();
    const betweDay  = betweDate / (1000 * 3600 * 24);
    const nombreJour = Math.round(betweDay);
    return nombreJour;
}