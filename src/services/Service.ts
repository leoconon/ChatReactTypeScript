import Message from "../models/Message";
import User from "../models/User";

class Service {

    public getContacts(): User[] {
        return [{
            id: 1,
            name: 'Lorem Ipsum',
            avatar: 'dba6bae8c566f9d4041fb9cd9ada77'
        }, {
            id: 2,
            name: 'Dolor Sit Amet',
            avatar: 'dba6bae8c566f9d4041fb9cd9ada7742'
        }, {
            id: 3,
            name: 'Consectetur Adipiscing',
            avatar: 'dba6bae8c566f9d4041fb9cd9ada7741'
        }]
    }

    public getMessagesFromUser(): Message[] {
        return [{
            text: "Olá tudo bem?",
            received: true
        }, {
            text: "Tudo sim, e com vc?",
            received: false
        }, {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            received: true
        }, {
            text: "Ata",
            received: false
        }];
    }

}

export default Service