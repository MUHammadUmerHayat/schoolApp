import React from 'react';
import {Container,Content,H1} from "native-base";
import StudentProfile from "../student/studentProfile";
import TableView from "./table"
function Timetable(props) {
    return (
        <Container>
            <StudentProfile student={props.route.params}/>
            <Content>
            <TableView student={props.route.params}/>
            </Content>
            
        </Container>
    );
}

export default Timetable;