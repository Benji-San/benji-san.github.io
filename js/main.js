/**
 * On instancie notre objet permettant la communication entre client / serveur
 */
var req = new XMLHttpRequest();
var container = document.querySelector('#counter');
var updateId = 0;
var updateId2 = 0;
var requestIntervalTime = 1; // Nombre de seconde
var i = 0;
var data = {};
var update = function() {
    /**
     * On prépare la requête en renseignant la méthode, l'URL et asynchrone ou non
     * ici on veut que ce soit asynchrone donc "true"
     * query string ?i= pour être certain d'être à jour
     */
    req.open('GET', '/counter.json?i=' + i, true);

    /**
     * Il y a plusieurs états idenfiant la progression de la requête
     * Pour suivre cette progression, on va utiliser l'EventHandler "onreadystatechange"
     */
    req.onreadystatechange = function() {
        /**
         * On attend de recevoir le dernier état qui annonce que l'opération est complète.
         * cf https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
         *
         * On va également vérifier que le serveur nous renvois un code HTTP 200
         * cf https://developer.mozilla.org/fr/docs/Web/HTTP/Status
         */
        if (this.readyState == 4 && this.status == 200)
        {
            data = JSON.parse(this.responseText);

            // Dans le cas où nous n'avons pas à un nombre par défaut dans notre DOM
            if (isNaN(parseInt(container.innerHTML)))
                container.innerHTML = data.counter;

            // On vérifie si le nombre actuel est différent de celui du JSON
            if (data.counter != container.innerHTML)
            {
                /**
                 * Le temps que notre valeur se mette à jour dans notre DOM
                 * on n'envoit pas de nouvelle requête
                 */
                clearInterval(updateId);

                updateId2 = setInterval(function() {
                    if ((container.innerHTML - data.counter) > 0)
                        container.innerHTML--;
                    else
                        container.innerHTML++;
                    if (data.counter == container.innerHTML)
                    {
                        clearInterval(updateId2);
                        updateId = setInterval(update, requestIntervalTime * 1000);
                    }
                }, 50);
            }
            i++;
        }
    };

    // On envoie la requête
    req.send(null);
}

update();
// On appel notre fonction chaque seconde
updateId = setInterval(update, requestIntervalTime * 1000);