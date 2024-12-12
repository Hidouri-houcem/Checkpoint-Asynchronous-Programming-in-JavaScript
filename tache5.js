async function concurrentRequests() {
    const resultat1 = new Promise(resolve => setTimeout(() => resolve("Résultat 1"), 1000));
    const resultat2 = new Promise(resolve => setTimeout(() => resolve("Résultat 2"), 1000));

    const results = await Promise.all([resultat1, resultat2]);
    console.log("les résultats : ", results);
}


concurrentRequests();
