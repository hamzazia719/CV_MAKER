import axios from "axios";
const API_URL_USERS = "http://localhost:3030/users";
const API_URL_QUALIFICATIONS = "http://localhost:3030/qualifications";
const API_URL_WORKEXPERENCE = "http://localhost:3030/work_experence";
// const API_URL_PROJECTS = "http://localhost:3030/projects";
// const API_URL_LANGUAGE = "http://localhost:3030/language";
// const API_URL_INTEREST = "http://localhost:3030/interest";
// const API_URL_SKILLS = "http://localhost:3030/skills";


//User
export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL_USERS);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const postUser = async (data: any) => {
  try {
    const response = await axios.post(API_URL_USERS, data);
    return response.data;
  } catch (error) {
    console.error("Error posting user:", error);
    throw error;
  }
};

export const putUser = async (data: any) => {
  try {
    const response = await axios.put(API_URL_USERS, data);
    return response.data;
  } catch (error) {
    console.error("Error posting user:", error);
    throw error;
  }
};

//Qualification
export const getQualifications = async () => {
  try {
    const response = await axios.get(API_URL_QUALIFICATIONS);
    return response.data;
  } catch (error) {
    console.error("Error fetching qualifications:", error);
    throw error;
  }
};

export const postQualification = async (data: any) => {
  try {
    const response = await axios.post(API_URL_QUALIFICATIONS, data);
    return response.data;
  } catch (error) {
    console.error("Error posting qualification:", error);
    throw error;
  }
};

//WorkExperence
export const postWorkExperence = async (data: any) => {
  try {
    const response = await axios.post(API_URL_WORKEXPERENCE, data);
    return response.data;
  } catch (error) {
    console.error("Error posting work_experence", error);
    throw error;
  }
};

export const getWorkExperence = async () => {
  try {
    const response = await axios.get(API_URL_WORKEXPERENCE);
    return response.data;
  } catch (error) {
    console.error("Error getting work_experence", error);
    throw error;
  }
};

//Projects
// export const postProject = async (data: any) => {
//   try {
//     const response = await axios.post(API_URL_PROJECTS, data);
//     return response.data;
//   } catch (error) {
//     console.error("Error posting projects");
//     throw error;
//   }
// };

// export const getProject = async () => {
//   try {
//     const response = await axios.post(API_URL_PROJECTS);
//     return response.data;
//   } catch (error) {
//     console.error("Error getting projects");
//     throw error;
//   }
// };

//Language
// export const postLanguage = async (data: any) => {
//   try {
//     const response = await axios.post(API_URL_LANGUAGE, data);
//     return response.data;
//   } catch (error) {
//     console.error("Error posting language");
//     throw error;
//   }
// };

// export const getLanguage = async () => {
//   try {
//     const response = await axios.post(API_URL_LANGUAGE);
//     return response.data;
//   } catch (error) {
//     console.error("Error getting language");
//     throw error;
//   }
// };

//Interest
// export const postInterest = async (data: any) => {
//   try {
//     const response = await axios.post(API_URL_INTEREST, data);
//     return response.data;
//   } catch (error) {
//     console.error("Error posting interest");
//     throw error;
//   }
// };

// export const getInterest = async () => {
//   try {
//     const response = await axios.post(API_URL_INTEREST);
//     return response.data;
//   } catch (error) {
//     console.error("Error getting interest");
//     throw error;
//   }
// };

//Skills
// export const postSkills = async (data: any) => {
//   try {
//     const response = await axios.post(API_URL_SKILLS, data);
//     return response.data;
//   } catch (error) {
//     console.error("Error posting skills");
//     throw error;
//   }
// };

// export const getSkills = async () => {
//   try {
//     const response = await axios.post(API_URL_SKILLS);
//     return response.data;
//   } catch (error) {
//     console.error("Error getting projects");
//     throw error;
//   }
// };
