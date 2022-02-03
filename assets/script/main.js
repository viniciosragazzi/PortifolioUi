// Receber do git os repositorios

function getFunction() {
  let url = "https://api.github.com/users/viniciosragazzi/repos";
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const criarCard = (repos) => {
  let data = repos;
  let repositorios = JSON.parse(data);
    let repositorio;
  repositorios.forEach((repositorio, index) => {
    let card = document.createElement("div");
    card.classList.add("card-projeto");

    card.setAttribute("id", `card-${index}`);
    if(index === 0){
        card.classList.add("primeiro");
    }
    if(repositorio.language === 'HTML'){
      card.classList.add("html");
    }
    if(repositorio.language === 'SCSS'){
      card.classList.add("scss");
    }
    if(repositorio.language === 'CSS'){
      card.classList.add("css");
    }
    if(repositorio.language === 'JavaScript'){
      card.classList.add("js");
    }
    card.innerHTML = `<div class="categoria-projeto">
        <p>${repositorio.language}</p>
    </div>
    <div class="nome-projeto">
        <h4>${repositorio.name}</h4>
    </div>
    <div class="descricao-projeto">
        <p>
        ${repositorio.description}
        </p>
    </div>`;
    const projetos = document.querySelector('.projetos-cards').appendChild(card)
  });
  const cards = document.querySelectorAll('.card-projeto')
    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
          const id3 = (card.id).split('-', 2)
          console.log(repositorios[id3[1]])
     
            window.open(
                `${repositorios[id3[1]].html_url}`,
                '_blank' // <- This is what makes it open in a new window.
              );
      })
     })
};

criarCard(getFunction());
