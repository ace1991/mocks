import * as arithmetic from "../../core/mockingWithJest/Arithmetic";
import * as calculator from "../../core/mockingWithJest/Calculator";

/*
Jest.spyOn mantiene por defecto la implementación original, además de mantener el TypeChecking
 */


describe('The calculator', () => {
    it("calls arithmetic add", () => {
        const mockedAdd = jest.spyOn(arithmetic, 'add');
        //mockedAdd.mockImplementation(() => 10);
        expect(calculator.doAdd(1, 2)).toBe(3);
        expect(mockedAdd).toHaveBeenCalledWith(1, 2);
    });
    it("calls arithmetic subtract", () => {
        const mockedSubtract = jest.spyOn(arithmetic, 'subtract');
        expect(calculator.doSubtract(1, 2)).toBe(-1);
        expect(mockedSubtract).toHaveBeenCalledWith(1, 2);
    });
});