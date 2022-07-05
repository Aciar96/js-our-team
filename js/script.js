const date = document.getElementById('date');
console.log(date)
const team = [
    {
        nome: 'Wayne Barnett',
        lavoro: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        lavoro: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        lavoro: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        lavoro: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        lavoro: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        lavoro: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    },
];

// / # MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto


console.log(team);


for (let i = 0; i < team.length; i++) {
    const infoTeam = team[i];
    console.log('---')
    for (let key in infoTeam) {

        console.log(key + infoTeam[key])

        // / # MILESTONE 2:
   
        date.innerHTML += `<li>${key}  ${infoTeam[key]}</li><br/>`
    }
}

console.log(team);