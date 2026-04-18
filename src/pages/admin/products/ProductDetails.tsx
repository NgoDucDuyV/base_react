"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Loader2 } from "lucide-react";
import { useProduct, useProductDelete } from "@/hook/product.hook";
import { Link, useNavigate, useParams } from "react-router-dom";
import { message, Popconfirm, type PopconfirmProps } from "antd";


function ProductDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [selectedImage, setSelectedImage] = useState("");
    const { data: product, isLoading } = useProduct(String(id))
    useEffect(() => {
        if (product) {
            setSelectedImage(product.gallery[0])
        }
    }, [product])
    const deleteProduct = useProductDelete()

    const [messageApi, holder] = message.useMessage();

    const confirm = () => {
        console.log(id);
        messageApi.success('Click on Yes');
        deleteProduct.mutateAsync(String(id))

        navigate("/admin/products")
    };
    const cancel: PopconfirmProps['onCancel'] = (e) => {
        console.log(e);
        messageApi.error('Click on No');
    };
    return (
        <>
            {
                isLoading ? (
                    <div className="flex items-center justify-center h-screen">
                        <Loader2 className="animate-spin" size={40} />
                    </div>
                ) : (
                    <div className="p-6 space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-bold">Product Details</h1>
                            <div className="flex gap-2">
                                <Link to={`/admin/products/edit/${id}`}>
                                    <Button className="flex items-center gap-2">
                                        <Pencil size={16} /> Edit
                                    </Button>
                                </Link>
                                <Popconfirm
                                    title="Delete the task"
                                    description="Are you sure to delete this task?"
                                    onConfirm={() => confirm()}
                                    onCancel={cancel}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button variant="destructive" className="flex items-center gap-2">
                                        <Trash2 size={16} /> Delete
                                    </Button>
                                </Popconfirm>

                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                            {/* Images */}
                            <Card className="rounded-2xl lg:col-span-2 ">
                                <CardContent className="p-4 space-y-4">
                                    <img
                                        src={selectedImage}
                                        alt="main"
                                        className="w-full h-[350px] object-cover rounded-xl border"
                                    />

                                    <div className="grid grid-cols-3 gap-2">
                                        {product?.gallery.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                onClick={() => setSelectedImage(img)}
                                                className={`rounded-lg border cursor-pointer hover:scale-105 transition ${selectedImage === img ? "ring-2 ring-primary" : ""}`}
                                            />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Info */}
                            <div className="lg:col-span-3 space-y-6">
                                <Card className="rounded-2xl">
                                    <CardHeader>
                                        <CardTitle className="text-2xl flex items-center gap-3">
                                            {product?.name}
                                            {product?.is_featured && <Badge>Featured</Badge>}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="space-y-5">
                                        <p className="text-muted-foreground leading-relaxed">
                                            {product?.description}
                                        </p>

                                        {/* Price */}
                                        <div className="flex items-center gap-4">
                                            <span className="text-3xl font-bold text-primary">
                                                {product?.currency}
                                                {product?.current_price}
                                            </span>
                                            <span className="line-through text-gray-400 text-lg">
                                                {product?.currency}
                                                {product?.original_price}
                                            </span>
                                            <Badge variant="secondary">
                                                -{product?.discount_percentage}%
                                            </Badge>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            <div className="p-4 rounded-xl border">
                                                <p className="text-sm text-muted-foreground">Stock</p>
                                                <p className="font-semibold">{product?.stock}</p>
                                            </div>

                                            <div className="p-4 rounded-xl border">
                                                <p className="text-sm text-muted-foreground">Category</p>
                                                <p className="font-semibold">#{product?.category_id}</p>
                                            </div>

                                            <div className="p-4 rounded-xl border">
                                                <p className="text-sm text-muted-foreground">Product ID</p>
                                                <p className="font-semibold">#{product?.id}</p>
                                            </div>
                                        </div>

                                        {/* Meta */}
                                        <div className="pt-4 border-t text-sm">
                                            <p>
                                                <span className="font-medium">Slug:</span> {product?.slug}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    );
}

export default ProductDetails;