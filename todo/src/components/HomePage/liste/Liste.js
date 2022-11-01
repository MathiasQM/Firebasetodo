import React from 'react'

export default function Liste({list, valgtListe, setValgtListe, key}){

  const listeValgt = valgtListe;
  
  
    return (
      <div>
        <p onClick={() => setValgtListe(String(listeValgt))}>{listeValgt}</p>
      </div>
    );
}




