// import {
//   getUsers,
//   getInterest,
//   getLanguage,
//   getProject,
//   getQualifications,
//   getSkills,
//   getWorkExperence,
// } from "../../../Api/ApiService";
// import { useEffect, useState } from "react";

// const UsersList = () => {
//   const [users, setUsers] = useState([]);
//   const [interest, setInterest] = useState([]);
//   const [language, setLanguage] = useState([]);
//   const [project, setProject] = useState([]);
//   const [education, setEducation] = useState([]);
//   const [skills, setSkills] = useState([]);
//   const [work, setWork] = useState([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const data = await getUsers();
//         console.log(data,'user');
//         setUsers(data);
//       } catch (err) {
//         setError("Failed to fetch users");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//     const fetchInterest = async () => {
//       try {
//         const data = await getInterest();
//         console.log(data,'interest');
//         setInterest(data);
//       } catch (err) {
//         setError("Failed to fetch users");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchInterest();
//     const fetchLanguage = async () => {
//       try {
//         const data = await getLanguage();
//         console.log(data,'language');
//         setLanguage(data);
//       } catch (err) {
//         setError("Failed to fetch users");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchLanguage();
//     const fetchProject = async () => {
//       try {
//         const data = await getProject();
//         console.log(data,'project');
//         setProject(data);
//       } catch (err) {
//         setError("Failed to fetch users");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProject();
//     const fetchEducation = async () => {
//       try {
//         const data = await getQualifications();
//         console.log(data,'education');
//         setEducation(data);
//       } catch (err) {
//         setError("Failed to fetch users");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEducation();
//     const fetchSkills = async () => {
//       try {
//         const data = await getSkills();
//         console.log(data,'skill');
//         setSkills(data);
//       } catch (err) {
//         setError("Failed to fetch users");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSkills();
//     const fetchWorkExperence = async () => {
//       try {
//         const data = await getWorkExperence();
//         console.log(data,'experence');
//         setWork(data);
//       } catch (err) {
//         setError("Failed to fetch users");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchWorkExperence();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-lg font-semibold mb-4">User List</h2>
//       <ul className="space-y-2">
//         {users.map((user) => (
//           <li key={user} className="p-2 bg-gray-100 rounded">

//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UsersList;

import {
  getUsers,
  // getInterest,
  // getLanguage,
  // getProject,
  getQualifications,
  // getSkills,
  getWorkExperence,
} from "../../../Api/ApiService";
import { useEffect, useState } from "react";

const UsersList = () => {
  const [data, setData] = useState({
    users: [],
    // interest: [],
    // language: [],
    // project: [],
    education: [],
    // skills: [],
    work: [],
  });
  console.log(data, "data");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          usersData,
          // interestData,
          // languageData,
          // projectData,
          educationData,
          // skillsData,
          workData,
        ] = await Promise.all([
          getUsers(),
          // getInterest(),
          // getLanguage(),
          // getProject(),
          getQualifications(),
          // getSkills(),
          getWorkExperence(),
        ]);
        console.log(usersData,'user')

        setData({
          users: usersData,
          // interest: interestData,
          // language: languageData,
          // project: projectData,
          education: educationData,
          // skills: skillsData,
          work: workData,
        });
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">User List</h2>
      <ul className="space-y-2">
        {data.users.map((item:any) => (
          <div key={item}>
            {item.firstName} {item.lastName}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
