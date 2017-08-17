import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { Proposition } from './Proposition';

class ListOfPropositions extends Component {
componentWillMount() {
  this.props.placesFetch();
  this.createDataSource(this.props);
}

componentWillReceiveProps(nextprops) {
  this.createDataSource(nextProps);
}

createDataSource({ places }) {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
}

renderRow(place) {
  return <Proposition place={place} />;
}

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
