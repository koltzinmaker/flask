document.getElementById("form").addEventListener("submit",async (E) => {
    E.preventDefault();

    const data = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value
    };

    const res = await fetch("/cadastro", {
        method: "POST",
        headers: {
            "content-type": "applicaton/json"
        },
        body: JSON.stringify(data)
    });
    const json = await res.json();
    alert(JSON.stringify(json));
});