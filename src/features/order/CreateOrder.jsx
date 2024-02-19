import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export default function CreateOrder() {
  // Cart data will come from Redux once we set it up...
  const cart = fakeCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const errors = useActionData();

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="post" action="/order/new">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required className="input" />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required className="input" />
          </div>
          {errors?.phone && <span>{errors.phone}</span>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              type="text"
              name="address"
              placeholder="address"
              required
              className="input"
            />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary">
            {isSubmitting ? "Placing order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  // Error handling for phone number
  // https://reactrouter.com/en/main/hooks/use-action-data
  const errorObj = {};

  if (!isValidPhone(order.phone)) {
    errorObj.phone =
      "📢 Please provide valid phone number so we can contact you if necessary.";
  }

  if (Object.keys(errorObj).length > 0) return errorObj;

  // Create new order and redirect once we pass validation
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
