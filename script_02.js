const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

// Sors-moi la liste des titres des livres du CDI
let titles = books.map(book => book.title);
console.log(titles);

// Est-ce que tous les livres ont été au moins empruntés une fois ?
let allRented = books.every(book => book.rented > 0);
console.log(allRented);

// Quel est livre le plus emprunté ?
let mostRented = books.reduce((prev, current) => (prev.rented > current.rented) ? prev : current);
console.log(mostRented);

// Quel est le livre le moins emprunté ?
let lessRented = books.reduce((prev, current) => (prev.rented < current.rented) ? prev : current);
console.log(lessRented);

// Supprime le livre avec l'ID 133712
let id = 133712;
let index = books.findIndex(book => book.id === id);
books.splice(index, 1);
console.log(books);