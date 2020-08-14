const keyMap = {
  ['texto']: 'text',
  ['titulo']: 'title',
  ['especialidades']: 'specialities',
  ['temas']: 'themes',
  ['atencion']: 'atentionType',
  ['obrasocial']: 'welfare',
  ['provincia']: 'addressList.province',
  ['localidad']: 'addressList.locality',
  ['orden']: 'sort',
};

const nameMap = {
  ['text']: 'texto',
  ['title']: 'titulo',
  ['specialities']: 'especialidades',
  ['themes']: 'temas',
  ['atentionType']: 'atencion',
  ['welfare']: 'obrasocial',
  ['addressList.province']: 'provincia',
  ['addressList.locality']: 'localidad',
  ['sort']: 'orden',
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

  addFilterFor(title, 'titulo', 'Titulo');
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

const mimeToExt = {
  'audio/3gpp': '.3gp',
  'audio/amr': '.amr',
  'audio/amr-wb': '.awb',
  'audio/midi': '.midi',
  'audio/mpeg': '.mp3',
  'audio/mp4': '.mp4',
  'audio/wav': '.wav',
  'audio/x-wav': '.wav',
  'text/html': '.html',
  'image/bmp': '.bmp',
  'image/x-bmp': '.bmp',
  'image/gif': '.gif',
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/tiff': '.tiff',
  'image/vnd.wap.wbmp': '.wbmp',
  'application/java': '.jar',
  'application/java-archive': '.jar',
  'application/x-java-archive': '.jar',
  'text/vnd.sun.j2me.app-descriptor': '.jad',
  'text/plain': '.txt',
  'application/vnd.symbian.install': '.sis',
  'video/3gpp': '.3gp',
  'video/mp4': '.mp4',
  'application/vnd.wap.wmlc': '.wmlc',
  'text/vnd.wap.wml': '.wml',
  'application/vnd.wap.wmlscriptc': '.wmlsc',
  'text/vnd.wap.wmlscript': '.wmls',
  'application/vnd.wap.xhtml+xml': '.xhtml',
  'application/xhtml+xml': '.xhtml',
  'text/html': '.html',
};

const getFileExtension = (file) => {
  const { mimetype } = file;
  return mimeToExt[mimetype];
};

module.exports = {
  hyphenToSpace,
  getKeysFromSlugParams,
  getAvailableFilters,
  getFilters,
  timeSince,
  isImage,
  getFileExtension,
};
