import Image from "next/image"
import { Pencil, Trash } from "lucide-react"

export default function InventoryList() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl divide-y">
      <ProductRow
        name="Wireless Bluetooth Headphones"
        sku="WBH-2024-001"
        category="Electronics"
        price="$79.99"
        stock="145"
        supplier="TechSupply Co."
        image="/headphones.jpg"
      />
    </div>
  )
}

function ProductRow(props: any) {
  return (
    <div className="flex items-center gap-4 p-4">
      <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-100">
        <Image src={props.image} alt="" width={56} height={56} className="object-cover w-full h-full" />
      </div>

      <div className="flex-1">
        <div className="font-semibold">{props.name}</div>
        <div className="text-sm text-slate-500">SKU: {props.sku}</div>
      </div>

      <div className="text-sm">Price: <b>{props.price}</b></div>
      <div className="text-sm text-green-600">{props.stock} units</div>
      <div className="text-sm">{props.supplier}</div>

      <div className="flex gap-3">
        <Pencil size={16} className="cursor-pointer text-slate-500" />
        <Trash size={16} className="cursor-pointer text-slate-500" />
      </div>
    </div>
  )
}
