import * as arithmetic from "../../core/mockingWithJest/Arithmetic";
import * as calculator from "../../core/mockingWithJest/Calculator";
import {User, UserRepository, UserService} from "../../core/fakeObjects/UserService";

/*
Stubs -> Son muy simples: no tienen memoria, sino que devuelven una respuesta concreta
Spies -> Los espías son objetos que tienen memoria para registrar las llamadas que se les hacen.Se usan, por tanto, para validar salidas indirectas.
 */

describe('The calculator', () => {
    // Al pasar la implementación estaríamos combinando un spy con un stub.
    (arithmetic as any).add = jest.fn(arithmetic.add);
    (arithmetic as any).subtract = jest.fn(arithmetic.subtract);

    it("calls arithmetic.add", () => {
        const result = calculator.doAdd(1, 2);

        expect(arithmetic.add).toHaveBeenCalled();
        expect(arithmetic.add).toHaveBeenCalledTimes(1);
        expect(arithmetic.add).toHaveBeenCalledWith(1, 2);
        expect(result).toBe(3);
    });

    it("calls arithmetic.subtract", () => {
        const result = calculator.doSubtract(1, 2);
        expect(arithmetic.subtract).toHaveBeenCalledWith(1, 2);
        expect(result).toBe(-1);
    });
});