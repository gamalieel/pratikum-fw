import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => setProducts(res.data.products))
    }, [])

    return (
        <table className="w-full">
            <tbody>
                {products.map((item) => (
                    <tr key={item.id}>
                        <td className="px-6 py-4">
                            {/* 🔥 INI LINK NYA */}
                            <Link to={`/products/${item.id}`} className="text-emerald-500">
                                {item.title}
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}