import { expect } from 'chai';
import sinon      from 'sinon';
import PARISHES   from '../lib/parishes';
import victim     from '../index';

describe('Index', () => {

    describe('.all()', () => {
        it('should be able to retreive all the parishes', () => {
            expect(victim.all()).to.equal(PARISHES);
        });
    });

    describe('.getById()', () => {
        it('should get a parish by it\'s id', () => {
            let expectedResult = { id: 789, district: "Braga", county: "Esposende", name: "Belinho e Mar" };
            let response = victim.getById(789);

            expect(response).to.deep.equal(expectedResult);
        });
    });

    describe('.getByName()', () => {
        it('should get all the parishes by a given name', () => {
            let expectedResult = [{ id: 789, district: "Braga", county: "Esposende", name: "Belinho e Mar" }];
            let response = victim.getByName('Belinho e Mar');

            expect(response).to.deep.equal(expectedResult);
        });
    });

    describe('.getByCountyName()', () => {
        it('should get all the parishes by the county name', () => {
            let response = victim.getByCountyName('Esposende');
            let expectedResult = [
                { id: 787, district: 'Braga', county: 'Esposende', name: 'Antas' },
                { id: 788, district: 'Braga', county: 'Esposende', name: 'Apúlia e Fão' },
                { id: 789, district: 'Braga', county: 'Esposende', name: 'Belinho e Mar' },
                { id: 790, district: 'Braga', county: 'Esposende', name: 'Esposende, Marinhas e Gandra' },
                { id: 791, district: 'Braga', county: 'Esposende', name: 'Fonte Boa e Rio Tinto' },
                { id: 792, district: 'Braga', county: 'Esposende', name: 'Forjães' },
                { id: 793, district: 'Braga', county: 'Esposende', name: 'Gemeses' },
                { id: 794, district: 'Braga', county: 'Esposende', name: 'Palmeira de Faro e Curvos' },
                { id: 795, district: 'Braga', county: 'Esposende', name: 'Vila Chã' }
            ];

            expect(response).to.deep.equal(expectedResult);
        });
    });

    describe('.getByDistrictName()', () => {
        it('should get all the parishes by the district name', () => {
            let response = victim.getByDistrictName('Ilha da Madeira');
            let expectedResult = [
                { id: 524, district: 'Ilha da Madeira', county: 'Calheta (R.A.M.)', name: 'Arco da Calheta' },
                { id: 525, district: 'Ilha da Madeira', county: 'Calheta (R.A.M.)', name: 'Calheta (R.A.Madeira)' },
                { id: 526, district: 'Ilha da Madeira', county: 'Calheta (R.A.M.)', name: 'Estreito da Calheta' },
                { id: 527, district: 'Ilha da Madeira', county: 'Calheta (R.A.M.)', name: 'Fajã da Ovelha' },
                { id: 528, district: 'Ilha da Madeira', county: 'Calheta (R.A.M.)', name: 'Jardim do Mar' },
                { id: 529, district: 'Ilha da Madeira', county: 'Calheta (R.A.M.)', name: 'Paul do Mar' },
                { id: 530, district: 'Ilha da Madeira', county: 'Calheta (R.A.M.)', name: 'Ponta do Pargo' },
                { id: 531, district: 'Ilha da Madeira', county: 'Calheta (R.A.M.)', name: 'Prazeres' },
                { id: 532, district: 'Ilha da Madeira', county: 'Câmara de Lobos', name: 'Câmara de Lobos' },
                { id: 533, district: 'Ilha da Madeira', county: 'Câmara de Lobos', name: 'Curral das Freiras' },
                { id: 534, district: 'Ilha da Madeira', county: 'Câmara de Lobos', name: 'Estreito de Câmara de Lobos' },
                { id: 535, district: 'Ilha da Madeira', county: 'Câmara de Lobos', name: 'Jardim da Serra' },
                { id: 536, district: 'Ilha da Madeira', county: 'Câmara de Lobos', name: 'Quinta Grande' },
                { id: 918, district: 'Ilha da Madeira', county: 'Funchal', name: 'Funchal (Santa Luzia)' },
                { id: 919, district: 'Ilha da Madeira', county: 'Funchal', name: 'Funchal (Santa Maria Maior)' },
                { id: 920, district: 'Ilha da Madeira', county: 'Funchal', name: 'Funchal (São Pedro)' },
                { id: 921, district: 'Ilha da Madeira', county: 'Funchal', name: 'Funchal (Sé)' },
                { id: 922, district: 'Ilha da Madeira', county: 'Funchal', name: 'Imaculado Coração de Maria' },
                { id: 923, district: 'Ilha da Madeira', county: 'Funchal', name: 'Monte' },
                { id: 924, district: 'Ilha da Madeira', county: 'Funchal', name: 'São Gonçalo' },
                { id: 1251, district: 'Ilha da Madeira', county: 'Machico', name: 'Água de Pena' },
                { id: 1252, district: 'Ilha da Madeira', county: 'Machico', name: 'Caniçal' },
                { id: 1253, district: 'Ilha da Madeira', county: 'Machico', name: 'Machico' },
                { id: 1254, district: 'Ilha da Madeira', county: 'Machico', name: 'Porto da Cruz' },
                { id: 1255, district: 'Ilha da Madeira', county: 'Machico', name: 'Santo António da Serra' },
                { id: 1829, district: 'Ilha da Madeira', county: 'Ponta do Sol', name: 'Canhas' },
                { id: 1830, district: 'Ilha da Madeira', county: 'Ponta do Sol', name: 'Madalena do Mar' },
                { id: 1831, district: 'Ilha da Madeira', county: 'Ponta do Sol', name: 'Ponta do Sol' },
                { id: 1917, district: 'Ilha da Madeira', county: 'Porto Moniz', name: 'Achadas da Cruz' },
                { id: 1918, district: 'Ilha da Madeira', county: 'Porto Moniz', name: 'Porto Moniz' },
                { id: 1919, district: 'Ilha da Madeira', county: 'Porto Moniz', name: 'Ribeira da Janela' },
                { id: 1920, district: 'Ilha da Madeira', county: 'Porto Moniz', name: 'Seixal' },
                { id: 1977, district: 'Ilha da Madeira', county: 'Ribeira Brava', name: 'Campanário' },
                { id: 1978, district: 'Ilha da Madeira', county: 'Ribeira Brava', name: 'Ribeira Brava' },
                { id: 1979, district: 'Ilha da Madeira', county: 'Ribeira Brava', name: 'Serra de Água' },
                { id: 2056, district: 'Ilha da Madeira', county: 'Santa Cruz', name: 'Camacha' },
                { id: 2057, district: 'Ilha da Madeira', county: 'Santa Cruz', name: 'Caniço' },
                { id: 2058, district: 'Ilha da Madeira', county: 'Santa Cruz', name: 'Gaula' },
                { id: 2072, district: 'Ilha da Madeira', county: 'Santana', name: 'Arco de São Jorge' },
                { id: 2073, district: 'Ilha da Madeira', county: 'Santana', name: 'Faial' },
                { id: 2074, district: 'Ilha da Madeira', county: 'Santana', name: 'Ilha' },
                { id: 2075, district: 'Ilha da Madeira', county: 'Santana', name: 'São Jorge' },
                { id: 2076, district: 'Ilha da Madeira', county: 'Santana', name: 'São Roque do Faial' },
                { id: 2141, district: 'Ilha da Madeira', county: 'São Vicente', name: 'Boa Ventura' },
                { id: 2142, district: 'Ilha da Madeira', county: 'São Vicente', name: 'Ponta Delgada' }
            ];

            expect(response).to.deep.equal(expectedResult);
        });
    });
});
