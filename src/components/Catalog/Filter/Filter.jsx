import React from 'react';
import FilterItem from './FilterItem/FilterItem';
import style from './Filter.module.css';
import FilterState from './FilterState';

class Filter extends React.Component {
	constructor() {
		super()
		this.state = { filters: FilterState }
		this.checkClick = this.checkClick.bind(this)
	}
	checkClick(id) {
		this.setState(prevState => {
			return {
				...prevState,
				filters: prevState.filters.map(filter => {
					return filter.id === id ? { ...filter, check: !filter.check } : filter
				})
			}
		})
	}
	render() {
		let filterElements = this.state.filters.map(filter => <FilterItem key={filter.id} filter={filter} checkClick={this.checkClick}/>);
		return (
			<>
				<div className={style.filter_title}>
					<h4>Уход для лица</h4>
					<h4>Уход для тела</h4>
					<h4>Тип кожи</h4>
				</div>
				<div className={style.filter_wripper}>
					{filterElements}
					<div>
						<button>Применить</button>
						<button>Сбросить</button>
					</div>
				</div>
			</>
		);
	}
}

export default Filter;