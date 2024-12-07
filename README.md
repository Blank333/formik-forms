# React Formik forms

A simple React application for Signup and Signin forms made using [Formik](https://formik.org/) along with Validation provided by [Yup](https://github.com/jquense/yup). The app is built using [Vite](https://vite.dev/) for fast development and optimized builds and written in **Typescript** for type safety.

## Installation Steps

**1. Clone the repository:**

```bash
git clone https://github.com/Blank333/formik-forms
cd formik-forms
```

**2. Install dependencies:**

```bash
npm install
```

**3. Run the project:**

```bash
 npm run dev
```

**4. Open in browser**
Launch [http://localhost:5173](http://localhost:5173) to view the app.

## Design

The form consists of a simple design with a logo at the top, and a form toggle at the bottom to swtich between login and signup forms. The form inputs are seperated into rows, and placeholders are used for a clean look. Subtle animations are used for a better visual experience. A custom toast has been provided to indicate the success or errors in the form submission.

## Assumptions

1. `Yup` has been used for validations as provided in the Formik documentation.

2. Password strength evaluation is based on the length, and if any one of the different types of characters are being used (lowercase, uppercase, number and special characters).

3. Instead of using routes, the two forms can be switched from the same location.

4. `Tailwind` is being used for providing the CSS styles.
