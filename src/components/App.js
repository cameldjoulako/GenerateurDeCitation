import React from 'react';
import Citation from './Citation';
import citations from '../citations';


class App extends React.Component{

	state = {
		citation : 'Ce n\'est qu\'en réalisant des projets concret lors de notre formation qu\'on deviendra un de ces jour un professionel du domaine.',
		auteur: 'Camel Djoulako'
	};
	 ComponentWillMount(){
	 	this.genererCitation();
	 }

	/*fonction qui va generer une citation de maniere aléatoire: arrow funtion*/
	
	genererCitation = event => {
		/*convertion des citations en tableau*/
		const cleTableau = Object.keys(citations);

		//generation d'une citation au hasard
		const numero = Math.floor(Math.random()*25)
		const cle = cleTableau[numero];
		const cleAleatoire  = cle

		if(this.state.citation === citations[cleAleatoire].citation){
			this.genererCitation();
			return;
		}

		this.setState(citations[cleAleatoire]);
	};	

	render(){    	
		return (
			<div>
				<Citation details={this.state} />
				<button onClick={e => this.genererCitation(e)}>Citation Suivante ⏭</button>
				<button onClick={e => this.twitter(e)}>Twitter 💝</button>
				<button onClick={e => this.partagerSurFacebook(e)}>Like 💖</button>
			</div>
		)
	}
}

export default App;