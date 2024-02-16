# 🍕 Fast Pizza

A simple app to let customers order their favorite pizza online.

## Features

1. Users can order pizza through menu

2. Users should input their name before using the app (no authentication)

3. Users can add multiple pizzas to a **cart** before ordering

4. Users should provide their names, phone number and address to place order (GPS location if possible)

5. Users can label their orders as **priority** for an additional 20% of the cart price

6. Users can see a unique ID of their orders for looking up their orders

All features can be placed into one of the categories below:

- User
- Menu
- Cart
- Order

## Pages

All of the necessary pages are planned based on the feature requirements:

- Homepage `/`
- Pizza menu `/menu`
- Cart `/cart`
- Placing a new order `/order/new`
- Looking up an order `/order/:orderId`

## State Management

State slices/domains are mapped to the app feature categories here. List down the state type for each slice.

- **User** : Global UI state (no accounts, stay in app)

- **Menu** : Global remote state (menu fetched from API)

- **Cart** : Global UI state (just stored in app)

- **Order** : Global remote state (fetched and submitted to API)

## Technology Decisions

👉 **Routing** : React Router (React SPA standard)

👉 **Styling** : Tailwinds (Explore this trendy option)

👉 **Remote State Management** : React Router (Manage states based on routing changes)

👉 **UI State Management** : Redux (Good to handle complex state situation)
