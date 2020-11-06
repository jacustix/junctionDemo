export const COLUMNS = [
	{
		Header: 'Id',
		accessor: 'id',
	},
	{
		Header: 'First name',
		accessor: 'first_name',
	},
	{
		Header: 'Last name',
		accessor: 'last_name',
		Cell: ({ value }) => {
			return <span>{value}</span>;
		},
	},
	{
		Header: 'Email',
		accessor: 'email',
	},
	{
		Header: 'Gender',
		accessor: 'gender',
	},
	{
		Header: 'Age',
		accessor: 'age',
	},
];
