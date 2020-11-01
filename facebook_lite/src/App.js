import logo from './logo.svg';
import './App.css';

import React from 'react';
//import ReactDOM from 'react-dom';
//import Profils from './profils';
//import Profil from './profils';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {idPeople: 0};
    this.state = {
      people: [
          { peopleId: 0, nom: "RIRI", prenom: "Jeanne", dateNaissance:  "05 05 2000"},
          { peopleId: 1, nom: "FIFI", prenom: "Martine", dateNaissance:  "15 05 2002"},
          { peopleId: 2, nom: "LOULOU", prenom: "Claude", dateNaissance:  "25 07 2001"}
        ]
      };
  }

  //affiche = ({idPeople}) => {
  affiche(props){

    /*const listItems = this.state.people.map(e => (
            <Profil nom={e.nom} prenom={e.prenom} dateNaissance={e.dateNaissance}/>
          ));*/

    const zzz = props.idPeople

      if (zzz == 0){
      return  <div className="employee">
              <div>
                <b>Nom : RIRI</b>
              </div>
              <div>
                <b>Prenom: Jeanne</b>
              </div>
              <div>
                <b>Date de Naissance: 05 05 2000</b>
              </div>
            </div>;
      }
      if (zzz == 1){
      return <div className="employee">
              <div>
                <b>Nom : FIFI</b>
              </div>
              <div>
                <b>Prenom: Martine</b>
              </div>
              <div>
                <b>Date de Naissance: 15 05 2002</b>
              </div>
            </div>;
      }
      if (zzz == 2){
        return <div className="employee">
                <div>
                  <b>Nom : LOULOU</b>
                </div>
                <div>
                  <b>Prenom: Claude</b>
                </div>
                <div>
                  <b>Date de Naissance: 25 07 2001</b>
                </div>
              </div>;
      }
      return <h1> Clicker sur un bouton </h1>;

  }

  handleclickJ(){
    this.setState({idPeople: 0});
  }
  handleclickM(){
    this.setState({idPeople: 1});
  }
  handleclickC(){
    this.setState({idPeople: 2});
  }    

  render(){
    const idPeople = this.state.idPeople;

    return(
      <div className="App">
      <button class="favorite styled" onClick={() => this.handleclickJ()}
        type="button">
        Jeanne
      </button>
      <button class="favorite styled" onClick={() => this.handleclickM()}
        type="button">
        Martine
      </button>
      <button class="favorite styled" onClick={() => this.handleclickC()}
        type="button">
        Claude
      </button>
      <div className="Profils">
      <this.affiche idPeople={idPeople} />
      </div>
      </div>
    )
  }
}

export default App;


