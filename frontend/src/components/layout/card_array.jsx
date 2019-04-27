import React, {Component} from 'react';
import TarotCard from './TarotCard';
// import TarotChange from './TarotChange';
import Card_1 from '../images/1_Magician.jpg';
import Card_2 from '../images/2_Priestess.jpg';
import Card_3 from '../images/3_Empress.jpg';
import Card_4 from '../images/4_Emperor.jpg';
import Card_5 from '../images/5_Hierophant.jpg';
import Card_6 from '../images/6_Lovers.jpg';
import Card_7 from '../images/7_Chariot.jpg';
import Card_8 from '../images/8_Adjustment.jpg';
import Card_9 from '../images/9_Hermit.jpg';
import Card_10 from '../images/10_Fortune.jpg';
import Card_11 from '../images/11_Lust.jpg';
import Card_12 from '../images/12_HangedMan.jpg';
import Card_13 from '../images/13_Death.jpg';
import Card_14 from '../images/14_Art.jpg';
import Card_15 from '../images/15_Devil.jpg';
import Card_16 from '../images/16_Tower.jpg';
import Card_17 from '../images/17_Star.jpg';
import Card_18 from '../images/18_Moon.jpg';
import Card_19 from '../images/19_Sun.jpg';
import Card_20 from '../images/20_Aeon.jpg';
import Card_21 from '../images/21_Universe.jpg';



const allCards = [
    {
        number: 1,
        id: 'The Magician', 
        src: Card_1
    }, {
        number: 2,
        id: 'The Priestess', 
        src: Card_2
     }, {
        number: 3,
        id: 'The Empress', 
        src: Card_3
     }, {
        number: 4,
        id: 'The Emperor', 
        src: Card_4
     }, {
        number: 5,
        id: 'The Hierophant', 
        src: Card_5
     }, {
        number: 6,
        id: 'The Lovers', 
        src: Card_6
     }, {
        number: 7,
        id: 'The Chariot', 
        src: Card_7
     }, {
        number: 8,
        id: 'Adjustmen', 
        src: Card_8
     }, {
        number: 9,
        id: 'The Hermit', 
        src: Card_9
     }, {
        number: 10,
        id: 'Fortune', 
        src: Card_10
     }, {
        number: 11,
        id: 'Lust', 
        src: Card_11
     }, {
        number: 12,
        id: 'The Hanged Man', 
        src: Card_12
     }, {
        number: 13,
        id: 'Death', 
        src: Card_13
     }, {
        number: 14,
        id: 'Art', 
        src: Card_14
     }, {
        number: 15,
        id: 'The Devil', 
        src: Card_15
     }, {
        number: 16,
        id: 'The Tower', 
        src: Card_16
     }, {
        number: 17,
        id: 'The Star', 
        src: Card_17
     }, {
        number: 18,
        id: 'The Moon', 
        src: Card_18
     }, {
        number: 19,
        id: 'The Sun', 
        src: Card_19
     }, {
        number: 20,
        id: 'The Aeon', 
        src: Card_20
     }, {
        number: 21,
        id: 'The Universe', 
        src: Card_21
     }, 
]

class tarotArray extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card_1: {
                number: null,
                id: '', 
                src: ''
            },
            card_2: {
                number: null,
                id: '', 
                src: ''
            },
            card_3: {
                number: null,
                id: '', 
                src: ''
            },
            card_4: {
                number: null,
                id: '', 
                src: ''
            },
            card_5: {
                number: null,
                id: '', 
                src: ''
            },
            card_6: {
                number: null,
                id: '', 
                src: ''
            },
            card_7: {
                number: null,
                id: '', 
                src: ''
            },
            card_8: {
                number: null,
                id: '', 
                src: ''
            },
            card_9: {
                number: null,
                id: '', 
                src: ''
            },
            card_10: {
                number: null,
                id: '', 
                src: ''
            }
        }
    }
    
    createArrayHandler = () => {
        let arr = allCards
        let m = arr.length, t, i;
        
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = arr[m];
            arr[m] = arr[i];
            arr[i] = t
        }   

        let newArr = arr.slice(0, 10)

        this.setState ({
            card_1: newArr[0], 
            card_2: newArr[1], 
            card_3: newArr[2], 
            card_4: newArr[3],
            card_5: newArr[4],
            card_6: newArr[5],
            card_7: newArr[6],
            card_8: newArr[7],
            card_9: newArr[8],
            card_10: newArr[9]
        });
    }
    
    render() {
        return (
            <div>
            <div className={classes.tarotArea}>        
                <div className={classes.container}>
                    <div className={classes.column1}>
                        <div className={classes.card4}>
                            <TarotCard 
                                number={this.state.card_4.number}
                                id={this.state.card_4.id}
                                src={this.state.card_4.src}/>
                        </div>
                    </div>
                    <div className={classes.column2}>
                        <div className={classes.innerColumn}>
                            <div className={classes.card5}>
                                <TarotCard 
                                    number={this.state.card_5.number}
                                    id={this.state.card_5.id}
                                    src={this.state.card_5.src}/>
                            </div>    
                            <div className={classes.card1}>
                                <TarotCard 
                                    number={this.state.card_1.number}
                                    id={this.state.card_1.id}
                                    src={this.state.card_1.src}/>
                            </div>
                            <div className={classes.card3}>
                                <TarotCard 
                                    number={this.state.card_3.number}
                                    id={this.state.card_3.id}
                                    src={this.state.card_3.src}/>
                            </div>
                        </div>
                        <div className={classes.sideways}>
                            <div className={classes.card2}>
                                    <TarotCard 
                                        number={this.state.card_2.number}
                                        id={this.state.card_2.id}
                                        src={this.state.card_2.src}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.column3}>
                        <div className={classes.card6}>
                            <TarotCard 
                                number={this.state.card_6.number}
                                id={this.state.card_6.id}
                                src={this.state.card_6.src}/>
                        </div>
                    </div>
                    <div className={classes.column4}>
                        <div className={classes.card7}>
                            <TarotCard 
                                number={this.state.card_7.number}
                                id={this.state.card_7.id}
                                src={this.state.card_7.src}/>
                        </div>
                        <div className={classes.card8}>
                            <TarotCard 
                                number={this.state.card_8.number}
                                id={this.state.card_8.id}
                                src={this.state.card_8.src}/>
                        </div>
                        <div className={classes.card9}>
                            <TarotCard 
                                number={this.state.card_9.number}
                                id={this.state.card_9.id}
                                src={this.state.card_9.src}/>
                        </div>
                        <div className={classes.card10}>
                            <TarotCard 
                                number={this.state.card_10.number}
                                id={this.state.card_10.id}
                                src={this.state.card_10.src}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <TarotChange change={this.createArrayHandler.bind(this)}/> */}
            </div>
        )
    }
}

export default tarotArray;