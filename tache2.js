async function awaitCall() {
    const data = await new Promise((resolve) => {
        setTimeout(() => resolve("Données récupérées de l'API"), 1000);
    });
    console.log(data);
}


awaitCall();