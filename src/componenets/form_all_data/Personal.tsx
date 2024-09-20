import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import { postUser, putUser } from "../../Api/ApiService"; // Import POST API function

const MyForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      // await postUser(data); // POST user data to the API
      await putUser(data)
      console.log("User saved successfully");
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shadow-md w-full rounded-md mb-4 p-4 bg-gray-100">
      <h2 className="text-lg text-gray-700 font-bold mb-4">Personal Information</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="flex justify-start text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              placeholder="e.g. John"
              {...register("firstName")}
              className="mt-1 p-2 h-12 block w-full border rounded-md shadow-sm"
            />
          </div>

          <div className="col-span-1">
            <label className="flex justify-start text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              placeholder="e.g. Doe"
              {...register("lastName")}
              className="mt-1 p-2 h-12 block w-full border rounded-md shadow-sm"
            />
          </div>

          <div className="col-span-2">
            <label className="flex justify-start text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="e.g. john.doe@example.com"
              {...register("email")}
              className="mt-1 p-2 h-12 block w-full border rounded-md shadow-sm"
            />
          </div>

          <div className="col-span-2">
            <label className="flex justify-start text-sm font-medium text-gray-700">Address</label>
            <textarea
              {...register("address")}
              className="mt-1 p-2 h-12 block w-full border rounded-md shadow-sm"
              placeholder="e.g. 123 Main St, Apt 4B"
            ></textarea>
          </div>

          <div className="col-span-1">
            <label className="flex justify-start text-sm font-medium text-gray-700">
              Zip Code
            </label>
            <input
              type="text"
              placeholder="ZipCode..."
              {...register("zipcode")}
              className="mt-1 p-2 h-12 block w-full border rounded-md shadow-sm"
            />
          </div>

          <div className="col-span-1">
            <label className="flex justify-start text-sm font-medium text-gray-700">
              City / Town
            </label>
            <input
              type="text"
              placeholder="e.g. city or town"
              {...register("city")}
              className="mt-1 p-2 h-12 block w-full border rounded-md shadow-sm"
            />
          </div>
        </div>

        <div className="flex justify-end mt-4 space-x-4">
          <Button type="default" icon={<i className="fas fa-trash-alt"></i>} danger>
            Delete
          </Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
