// import { useState } from "react";
// import {
//   CaretDownOutlined,
//   CaretUpOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
// import { useForm, Controller } from "react-hook-form";
// import { DatePicker, Button } from "antd";
// import "antd/dist/reset.css";
// import "../../../App.css";
// import { postProject } from "../../../Api/ApiService";

// const Projects = ({ title, icon: Icon }: any) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [projects, setProjects] = useState([
//     { name: "", startDate: "", endDate: "", description: "" },
//   ]);
//   const { register, handleSubmit, control, reset } = useForm();

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   const onSubmit = async (data: any) => {
//     try {
//       const formattedData = data.projects.map((project: any) => ({
//         ...project,
//         startDate: project.startDate.format("YYYY-MM-DD"),
//         endDate: project.endDate.format("YYYY-MM-DD"),
//       }));

//       await postProject(formattedData);
//       console.log("Project(s) saved successfully", formattedData);
//       reset();
//     } catch (error) {
//       console.error("There was an error submitting the form!", error);
//     }
//   };

//   const addProject = () => {
//     setProjects([
//       ...projects,
//       { name: "", startDate: "", endDate: "", description: "" },
//     ]);
//   };

//   const removeProject = (index: number) => {
//     const newProjects = projects.filter((_, idx) => idx !== index);
//     setProjects(newProjects);
//   };

//   return (
//     <div className="shadow-md w-full myClass rounded-md mb-4">
//       <div
//         className="h-20 w-full flex justify-between items-center p-3 bg-white cursor-pointer"
//         onClick={toggleAccordion}
//       >
//         <div className="flex items-center">
//           <Icon className="mr-2" />
//           <span className="font-medium text-gray-700">{title}</span>
//         </div>
//         <div className="flex items-center">
//           <SettingOutlined className="mr-2 text-gray-500" />
//           {isOpen ? (
//             <CaretUpOutlined className="text-gray-500" />
//           ) : (
//             <CaretDownOutlined className="text-gray-500" />
//           )}
//         </div>
//       </div>

//       {isOpen && (
//         <form className="p-4 bg-gray-100" onSubmit={handleSubmit(onSubmit)}>
//           {projects.map((_, index) => (
//             <div key={index} className="mb-6">
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div className="col-span-2">
//                   <label className="flex justify-start text-sm font-medium text-gray-700">
//                     Project Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Project name ..."
//                     {...register(`projects.${index}.name`, { required: true })}
//                     className="mt-1 p-2 h-12 block w-full border rounded-md shadow-sm"
//                   />
//                 </div>

//                 <div className="col-span-1 leading-normal">
//                   <label className="flex justify-start text-sm font-medium text-gray-700">
//                     Start Date
//                   </label>
//                   <Controller
//                     name={`projects.${index}.startDate`}
//                     control={control}
//                     render={({ field }) => (
//                       <DatePicker
//                         {...field}
//                         picker="month"
//                         className="w-full"
//                         placeholder="Start Date"
//                         format="YYYY-MM-DD"
//                       />
//                     )}
//                   />
//                 </div>

//                 <div className="col-span-1 leading-normal">
//                   <label className="flex justify-start text-sm font-medium text-gray-700">
//                     End Date
//                   </label>
//                   <Controller
//                     name={`projects.${index}.endDate`}
//                     control={control}
//                     render={({ field }) => (
//                       <DatePicker
//                         {...field}
//                         picker="month"
//                         className="w-full"
//                         placeholder="End Date"
//                         format="YYYY-MM-DD"
//                       />
//                     )}
//                   />
//                 </div>

//                 <div className="col-span-2">
//                   <label className="flex justify-start text-sm font-medium text-gray-700">
//                     Description
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Project name ..."
//                     {...register(`projects.${index}.description`, {
//                       required: true,
//                     })}
//                     className="mt-1 p-2 h-12 block w-full border rounded-md shadow-sm"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-end">
//                 <Button
//                   type="default"
//                   danger
//                   className="ml-2"
//                   onClick={() => removeProject(index)}
//                 >
//                   Delete Project
//                 </Button>
//               </div>
//             </div>
//           ))}

//           <Button type="dashed" onClick={addProject}>
//             Add Project
//           </Button>

//           <div className="flex justify-end mt-4 space-x-4">
//             <Button type="default" danger>
//               Delete
//             </Button>
//             <Button type="primary" htmlType="submit">
//               Save
//             </Button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// const AccordionForm = () => {
//   return (
//     <div className="max-w-4xl mx-auto">
//       <Projects
//         title="Projects"
//         icon={() => <i className="fas fa-project-diagram" />}
//       />
//     </div>
//   );
// };

// export default AccordionForm;
