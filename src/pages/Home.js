import React, { Component } from 'react';
import Header from '../components/Header';
import TheForm from '../components/TheForm';
import DefinitionList from '../components/DefinitionList';

 
class Home extends Component {
    const 
    render() { 
        return (
            <div>
                <Header></Header>
                <TheForm></TheForm>
                <DefinitionList></DefinitionList>
                
            </div>
        );
    }
}
 
export default Home;