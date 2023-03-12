/*
 Un ejemplo típico de fake object, podría ser una base de datos o un repositorio en memoria,
 un servidor SMTP que no envía emails de verdad, un servidor web ligero para APIs REST sin lógica real detrás
 */

import {User, UserRepository, UserService} from "../../core/fakeObjects/UserService";

class InMemoryRepository implements UserRepository {
    private users: User[] = [];

    findUsersBy(name: string): User[] {
        return this.users.filter((u: User) => u.hasTheSameName(name));
    }

    add(user: User): void {
        this.users.push(user);
    }

    update(user: User) {
        const userFiltered = this.userFiltered(user);
        userFiltered[0] = user;
    }

    delete(user: User) {
        this.users = this.userFiltered(user);
    }

    private userFiltered(user: User) {
        return this.users.filter((u: User) => u.isEquals(user));
    }
}


describe('The User Service', () => {
    it('saves user throughout the repository', () => {
        const repository = new InMemoryRepository();
        const service = new UserService(repository);
        const user = new User('irrelevant-username', 'irrelevant-name');
        repository.add(user);

        service.updateName(user, 'updated-name');

        expect(repository.findUsersBy('updated-name').length).toBe(1);
    });
});