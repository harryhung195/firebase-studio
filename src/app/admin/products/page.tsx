'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const products = [
  {id: 1, name: 'Nail Polish - Red', sku: 'NP123', price: 4.99, attributes: {color: 'Red', size: '15ml'}},
  {id: 2, name: 'Nail Polish - Blue', sku: 'NP124', price: 3.99, attributes: {color: 'Blue', size: '15ml'}},
  {id: 3, name: 'Nail Polish - Green', sku: 'NP125', price: 2.99, attributes: {color: 'Green', size: '15ml'}},
  {id: 4, name: 'Nail Polish - Yellow', sku: 'NP126', price: 4.49, attributes: {color: 'Yellow', size: '15ml'}},
  {id: 5, name: 'Nail Polish - Pink', sku: 'NP127', price: 1.99, attributes: {color: 'Pink', size: '15ml'}},
];

export default function AdminProducts() {
  const [productList, setProductList] = useState(products);

  const handleDelete = (id: number) => {
    const updatedProducts = productList.filter(product => product.id !== id);
    setProductList(updatedProducts);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>

      <Table>
        <TableCaption>A list of your products.
        You can edit, add and delete to change!</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Product ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Attributes</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productList.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>
                {Object.entries(product.attributes).map(([key, value]) => (
                  <div key={key}>
                    {key}: {value}
                  </div>
                ))}
              </TableCell>
              <TableCell className="text-right">
                <Button size="sm">Edit</Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(product.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

