export default class WordCard extends Component {

activationHandler = c => { console.log(`${c} has been activated.`) }   
<CharacterCard value={c} key={i} attempt={this.state.attempt}
activationHandler={this.activationHandler}/>
    
render() {
 return (
 <div>
{ Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i}/>) }
 </div>
 );
 }
}
