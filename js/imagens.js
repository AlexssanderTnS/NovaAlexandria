
(function(){
"use strict";
const temas={
"biblioteca-alexandria":["Biblioteca de Alexandria","livro","História"],
"alexandre-magno":["Alexandre, o Grande","colunas","História"],
"euclides":["Euclides e a Geometria","geometria","Ciência"],
"queda-constantinopla":["Queda de Constantinopla","cidade","História"],
"renascimento":["Renascimento","arte","Arte"],
"filosofia-grega":["Filosofia Grega","colunas","Filosofia"],
"helenismo":["Mundo Helenístico","globo","História"],
"museu-alexandria":["Museu de Alexandria","colunas","Ciência"],
"arquimedes":["Arquimedes","geometria","Ciência"],
"socrates":["Sócrates","busto","Filosofia"],
"platao":["Platão","busto","Filosofia"],
"aristoteles":["Aristóteles","busto","Filosofia"],
"hipatia":["Hipátia de Alexandria","astrolabio","Filosofia"],
"imperio-bizantino":["Império Bizantino","cidade","História"],
"humanismo":["Humanismo Renascentista","livro","Filosofia"],
"imprensa-gutenberg":["Imprensa de Tipos Móveis","livro","Tecnologia"],
"leonardo-da-vinci":["Leonardo da Vinci","arte","Arte"],
"revolucao-cientifica":["Revolução Científica","astrolabio","Ciência"],
"povos-originarios":["Povos originários antes de 1500","natureza","Brasil"],
"colonizacao-portuguesa":["Colonização portuguesa e resistências","navio","Brasil"],
"independencia-brasil":["Independência do Brasil","bandeira","Brasil"],
"proclamacao-republica":["Proclamação da República","bandeira","Brasil"],
"ditadura-militar-brasil":["Ditadura militar no Brasil","cidade","Brasil"],
"constituicao-1988":["Constituição de 1988","livro","Brasil"]
};
const shapes={
livro:'<path d="M160 168 Q245 133 322 170 L322 330 Q245 295 160 330Z M322 170 Q408 133 490 168 L490 330 Q408 295 322 330Z" fill="#fffdf8" stroke="#234b66" stroke-width="9"/><path d="M322 170V332 M184 204Q250 182 298 204 M184 236Q250 214 298 236 M345 204Q410 182 465 204 M345 236Q410 214 465 236" stroke="#c9a96b" stroke-width="5" fill="none"/>',
colunas:'<path d="M132 170L325 82 518 170Z" fill="#c9a96b"/><path d="M140 182H510 M140 352H510" stroke="#234b66" stroke-width="16"/><path d="M178 195V338 M250 195V338 M326 195V338 M402 195V338 M475 195V338" stroke="#fffdf8" stroke-width="34"/><path d="M178 195V338 M250 195V338 M326 195V338 M402 195V338 M475 195V338" stroke="#234b66" stroke-width="4"/>',
geometria:'<circle cx="330" cy="235" r="125" fill="none" stroke="#234b66" stroke-width="7"/><path d="M330 110L440 315H208Z" fill="#c9a96b" fill-opacity=".5" stroke="#234b66" stroke-width="7"/><path d="M330 110V360 M208 315L440 315 M225 170L430 300" fill="none" stroke="#a56b4c" stroke-width="4"/>',
cidade:'<path d="M125 345V220H185V160H248V260H305V115H375V260H427V182H497V345Z" fill="#234b66"/><path d="M155 245H173 M220 205H235 M325 155H348 M448 218H471" stroke="#fffdf8" stroke-width="12"/><path d="M95 346H548" stroke="#c9a96b" stroke-width="12"/>',
arte:'<path d="M220 330L260 132 418 132 458 330Z" fill="#fffdf8" stroke="#234b66" stroke-width="8"/><circle cx="338" cy="204" r="47" fill="#c9a96b"/><path d="M276 305L330 240 372 284 407 232 445 305Z" fill="#234b66"/><path d="M200 350H480" stroke="#a56b4c" stroke-width="8"/>',
globo:'<circle cx="325" cy="230" r="132" fill="#fffdf8" stroke="#234b66" stroke-width="8"/><ellipse cx="325" cy="230" rx="55" ry="132" fill="none" stroke="#c9a96b" stroke-width="7"/><path d="M195 230H455 M215 170H435 M215 290H435" stroke="#234b66" stroke-width="5" fill="none"/><path d="M325 363V390 M260 390H390" stroke="#a56b4c" stroke-width="9"/>',
busto:'<circle cx="325" cy="172" r="69" fill="#fffdf8" stroke="#234b66" stroke-width="8"/><path d="M280 220V267 Q220 276 200 345H450Q430 276 370 267V220" fill="#c9a96b" stroke="#234b66" stroke-width="8"/><path d="M290 170H304 M346 170H360 M310 201Q325 214 340 201" stroke="#234b66" stroke-width="5" fill="none"/>',
astrolabio:'<circle cx="325" cy="234" r="128" fill="none" stroke="#234b66" stroke-width="8"/><circle cx="325" cy="234" r="88" fill="none" stroke="#c9a96b" stroke-width="7"/><path d="M325 98V370 M189 234H461 M232 141L418 327 M418 141L232 327" stroke="#234b66" stroke-width="5"/><circle cx="325" cy="234" r="14" fill="#a56b4c"/>',
natureza:'<path d="M140 340Q200 235 260 340Z M265 340Q335 175 405 340Z M400 340Q465 230 530 340Z" fill="#234b66"/><path d="M325 330V170 M325 190L270 235 M325 220L375 258" stroke="#a56b4c" stroke-width="12"/><circle cx="325" cy="160" r="56" fill="#c9a96b"/><path d="M110 350H550" stroke="#234b66" stroke-width="8"/>',
navio:'<path d="M125 280H525L460 350H205Z" fill="#234b66"/><path d="M325 110V280 M325 120L200 260H325Z M340 145L460 260H340Z" fill="#fffdf8" stroke="#a56b4c" stroke-width="7"/><path d="M140 370Q180 350 220 370T300 370T380 370T460 370T540 370" stroke="#234b66" stroke-width="7" fill="none"/>',
bandeira:'<path d="M170 110V375" stroke="#234b66" stroke-width="11"/><path d="M180 120H505V310H180Z" fill="#c9a96b" stroke="#234b66" stroke-width="6"/><path d="M342 148L460 215 342 280 225 215Z" fill="#fffdf8"/><circle cx="342" cy="215" r="39" fill="#234b66"/><path d="M305 215Q340 192 380 220" stroke="#fffdf8" stroke-width="5" fill="none"/>'
};
function escapeXml(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}[c]))}
function imagemLocal(id){
  const [nome,tipo,categoria]=temas[id]||["Nova Alexandria","livro","Conhecimento"];
  const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 430" role="img" aria-label="'+escapeXml(nome)+'"><defs><linearGradient id="fundo" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e5eef0"/><stop offset="100%" stop-color="#e8dcc4"/></linearGradient></defs><rect width="650" height="430" fill="url(#fundo)"/><circle cx="520" cy="90" r="110" fill="#c9a96b" opacity=".2"/><path d="M0 385 Q160 340 325 390 T650 370 V430 H0Z" fill="#234b66" opacity=".12"/>'+(shapes[tipo]||shapes.livro)+'<text x="325" y="405" text-anchor="middle" fill="#234b66" font-size="17" font-family="Georgia,serif">'+escapeXml(categoria)+'</text></svg>';
  return "data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(svg);
}
function aplicar(img,id){if(!img)return;img.src=imagemLocal(id);img.decoding="async";img.loading=img.loading||"lazy";img.onerror=()=>{img.onerror=null;img.src=imagemLocal("biblioteca-alexandria")};}
window.NAImagens={aplicar,obter:id=>Promise.resolve({src:imagemLocal(id),source:null}),fallback:imagemLocal("biblioteca-alexandria")};
})();