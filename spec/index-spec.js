import {expect} from 'chai';
import ZONES from '../lib/zones';
import victim from '../index';

describe('Zone', () => {
    it('should be able to retreive all the zones', () => {
        expect(victim.all()).to.equal(ZONES);
    });

    it('should get zones by id', () => {
        let expectedResult = { id: 895, name: 'Belinho e Mar', area: 'Esposende' };
        let response = victim.getById(895);

        expect(response).to.deep.equal(expectedResult);
    });

    it('should get zones by name', () => {
        let expectedResult = [{ id: 895, name: 'Belinho e Mar', area: 'Esposende' }];
        let response = victim.getByName('Belinho e Mar');

        expect(response).to.deep.equal(expectedResult);
    });

    it('should get zones by area name', () => {
        let response = victim.getByArea('Esposende');
        let expectedResult = [
            { id: 893, name: 'Antas', area: 'Esposende' },
            { id: 894, name: 'Apúlia e Fão', area: 'Esposende' },
            { id: 895, name: 'Belinho e Mar', area: 'Esposende' },
            { id: 896, name: 'Esposende, Marinhas e Gandra', area: 'Esposende' },
            { id: 897, name: 'Fonte Boa e Rio Tinto', area: 'Esposende' },
            { id: 898, name: 'Forjães', area: 'Esposende' },
            { id: 899, name: 'Gemeses', area: 'Esposende' },
            { id: 900, name: 'Palmeira de Faro e Curvos', area: 'Esposende' },
            { id: 901, name: 'Vila Chã', area: 'Esposende' }
        ];

        expect(response).to.deep.equal(expectedResult);
    });
});
