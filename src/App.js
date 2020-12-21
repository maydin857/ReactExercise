import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
    state = {
        counters: [
          { id: 1, value: 4 },
          { id: 2, value: 0 },
          { id: 3, value: 2 },
          { id: 4, value: 0 },
        ],
      };
    
      badgeIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        //counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters });
      };
    
      badgeDelete = (counterId) => {
        const filteredCounters = this.state.counters.filter(
          (c) => c.id !== counterId
        );
        this.setState({ counters: filteredCounters });
      };
    
      badgeReset = () => {
        const resetCounter = this.state.counters.map((c) => {
          c.value = 0;
          return c;
        });
        this.setState({ counters: resetCounter });
      };
    render() { 
        return ( 
        <React.Fragment>
            <Navbar totalCounters={this.state.counters.filter(c => c.value>0).length}/>
            <main className="container">
                <Counters counters={this.state.counters} onReset={this.badgeReset} onDelete={this.badgeDelete} onIncrement={this.badgeIncrement}/>
            </main>
        </React.Fragment> );
    }
}
 
export default App;
