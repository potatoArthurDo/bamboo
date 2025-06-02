import { Scroll, useScroll } from "@react-three/drei";
import { useState, useEffect, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "./overlay.css";
import ChatBubble from "../ChatBubbles/ChatBubble";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import { color } from "three/tsl";
import Slider from "../Slider/Slider";
import FlipBook from "../FlipBook/FlipBook";
const Section = (props) => {
  return (
    <section style={{ opacity: props.opacity }}>
      <div className={props.sectionName}>{props.children}</div>
    </section>
  );
};

export const ContentOverlay = () => {
  const scroll = useScroll();
  const navigate = useNavigate();

  // Handler for link clicks
  const handleNavigate = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState("tab2");

  const handleMouseEnter = (tabId) => {
    setHoveredCard(tabId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [activeBubble, setActiveBubble] = useState("bubble1");

  const handleBubbleHover = (bubbleId) => {
    setActiveBubble(bubbleId);
  };

  // const [opacity1, setOpacitySection1] = useState(1);
  // const [opacity2, setOpacitySection2] = useState(0);
  // const [opacity3, setOpacitySection3] = useState(0);
  // const [opacity4, setOpacitySection4] = useState(0);
  // const [opacity5, setOpacitySection5] = useState(0);
  // const [opacity6, setOpacitySection6] = useState(0);
  // const [opacity7, setOpacitySection7] = useState(0);
  // const [opacity8, setOpacitySection8] = useState(0);
  // //   const [opacity9, setOpacitySection9] = useState(0);

  // useFrame(() => {
  //   setOpacitySection1(1 - scroll.range(0, 1 / 6)); // ~17% for fade out
  //   setOpacitySection2(scroll.curve(1 / 8, 2 / 8)); // fade in slower
  //   setOpacitySection3(scroll.curve(2 / 8, 2 / 8));
  //   setOpacitySection4(scroll.curve(3 / 8, 2 / 8));
  //   setOpacitySection5(scroll.curve(4 / 8, 2 / 8));
  //   setOpacitySection6(scroll.curve(5 / 8, 2 / 8));
  //   setOpacitySection7(scroll.curve(6 / 8, 2 / 8));
  //   setOpacitySection8(scroll.curve(7 / 8, 2 / 8));
  //   // setOpacitySection9(scroll.range(8 / 9, 1 / 9));
  // });
  const bubbleData = [
    {
      id: "bubble1",
      image: "assets/images/",
      size: "65%",
      content:
        "Lúc đầu tôi khá lo lắng vì nghĩ làm visa Mỹ rất rắc rối. Tôi thì không rành thủ tục, lại bận nhiều việc, nhưng 2G khiến tôi bất ngờ vì cách làm việc quá chuyên nghiệp và chỉn chu – từ khâu chuẩn bị giấy tờ, rồi phỏng vấn đến lúc nhận visa, mọi thứ đều nhanh gọn, rõ ràng. Cảm giác như có người nhà dẫn đường nên tôi rất yên tâm và chắc chắn sẽ tiếp tục đồng hành với 2G trong thời gian tới.",
      sender:
        "Chu Thị Bình - Tổ trưởng tổ Ngoại Ngữ trường THPT Diễn Châu 3",
    },
    {
      id: "bubble2",
      image: "assets/humans-images/TranLiNa_cut.png",
      size: "50%",
      content:
        "Tại 2G, mình có cơ hội để 'Reflect' và 'Refresh'. Reflect giúp mình soi chiếu hành trình bản thân, nhận ra mình là ai trong tập thể và tạo ra giá trị gì cho cộng đồng. Refresh giúp mình liên tục đổi mới, cập nhật giải pháp hiệu quả hơn. Điều đó khiến mỗi ngày làm việc trở nên hạnh phúc hơn với mình.",
      sender: "Cô Li Na - Quản lý tuyển sinh Phòng du học & Trại hè 2G Education",
    },
    {
      id: "bubble3",
      image: "assets/humans-images/LeNguyen_cut.png",
      size: "90%",
      content:
        "Gắn bó với 2G Education từ năm 2019, tôi cảm nhận rõ từng giai đoạn phát triển đều in dấu sự nỗ lực bền bỉ và lựa chọn có phần không dễ dàng của tổ chức. Dù đối mặt với nhiều thay đổi, 2G vẫn kiên trì giữ gìn những giá trị cốt lõi đã định hình từ đầu. Tôi trân trọng tinh thần dám hy sinh lợi ích ngắn hạn để theo đuổi mục tiêu dài hạn – điều không phải tổ chức nào cũng có thể làm được. Chính sự nhất quán đó tạo nên một môi trường mà mỗi người đều có cơ hội lớn lên một cách vững vàng, cùng 2G. Tôi biết ơn vì đã được là một phần trong chặng đường đó.",
      sender:
        "Cô Nguyên - Quản lý hệ thống nhân sự và vận hành dịch vụ ",
    },
    {
      id: "bubble4",
      image: "assets/images/",
      size: "110%",
      content:
        "",
      sender: "Thầy Hà",
    },
    {
      id: "bubble5",
      image: "assets/images/",
      size: "80%",
      content:
        "",
      sender: "",
    },

    {
      id: "bubble6",
      image: "assets/images/",
      size: "70%",
      content:
        "",
      sender: "",
    },
    {
      id: "bubble7",
      image: "assets/images/",
      size: "60%",
      content:
        "",
      sender: "",
    },
    {
      id: "bubble8",
      image: "assets/images/",
      size: "60%",
      content:
        "Có thể nói quá trình học tập tại 2G đã giúp mình xây dựng và trang bị cho bản thân bộ hành trang toàn diện về cả tư duy lẫn kiến thức. Đây được xem là hành trình bản lề để mình hội nhập với môi trường đại học quốc tế BUV sau này. Hành trình trải nghiệm học tập tại 2G không chỉ giúp mình nâng cao trình độ chuyên môn ngoại ngữ, mà còn giúp mình thay đổi tư duy trong việc học tập, từ bị động sang chủ động trong việc tiếp cận vấn đề. Nhờ đó mà mình biết cách vận dụng hiệu quả ngoại ngữ như một công cụ đắc lực để tiếp cận với những cơ hội đầy tiềm năng khác thay vì chỉ sử dụng cho mục đích học thuật, giúp đẩy nhanh quá trình phát triển bản thân từ sớm.",
      sender: "Cao Đức Quang",
    },
  ];

  const timelineData = [
    { year: "2018", description: "Tiên Phong Tổ Chức Trại Hè Quốc Tế" },
    { year: "2018", description: "Đối Tác Chiến Lược Với AIT TESOL Úc" },
    {
      year: "2019",
      description:
        "Đơn Vị Tổ Chức Cuộc Thi Hùng Biện Lớn Nhất Nghệ An & Hà Tĩnh",
    },
    {
      year: "2020",
      description: "Ứng Dụng Công Nghệ & Hợp Tác Quốc Tế Trong Giảng Dạy",
    },
    {
      year: "2021",
      description: "Đồng Hành Cùng Chuyên Gia Quốc Tế – Peter Wright",
    },
    {
      year: "2022",
      description:
        "Đối Tác Cùng Đài Truyền Hình & Sở Giáo Dục Nghệ An Tổ Chức Cuộc Thi “English Challenge”",
    },
    {
      year: "2023",
      description:
        "World Scholar’s Cup. 100% Đội Tuyển Vượt Qua Vòng Khu Vực Tại Bangkok, Thái Lan",
    },
    { year: "2024", description: "Đạt Chuẩn Trung Tâm Du Học Quốc Tế ICEF" },
    {
      year: "2023 – 2024",
      description: "Dẫn Đầu Trong Luyện Thi IELTS – Kỷ Lục Học Sinh Đạt 6.5+",
    },
    {
      year: "2025",
      description:
        "Điểm thi IELTS, APTIS chính thức của Hội Đồng Anh do Bộ Giáo Dục Việt Nam cấp phép hoạt động tại Vincom Plaza - Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
    },
  ];

  const products = [
    {
      title: "2G Education",
      subtitle: "Học ngoại ngữ, mở tương lai",
      image: "/assets/images/education.jpg",
      intro:
        "Giúp bạn chinh phục ngoại ngữ với chương trình đào tạo bài bản, mở ra cơ hội học tập và sự nghiệp toàn cầu.",
      details: [
        "- Đào tạo đa ngôn ngữ: Tiếng Anh, Tiếng Trung, Tiếng Đức.",
        "- Luyện thi IELTS, THPT Chuyên với lộ trình cá nhân hoá.",
        "- Tiếng Anh giao tiếp & tiếng Anh trẻ em theo phương pháp tư duy phản xạ.",
      ],
      logo: "assets/images/favicon.png",
    },
    {
      title: "2G Pathways",
      subtitle:
        "Giải pháp du học toàn diện - Du học Anh, Mỹ, Úc, Canada, New Zealand",
      image: "/assets/images/abroad.jpg",
      intro:
        "Một lộ trình du học toàn diện, giúp các em THỰC SỰ SẴN SÀNG về tư duy, kĩ năng, ngôn ngữ khi bước ra thế giới.",
      details: [
        "- Đào tạo tiếng Anh toàn diện (IELTS, SAT, giao tiếp, trẻ em)",
        "- Trại hè quốc tế Eureka Camp tại Singapore, Úc, New Zealand, Mỹ, Canada làm bước đệm cho hành trình du học",
        "-Xây dựng lộ trình cá nhân hoá, hỗ trợ toàn bộ các thủ tục giấy tờ và định hướng ngành học, hướng nghiệp",
      ],
      logo: "assets/images/favicon.png",
    },
    {
      title: "2G Eureka Camps",
      subtitle: "Cung cấp các giải pháp về mô hình trại hè",
      image: "/assets/images/camp.png",
      intro: "TThấu hiểu bản thân từ những bước chân trải nghiệm.",
      details: [
        "- Trại hè trao đổi tại Úc, New Zealand, Singapore dành cho trẻ 5-12 tuổi.",
        "- Chương trình kết hợp học tập, kỹ năng mềm & tư duy sáng tạo và phản biện.",
        "- Môi trường quốc tế giúp trẻ tự tin và phát triển toàn diện.",
      ],
      logo: "assets/images/eureka_logo.png",
    },
    {
      title: "GV Manpower",
      subtitle: "Cung cấp dịch vụ tư vấn du học nghề tại Đức",
      image: "/assets/images/german.jpg",
      intro:
        "Chương trình du học nghề uy tín, giúp bạn xây dựng sự nghiệp ổn định tại Đức với chi phí cực tối ưu.",
      details: [
        "- Đào tạo tiếng Đức bài bản, chuẩn đầu ra A1 - B2",
        "- Kết nối doanh nghiệp, đảm bảo cơ hội việc làm tại Đức.",
        "- Tối ưu chi phí, lộ trình hợp pháp, an toàn.",
      ],
      logo: "assets/images/manpower_logo.png",
    },
    {
      title: "Du học Hồng Khôi",
      subtitle: "Cung cấp dịch vụ tư vấn du học nghề tại Đài Loan",
      image: "/assets/images/taiwan.jpg",
      intro: "Hành trình du học vươn lên dẫn đầu, đạt thành công rực rỡ",
      details: [
        "- Luyện thi TOCFL, đạt chuẩn đầu vào.",
        "- Tư vấn du học tại Đài Loan với các ngành dẫn đầu: Bán dẫn, AI, Điều dưỡng…",
        "- Đa dạng các gói tư vấn: Hệ Cử nhân tự túc, Hệ 1+4, Hệ Vừa học vừa làm, Hệ Ngôn ngữ, Hệ Thạc sĩ, Hệ Tiến sĩ",
        "- Hỗ trợ học bổng: Học bổng Chính phủ, Học bổng Trường, Học bổng TAIWAN ICDF",
      ],
      logo: "assets/images/hongkhoi_logo.png",
    },
  ];

  const tabs = [
    {
      id: "tab2",
      label: "Development Strategies",
      cards: [
        {
          id: "card4",
          title: "Connection",
          description: "Connection (Phát triển theo hướng Công Nghệ Giáo Dục)",
          details: [
            "2G Group tin rằng sức mạnh của sự kết nối chính là chìa khóa để mở rộng tầm ảnh hưởng và tạo ra những giá trị bền vững. 2G Group không chỉ nỗ lực xây dựng một hệ sinh thái giáo dục, mà còn kiến tạo một mạng lưới những con người cùng chung khát vọng học tập, phát triển và cống hiến.",
          ],
        },
        {
          id: "card5",
          title: "Technology",
          description: "Technology (Phát triển theo hướng Tăng Cường Kết Nối)",
          details: [
            "Ở 2G Group, chúng tôi tận dụng công nghệ để rút ngắn khoảng cách tri thức, kết nối con người và lan toả giá trị bằng cách số hoá trải nghiệm học tập, xây dựng không gian kết nối linh hoạt, và mở rộng quy mô để tạo ra nhiều cơ hội tiếp cận giáo dục và phát triển bản thân cho tất cả mọi người.",
          ],
        },
      ],
    },
  ];

  const human_first_images = [
    "assets/humans-images/Peter.png",
    "assets/humans-images/founder.png",
    "assets/humans-images/HaDuHocDuc.png",
    "assets/humans-images/KhanhVan.png",
    "assets/humans-images/LeNguyen.png",
    "assets/humans-images/CaoThiNgoc.png",
    "assets/humans-images/ThuyNgoc.png",
    "assets/humans-images/TranThiTinh.png",
    "assets/humans-images/TranLiNa.png",
    "assets/humans-images/TrinhDinhTuanAnh.png",
    "assets/humans-images/VoThiThuong.png",
  ];

  const human_second_images = [
    "assets/humans-images/NguyenThiNam.png",
    "assets/humans-images/NguyenThiThuHuong.png",
    "assets/humans-images/ThuyTien.png",
    "assets/humans-images/ChuMinhThuy.png",
    "assets/humans-images/NguyenCongThanh.png",
    "assets/humans-images/NguyenThaoLy.png",
    "assets/humans-images/HoangThiThuyHang.jpg",
    "assets/humans-images/LuongThiHanh.png",
    "assets/humans-images/BaoYen.png",
    "assets/humans-images/CamTu.png",
    "assets/humans-images/ChiNhan.png",
    "assets/humans-images/TrangQuyen.png",
  ];

  return (
    <Scroll html className="scroll-html-wrapper">
      <Section  sectionName="intro">
        <div className="left-intro">
          <div className="company-mean">
            <h3 className="company_name">2G Group</h3>
            <p className="company_hidden">
              2G Group là một hệ thống giáo dục toàn diện, giúp thế hệ trẻ Việt
              hội nhập toàn cầu thông qua việc đào tạo và du học.
            </p>
          </div>
          <div className="quote-container">
            <p className="journey-quote connect">Connect</p>
            <p className="journey-quote the ">the</p>
            <div className="dot-info">
              <p className="journey-quote dot">"Đốt"</p>
              <p className="journey-quote dot-hidden">
                Với thông điệp Connect the “Đốt”, 2G Group mong muốn mở rộng sự
                kết nối, góp phần phát triển một thế hệ giới trẻ mới, dám học,
                dám làm, dám đi ra thế giới để thay đổi và cống hiến.
              </p>
            </div>
          </div>
        </div>

        <div className="right-intro">
          {/* <h1 className="main_name english1">ANH NGỮ</h1> */}
          <h1 className="main_name english2">NGÔN NGỮ</h1>
          <h1 className="main_name camping">TRẠI HÈ </h1>
          <h1 className="main_name study">DU HỌC</h1>
          <p className="bounce">↓</p>
        </div>
      </Section>
      <Section  sectionName="purpose">
        <h1>Mục đích của 2G</h1>
        <div className="purpose-container">
          <FlipBook />
        </div>
      </Section>
      <Section  sectionName="feedback">
        <h1>Họ đang nói gì </h1>
        <h1> về 2G Education ? </h1>
        <div className="bubble-feedback-container">
          <div className="bubble-content">
            {bubbleData.map((bubble) => (
              <div
                key={bubble.id}
                id={bubble.id}
                className={`bubble-inner ${
                  activeBubble === bubble.id ? "active" : ""
                }`}
              >
                <div className="chat-app">
                  <div className="chat-header">
                    <img
                      src="assets/images/favicon.png"
                      alt="Profile"
                      className="chat-avatar-large"
                    />
                    <p>2G Education</p>
                  </div>
                  <div className="chat-container">
                    <ChatBubble
                      message="Xin chào, Họ đang nói gì về 2G?"
                      isSender={false}
                      sender={"2G Education"}
                    />
                    <ChatBubble
                      message={bubble.content}
                      isSender={true}
                      sender={bubble.sender}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className="bubbles">
            {bubbleData.map((bubble) => (
              <div
                key={bubble.id}
                className={`bubble ${
                  activeBubble === bubble.id ? "active" : ""
                }`}
                onMouseEnter={() => handleBubbleHover(bubble.id)}
                onMouseLeave={() => handleBubbleHover(bubble.id)}
              >
                {/* {`Bubble ${bubble.id.replace("bubble", "")}`} */}
                <img
                  src={bubble.image}
                  alt=""
                  style={{
                    width: bubble.size,
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section  sectionName="achievement">
        <h1>Thành tựu </h1>
        <h1> 2G Education</h1>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="content">
                <h3>{item.year}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section  sectionName="service">
        <h1>Hệ sinh thái </h1>
        <h1> Giáo dục của 2G</h1>
        <ProductCarousel products={products} />
      </Section>

      <Section sectionName="story">
        <h1>Định hướng </h1>
        <h1>phát triển</h1>
        <div className="tab-container">
          <div className="tab-content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                id={tab.id}
                className={`tab-panel ${activeTab === tab.id ? "active" : ""}`}
              >
                <div className="card-tab-container">
                  <div className="card-tab-buttons">
                    {tab.cards.map((card) => (
                      <div
                        key={card.id}
                        className={`flip-card ${
                          hoveredCard === card.id ? "flipped" : ""
                        }`}
                        onMouseEnter={() => handleMouseEnter(card.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="flip-card-inner">
                          <div className="flip-card-front">{card.title}</div>
                          <div className="flip-card-back">
                            <p>{card.description}</p>
                            <ul>
                              {card.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section sectionName="human">
        <h1>2G Humans</h1>
        <div className="human-intro">
          <h5>ĐỘI NGŨ CỐ VẤN CHUYÊN MÔN ĐẦU NGÀNH TRONG NƯỚC & QUỐC TẾ</h5>
          <p>
            2G Education tự hào có sự đồng hành của các chuyên gia hàng đầu
            trong lĩnh vực giáo dục
          </p>
          <h5>ĐỘI NGŨ GIẢNG VIÊN 2G TÂM HUYẾT VÀ CHUYÊN MÔN HÀNG ĐẦU</h5>
          <p>
            2G Education sở hữu đội ngũ giảng viên chuyên môn cao, với tiêu
            chuẩn hạng A++, đạt IELTS 8.0+ / C1+, bao gồm:
          </p>
          <ul>
            <li>
              - Giảng viên Việt Nam tốt nghiệp từ các trường Đại học hàng đầu:
              ĐH Sư Phạm, ĐH Ngoại Ngữ
            </li>
            <li>- Cựu du học sinh, giảng viên giàu kinh nghiệm giảng dạy</li>
            <li>
              - Giáo viên bản ngữ, có chứng chỉ giảng dạy quốc tế, tận tâm và
              chuyên môn cao
            </li>
          </ul>
        </div>
        <div className="human-slider">
          <Slider
            images={human_first_images}
            width="200px"
            height="300px"
            quantity={11}
          />
          <Slider
            images={human_second_images}
            width="200px"
            height="300px"
            quantity={12}
            reverse={true}
          />
          <p onClick={() => navigate("/humans")}>Xem chi tiết</p>
        </div>
      </Section>

      <Section  sectionName="banner-footer">
        <div className="footer-first-content">
          <div className="left-intro">
            <div className="company-mean">
              <h3 className="company_name">2G Group</h3>
            </div>
            <div className="quote-container">
              <p className="journey-quote connect">Connect</p>
              <p className="journey-quote the ">the</p>
              <div className="dot-info">
                <p className="journey-quote dot">"Đốt"</p>
              </div>
            </div>
          </div>

          <div className="right-intro">
            {/* <h1 className="main_name english1">ANH NGỮ</h1> */}
            <h1 className="main_name english2">NGÔN NGỮ</h1>
            <h1 className="main_name camping">TRẠI HÈ </h1>
            <h1 className="main_name study">DU HỌC</h1>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-logo">
              <img
                s
                src="assets/images/logo.png"
                alt="Company Logo"
                className="logo"
              />
              <p
                className="footer-bottom"
                style={{
                  fontSize: "0.8rem",
                  display: "flex",
                  flex: "wrap",
                  marginLeft: "2.5rem",
                }}
              >
                &copy; {new Date().getFullYear()} 2G Education. All rights
                reserved.
              </p>
              <p
                className="footer-bottom"
                style={{
                  fontSize: "0.6rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "wrap",
                  marginLeft: "2.5rem",
                }}
              >
                "Free Bamboo Set"{" "}
                <a href="https://skfb.ly/oxyyY">(bamboo model</a>) by
                JonhGillessen is licensed under{" "}
                <a href="http://creativecommons.org/licenses/by/4.0/">
                  Creative Commons Attribution.
                </a>{" "}
                Modified by repositioning and removing some elements.
              </p>
            </div>
            <div className="footer-info">
              <p>Locate Us:</p>
              <ul>
                <li>65 Lê Hồng Phong, thành phố Vinh, tỉnh Nghệ An</li>
              </ul>
              <p>Phone:</p>
              <ul>
                <li>0889 666 900</li>
              </ul>
              <p>Email:</p>
              <ul>
                <li>lenguyen@2g.edu.vn</li>
              </ul>
            </div>
            <div className="footer-links">
              <p>Quick Links:</p>
              <ul>
                <li>
                  <a href="/" onClick={(e) => handleNavigate(e, "/")}>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/founder_story"
                    onClick={(e) => handleNavigate(e, "/founder_story")}
                  >
                    Thư ngỏ
                  </a>
                </li>
                <li>
                  <a
                    href="/humans"
                    onClick={(e) => handleNavigate(e, "/humans")}
                  >
                    2G Humans
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-social">
              <p>Follow Us:</p>
              <div class="social-icons">
                <a
                  href="https://www.facebook.com/2GEducation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.2 22 17.06 22 12.07z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@2GEducation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184H4.385C3.06 3.184 2 4.244 2 5.57v12.86c0 1.327 1.06 2.387 2.385 2.387h15.23c1.326 0 2.385-1.06 2.385-2.387V5.57c0-1.326-1.06-2.386-2.385-2.386zM10 15.5V8.5l6 3.5-6 3.5z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.94v5.666H9.355V9h3.414v1.561h.049c.476-.899 1.637-1.85 3.368-1.85 3.598 0 4.263 2.368 4.263 5.451v6.29zM5.337 7.433a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.665 20.452h3.554V9H3.665v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Section>
    </Scroll>
  );
};
