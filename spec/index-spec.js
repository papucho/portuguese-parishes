import {expect} from 'chai';
import PARISHES from '../lib/parishes';
import victim from '../index';

describe('Index', () => {
    it('should be able to retreive all the parishes', () => {
        expect(victim.all()).to.equal(PARISHES);
    });

    it('should get a parish by it\'s id', () => {
        let expectedResult = { id: 895, name: 'Belinho e Mar', county: 'Esposende' };
        let response = victim.getById(895);

        expect(response).to.deep.equal(expectedResult);
    });

    it('should get all the parishes by a given name', () => {
        let expectedResult = [{ id: 895, name: 'Belinho e Mar', county: 'Esposende' }];
        let response = victim.getByName('Belinho e Mar');

        expect(response).to.deep.equal(expectedResult);
    });

    it('should get all the parishes by the county name', () => {
        let response = victim.getByCountyName('Esposende');
        let expectedResult = [
            { id: 893, name: 'Antas', county: 'Esposende' },
            { id: 894, name: 'Apúlia e Fão', county: 'Esposende' },
            { id: 895, name: 'Belinho e Mar', county: 'Esposende' },
            { id: 896, name: 'Esposende, Marinhas e Gandra', county: 'Esposende' },
            { id: 897, name: 'Fonte Boa e Rio Tinto', county: 'Esposende' },
            { id: 898, name: 'Forjães', county: 'Esposende' },
            { id: 899, name: 'Gemeses', county: 'Esposende' },
            { id: 900, name: 'Palmeira de Faro e Curvos', county: 'Esposende' },
            { id: 901, name: 'Vila Chã', county: 'Esposende' }
        ];

        expect(response).to.deep.equal(expectedResult);
    });
});
