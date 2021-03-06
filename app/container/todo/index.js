import React, { Component } from 'react';
import Form from '../../components/form/index.js';
import List from '../../components/list/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.delete = this.delete.bind(this);
    this.save = this.save.bind(this);
  }

  save(refs) {
    let todo = refs.value;
    if (todo) {
      let newItems = { todo: todo, key: Date.now() };
      this.setState((prevState) => {
        return { items: prevState.items.concat(newItems) };
      });
      refs.value = '';
    }
  }

  delete(key) {
    let filterItems = this.state.items.filter((item) => {
      return item.key !== key;
    });
    this.setState({ items: filterItems });
  }

  render() {
    return (
      <main>
        <div className="heading-wrapper">To Do List</div>
        <Form save={this.save} />
        <div className="todo-list">
          <List items={this.state.items} delete={this.delete} />
        </div>
      </main>
    );
  }
}

export default App;
