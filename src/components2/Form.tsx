import React, { FormEvent } from "react";

// Import useForm from React Hook Form library
import { FieldValues, useForm } from "react-hook-form";

// Import Zod validation library
import { z } from "zod";

// Import Zod resolver for React Hook Form
import { zodResolver } from "@hookform/resolvers/zod";

// Define validation schema using Zod
const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  age: z
    .number()
    .min(18, { message: "Age must be 18+" })
    .max(60, { message: "Age must be less then 60" }),
});

// Infer the type of form data from the Zod schema
type FormData = z.infer<typeof schema>;

// Define the Form component
const Form: React.FC = () => {
  // Initialize form handling with React Hook Form
  const {
    register, // Function to register form inputs
    handleSubmit, // Function to handle form submission
    formState: { errors }, // Object containing form validation errors
  } = useForm<FormData>({ resolver: zodResolver(schema) }); // Configure useForm with Zod resolver

  // Submission handler function
  const onSubmit = (data: FieldValues) => console.log(data);

  // console.log(form);

  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name: "", age: 0 };

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (nameRef.current !== null) person.name = nameRef.current.value;
  //   if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

  //   console.log(person);
  // };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="div">
          <label htmlFor="name">Name:</label>
          <input {...register("name")} id="name" type="text" />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="div">
          <label htmlFor="age">Age:</label>
          <input
            {...register("age", { valueAsNumber: true })}
            type="number"
            id="Age"
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <div className="div">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
