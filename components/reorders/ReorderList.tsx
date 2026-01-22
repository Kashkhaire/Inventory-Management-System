import ReorderItemCard from "./ReorderItemCard"
import type { Product } from "./ReorderItemCard"

const items: Product[] = [
  {
    name: "USB Keyboard",
    sku: "USB-KB-001",
    image: "/images/keyboard.png",
    currentStock: 5,
    reorderPoint: 10,
    recommended: 20,
    leadTime: "4 days",
    category: "Accessories",
    priority: "High", // ✅ must be exactly one of these
    autoReorder: true,
    supplier: "Logitech",
    price: "₹1,200"
  },
  {
    name: "HDMI Cable",
    sku: "HDMI-002",
    image: "/images/hdmi.png",
    currentStock: 2,
    reorderPoint: 8,
    recommended: 15,
    leadTime: "3 days",
    category: "Cables",
    priority: "Critical", // ✅
    autoReorder: false,
    supplier: "Belkin",
    price: "₹499"
  }
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
