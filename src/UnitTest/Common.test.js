import {findIndex, sum} from './../CommonFunc/Common';
import {dataSource} from './data/DataSource';

describe('Common Function', () => {
    it('findIndex(dataSource, "0")=>-1', () => {
        expect(findIndex(dataSource, "0")).toBe(-1);
    });

    it('findIndex(dataSource, "1")=>0', () => {
        expect(findIndex(dataSource, "1")).toBe(0);
    });

    it('findIndex(dataSource, "2")=>1', () => {
        expect(findIndex(dataSource, "2")).toBe(1);
    });

    it('findIndex(dataSource, "3")=>2', () => {
        expect(findIndex(dataSource, "3")).toBe(2);
    });

    it('findIndex(dataSource, "7")=>-1', () => {
        expect(findIndex(dataSource, "7")).toBe(-1);
    });

    it('sum()', () => {
        expect(sum(1,2)).toBe(3);
    });

});