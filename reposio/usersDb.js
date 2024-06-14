let users = [
    {id: 1, name: 'Artyom', email: 'SemperIdem1989@gmail.com', age: 34,},
    {id: 2, name: 'Tom', email: 'TomHardy@gmail.com', age: 46,},
]

//CRUD
class UserDb {
    constructor(users) {
        this.users = users;
    }

    // Create
    createUser(newUser) {
        this.users.push(newUser);
    }

    // Read
    getUsers() {
        return this.users;
    }

    getUserById(userId) {
        return users.find(user => user.id === parseInt(req.params.id));
    }

    //Update
    updateUser(id, updatedUserInfo) {
    this.users = users.map(user => {
        if (user.id === id) {
            return { ...user, ...updatedUserInfo };
        }
        return user;
    });
    return this.users;
}
    // Delete
    deleteUser(userId) {
        this.users.filter(user => user.id !== parseInt(userId));
        return this.users;
    }
}

const userDb = UserDb(users);

export default userDb;