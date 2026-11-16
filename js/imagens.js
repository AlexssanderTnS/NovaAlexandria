/* Imagens editoriais: miniaturas de páginas da Wikipédia (Wikimedia).
   Sem credenciais. Falhas usam a ilustração local; não quebram o acervo.
   Atribuição e fonte ficam disponíveis no link da imagem. */
(function(){
"use strict";
const paginas={
"biblioteca-alexandria":"Biblioteca de Alexandria",
"alexandre-magno":"Alexandre, o Grande",
"euclides":"Euclides",
"queda-constantinopla":"Queda de Constantinopla",
"renascimento":"Renascimento",
"filosofia-grega":"Filosofia da Grécia Antiga",
"helenismo":"Período helenístico",
"museu-alexandria":"Museu de Alexandria",
"arquimedes":"Arquimedes",
"socrates":"Sócrates",
"platao":"Platão",
"aristoteles":"Aristóteles",
"hipatia":"Hipátia",
"imperio-bizantino":"Império Bizantino",
"humanismo":"Humanismo renascentista",
"imprensa-gutenberg":"Prensa móvel",
"leonardo-da-vinci":"Leonardo da Vinci",
"revolucao-cientifica":"Revolução Científica",
"povos-originarios":"Povos indígenas do Brasil",
"colonizacao-portuguesa":"Brasil Colônia",
"independencia-brasil":"Independência do Brasil",
"proclamacao-republica":"Proclamação da República do Brasil",
"ditadura-militar-brasil":"Ditadura militar brasileira",
"constituicao-1988":"Constituição brasileira de 1988"
};
const cache=new Map(),fallback="assets/alexandria-panorama.png";
function obter(id){if(cache.has(id))return cache.get(id);const titulo=paginas[id];if(!titulo)return Promise.resolve(null);
const url="https://pt.wikipedia.org/w/api.php?"+new URLSearchParams({action:"query",format:"json",prop:"pageimages",piprop:"thumbnail",pithumbsize:"900",redirects:"1",titles:titulo,origin:"*"});
const tarefa=fetch(url).then(r=>{if(!r.ok)throw Error("Imagem indisponível");return r.json()}).then(data=>{const page=Object.values(data.query?.pages||{})[0];if(!page?.thumbnail?.source)return null;return {src:page.thumbnail.source,source:"https://pt.wikipedia.org/wiki/"+encodeURIComponent(page.title)}}).catch(()=>null);
cache.set(id,tarefa);return tarefa}
function aplicar(img,id){if(!img)return;img.src=fallback;img.loading=img.loading||"lazy";img.decoding="async";img.onerror=()=>{img.onerror=null;img.src=fallback};obter(id).then(info=>{if(!info||!img.isConnected)return;img.src=info.src;img.dataset.fonteImagem=info.source;const parent=img.closest("figure");if(parent){const legenda=parent.querySelector("figcaption");if(legenda){legenda.replaceChildren();const link=document.createElement("a");link.href=info.source;link.target="_blank";link.rel="noopener noreferrer";link.textContent="Imagem ilustrativa · Fonte e licença: Wikipédia";legenda.append(link);}parent.dataset.fonteImagem=info.source}}})}
window.NAImagens={aplicar,obter,fallback};
})();