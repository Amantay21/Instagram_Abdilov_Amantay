async function makeRequest(url, method = 'GET'){
    let response = await fetch(url, {method});

    if (response.ok) {
        return await response.json();
    }else{
        let error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

    async function onClick(e){
        e.preventDefault()
        let a = e.target
        let url = a.href;
        let response = await makeRequest(url);
        console.log(response);
        if (a.innerText === "like"){
            a.innerText = "unlike";
        }
        else {
            a.innerText = "like";
        }
        let span = document.getElementById(a.dataset['spanCountId']);
        span.innerText = response.count;
}

    function onload () {
        let likes = document.getElementsByClassName('likes');
        for(let like of likes){
            like.addEventListener('click', onClick);
        }

    }
