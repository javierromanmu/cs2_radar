/* overview files are made for 1024px radars, but newer maps ship 2048px ones.
   scale is world units per radar pixel, so use the real image width */
const DEFAULT_RADAR_SIZE = 1024;

export const getRadarPosition = (mapData, entityCoords, radarImage) => {
  if (typeof entityCoords?.x !== "number" || typeof entityCoords?.y !== "number") {
    return { x: 0, y: 0 };
  }

  if (typeof mapData?.x !== "number" || typeof mapData?.y !== "number") {
    return { x: 0, y: 0 };
  }

  const radarSize = radarImage?.naturalWidth || DEFAULT_RADAR_SIZE;

  const position = {
    x: (entityCoords.x - mapData.x) / mapData.scale / radarSize,
    y: (((entityCoords.y - mapData.y) / mapData.scale) * -1.0) / radarSize,
  };

  return position;
};

export const playerColors = [
  // blue
  "#84c8ed",

  // green
  "#009a7d",

  // yellow
  "#eadd40",

  // orange
  "#df7d29",

  // purple
  "#b72b92",

  // white
  "#ffffff",
];

export const teamEnum = {
  none: 0,
  spectator: 1,
  terrorist: 2,
  counterTerrorist: 3,
};
