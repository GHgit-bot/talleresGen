async function obtenerPokemon(pikachu) {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu.toLowerCase()")
  const datos = await pokemon.json();
  console.log(datos);

  for(const t of datos.types){
    console.log(t.type.name);
  }
  for(const s of datos.stats){
    console.log(s.stat.name, s.base_stat);
  }
  for(const a of datos.abilities){
    console.log(a.ability.name);
  }
}
obtenerPokemon();