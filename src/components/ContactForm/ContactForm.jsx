import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

import { addContactDataThunk } from "../../redux/contacts/operations";

const ContactFrom = () => {
  const dispatch = useDispatch();
  const onSubmit = (value, options) => {
    const id = nanoid();
    const newContact = {
      ...value,
      id,
    };

    dispatch(addContactDataThunk(newContact));
    options.resetForm();
  };

  const initialsValue = {
    id: "",
    name: "",
    number: "",
  };
  const AddErrorShemaYup = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialsValue}
        validationSchema={AddErrorShemaYup}
      >
        <Form>
          <div className={css.formWrapper}>
            <div>
              <label> Name</label>
              <Field
                name="name"
                placeholder="Enter name"
                className="input mb-2"
              ></Field>
              <ErrorMessage name="name" className={css.error} component="div" />
            </div>
            <label>Number</label>
            <Field
              className="input"
              name="number"
              type="tell"
              placeholder="Enter number phone"
            ></Field>
            <ErrorMessage name="number" className={css.error} component="div" />

            <button
              type="submit"
              className="btn m-auto w-30 btn-xs btn-dash btn-primary"
            >
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ContactFrom;
