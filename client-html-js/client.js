fetch('http://localhost:3000/labels')
    .then(response => response.json()) //On récupère la réponse de la requête
    .then(labels =>  //On transforme le JSON en objet JS
        console.log(labels) //On affiche la liste des labels
    );
