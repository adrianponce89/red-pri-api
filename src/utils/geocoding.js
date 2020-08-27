const extractType = (type, address_components) => {
  return address_components
    .filter((component) => component.types.includes(type))
    .map((component) => component.short_name)[0];
};

const getLatLngBounds = (locations) => {
  if (!locations.length) {
    return [];
  }
  const sw = { lat: locations[0].lat, lng: locations[0].lng };
  const ne = { lat: locations[0].lat, lng: locations[0].lng };
  locations.forEach((location) => {
    sw.lat = Math.min(location.lat, sw.lat);
    sw.lng = Math.min(location.lng, sw.lng);
    ne.lat = Math.max(location.lat, ne.lat);
    ne.lng = Math.max(location.lng, ne.lng);
  });
  return [sw, ne];
};

const defaultCenter = {
  lat: -34.6157437,
  lng: -58.5733832,
};

const getCenterAndZoom = (bounds) => {
  if (!bounds.length) {
    return { center: defaultCenter, zoom: 11 };
  }
  const [sw, ne] = bounds;
  const lat = (ne.lat + sw.lat) / 2;
  const lng = (ne.lng + sw.lng) / 2;
  const zoom = Math.log2(
    200 / Math.max(ne.lat - sw.lat, ne.lng - sw.lng),
  );
  return { center: { lat, lng }, zoom };
};

module.exports = {
  extractType,
  getLatLngBounds,
  getCenterAndZoom,
};
