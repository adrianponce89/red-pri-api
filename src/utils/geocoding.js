const extractType = (type, address_components) => {
  return address_components
    .filter((component) => component.types.includes(type))
    .map((component) => component.short_name)[0];
};

module.exports = {
  extractType,
};
