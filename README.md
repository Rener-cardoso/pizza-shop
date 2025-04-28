# Pizza Shop

A platform for pizzeria management, where you can track important metrics such as monthly revenue, number of orders, cancellations, and more.  
You can also manage the order statuses, making it easier to control the flow from order placement to delivery.

## 🔑 Environment Variables

Before running the project, you need to configure the environment variables.

1. Create a file called `.env.local` and paste all the variables from `.env.local.example`
2. Make sure all variables are correctly set inside the `.env.local` file.

## ⚙️ Requirements

This project depends on a backend to work properly.

- Clone and run the backend available at: [pizzashop-api](https://github.com/rocketseat-education/pizzashop-api)
- Make sure the backend is running locally before starting the frontend.

## 🧪 Test Environment (Mock API)

If you just want to preview the project **without running the backend**, you can start the frontend in test mode.

In this mode, the project will consume fake data from a mock API.

To run it:

```bash
npm run dev:test
```

This will start the project using the simulated API.

## 📦 Technologies

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/) - for styling
- [React Hook Form](https://react-hook-form.com/) - for forms management
- [Zod](https://zod.dev/) - for schema validation
- [Axios](https://axios-http.com/) - for HTTP requests
- [MSW](https://mswjs.io/) - for mocking APIs in test mode
- [Playwright](https://testing-library.com/) - for E2E testing
- [Testing Library](https://testing-library.com/) - for unit testing

## 🚀 Installation and Running

Clone the repository:

```bash
git clone https://github.com/Rener-cardoso/pizza-shop.git
```

Install the dependencies:

```bash
npm install
```

Start the project:

```bash
npm run dev
```

Open your browser at: [http://localhost:5173](http://localhost:5173)