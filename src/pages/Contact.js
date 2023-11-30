import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Contact() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col w-full text-black bg-white p-4">
      <h1 className="text-4xl mb-6">Contact</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 ">
              <Field type="text" id="name" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700">
              <Field type="email" id="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div className="md:col-span-2">
              <div className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700">
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Message"
                />
                <ErrorMessage name="message" component="div" />
              </div>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Contact;
