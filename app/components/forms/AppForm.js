const { Formik } = require("formik");

const AppForm = (props) => {
  const { initialValues, onSubmit, validationSchema } = props;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{props.children}</>}
    </Formik>
  );
};

export default AppForm;
