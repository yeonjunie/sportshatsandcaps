import React from 'react';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class Dropdowns extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let league = this.props.league;
    let style = this.props.style;
    let sort = this.props.sort;
    return (
        <ButtonGroup>
            <DropdownButton variant={'danger'} id="dropdown-item-button" title="League">
                <Dropdown.Item as="button" active={league === "All" ? true : false} onClick={() => this.props.handleFilterLeague("All")}>All</Dropdown.Item>
                <Dropdown.Item as="button" active={league === "NBA" ? true : false} onClick={() => this.props.handleFilterLeague("NBA")}>NBA</Dropdown.Item>
                <Dropdown.Item as="button" active={league === "MLB" ? true : false} onClick={() => this.props.handleFilterLeague("MLB")}>MLB</Dropdown.Item>
            </DropdownButton>
            <DropdownButton variant={'warning'} id="dropdown-item-button" title="Style">
                <Dropdown.Item as="button" active={style === "All" ? true : false} onClick={() => this.props.handleFilterStyle("All")}>All</Dropdown.Item>
                <Dropdown.Item as="button" active={style === "Snapback" ? true : false} onClick={() => this.props.handleFilterStyle("Snapback")}>Snapback</Dropdown.Item>
                <Dropdown.Item as="button" active={style === "Ball Cap" ? true : false} onClick={() => this.props.handleFilterStyle("Ball Cap")}>Ball Cap</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" title="Sort By">
                <Dropdown.Item as="button" active={sort === "None" ? true : false} onClick={() => this.props.handleSort("None")}>Featured</Dropdown.Item>
                <Dropdown.Item as="button" active={sort === "Low" ? true : false} onClick={() => this.props.handleSort("Low")}>Price Low to High</Dropdown.Item>
                <Dropdown.Item as="button" active={sort === "High" ? true : false} onClick={() => this.props.handleSort("High")}>Price High to Low</Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>
    );
  }
}

export default Dropdowns;