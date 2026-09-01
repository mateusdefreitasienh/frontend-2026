"use client";

export default function Button() {

    function quandoMeClica() {
        alert("foi clicado");
    }

    return <button onClick={quandoMeClica} >Click-me!</button>
}