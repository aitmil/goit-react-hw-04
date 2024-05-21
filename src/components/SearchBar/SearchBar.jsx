import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const notify = () =>
    toast.error("The search field is empty. Please try again!");
  const handleSubmit = (values, actions) => {
    values.search === "" ? notify() : onSubmit(values.search);
    actions.resetForm();
  };
  return (
    <header className="css.header">
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button type="submit" className={css.btn}>
            Search
          </button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
}
