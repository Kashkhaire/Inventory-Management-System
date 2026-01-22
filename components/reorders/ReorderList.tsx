import ReorderItemCard from "./ReorderItemCard"

const items = [
  {
    name: "Premium Wireless Headphones",
    sku: "WH-2024-001",
    image: "/products/headphones.png",
    currentStock: 15,
    reorderPoint: 25,
    recommended: 100,
    leadTime: "7–10 days",
    category: "Electronics",
    priority: "Critical",
    autoReorder: false,
    supplier: "TechSupply Co.",
    price: "$4550.00",
  },
  {
    name: "Ergonomic Office Chair",
    sku: "OC-2024-045",
    image: "/products/chair.jpg",
    currentStock: 8,
    reorderPoint: 15,
    recommended: 50,
    leadTime: "14–21 days",
    category: "Furniture",
    priority: "High",
    autoReorder: true,
    supplier: "Premium Goods Ltd.",
    price: "$3999.00",
  },
]

export default function ReorderList() {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <ReorderItemCard key={item.sku} product={item} />
      ))}
    </div>
  )
}
