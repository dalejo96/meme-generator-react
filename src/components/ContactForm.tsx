import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//Yup is a JavaScript schema builder for value parsing and validation. Define a schema,
//transform a value to match, validate the shape of an existing value, or both.
import * as Yup from "yup";

interface Contact {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  detail: string;
}

export const ContactForm: React.FC = () => {
  // form validation rules
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    detail: Yup.string().required("Detail is required"),
  });

  // functions to build form returned by useForm() hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contact>({
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(data: Contact) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
  }

  return (
    <form className="center_div" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div className="form-group col-3">
          <label>Title</label>
          <select
            {...register("title")}
            placeholder="Title"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
          >
            <option value=""></option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Miss">Miss</option>
          </select>
          <div className="invalid-feedback">{errors.title?.message}</div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-5">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName")}
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.firstName?.message}</div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-5">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.lastName?.message}</div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-8">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-8">
          <label>Detail</label>
          <textarea
            cols={8}
            {...register("detail")}
            rows={3}
            placeholder="What's up?"
            className={`form-control ${errors.detail ? "is-invalid" : ""}`}
          ></textarea>
          <div className="invalid-feedback">{errors.detail?.message}</div>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary mr-1">
          Register
        </button>
        <button className="btn btn-secondary" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
};
