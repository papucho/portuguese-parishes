import ZONES from './lib/zones';

function all() {
    return ZONES;
}

function getZone(property, fn) {
    return (value) => ZONES[fn]((zone) => zone[property] === value);
}

export default {
    getById: getZone('id', 'find'),
    getByArea: getZone('area', 'filter'),
    getByName: getZone('name', 'filter'),
    all
}
