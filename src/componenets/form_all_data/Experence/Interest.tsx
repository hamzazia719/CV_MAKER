// import { useState } from "react";
// import {
//   CaretDownOutlined,
//   CaretUpOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
// import { useForm } from "react-hook-form";
// import { Button } from "antd";
// import "antd/dist/reset.css";
// import "../../../App.css"; 
// import { postInterest } from "../../../Api/ApiService";

// const Interest = ({ title, icon: Icon }: any) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [interests, setInterests] = useState([{ value: "" }]);
//   const { register, handleSubmit, reset } = useForm();

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   const onSubmit = async(data: any) => {
//     try {
//       await postInterest(data);
//       console.log("User saved successfully", data);
//       reset();
//     } catch (error) {
//       console.error("There was an error submitting the form!", error);
//     }
//   };

//   const addInterest = () => {
//     setInterests([...interests, { value: "" }]);
//   };

//   const removeInterest = (index: number) => {
//     const newInterests = interests.filter((_, idx) => idx !== index);
//     setInterests(newInterests);
//   };

//   return (
//     <div className="shadow-md myClass w-full rounded-md mb-4">
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
//           {interests.map((_, index) => (
//             <div key={index} className="flex items-center mb-4">
//               <input
//                 type="text"
//                 placeholder={`Interest ${index + 1}`}
//                 {...register(`Interests.${index}`)} 
//                 className="mt-1 p-2 h-12 block w-full border rounded-md shadow-sm"
//               />
//               <Button
//                 type="default"
//                 danger
//                 className="ml-2"
//                 onClick={() => removeInterest(index)}
//               >
//                 Delete
//               </Button>
//             </div>
//           ))}

//           <Button type="dashed" onClick={addInterest} className="">
//             Add Interest
//           </Button>

//           <div className="flex justify-end mt-4 space-x-4">
//             <Button
//               type="default"
//               icon={<i className="fas fa-trash-alt"></i>}
//               danger
//             >
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
//       <Interest
//         title="Interests"
//         icon={() => <i className="fas fa-graduation-cap" />}
//       />
//     </div>
//   );
// };

// export default AccordionForm;
