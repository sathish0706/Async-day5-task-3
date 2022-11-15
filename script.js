async function country () {
    
    const countryApi = await fetch("https://restcountries.com/v3.1/name/aruba?fullText=true");
    const countryApi1 = await countryApi.json()
    for(let i=0; i<countryApi1.length; i++){

        console.log(countryApi1[i]);

        let div = document.createElement("div");
        
        div.innerHTML = `
        <div class='container'>     
        <img src=${countryApi1[i].flags.png} alt="">
          <div class="content">
              <h5 class="card-title"><b>Name: </b>${countryApi1[i].name.common}</h5>
              <h5><b>Capital: </b>${countryApi1[i].capital}</h5>
              <h5><b>Population: </b>${countryApi1[i].population}</h5>
              <h5><b>Continents: </b>${countryApi1[i].continents}</h5>
              <h5><b>Languages: </b>${countryApi1[i].languages.nld}</h5>
              <h5><b>Region: </b>${countryApi1[i].region}</h5>
              <h5><b>Subregion: </b>${countryApi1[i].subregion}</h5>
              <h5><b>Status: </b>${countryApi1[i].status}</h5>
              <a href=${countryApi1[i].maps.googleMaps} target="_blank" target=”_blank” class="btn btn-primary">Map</a>
              <div class="card">
              </div>
        </div>`
     document.body.append(div)

    }
}
country()