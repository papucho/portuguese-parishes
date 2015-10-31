// import parishesLoader from './lib/parishes-loader';
import PARISHES from './lib/parishes'

function all() {
    return PARISHES;
}

function getZone({property, fn = 'find'}) {
    return (value) => PARISHES[fn]((zone) => zone[property] === value);
}

export default {
    all,
    getById: getZone({property: 'id'}),
    getByName: getZone({property: 'name', fn: 'filter'}),
    getByCountyName: getZone({property: 'county', fn: 'filter'}),
    getByDistrictName: getZone({property: 'district', fn: 'filter'})
}
