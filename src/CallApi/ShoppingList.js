import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

export default function ShoppingList({ fetchedProduct }) {
	const classes = useStyles();

	return (
		<TableContainer>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell align='right'>Title</TableCell>
						<TableCell align='right'>Price</TableCell>
						<TableCell align='right'>Description</TableCell>
						<TableCell align='right'>Images</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{fetchedProduct.map((product) => (
						// console.log("product", product.category.image)
						<TableRow key={product.id}>
							<TableCell align='right'>
								{product?.title}
							</TableCell>
							<TableCell align='right'>
								{product?.price}
							</TableCell>
							<TableCell align='right'>
								{product?.description}
							</TableCell>
							{product.category.image.length > 0 ? (
								<TableCell align='right'>
									<img
										src={product.category.image}
										alt={product?.category.name}
										style={{ width: "50%" }}
									/>
								</TableCell>
							) : (
								<p>No Image to Display</p>
							)}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
