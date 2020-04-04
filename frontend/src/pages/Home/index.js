import React from 'react';
import {Form, Container, Table} from 'react-bootstrap';
import Header from '../Header';

import userImg from '../../assets/users.svg'
import icoImg from '../../assets/icoImg.svg'
import calendar from '../../assets/calendar.svg'

export default function Home(){
    
    return (
        <Container>
            <Header />
            <Form>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table>
                </Form>
        </Container>
    )
}