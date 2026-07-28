// network-config.js
window.NetworkConfig = {
  hub: "https://compressed.guide",
  spokeId: "legs",
  spokeName: "Legs.Guide",
  chatEndpoint: null, // or "/api/chat" if you have a Worker function
  advisorName: "James",
  advisorLocation: "Tenerife",
  networkNodes: [
    { id: "back", url: "https://back.guide", label: "back.guide" },
    { id: "flareup", url: "https://flareup.guide", label: "flareup.guide" },
    { id: "hub", url: "https://compressed.guide", label: "compressed.guide", isHub: true }
  ]
};
