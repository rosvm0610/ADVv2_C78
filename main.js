var imgs = ["https://sticker.nyc3.cdn.digitaloceanspaces.com/20220504_512/file_9109801_512x512.webp","https://i0.wp.com/imagenesparapeques.com/wp-content/uploads/2022/03/Flork-10.png?fit=1737%2C1754&ssl=1", "https://i0.wp.com/imagenesparapeques.com/wp-content/uploads/2022/03/Flork-1.png?fit=1548%2C1754&ssl=1" , "https://imagenesparapeques.com/wp-content/uploads/2022/03/Flork-33.png"];
var nombres = ["Mamá","Papá","Julieta","Daniel"];

var i = 0;
function update() {
    var cantidad = 3
    if(i > cantidad)
      {
          i = 0;
      }
    
    document.getElementById("album_familiar").src = imgs[i];
    document.getElementById("nombre_familiar").innerHTML = nombres[i];
    i++;
}
