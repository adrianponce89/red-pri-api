const { query } = require('express');

const keyMap = {
  ['titulo']: 'title',
  ['especialidad']: 'specialities',
  ['temas']: 'themes',
  ['atencion']: 'atentionType',
  ['obrasocial']: 'welfare',
  ['provincia']: 'addressList.province',
  ['localidad']: 'addressList.locality',
  ['orden']: 'sort',
};

const nameMap = {
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

  addFilterFor(title, 'title', 'Titulo');
  addFilterFor(specialities, 'specialities', 'Especialidades');
  addFilterFor(themes, 'themes', 'Temas');
  addFilterFor(atentionType, 'atentionType', 'Tipo de Atención');
  addFilterFor(welfare, 'welfare', 'Obra social');
  addFilterFor(province, 'province', 'Provincia');
  addFilterFor(locality, 'locality', 'Localidad');

  return filters;
};

const getFilters = (query) => {
  const filters = [];
  Object.keys(query).forEach((key, i) => {
    filters.push({
      _id: key,
      name: nameMap[key],
      values: [{ _id: i, name: query[key] }],
    });
  });
  return filters;
};

module.exports = {
  hyphenToSpace,
  getKeysFromSlugParams,
  getAvailableFilters,
  getFilters,
};
