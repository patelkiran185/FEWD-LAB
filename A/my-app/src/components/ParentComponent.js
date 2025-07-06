import React from 'react';
import ChildComponent from './ChildComponent';
class ParentComponent extends React.Component {
  showMessage = () => {
    alert("Hello from Parent!");
  };

  render() {
    return (
      <div>
        <h2>Parent</h2>
        <ChildComponent onTrigger={this.showMessage} />
      </div>
    );
  }
}

export default ParentComponent;