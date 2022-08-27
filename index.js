  document.getElementById("consultaConselho").onclick = function(){

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a971acd304mshf02c547d61db721p1659b6jsn24258aa44cba',
        'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
      }
    };
    
    fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/createkey', options)
      .then(response => response.json())
      .catch(err => console.error(err));
 
      let url = "https://api.adviceslip.com/advice";
       
       fetch(url).then(function(resposta){
           resposta.json().then((conselho) => mostrarConselho(conselho));
       });
          
       function mostrarConselho(conselho){
         let resultado = document.querySelector('#resultado');
         if(conselho.erro){
             resultado.innerHTML = "<br>Não foi possível localizar o conselho!";
         }
         else{
         resultado.innerHTML =
          ``
         }
  
         var texto = `${conselho.slip.advice}`;
         var tradutor = `https://api.mymemory.translated.net/get?q=${texto.replace(/\s/g, `%20`)}!&langpair=en|pt-br`

         document.getElementById("traducao").content = tradutor;

         fetch(tradutor).then(function(respostaTradutor){
          respostaTradutor.json().then((traducao) => 
          traduzirConselho(traducao));
      });

      function traduzirConselho(traducao){
        let traducaoPtBr = document.querySelector('#traducaoPtBr');
        if(conselho.erro){
          traducaoPtBr.innerHTML = "<br>Não foi possível localizar o conselho!";
        }
        else{
          traducaoPtBr.innerHTML =
         `${traducao.responseData.translatedText}`
        }
        
    }
    
  }
}