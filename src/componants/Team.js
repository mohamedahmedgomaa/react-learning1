import React, {Component} from "react";
import TeamMember from "./TeamMember";

class Team extends Component {
    constructor() {
        super();
        this.state = {
            memberInfo : [
                {
                    id: 1,
                    name: 'Ahmed',
                    image: 'https://picsum.photos/452',
                    position: 'Front-end',
                    email: 'Front-end@email.com',
                    phone: '594485555',
                    website: 'Front-end.com',
                },
                {
                    id: 2,
                    name: 'Mohamed',
                    image: 'https://picsum.photos/451',
                    position: 'Back-end',
                    email: 'Back-end@email.com',
                    phone: '594485555',
                    website: 'Back-end.com',
                },
                {
                    id: 3,
                    name: 'Gomaa',
                    image: 'https://picsum.photos/450',
                    position: 'Design',
                    email: 'Design@email.com',
                    phone: '594485555',
                },
                {
                    id: 4,
                    name: 'Negm',
                    image: 'https://picsum.photos/459',
                    position: 'Negm',
                    email: 'Negm@email.com',
                    phone: '594485555',
                },
                {
                    id: 5,
                    name: 'Amr',
                    image: 'https://picsum.photos/458',
                    position: 'Amr',
                    email: 'Amr@email.com',
                    phone: '594485555',
                    website: 'Amr.com',
                },
                {
                    id: 6,
                    name: 'Abdallah',
                    image: 'https://picsum.photos/456',
                    position: 'Abdallah',
                    email: 'Abdallah@email.com',
                    phone: '594485555',
                    website: 'Abdallah.com',
                }
            ]
        }
    }


    clickEvent(){
        console.log(this.state.memberInfo[1])
    }

    mapping(x){
        return x.map(member =>
            <TeamMember
                key={member.id}
                img={member.img}
                name={member.name}
                position={member.position}
                phone={member.phone}
                email={member.email}
                website={member.website}
            />)
    }

    render() {
        return (
            <div className="row">
                <button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}>click me!</button>
                {this.mapping(this.state.memberInfo)}
            </div>
        )
    }
}

export default Team;