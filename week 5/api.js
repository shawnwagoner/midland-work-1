      const title= document.getElementById("title");
      const year= document.getElementById("year");
      const type= document.getElementById("type");
      const search= document.getElementById("search");


      let button = document.getElementById("search");
      let form = document.getElementById("form");
      
      button .addEventListener("click", (e) => {
      e.preventDefault();
      if(title.value.length < 3); {
        console.log ( "You must enter 3 or more letters of title");
      }
        else { if ( year.value.length !== "") {
           console.log(year.value)}
           fetch(`http://www.omdbapi.com/?t=${title.value}&y=${year.value}&type=${type.value}&i=tt3896198&apikey=e9526b`);
           .then((response) =>{
            console.log(title.value && year.value);
            return response.json();
        })
            .then((res) => console.log(res));}
        
    });
           
           


