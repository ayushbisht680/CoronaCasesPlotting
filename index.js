function updatemap(){

console.log("Updating map ")

fetch("/data.json")// returns a promise
.then(response =>response.json())
.then(arr=>{
    //console.log(arr.data);
    arr.data.forEach(element => {
         longitude=element.longitude
         latitude=element.latitude
         cases=element.infected

         if(cases > 255){
             color="red";
         }
         else{
             color=`rgb(${cases},0,0)`
         }

         // including the map in js
       new mapboxgl.Marker({
            draggable: false,
            color:color
            })
            .setLngLat([longitude,latitude])
            .addTo(map);
        
    });
})
}
setInterval(updatemap,4000);

