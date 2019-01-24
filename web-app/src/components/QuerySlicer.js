import React from 'react';

class QuerySlicer extends React.Component {

  state = {
    isSelectAll: false,
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const isChecked = target.checked;

    const newCheckBoxes = [...this.props.checkBoxes];
    const newCheckBox = newCheckBoxes.find(x => x.value === name);
    newCheckBox.isChecked = isChecked;

    this.props.onChange(this.props.filterId, newCheckBox);
  }

  toggleSelectAll = () => {
    const newIsSelectAll = !this.state.isSelectAll;
    const newCheckBoxes = [...this.props.checkBoxes];
    for (let i = 0; i < newCheckBoxes.length; i++) {
      newCheckBoxes[i].isChecked = newIsSelectAll;
    }
    this.props.onChange(this.props.filterId, newCheckBoxes);

    this.setState(prevState => ({
      isSelectAll: !prevState.isSelectAll
    }));
  }

  render() {

    const checkBoxes = this.props.checkBoxes.map((box, index) => 
      <div key={index}>
        <input 
          type="checkbox" 
          name={box.value} 
          value={box.value} 
          checked={box.isChecked} 
          onChange={this.handleChange}
          />
          {box.value}
        <br/>
      </div>
    );

    return (
      <div>
        <button onClick={this.toggleSelectAll}>Toggle Select All {this.state.isSelectAll}</button>
        <div>
          {checkBoxes}
        </div>
      </div>
    );
  }
}

export default QuerySlicer;
