import { h, render, Fragment } from 'preact';

export const Table = ({columns = [], data = [], onRowClick}) => {
	const handleRowClick = row => {
		onRowClick && onRowClick(row);
	}
	return (
	<div className="assignCampaign__table">
		<div className="assignCampaign__table--header">
			{columns && columns.map(column => (
				<div>{column.title}</div>
			))}
		</div>
		<div className="assignCampaign__table--body">
			{data && data.map(row => (
				<div className="assignCampaign__table--item" data-id={row.id} onClick={() => handleRowClick(row)}>
					{columns && columns.map(column => (
						column.render ? column.render(row) : (
							<div>
								{row[column.dataIndex]}
							</div>
						)
					))}
				</div>
			))}
		</div>	
	</div>
)};