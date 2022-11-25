// import React from 'react'

export default async function Last() {


    await fetch("https://skifb-admin.be/api/CalendarAPI/GetCalendarTEST")  // Methode Fetch qui me permet de recuperer les données du serveur
    .then(function(response){                      // Promesse de recevoir une réponse de l'api 
        console.log(response);                     // verification que je recois bien la réponse
        return response.json();                    // Demande de retour de la réponse .. en format Json 
    })                                             // En + simple .then(reponse => reponse.json())
    .then(function(data){                          // une promesse de pouvoir "loguer" les datas (mes données)
        return (data);                  // demande d'un retour de reponse (les datas) que je "nomme" products
    })
    .catch (function (Error){                                     // Si ma promesse initiale est rejetée 'catch' (obligatoire avec un then)
        console.log(`J'en connais Un qui s'est planté` + Error);  // s'il apparait dans la console, il y a un problème
    });
};