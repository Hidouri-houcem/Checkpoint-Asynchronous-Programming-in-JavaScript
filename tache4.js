async function chainedAsyncFunctions() {
    async  function  function1() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Fonction 1 ");
    }
    async function function2() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Fonction 2 ");
    }
    async function function3() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Fonction 3 ");
    }

    await function1();
    await function2();
    await function3();
}


chainedAsyncFunctions();