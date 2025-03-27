import React, { Suspense } from "react";
import "./Instructors.css";
import Navbar from "../../componenets/Navbar/Navbar";
import Fireflies from "../../componenets/Fireflies/Fireflies";

export default function Instructors() {
  const instructors = [
    {
      id: 1,
      role: "peter",
      name: "PETER WRIGHT",
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png",
      intro: "Chuyên gia với 25 năm kinh nghiệm, giảng dạy full-time tại 2G Education hơn 4 năm. ",
      achivements: [
        "- Cựu giám đốc học thuật tại TẬP ĐOÀN SMEAG School, Philipines",
        "- Trên 15 năm kinh nghiệm chấm thi tại Hội Đồng Anh và IDP Education",
        "- Cựu trưởng ban Hội đồng chấm thi Cambridge Qatar",
        "- Nhiều năm kinh nghiệm đào tạo giảng viên tại Tổ chức giáo dục uy tính thế giới - International House",
      ],
    },
    {
      id: 2,
      role: "adviser",
      name: "THẦY WARREN ENG",
      image: "https://i.redd.it/6jkgi46lv9fb1.jpg",
      intro: "",
      achivements: [
        "- Chuyên gia giáo dục người Singapore",
        "- Cựu Hiệu trưởng UEF HCMC",
        "- Cố vấn chiến lược và phát triển chương trình",
      ],
    },
    {
      id: 3,
      role: "adviser",
      name: "CÔ TRANG PHAN",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
      intro: "",
      achivements: [
        "- Thạc sĩ TESOL",
        "- Giám đốc điều hành Hội Đồng Giáo Dục Văn Hoá Canada – Việt Nam",
        "- Chuyên gia đào tạo phương pháp giảng dạy cho giáo viên",
      ],
    },
    {
        id: 4,
        role: "adviser",
        name: "THẦY DUY HIỆP",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
        intro: "",
        achivements: [
          "- Giảng viên Đại học tại TP.HCM",
          "- Chuyên gia tư vấn du học & luật sư di trú New Zealand",
          "- Cố vấn các chương trình du học",
        ],
      },

      {
        id: 5,
        role: "teacher",
        name: "CHU MINH THÙY",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
        intro: "QUẢN LÝ HỌC VỤ",
        achivements: [
            "- Tốt nghiệp cử nhân ngành Kinh tế quốc tế, Học viện Ngoại giao Việt Nam",
            "- Đạt IELTS 8.0 overall, trong đó speaking 8.0 và Reading 9.0",
            "- Sở hữu chứng chỉ quốc tế về kỹ năng và phương pháp giảng dạy tiếng Anh TESOL",
            "- 3 năm kinh nghiệm giảng dạy và quản lý tại các hệ thống trung tâm tiếng Anh lớn",
        ],
      },
      {
        id: 6,
        role: "adviser",
        name: "THẦY DUY HIỆP",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
        intro: "",
        achivements: [
          "- Giảng viên Đại học tại TP.HCM",
          "- Chuyên gia tư vấn du học & luật sư di trú New Zealand",
          "- Cố vấn các chương trình du học",
        ],
      },
  ];
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Fireflies count={50} />
        <div className="instructors-container">
          <div className="instructors-showdown">
            <h3 className="instructors-intro">Đồng hành cùng chuyên gia Quốc tế </h3>
            <h3 className="peter-wright">Peter Wright</h3>
            <div className="instructor-card">
              {instructors
                .filter((instructor) => instructor.role === "teacher")
                .map((instructor) => {
                  return (
                    <img
                      key={instructor.id}
                      src={instructor.image}
                      alt={instructor.name}
                    />
                  );
                })}
            </div>

            <h3 className="instructors-intro">Đội ngũ cố vấn chuyên môn hàng đầu trong nước và Quốc tế</h3>
            <div className="instructor-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"
                alt=""
              />
            </div>

            <h3 className="instructors-intro">Đội ngũ giảng viên 2G tâm huyết và chuyên môn hàng đầu</h3>
            <div className="instructor-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"
                alt=""
              />
            </div>
          </div>
          <div className="instructor-details">
            <div className="instructor-image">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"
                alt=""
              />
            </div>
            <div className="instructor-info">
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>

              <p>lorem</p>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}
