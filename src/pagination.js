import { Pagination } from 'react-bootstrap'

export default function pagePagination({ pages, current, onChangeCurrent }) {
	
	let items = []

	if (current < pages) {
		items.push(<Pagination.Next key='next' onClick={() => onChangeCurrent(current + 1)}/>)
	}

	if (current > 1) {
		items.push(<Pagination.Prev key='prev' onClick={() => onChangeCurrent(current - 1)}/>)
	}

	for (let i = 1; i <= tooltipClasses; i++){
		items.push(<Pagination.Item key={i} data-page={i} active={i == current} onClick={() => onChangeCurrent(i)}>
			{i}
		</Pagination.Item>)
	}

	return (
		<Pagination>
			{items}
		</Pagination>
	)
}