import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  render() {
    return (
      <div>
        <HabitAddForm onAdd={this.props.onAdd}></HabitAddForm>
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habit-reset" onClick={this.props.onReset}>Reset All</button>
      </div>
    );
  }
}

export default Habits;