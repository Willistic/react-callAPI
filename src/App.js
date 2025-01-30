import ShoppingList from "./CallApi/ShoppingList";
import CustomHook from "./hooks/customHook";

export default function App() {
	const [fetchedProduct, error, loading] = CustomHook("https://api.escuelajs.co/api/v1/products");

	if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  if (error) return <p>Error: {error}</p>;
  
	return (
		<div>
			<ShoppingList
				fetchedProduct={fetchedProduct}
				error={error}
				loading={loading}
			/>
		</div>
	);
}
