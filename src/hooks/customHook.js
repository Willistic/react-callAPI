import { useEffect, useState } from "react";

const CustomHook = () => {
	const [product, setProduct] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetch("https://api.escuelajs.co/api/v1/products");
				const response = await data.json();
				setProduct(response);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		setTimeout(() => {
			fetchData();
		}, 1000);

		return clearTimeout();
	}, []);

	return [product, error, loading];
};

export default CustomHook;
