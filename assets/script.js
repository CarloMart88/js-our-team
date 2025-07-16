const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.

// (trovate l’array del team all’interno della cartella in allegato)

const teams = document.getElementById('teams')

// devo creare una funzione per crere le carte con ogni singolo oggetto per poi tramite il ciclo for assegnare ogni indice dell'array
const generateCard = (member) => {

  const { name, role, email, img } = member ;// destrutturo così da poter prendere i valori nelle chiavi 

  // a questo punto non farò altro che copiare il mio Html creato nella variabile memberCard inserendovi le chiavi  
  // e cancellando la carta da HTML lasciando id teams per l'innerHTML successivo 
  const memberCard = `

   <div class="card col-12 col-md-3 bg-dark mb-3 mx-2" >
        <div class="row">
          <div class="col-4 col-md-4">
            <img src="./assets/${img}" class="img-fluid rounded-start cover" alt="...">
          </div>
          <div class="col-8 col-md-8">
            <div class="card-body text-white">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${role}</p>
              <p class="card-text">
              <a href="#">${email}</a>
              </p>
            </div>
          </div>  
        </div>
      </div>
  `

  return memberCard ;

}

for(let i=0 ; i<teamMembers.length; i++){

  let card = generateCard(teamMembers[i])
  teams.innerHTML += card;

}







// Bonus

// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)

// Buon Lavoro
