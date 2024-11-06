// ==UserScript==
// @name         Better Deezer
// @namespace    http://tampermonkey.net/
// @version      Alpha+
// @description  Masque toutes les playlists créées par des artistes spécifiques sur Deezer.
// @author       PepitoBailao
// @match        https://www.deezer.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Fonction pour masquer les éléments contenant un texte spécifique
    function masquerPlaylists(texte) {
        document.querySelectorAll('p').forEach(element => {
            if (element.innerText.includes(texte)) {
                let parent = element.closest('.playlist-item, .datagrid-row') || element.parentElement;
                if (parent) parent.style.display = 'none';
            }
        });
    }

    // Masquer les playlists au premier chargement et à chaque changement dans le DOM
    const observer = new MutationObserver(() => {
        masquerPlaylists('par ');
    });

    observer.observe(document.body, { childList: true, subtree: true });
    masquerPlaylists('par ');

})();
