

async function getJoke() {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    console.log(data.fact);
}
getCatFact();