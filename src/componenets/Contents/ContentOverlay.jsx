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
import { Link } from "react-router-dom";
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

  const [opacity1, setOpacitySection1] = useState(1);
  const [opacity2, setOpacitySection2] = useState(0);
  const [opacity3, setOpacitySection3] = useState(0);
  const [opacity4, setOpacitySection4] = useState(0);
  const [opacity5, setOpacitySection5] = useState(0);
  const [opacity6, setOpacitySection6] = useState(0);
  const [opacity7, setOpacitySection7] = useState(0);
  const [opacity8, setOpacitySection8] = useState(0);
  const [opacity9, setOpacitySection9] = useState(0);

  useFrame(() => {
    setOpacitySection1(1 - scroll.range(0, 1 / 6)); // ~17% for fade out
    setOpacitySection2(scroll.curve(1 / 9, 2 / 9)); // fade in slower
    setOpacitySection3(scroll.curve(2 / 9, 2 / 9));
    setOpacitySection4(scroll.curve(3 / 9, 2 / 9));
    setOpacitySection5(scroll.curve(4 / 9, 2 / 9));
    setOpacitySection6(scroll.curve(5 / 9, 2 / 9));
    setOpacitySection7(scroll.curve(6 / 9, 2 / 9));
    setOpacitySection8(scroll.curve(7 / 9, 2 / 9));
    setOpacitySection9(scroll.range(8 / 9, 1 / 9)); // fade in slower
  });
  const bubbleData = [
    {
      id: "bubble1",
      image: "assets/images/Nguyen_Manh_Ha.jpg",
      size: "65%",
      content:
        "Với vai trò là người tham mưu cho lãnh đạo sở GD&ĐT Nghệ An quản lí các trung tâm ngoại ngữ và cũng là phụ huynh đầu tiên của 2G, tôi hoàn toàn tin tưởng vào chất lượng đào tạo cũng như sự tiên phong của 2G trong ứng dụng công nghệ vào giáo dục. Tôi luôn ủng hộ những gì 2G đang làm cho thế hệ trẻ. Chúc 2G tiếp tục phát triển, tiên phong đổi mới để thật nhiều học sinh vươn xa!",
      sender:
        "Thầy Nguyễn Mạnh Hà, Trưởng phòng GDCN-GDTX Sở Giáo dục và Đào tạo Nghệ An",
    },
    {
      id: "bubble2",
      image: "assets/images/Huyen.png",
      size: "50%",
      content:
        "Thật vui khi được là đối tác đồng hành cùng các bạn trong 3 năm qua. Một đoàn đội trẻ, năng động, chuyên nghiệp, sáng tạo và đầy bản lĩnh, dám đi, dám đến và dám khám phá, đột phá vào những vùng đất, những vùng trời mới",
      sender: "Mrs.Huyền Phó Giám đốc Đài phát thanh truyền hình Nghệ An NTV",
    },
    {
      id: "bubble3",
      image: "assets/images/Huyen_2.png",
      size: "90%",
      content:
        "Sự cống hiến của các bạn trong việc đổi mới phương pháp giảng dạy tiếng Anh thực sự truyền cảm hứng. Chúng tôi đặc biệt trân trọng cách 2G Education tích hợp công nghệ vào trải nghiệm học tập, đặc biệt thông qua Cambridge One khi giảng dạy Kid's Box và Think. Cam kết của các bạn trong việc mang đến nền giáo dục  chất lượng cao, hấp dẫn không chỉ giúp học viên học tiếng Anh hiệu quả mà còn khiến hành trình học tập trở nên thú vị hơn.",
      sender:
        "Mrs Lê Thị Lệ Huyền, Country Head, Cambridge University Press & Assessment",
    },
    {
      id: "bubble4",
      image: "assets/images/Samantha.png",
      size: "110%",
      content:
        "Hội đồng Anh Việt Nam xin gửi lời chúc mừng nồng nhiệt nhất đến 2G Education – một trong những đối tác Vàng của chúng tôi tại Vinh. Trong suốt 7 năm qua, chúng tôi rất trân trọng sự hợp tác chặt chẽ giữa hai bên trong việc hỗ trợ thí sinh thi IELTS. Chúng tôi đánh giá cao những nỗ lực và đóng góp của 2G Education trong việc mang lại cơ hội giáo dục và phát triển cho học viên.",
      sender: "Samantha Smith – Giám đốc Khảo thí Quốc gia",
    },
    {
      id: "bubble5",
      image: "assets/images/Lan_Thanh.png",
      size: "80%",
      content:
        "Thật vui khi thấy nhiều thế hệ cựu học sinh chuyên Phan quy tụ tại 2G – có thể nói đây là doanh nghiệp tại Vinh có số lượng cựu học sinh chuyên Phan đông nhất, từ em Hải (khóa 42) – nhà sáng lập 2G, đến các bạn nhân sự, và cả các em học sinh đang theo học.",
      sender: "Cô Lan Thanh - Hiệu trưởng trường THPT Chuyên Phan Bội Châu",
    },

    {
      id: "bubble6",
      image: "assets/images/Dung.png",
      size: "70%",
      content:
        "chúc 2G luôn giữ vững phong độ, mãi đỉnh, mãi tràn đầy năng lượng của tuổi trẻ, của tinh thần dám nghĩ, dám làm. Chúc đội ngũ 2G luôn cháy hết mình với sứ mệnh lan tỏa tri thức, mang đến những giá trị tuyệt vời cho các em học sinh và phụ huynh.",
      sender: "Mrs Dung - Trường Đại học Anh Quốc Việt Nam BUV",
    },
    {
      id: "bubble7",
      image: "assets/images/Huyen_3.png",
      size: "60%",
      content:
        "Từ khi 2G Hà Tĩnh đi vào hoạt động cách đây 3 năm, tôi đã dõi theo và đánh giá cao những đóng góp của 2G trong việc kết nối các cuộc thi quốc tế như World Scholar’s Cup, cũng như tạo ra những sân chơi học thuật ý nghĩa như hùng biện Let Your Voice Be Heard, Biên tập viên nhí. Những chương trình này đã giúp học sinh trường THCS Lê Văn Thiêm có cơ hội tranh tài, thể hiện bản lĩnh và đạt nhiều giải thưởng.",
      sender: "Cô Huyền - Phó hiệu trưởng trường THCS Lê Văn Thiêm",
    },
    {
      id: "bubble8",
      image: "assets/images/Ngoc.png",
      size: "60%",
      content:
        "Những ấn tượng của tôi đối với 2G trên chặng đường đồng hành 7 năm qua thể hiện ở 1 thông điệp đó là: '2G - The Garden for Genius Germination' Chúc cho 2G tiếp tục vững vàng trên những hành trình cùng các em vươn cao, vươn xa, chinh phục những đỉnh cao mới.",
      sender: "Mrs Ngọc - Đại diện Vietnam Airlines",
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
    },
  ];

  const tabs = [
    {
      id: "tab1",
      label: "Văn hoá 2G – The 3R Framework",
      cards: [
        {
          id: "card1",
          title: "Resilience",
          description: "Resilience: Sức mạnh của sự bền bỉ và nội lực",
          details: [
            "Tập trung xây dựng nền tảng vững chắc trong đào tạo và vận hành.",
            "Luôn đặt chất lượng trên lợi ích ngắn hạn.",
            "Kiên trì theo đuổi giá trị cốt lõi, tin vào nội lực bên trong của mỗi người.",
          ],
        },
        {
          id: "card2",
          title: "Reimagine",
          description:
            "Reimagine: Sáng tạo và linh hoạt, dám thay đổi để bứt phá",
          details: [
            "Không ngại thử nghiệm, đổi mới trong các phương pháp đào tạo và mô hình kinh doanh.",
            "Luôn cập nhật xu hướng giáo dục toàn cầu, ứng dụng công nghệ để tối ưu trải nghiệm học tập.",
            "Khuyến khích tư duy sáng tạo, chủ động, linh hoạt trong mọi khía cạnh từ giảng dạy đến quản trị.",
          ],
        },
        {
          id: "card3",
          title: "Responsibility",
          description: "Responsibility: Trách nhiệm và sự gắn kết bền chặt",
          details: [
            "Cam kết đồng hành cùng học viên, đối tác và đội ngũ nhân sự.",
            "Xây dựng môi trường làm việc đề cao sự gắn kết và phát triển cá nhân.",
            "Tạo ra tác động tích cực, không chỉ trong giáo dục mà còn trong cộng đồng.",
          ],
        },
      ],
    },
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
    "assets/humans-images/wright.jpg",
    "assets/humans-images/Alex.jpg",
    "assets/humans-images/Bao_Ha.jpg",
    "assets/humans-images/Emily.jpg",
    "assets/humans-images/Kenzie.jpg",
    "assets/humans-images/Ryan.jpg",
    "assets/humans-images/Warren.jpg",
    "assets/humans-images/human_11.jpg",
    "assets/humans-images/human_12.jpg",
    "assets/humans-images/Duy_Hiep.jpg",
  ];

  const human_second_images = [
    "assets/humans-images/human_1.jpg",
    "assets/humans-images/human_2.jpg",
    "assets/humans-images/human_3.jpg",
    "assets/humans-images/human_4.jpg",
    "assets/humans-images/human_5.jpg",
    "assets/humans-images/human_6.jpg",
    "assets/humans-images/human_7.jpg",
    "assets/humans-images/human_8.jpg",
    "assets/humans-images/human_9.jpg",
    "assets/humans-images/human_10.jpg",
  ];

  

  const founder = {
    name: "Lê Văn Hải",
    image:
      "assets/humans-images/founder.jpg",
    history: [
      "Là doanh nhân trẻ tuổi nhất trong lĩnh vực giáo dục tại Việt Nam, sở hữu song tịch thông qua chương trình đầu tư định cư.",
      "Tốt nghiệp chương trình đào tạo quản lý trường Anh ngữ tại Mỹ do Hiệp hội TESOL cấp bằng.",
      "Tốt nghiệp chương trình Khởi nghiệp Lean Startup tại Hà Lan.",
      "Đại diện Việt Nam tham dự hội nghị toàn cầu “World Young Congress” tại Mỹ.",
      "Là người sáng lập các chương trình trại hè quốc tế tại Singapore, New Zealand và Australia.",
      "Đã từng tham gia các chương trình Famtrip, gặp gỡ và hợp tác với các trường cũng như đối tác giáo dục tại Mỹ, Châu Âu, Úc, New Zealand, Singapore và Philippines.",
      "Có hơn 10 năm kinh nghiệm làm việc trong lĩnh vực giáo dục, trong đó hơn 8 năm giữ vai trò Chairman & CEO.",
      "Cố vấn chuyên môn các cuộc thi: Phó BTC cuộc thi English Challenge do Đài truyền hình NTV và Sở Giáo Dục Nghệ An tổ chức; Trưởng BTC cuộc thi hùng biện tiếng Anh Let Your Voice Be Heard.",
      "Cử nhân Luật, đạt IELTS 7.5, sở hữu chứng chỉ giảng dạy quốc tế TESOL (Úc).",
      "Cựu HS Chuyên Anh, trường THPT Chuyên Phan Bội Châu, tỉnh Nghệ An.",
    ],
    button: {
      text: "Thư ngỏ",
      image: "../../assets/images/bamboo_frame.png",
      link: "/founder_story",
    },
  };

  return (
    <Scroll html className="scroll-html-wrapper">
       
      <Section opacity={opacity1} sectionName="intro">
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
      <Section opacity={opacity2} sectionName="purpose">
        <h1>Mục đích của 2G</h1>
        <div className="purpose-container">
            <FlipBook />
        </div>
      </Section>
      <Section opacity={opacity3} sectionName="feedback">
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
                <img src={bubble.image} alt="" style={{width: bubble.size, height: "auto", display: "block", objectFit: "contain"}}/>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section opacity={opacity4} sectionName="achievement">
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

      <Section opacity={opacity5} sectionName="service">
        <h1>Hệ sinh thái </h1>
        <h1> Giáo dục của 2G</h1>
        <ProductCarousel products={products} />
      </Section>

      

      <Section opacity={opacity6} sectionName="story">
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

      <Section opacity={opacity7} sectionName="founder">
        <h1>2G Founder Profile</h1>
        <div className="founder_card">
          <img src={founder.image} alt={founder.name} />

          <div className="founder_info">
            <div className="founder_name">
              <h2>{founder.name}</h2>
            </div>

            <div className="founder_history">
              {founder.history.map((item, index) => (
                <p key={index}>- {item}</p>
              ))}
            </div>

            <div
              className="founder_button"
              onClick={() => navigate(founder.button.link)}
            >
              <img src={founder.button.image} alt={founder.button.text} />
              <p>{founder.button.text}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section opacity={opacity8} sectionName="human">
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
            height="266.67px"
            quantity={10}
          />
          <Slider
            images={human_second_images}
            width="200px"
            height="266.67px"
            quantity={10}
            reverse={true}
          />
          <p onClick={() => navigate("/instructors")}>Xem chi tiết</p>
        </div>
      </Section>

      <Section opacity={opacity9} sectionName="banner-footer">
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
                  flexDirection:"column",
                  alignItems:"flex-start",
                  flex: "wrap",
                  marginLeft: "2.5rem",
                }}
              >
                "Free Bamboo Set" <a href="https://skfb.ly/oxyyY">(bamboo model</a>) by JonhGillessen is
                licensed under <a href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution.</a>  Modified by repositioning and removing some elements.
              </p>
            </div>
            <div className="footer-info">
              <p>Branches:</p>
              <ul>
                <li>New York, USA</li>
                <li>London, UK</li>
                <li>Tokyo, Japan</li>
              </ul>
              <p>Phone: +1 234 567 890</p>
            </div>
            <div className="footer-links">
              <p>Quick Links:</p>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/founder_story">Thư ngỏ</a>
                </li>
                <li>
                  <a href="/instructors">2G Humans</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <p>Follow Us:</p>
              <div class="social-icons">
                <a
                  href="https://www.facebook.com"
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
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.6 8.6 0 01-2.7 1.03 4.27 4.27 0 00-7.3 3.89A12.1 12.1 0 013 5.16a4.27 4.27 0 001.32 5.7 4.2 4.2 0 01-1.93-.53v.05a4.27 4.27 0 003.42 4.18 4.26 4.26 0 01-1.92.07 4.27 4.27 0 003.98 2.96 8.56 8.56 0 01-6.3 1.76A12.07 12.07 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.34 8.34 0 0022.46 6z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.88-.38a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24z" />
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
