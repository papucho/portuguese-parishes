import PARISHES from './lib/parishes'

function all() {
    return PARISHES;
}

function getZone({property, fn = 'find'}) {
    return (value) => PARISHES[fn]((zone) => zone[property] === value);
}

function extractProperty(property) {
    return () => {
        return PARISHES.reduce((accumulator, parish) => {
            if (!accumulator.includes(parish[property])) {
                accumulator.push(parish[property]);
            }

            return accumulator;
        }, []);
    };
}

export default {
    all,
    getById: getZone({property: 'id'}),
    getByName: getZone({property: 'name', fn: 'filter'}),
    getByCountyName: getZone({property: 'county', fn: 'filter'}),
    getByDistrictName: getZone({property: 'district', fn: 'filter'}),
    getDistricts: extractProperty('district')
}
