import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const validate = () => {
    if (!formData.fname.trim()) return "First name is required";
    if (!formData.lname.trim()) return "Last name is required";
    if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(formData.email)) return "Invalid email format";
    if (!/^\d{10}$/.test(formData.phone)) return "Phone number must be 10 digits";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = validate();
    if (errorMsg) {
      setError(errorMsg);
      alert(errorMsg);
    } else {
      alert("Form submitted successfully!");
      setError("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-md shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="First Name"
          value={formData.fname}
          onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lname}
          onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}
