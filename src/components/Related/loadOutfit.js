let loadOutfit = () => {
  var yourOutfit = []
  for (var key in localStorage) {
    if(Number(key)) {
      yourOutfit.push(JSON.parse(localStorage[key]))
  }
  }

  return yourOutfit
}



export default loadOutfit;