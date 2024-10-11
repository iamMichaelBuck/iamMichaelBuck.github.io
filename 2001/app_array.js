

let svgContainer = document.getElementById('planetContainer');
let planetWrong = bodymovin.loadAnimation({
    wrapper: planetContainer,
    animType: 'svg',
    loop: true,
    path: 'planet_transparent.json'
});
