require(["esri/views/MapView", "esri/WebMap", "esri/widgets/Legend"], (MapView, WebMap, Legend) => {
  const webmap = new WebMap({
    portalItem: {
      id: "65518e782be04e7db31de65d53d591a9"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
  
  const legend = new Legend({ view });
  view.ui.add(legend, "bottom-left");
  legend.visible = false;
  
  const button = document.getElementById("legendButton");
    button.addEventListener("click", () => {
    legend.visible = !legend.visible;
    button.textContent = legend.visible ? "Hide legend" : "Show legened";
  });
});