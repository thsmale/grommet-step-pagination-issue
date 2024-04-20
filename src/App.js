import React, { useState } from "react";
import {
  Box,
	Grommet,
	Pagination,
	Select,
  Text,
} from "grommet";

const App = () => {
	const [limit, setLimit] = useState(10);
  return (
    <Grommet>
			<Box gap='medium'>
				<Text>Use the Select component to adjust the step used in the Pagination component. However, it fails to update the pagination endIndex.</Text>
				<ul>
					<li>10 should be 1 2 3 4 5 ... 100</li>
					<li>25 should be 1 2 3 4 5 ... 40</li>
					<li>50 should be 1 2 3 4 5 ... 20</li>
					<li>100 should be 1 2 3 4 5 ... 10</li>
				</ul>
				<Select
					options={[10, 25, 50, 100]}
					value={limit}
					onChange={({ option }) => setLimit(option)}
				/>
				<Pagination
					numberItems={1000}
					step={limit}
				/>
			</Box>
    </Grommet>
  );
};

export default App;
