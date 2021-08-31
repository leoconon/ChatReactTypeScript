import { useState } from "react";
import User from "../models/User";
import Service from "../services/Service";
import ProfilePic from "./ProfilePic";

const service: Service = new Service();

function ContactList() {

    const [contacts, setContacts] = useState<User[]>(service.getContacts());

    return (
        <div className="contacts-list-container">
            { contacts.map(c => <ContactCard key={c.id} user={c} selected={c.id === 1}/>) }
        </div>
    )
}

function ContactCard(props: ContactCardProps) {
    return (
        <div className={`contact-card ${props.selected && 'selected'}`}>
            <ProfilePic imageId={props.user.avatar}/>
            <div>{props.user.name}</div>
        </div>
    )
}

type ContactCardProps = {
    user: User,
    selected: boolean
}

export default ContactList;