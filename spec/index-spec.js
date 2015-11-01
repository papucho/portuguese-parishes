import { expect } from 'chai';
import proxyquire from 'proxyquire';
import PARISHES_MOCK from './mocks/parishes-mock';

let victim = proxyquire.noCallThru().load('../source/index', {
    '../lib/parishes': PARISHES_MOCK
});

describe('Index', () => {
    describe('.all()', () => {
        it('should be able to retreive all the parishes', () => {
            expect(victim.all()).to.equal(PARISHES_MOCK);
        });
    });

    describe('.getById()', () => {
        it('should get a parish by it\'s id', () => {
            let expectedResult = { id: 1, district: "District 1", county: "County 1", name: "Parish 1" };
            let response = victim.getById(1);

            expect(response).to.deep.equal(expectedResult);
        });
    });

    describe('.getByName()', () => {
        it('should get all the parishes by a given name', () => {
            let expectedResult = [{ id: 1, district: "District 1", county: "County 1", name: "Parish 1" }];
            let response = victim.getByName('Parish 1');

            expect(response).to.deep.equal(expectedResult);
        });
    });

    describe('.getByCountyName()', () => {
        it('should get all the parishes by the county name', () => {
            let response = victim.getByCountyName('County 1');
            let expectedResult = [
                { id: 1, district: "District 1", county: "County 1", name: "Parish 1" },
                { id: 2, district: "District 1", county: "County 1", name: "Parish 2" }
            ];

            expect(response).to.deep.equal(expectedResult);
        });
    });

    describe('.getByDistrictName()', () => {
        it('should get all the parishes by the district name', () => {
            let response = victim.getByDistrictName('District 1');
            let expectedResult = [
                { id: 1, district: "District 1", county: "County 1", name: "Parish 1" },
                { id: 2, district: "District 1", county: "County 1", name: "Parish 2" },
                { id: 3, district: "District 1", county: "County 2", name: "Parish 3" }
            ];

            expect(response).to.deep.equal(expectedResult);
        });
    });

    describe('.getDistrics()', () => {
        it('should get all the available districts', () => {
            let response = victim.getDistricts();
            let expectedResult = ['District 1', 'District 2'];

            expect(response).to.deep.equal(expectedResult);
        })
    });
});
