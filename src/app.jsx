import './app.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  }

  handleIncreament = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  }

  handleDecreament = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  }

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  }

  handleReset = () => {
    const habits = this.state.habits.map(item => {
      if (item.count > 0) {
        return { ...item, count: 0 };
      }
      return item;
    })
    this.setState({ habits });
  }

  handleAddHabit = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  }

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncreament}
          onDecrement={this.handleDecreament}
          onDelete={this.handleDelete}
          onAdd={this.handleAddHabit}
          onReset={this.handleReset}
        />
      </>
    );
  }
}
export default App;