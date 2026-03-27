import { useState } from "react";

const ContactForm = () => {
  // use state to manage form data and validation status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(formData);
  const [formStatus, setFormStatus] = useState({
    isSubmitted: false,
    error: "",
    message: "",
  });
  console.log(formStatus);

  // form submit handler
  const userFormEntry = (e) => {
    e.preventDefault();
    console.log("button clicked");
    // validation logic
    if (formData.name === "") {
      setFormStatus({ isSubmitted: false, error: "Name is mandatory" });
      return;
    } else if (formData.email === "") {
      setFormStatus({ isSubmitted: false, error: "Email is mandatory" });
      return;
    } else if (formData.message === "") {
      setFormStatus({ isSubmitted: false, error: "Message is mandatory" });
      return;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus({ isSubmitted: false, error: "Invalid email format" });
      return;
    }
    // If all validations pass, set form status to submitted
    setFormStatus({
      isSubmitted: true,
      message: `Thank you, ${formData.name}! Your message has been sent.`,
    });
    // Reset form fields after successful submission
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div>
      {/* Implement contact form logic here */}
      {/* Practice form 
          
          1. must create 3 input fields - name, email and message
          2. must create a submit button
          3. on submit, display a thank you message with the name of the user, field should be reset after submit
          4. All fields are mandatory
          5. email field must be a valid email address
          6. if try to submit with any empty fields or invalid email, show an error message
          7. We have to use the state hook to manage the form data and validation logic, and we can use conditional rendering to display the thank you message or error message based on the form submission status.
          let start with creating a form with 3 input fields and a submit button, then add the validation logic and finally add the thank you message on submit.
          8. reset the form fields after successful submission
          */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Contact Form
          </h1>
          {/* Display error message if any */}
          {formStatus.error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {formStatus.error}
            </div>
          )}
          {/* Display success message if form is submitted */}
          {formStatus.isSubmitted && (
            <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
              {formStatus.message}
            </div>
          )}

          <form className="space-y-5" onSubmit={userFormEntry}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
