import { expect } from 'chai';
import PARISHES   from '../../lib/parishes';
import victim     from '../../lib/parishes-loader';

describe('Parishes Loader', () => {
    it('should load the file content', () => {
        let result = victim.load();

        expect(result).to.deep.equal(PARISHES);
    });
})
