import { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    errors: {},   
    touched: {}, 
  });

  const requiredMsg = "Поле обов’язкове";

  const validateField = (field, value) => {
    if (!value.trim()) return requiredMsg;
    return undefined;
  };

  const validateAll = (data) => {
    const errs = {};
    ["name", "lastName", "email", "password"].forEach((key) => {
      const msg = validateField(key, data[key]);
      if (msg) errs[key] = msg;
    });
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const msg = prev.touched[name] ? validateField(name, value) : prev.errors[name];
      return {
        ...prev,
        [name]: value,
        errors: { ...prev.errors, [name]: msg },
      };
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setFormData((prev) => {
      const msg = validateField(name, prev[name]);
      return {
        ...prev,
        touched: { ...prev.touched, [name]: true },
        errors: { ...prev.errors, [name]: msg },
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateAll(formData);
    if (Object.keys(errs).length > 0) {
      setFormData((prev) => ({
        ...prev,
        touched: { name: true, lastName: true, email: true, password: true },
        errors: errs,
      }));
      return;
    }
    alert("Ви успішно зареєструвались");
    setFormData({
      name: "",
      lastName: "",
      email: "",
      password: "",
      errors: {},
      touched: {},
    });
  };

  const { name, lastName, email, password, errors, touched } = formData;

  const isComplete =
    name.trim() && lastName.trim() && email.trim() && password.trim();


  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!(touched.name && errors.name)}
          aria-describedby="name-error"
          style={styles.input}
        />
      </label>
      {touched.name && errors.name && (
        <p id="name-error" style={styles.error}>{errors.name}</p>
      )}

      <label style={styles.label}>
        LastName
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!(touched.lastName && errors.lastName)}
          aria-describedby="lastName-error"
          style={styles.input}
        />
      </label>
      {touched.lastName && errors.lastName && (
        <p id="lastName-error" style={styles.error}>{errors.lastName}</p>
      )}

      <label style={styles.label}>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!(touched.email && errors.email)}
          aria-describedby="email-error"
          style={styles.input}
        />
      </label>
      {touched.email && errors.email && (
        <p id="email-error" style={styles.error}>{errors.email}</p>
      )}

      <label style={styles.label}>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!(touched.password && errors.password)}
          aria-describedby="password-error"
          style={styles.input}
        />
      </label>
      {touched.password && errors.password && (
        <p id="password-error" style={styles.error}>{errors.password}</p>
      )}

      <button type="submit" style={styles.button} disabled={!isComplete}>
        Надіслати
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
    fontWeight: "500",
    color: "white",
    gap: "4px",
  },
  input: {
    padding: "8px",
    border: "1px solid red",
    borderRadius: "4px",
    fontSize: "14px",
  },
  button: {
    backgroundColor: "white",
    color: "black",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  error: {
    color: "red",
    fontSize: "12px",
    padding: 0,
    margin: 0,
  },
};

export default RegisterForm;
