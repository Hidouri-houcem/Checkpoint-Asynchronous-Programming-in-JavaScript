async function awaitCallError() {
    try {
        const data = await new Promise((resolve) => {
            setTimeout(() => resolve("Données récupérées de l'API"), 1000);
        });
        console.log(data);
    } catch (error) {
        console.error("Erreur rencontrée : ", error.message);
    }
}

awaitCallError();