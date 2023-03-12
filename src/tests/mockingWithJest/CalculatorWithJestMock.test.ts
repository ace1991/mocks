import * as arithmetic from "../../core/mockingWithJest/Arithmetic";
import * as calculator from "../../core/mockingWithJest/Calculator";

/*
Jest.mock básicamente lo que hace es crear un espía de todas y cada una de las funciones que se exponen en un módulo.
 */
jest.mock("../../src/core/arithmetic");

describe('The calculator', () => {
    it("calls arithmetic.add", () => {
        calculator.doAdd(1, 2);
        expect(arithmetic.add).toHaveBeenCalledWith(1, 2);
    });

    it("calls arithmetic.subtract", () => {
        calculator.doSubtract(1, 2);
        expect(arithmetic.subtract).toHaveBeenCalledWith(1, 2);
    });
});