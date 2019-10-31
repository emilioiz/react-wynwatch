import React from "react";
import { ButtonGroup, DropdownButton, DropdownItem } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class MovieFilters extends React.Component {
  navigateTo = id => {
    this.props.history.push(`/Browse/${id}`);
  };

  render() {
    return (
      <div className="home-moviefilters">
        <ButtonGroup className="filter-btn1" vertical>
          <DropdownButton
            className="filter-btn1"
            as={ButtonGroup}
            title="Browse"
            id="bg-vertical-dropdown-1"
          >
            {this.props.genreList.map(filterableGenres => (
              <DropdownItem
                key={filterableGenres.id}
                onClick={() => this.navigateTo(filterableGenres.id)}
              >
                {filterableGenres.name}
              </DropdownItem>
            ))}
          </DropdownButton>
        </ButtonGroup>
      </div>
    );
  }
}

export default withRouter(MovieFilters);
