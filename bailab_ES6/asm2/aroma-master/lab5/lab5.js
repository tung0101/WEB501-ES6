
fetch("https://63e605ae83c0e85a868b14bc.mockapi.io/lab5tmt")
  .then((res) => res.json())
  .then(function(posts){
    console.log(posts);
    var htmls = posts.map(function(post){ 
      return `
      <h2>ID: ${post.id}</h2>
      <p>Tên: ${post.name}</p>`;
  });
  var html = htmls.join('');
  document.getElementById('show').innerHTML = html;
});