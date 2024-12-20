// Define the type for work data
type WorkData = {
    w_no: number;    // Work number
    w_name: string;  // Work name
    w_img: string;   // Image path
};

// Create the data array with direct paths
const mywork_data: WorkData[] = [
    { w_no: 1, w_name: "Web design", w_img: "/projects/project_1.png" },
    { w_no: 2, w_name: "Web design", w_img: "/projects/project_2.png" },
    { w_no: 3, w_name: "Web design", w_img: "/projects/project_3.png" },
    { w_no: 4, w_name: "Web design", w_img: "/projects/project_4.png" },
    { w_no: 5, w_name: "Web design", w_img: "/projects/project_5.svg" },
    { w_no: 6, w_name: "Web design", w_img: "/projects/project_6.svg" },
];

// Export the array
export default mywork_data;
