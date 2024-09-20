import { useState } from "react";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import { DatePicker, Button } from "antd";
import "antd/dist/reset.css";
import { postWorkExperence } from "../../../Api/ApiService";

const WorkExperence = ({ title, icon: Icon }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, control, reset } = useForm();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const onSubmit = async (data: any) => {
    try {
      await postWorkExperence(data);
      console.log("User saved successfully", data);
      reset();
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div className="shadow-md w-full rounded-md mb-4">
      <div
        className=" h-20 w-full flex justify-between items-center p-3 bg-white cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <Icon className="mr-2" />
          <span className="font-medium text-gray-700">{title}</span>
        </div>
        <div className="flex items-center">
          <SettingOutlined className="mr-2 text-gray-500" />
          {isOpen ? (
            <CaretUpOutlined className="text-gray-500" />
          ) : (
            <CaretDownOutlined className="text-gray-500" />
          )}
        </div>
      </div>

      {isOpen && (
        <form className="p-4 bg-gray-100" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="flex justify-start text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                placeholder=" Developer ..."
                {...register("job_title")}
                className="mt-1 p-2 h-12 block w-full border rounded-md shadow-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="flex justify-start text-sm font-medium text-gray-700">
                City/Town
              </label>
              <input
                type="text"
                placeholder="San Francisco ..."
                {...register("city")}
                className="mt-1 p-2 h-12 block w-full border rounded-md shadow-sm"
              />
            </div>
            <div className="col-span-2">
              <label className="flex justify-start text-sm font-medium text-gray-700">
                Employer
              </label>
              <input
                type="text"
                placeholder=" ..."
                {...register("employer")}
                className="mt-1 p-2 h-12 block w-full border rounded-md shadow-sm"
              />
            </div>
            <div className="col-span-1 leading-normal">
              <label className="flex justify-start text-sm font-medium text-gray-700">
                Start Date
              </label>
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    picker="month"
                    className="w-full"
                    placeholder="Start Date"
                  />
                )}
              />
            </div>
            <div className="col-span-1 leading-normal">
              <label className="flex justify-start text-sm font-medium text-gray-700">
                End Date
              </label>
              <Controller
                name="endDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    picker="month"
                    className="w-full"
                    placeholder="End Date"
                  />
                )}
              />
            </div>
            <div className="col-span-2">
              <label className="flex justify-start text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                {...register("description")}
                className="mt-1 p-2 h-12 block w-full border rounded-md shadow-sm"
                placeholder="Describe your experience..."
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end mt-4 space-x-4">
            <Button
              type="default"
              icon={<i className="fas fa-trash-alt"></i>}
              danger
            >
              Delete
            </Button>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

const AccordionForm = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <WorkExperence
        title="Work Experence"
        icon={() => <i className="fas fa-graduation-cap" />}
      />
    </div>
  );
};

export default AccordionForm;
