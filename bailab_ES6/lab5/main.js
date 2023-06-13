
fetch('https://63e5240c4474903105fa7a16.mockapi.io/demo')
     .then((response) => response.json())
     .then((data) => show(data))

     function show(data){
      let bankHolidays = data; //For ease
      let england = bankHolidays["england-and-wales"].events;
     const html = england.map((items) =>{
     return `
                   <li>${items.id} <br/> <span class='yellow'>(${items.name})</span>  </li>
                   `;
                   }).join('');
      };
      document.getElementById("container").innerHTML = join('');