const keyMap = {
  ['texto']: 'text',
  ['profesion']: 'title',
  ['especialidades']: 'specialities',
  ['temas']: 'themes',
  ['atencion']: 'atentionType',
  ['obrasocial']: 'welfare',
  ['provincia']: 'addressList.province',
  ['localidad']: 'addressList.locality',
  ['orden']: 'sort',
  ['coordenadas']: 'location',
};

const nameMap = {
  ['text']: 'texto',
  ['title']: 'profesion',
  ['specialities']: 'especialidades',
  ['themes']: 'temas',
  ['atentionType']: 'atencion',
  ['welfare']: 'obrasocial',
  ['addressList.province']: 'provincia',
  ['addressList.locality']: 'localidad',
  ['sort']: 'orden',
  ['location']: 'coordenadas',
};

const hyphenToSpace = (str) => {
  return str.replace(/-/g, ' ');
};

const getKeysFromSlugParams = (params) => {
  const obj = {};
  params.forEach((str) => {
    const separatorIndex = str.indexOf('-');
    const rawKey = str.slice(0, separatorIndex);
    const key = keyMap[rawKey.toLowerCase()];
    if (!!key) {
      const value = str.slice(separatorIndex + 1);
      obj[key] = hyphenToSpace(value);
    }
  });
  return obj;
};

const getAvailableFilters = (users) => {
  const title = {};
  const specialities = {};
  const themes = {};
  const atentionType = {};
  const welfare = {};
  const province = {};
  const locality = {};
  const sort = {};

  const filters = [];

  const countItem = (obj, key) => {
    obj[key] = (obj[key] || 0) + 1;
  };

  users.forEach((user) => {
    countItem(title, user.title);
    user.specialities.forEach((val) => {
      countItem(specialities, val);
    });
    user.themes.forEach((val) => {
      countItem(themes, val);
    });
    user.atentionType.forEach((val) => {
      countItem(atentionType, val);
    });
    user.welfare.forEach((val) => {
      countItem(welfare, val);
    });
    user.addressList.forEach((address) => {
      countItem(province, address.province);
      countItem(locality, address.locality);
    });
  });

  const addFilterFor = (obj, _id, name) => {
    if (Object.keys(obj).length > 0) {
      const values = Object.keys(obj).map((key, i) => ({
        _id: i,
        name: key,
        results: obj[key],
      }));
      filters.push({
        _id,
        name,
        values,
      });
    }
  };

  addFilterFor(title, 'profesion', 'Profesión');
  addFilterFor(specialities, 'especialidades', 'Especialidades');
  addFilterFor(themes, 'temas', 'Temas');
  addFilterFor(atentionType, 'atencion', 'Tipo de Atención');
  addFilterFor(welfare, 'obrasocial', 'Obra social');
  addFilterFor(province, 'provincia', 'Provincia');
  addFilterFor(locality, 'localidad', 'Localidad');

  return filters;
};

const getFilters = (query) => {
  const filters = [];
  Object.keys(query).forEach((key, i) => {
    filters.push({
      _id: nameMap[key],
      name: nameMap[key],
      values: [{ _id: i, name: query[key] }],
    });
  });
  return filters;
};

const timeSince = (date) => {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + ' años';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' meses';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' días';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' horas';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutos';
  }
  return Math.floor(seconds) + ' segundos';
};

const dateFormatted = (date) => {
  return new Date(date)
    .toISOString()
    .slice(0, 10)
    .split('-')
    .reverse()
    .join('/');
};

const isImage = (file) => {
  const { mimetype } = file;
  const imagesTypes = [
    'image/bmp',
    'image/x-bmp',
    'image/gif',
    'image/jpeg',
    'image/png',
    'image/tiff',
  ];
  return imagesTypes.includes(mimetype);
};

const isImageURL = (fileURL) => {
  const match = fileURL.match(/(\.\w+$)/);
  if (!match) return false;

  const extension = match[0];
  const imagesExt = [
    '.bmp',
    '.x-bmp',
    '.gif',
    '.jpeg',
    '.jpg',
    '.png',
    '.tiff',
  ];
  return imagesExt.includes(extension);
};

const getLatLng = (location) => {
  const [lat, lng] = location
    .slice(1)
    .replace(/ /g, '-')
    .split(',')
    .map((text) => parseFloat(text));
  return { lat, lng };
};

module.exports = {
  hyphenToSpace,
  getKeysFromSlugParams,
  getAvailableFilters,
  getFilters,
  timeSince,
  dateFormatted,
  isImageURL,
  isImage,
  getLatLng,
};
