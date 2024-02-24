import { formatCurrency } from "../../utils/helper";

export default function OrderItem({ item, ingredients, isLoadingIngredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">
            {quantity}&times; {name}
          </span>
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-xs uppercase italic text-stone-500">
        {isLoadingIngredients ? "isLoading" : ingredients?.join(", ")}
      </p>
    </li>
  );
}
