import React from "react";

const products = ({ products }) => {
    return (
        <div className="container mx-auto py-20">
            <div className="flex flex-wrap justify-center">
                {products.map(product => (
                    <div className="w-full max-w-sm" key={product.id}>
                        <div className="flex flex-col break-words bg-white border rounded shadow-md mr-2 mb-2">
                            <img src={product.image} alt={product.image} className="h-[250px] w-[100%] object-contain m-2 p-2" />
                            <div className="font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0">
                                {product.title}
                                <p className="text-orange-400">$ {product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default products;