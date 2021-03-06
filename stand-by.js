import React from 'react';
class Stand extends React.Component{
    constructor(props){
        super(props);
        this.state={Open:false}
    };
    changeOpen(){
        this.setState({Open:true});
    }
    let text;
    if(Open){
        text=();
    }
    render(){
        
        return(
        <div>
            <button onClick={() => {this.changeOpen()}}>
                ヘルエスタート
            </button>
            <h1>havsvsf</h1>
        </div>
        );
    }
}
const domContainer = document.querySelector('#root');
ReactDOM.render(e(Stand, domContainer);
