let marker, map;

function initMap() {
  //console.log("iniciando mapa");
  const posicionParis = {
    lat: 48.857615264022805,
    lng: 2.3440947625217703,
  };

  const posicionRoma = {
    lat: 41.90334266483427,
    lng: 12.489299103968674,
  };
  const posicionAltaCordoba = {
    lat: -31.390074047011467,
    lng: -64.18578792609756,
  };

  const centro = {
    lat: 5.408258846012726,
    lng: -22.82428647995677,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: centro,
  });

  markerParis = new google.maps.Marker({
    position: posicionParis,
    map,
    title: "Posición París",
  });

  markerRoma = new google.maps.Marker({
    position: posicionRoma,
    map,
    title: "Posición Roma",
  });

  markerAltaCordoba = new google.maps.Marker({
    position: posicionAltaCordoba,
    map,
    title: "Posición Alta Córdoba",
  });
}
