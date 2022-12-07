(()=>{
    const form = document.getElementById('pyr-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const texto = document.getElementById('piramidText').value;
        const response = document.getElementById('response');
        const { data } = await axios.post(`http://localhost:4567/pyramid`, {piramideTexto : texto});
        response.innerHTML = JSON.stringify(data);
    })
})();