


    
    class User{
        constructor(id, nome, email){
            this.id = id;
            this.nome = nome;
            this.email = email;
        }
    }

    class UsersList{
        constructor(){
            this.users = []
            this.currentId = 1
        }

        getAllUsers(){
            return this.users
        }

        getUserById(id){
            return this.users.find( (user) => user.id === id)
        }
        createUser(nome, email){
            const user = new User(this.currentId , nome , email)
            this.users.push(user)
            this.currentId++
            return user
        }
        updateUser(id, nome, email){
            const user = this.getUserById(id)
            if(user){
                user.nome = nome
                user.email = email
                return true
            }
            return false
        }

        deleteUser(id) {
            const index =  this.users.findIndex( (user) => user.id === id)
            if(index !== -1){
                this.users.splice(index, 1)
                return true
            }
            return false
        }

    }

const userList = new UsersList()
export default userList

