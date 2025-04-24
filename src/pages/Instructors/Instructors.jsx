import React, { Suspense, useEffect, useState, useRef } from "react";
import "./Instructors.css";
import Navbar from "../../componenets/Navbar/Navbar";
import Fireflies from "../../componenets/Fireflies/Fireflies";
import Footer from "../../componenets/Footer/Footer";

export default function Instructors() {
  const [activeHuman, setActiveHuman] = useState(1);

  const [isHidden, setIsHidden] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();

        // Check if the footer is entering the viewport
        if (footerRect.top < window.innerHeight) {
          setIsHidden(true); // Hide the fixed div
        } else {
          setIsHidden(false); // Show the fixed div
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleHumanHover = (HumanId) => {
    // console.log("Active Human:", activeHuman);
    setActiveHuman(HumanId);
  };


  const instructors = [
    {
      id: 1,
      role: "peter",
      name: "PETER WRIGHT",
      image:
        "assets/humans-images/wright.jpg",
      intro:
        "Chuyên gia với 25 năm kinh nghiệm, giảng dạy full-time tại 2G Education hơn 4 năm. ",
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
      image:
        "assets/humans-images/Warren.jpg",
      intro: "",
      achivements: [
        "- Chuyên gia giáo dục người Singapore",
        "- Cựu Hiệu trưởng UEF HCMC",
        "- Cố vấn chiến lược và phát triển chương trình",
      ],
    },
    {
      id: 4,
      role: "adviser",
      name: "THẦY DUY HIỆP",
      image:
        "assets/humans-images/Duy_Hiep.jpg",
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
        "assets/humans-images/human_11.jpg",
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
      role: "teacher",
      name: "NGUYỄN CÔNG THÀNH",
      image:
        "assets/humans-images/human_1.jpg",
      intro: "GIÁO VIÊN TRƯỞNG IELTS",
      achivements: [
        "- Tốt nghiệp loại giỏi chuyên ngành quản trị kinh doanh tại trường Wisconsin International University in Ukraine",
        "- IELTS Overall 8.0 ( Listening 8.5, Reading 8.5, Speaking 8.0)",
        "- Hơn 6 năm kinh nghiệm giảng dạy và luyện thi IELTS 4 kỹ năng",
        "- 15 năm sinh sống, học tập và làm việc tại các nước châu Âu, Mỹ, Ukraine, Nga, Đức, Canada",
      ],
    },

    {
      id: 7,
      role: "teacher",
      name: "KENZIE DUONG",
      image:
        "assets/humans-images/Kenzie.jpg",
      intro: "GIÁO VIÊN IELTS/SAT",
      achivements: [
        "- 5 năm kinh nghiệm tư vấn hỗ trợ học sinh xin học bổng các trường ĐH Hoa Kỳ",
        "- 6 năm kinh nghiệm giảng dạy Tiếng Anh ở nhiều trình độ khác nhau, trong đó có nhiều học sinh đạt điểm TOEFL từ 109-115; các học sinh SAT đạt điểm từ 1300+ và 1400+...",
        "- Điểm SAT nằm trong top 1% iểm số cao nhất thế giới",
        "- Điểm IELTS Overall đạt 8.5, không có kỹ năng nào dưới 8.0, có chứng chỉ giảng dạy TESOL quốc tế",
      ],
    },
    {
      id: 8,
      role: "teacher",
      name: "EMILY",
      image:
      "assets/humans-images/Emily.jpg",
      intro: "GIÁO VIÊN IELTS/ APTIS ESOL",
      achivements: [
        "- Đạt IELTS 8.0 overall, trong đó Speaking 8.0",
        "- Chứng chỉ giảng dạy TESOL",
        "- Từng làm việc tại Lãnh sứ quán Mỹ",
        "- 7 năm kinh nghiệm giảng dạy IELTS, tiếng Anh thuyết trình, hùng biện ",
      ],
    },
    {
      id: 9,
      role: "teacher",
      name: "THANH LONG",
      image:
       "assets/humans-images/human_2.jpg",
      intro: "GIÁO VIÊN IELTS/ APTIS ESOL",
      achivements: [
        "- Tốt nghiệp Đại học Giao Thông Vận Tải",
        "- Giáo viên với hơn 6 năm kinh nghiệm giảng dạy ESL/IELTS",
        "- IELTS 8 Overall , không kỹ năng nào dưới 7.0 (Listening 9.0, Reading 8.5, Writing 8.0)",
        "- TOEIC 860/990 ",
      ],
    },
    {
      id: 10,
      role: "teacher",
      name: "ALEX BOUVIER",
      image:
        "assets/humans-images/Alex.jpg",
      intro: "GIÁO VIÊN IELTS",
      achivements: [
        "- Một trong số ít Giảng viên Tiếng Anh đạt trình độ CPE Level C2 (IELTS 8.5) Quốc tế tại Việt Nam",
        "- Hơn 05 năm kinh nghiệm giảng dạy IELTS từ cơ bản đến nâng cao",
        "- Tốt nghiệp chứng chỉ Giảng dạy Quốc tế TESOL",
      ],
    },
    {
      id: 13,
      role: "teacher",
      name: "ZSANDRA",
      image:"assets/humans-images/human_9.jpg",
      intro: "GIÁO VIÊN TIẾNG ANH - MẦM NON/ TIỂU HỌC",
      achivements: [
        "- Cử nhân Nghệ thuật truyền thông +hoàn thành tín chỉ cử nhân ngôn ngữ Anh",
        "- Sở hữu chứng chỉ TESOL được cấp bởi International Open Academy",
        "- Chứng chỉ TEYL (Dạy tiếng Anh cho trẻ nhỏ) được cấp bởi Teach International",
        "- Chứng chỉ EF SET trình độ C1",
        "- Hơn 4 năm kinh nghiệm giảng dạy",
      ],
    },
    {
      id: 14,
      role: "teacher",
      name: "RYAN",
      image:
        "assets/humans-images/Ryan.jpg",
      intro: "",
      achivements: [
        "- Tốt nghiệp cử nhân sư phạm trung học cơ sở, chuyên ngành giảng dạy tiếng Anh",
        "- Có 7 năm kinh nghiệm giảng dạy, từng là giảng viên của đại học CEBU và trưởng nhóm học vụ tại học viện Anh ngữ SMEAG Philippines",
        "- Sở hữu chứng chỉ giảng dạy quốc tế TESOL",
      ],
    },
    {
      id: 16,
      role: "teacher",
      name: "TUẤN ANH",
      image:
        "assets/humans-images/human_3.jpg",
      intro: "",
      achivements: [
        "- IELTS 8.5 Listening",
        "- Chứng chỉ giảng dạy quốc tế TESOL",
        "- 7 năm kinh nghiệm giảng dạy tại các trung tâm anh ngữ lớn",
        "- Sở hữu kênh tiktok về Speaking IELTS hơn 12k followers",
      ],
    },
    {
      id: 17,
      role: "teacher",
      name: "THANH NHÀN",
      image:
        "assets/humans-images/Thanh_Nhan.jpg",
      intro: "",
      achivements: [
        "- Đạt học bổng thạc sĩ TESOL tại đại học Northampton, Vương quốc Anh & Học bổng thạc sĩ Education tại đại học Huddersfield và đại học Leeds Beckett, Vương quốc Anh",
        "- Chứng chỉ TESOL (Teaching English to Speakers of Other Languages)",
        "- Học giả học bổng AmCham Scholarship được cấp bởi Phòng Thương mại Hoa Kỳ tại Việt Nam",
        "- 5 năm kinh nghiệm giảng dạy tiếng Anh, luyện thi IELTS",
        "- IELTS 7.5",
      ],
    },

    {
      id: 18,
      role: "teacher",
      name: "BẢO HÀ",
      image:
        "assets/humans-images/Bao_Ha.jpg",
      intro: "",
      achivements: [
        "- Tốt nghiệp loại xuất sắc chuyên ngành sư phạm Anh, trường Đại học Ngoại ngữ Huế.",
        "- Học bổng thạc sĩ TESOL tại Đại học Huddersfield, Anh",
        "- IELTS Overall 8.0 trong đó Listening và Reading 8.5, Speaking 8.0",
        "- 5 năm kinh nghiệm giảng dạy IELTS & tiếng Anh du học, định cư",
      ],
    },
  ];

  const activeInstructor = instructors.find(
    (instructor) => instructor.id === activeHuman
  );
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        {/* <Fireflies count={50} /> */}
        <div className="instructors-container" style={{ opacity: isHidden ? 0.4 : 1, pointerEvents: isHidden ? "none" : "auto" }}>
          <div className="instructors-showdown">
            <h3 className="instructors-intro">
              Đồng hành cùng chuyên gia Quốc tế{" "}
            </h3>
            <h3 className="peter-wright">Peter Wright</h3>
            <div className="instructor-card">
              {instructors
                .filter((instructor) => instructor.role === "peter")
                .map((instructor) => {
                  return (
                    <img
                      key={instructor.id}
                      src={instructor.image}
                      alt={instructor.name}
                      onMouseEnter={() => handleHumanHover(instructor.id)}
                      onMouseLeave={() => handleHumanHover(instructor.id)}
                    />
                  );
                })}
            </div>

            <h3 className="instructors-intro">
              Đội ngũ cố vấn chuyên môn hàng đầu trong nước và Quốc tế
            </h3>
            <div className="instructor-card">
              {instructors
                .filter((instructor) => instructor.role === "adviser")
                .map((instructor) => {
                  return (
                    <img
                      key={instructor.id}
                      src={instructor.image}
                      alt={instructor.name}
                      onMouseEnter={() => handleHumanHover(instructor.id)}
                      onMouseLeave={() => handleHumanHover(instructor.id)}
                    />
                  );
                })}
            </div>

            <h3 className="instructors-intro">
              Đội ngũ giảng viên 2G tâm huyết và chuyên môn hàng đầu
            </h3>
            <div className="instructor-card">
              {instructors
                .filter((instructor) => instructor.role === "teacher")
                .map((instructor) => {
                  return (
                    <img
                      key={instructor.id}
                      src={instructor.image}
                      alt={instructor.name}
                      onMouseEnter={() => handleHumanHover(instructor.id)}
                      onMouseLeave={() => handleHumanHover(instructor.id)}
                    />
                  );
                })}
            </div>
          </div>
          <div className="instructor-details">
            <div className="details-container">
            <div className="instructor-image">
              {activeInstructor && (
                <img
                  key={activeInstructor.id}
                  src={activeInstructor.image}
                  alt={activeInstructor.name}
                  className="instructor-active-image active"
                />
              )}
            </div>
            <div className="instructor-info">
              {activeInstructor && (
                <>
                  <p className="instructor-name">{activeInstructor.name}</p>
                  <p className="instructor-intro">{activeInstructor.intro}</p>
                  {activeInstructor.achivements.map((achivement) => {
                    return <p>{achivement}</p>;
                  })
                }
                </>
              )}
            </div>
            </div>
          </div>
        </div>
        <Footer ref={footerRef} />
      </Suspense>
    </>
  );
}
