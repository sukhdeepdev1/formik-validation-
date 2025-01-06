import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormData = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
        .min(3, "Name must be at least 3 characters"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
      age: Yup.number()
        .required("Age is required")
        .min(18, "Age must be at least 18")
        .max(60, "Age must be at most 60"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[@#$%^&*(),.?":{}|<>]/, "Password must contain one special character")
        .matches(/^\S*$/, "Password must not contain spaces"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      textAlign: "center",
      marginBottom: "20px",
    },
    fieldContainer: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    error: {
      color: "red",
      fontSize: "12px",
      marginTop: "5px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Full Validation Form</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Name Field */}
        <div style={styles.fieldContainer}>
          <label htmlFor="name" style={styles.label}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            style={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={styles.error}>{formik.errors.name}</div>
          ) : null}
        </div>

        {/* Email Field */}
        <div style={styles.fieldContainer}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            style={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={styles.error}>{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Age Field */}
        <div style={styles.fieldContainer}>
          <label htmlFor="age" style={styles.label}>
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            style={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          {formik.touched.age && formik.errors.age ? (
            <div style={styles.error}>{formik.errors.age}</div>
          ) : null}
        </div>

        {/* Password Field */}
        <div style={styles.fieldContainer}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            style={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={styles.error}>{formik.errors.password}</div>
          ) : null}
        </div>

        {/* Confirm Password Field */}
        <div style={styles.fieldContainer}>
          <label htmlFor="confirmPassword" style={styles.label}>
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            style={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div style={styles.error}>{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormData;
