import { Scroll, useScroll } from "@react-three/drei";
import { useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "./overlay.css";
import ChatBubble from "../ChatBubbles/ChatBubble";
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
    setOpacitySection1(1 - scroll.range(0, 1 / 9));
    setOpacitySection2(scroll.curve(1 / 9, 1 / 9));
    setOpacitySection3(scroll.curve(2 / 9, 1 / 9));
    setOpacitySection4(scroll.curve(3 / 9, 1 / 9));
    setOpacitySection5(scroll.curve(4 / 9, 1 / 9));
    setOpacitySection6(scroll.curve(5 / 9, 1 / 9));
    setOpacitySection7(scroll.curve(6 / 9, 1 / 9));
    setOpacitySection8(scroll.curve(7 / 9, 1 / 9));
    setOpacitySection9(scroll.range(8 / 9, 1 / 9)); // Adjusted for 9 sections
  });

  const bubbleData = [
    { id: "bubble1", content: "Cool" },
    { id: "bubble2", content: "Good" },
    { id: "bubble3", content: "Meh!" },
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
  ];

  const products = [
    {
      title: "2G Education",
      subtitle: "Học ngoại ngữ, mở tương lai",
      image:
        "https://i.guim.co.uk/img/media/8c7f4fe66d305fb86fc3246dd47a9c06d216f7ec/0_139_1268_761/master/1268.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f27fa05d2f7629655beafeb9248c7647",
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
      subtitle: "Hành trình du học trọn gói từ A-Z",
      image:
        "https://i.guim.co.uk/img/media/8c7f4fe66d305fb86fc3246dd47a9c06d216f7ec/0_139_1268_761/master/1268.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f27fa05d2f7629655beafeb9248c7647",
      intro:
        "Dịch vụ tư vấn du học toàn diện, đồng hành từ khâu định hướng đến khi đặt chân tới nước ngoài.",
      details: [
        "- Tư vấn du học tại Anh, Mỹ, Úc, Canada, New Zealand.",
        "- Xây dựng lộ trình cá nhân hoá, tối ưu hồ sơ và học bổng.",
        "- Hỗ trợ toàn diện từ chuẩn bị giấy tờ đến phỏng vấn visa.",
      ],
    },
    {
      title: "2G Eureka Camps",
      subtitle: "Cung cấp các giải pháp về mô hình trại hè",
      image:
        "https://i.guim.co.uk/img/media/8c7f4fe66d305fb86fc3246dd47a9c06d216f7ec/0_139_1268_761/master/1268.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f27fa05d2f7629655beafeb9248c7647",
      intro:
        "Trại hè đầu tiên tại Nghệ An mang đến hành trình khám phá văn hoá và phát triển kỹ năng tại các quốc gia hàng đầu.",
      details: [
        "- Trại hè trao đổi tại Úc, New Zealand, Singapore dành cho trẻ 5-12 tuổi.",
        "Chương trình kết hợp học tập, kỹ năng mềm & tư duy sáng tạo và phản biện.",
        "- Môi trường quốc tế giúp trẻ tự tin và phát triển toàn diện.",
      ],
    },
    {
      title: "GV Manpower",
      subtitle: "Cung cấp dịch vụ tư vấn du học nghề tại Đức",
      image:
        "https://i.guim.co.uk/img/media/8c7f4fe66d305fb86fc3246dd47a9c06d216f7ec/0_139_1268_761/master/1268.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f27fa05d2f7629655beafeb9248c7647",
      intro:
        "Chương trình du học nghề uy tín, giúp bạn xây dựng sự nghiệp ổn định tại Đức với chi phí cực tối ưu.",
      details: [
        "- Tư vấn du học nghề tại Đức theo đúng ngành nghề tiềm năng.",
        "Đào tạo tiếng Đức bài bản, đạt chuẩn đầu vào.",
        "Hỗ trợ toàn diện từ chuẩn bị hồ sơ đến khi sống tại Đức.",
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
          description: "Connection (Network-based Growth Mindset)",
          details: [
            "2G Group tin rằng sức mạnh của sự kết nối chính là chìa khóa để mở rộng tầm ảnh hưởng và tạo ra những giá trị bền vững. 2G Group không chỉ nỗ lực xây dựng một hệ sinh thái giáo dục, mà còn kiến tạo một mạng lưới những con người cùng chung khát vọng học tập, phát triển và cống hiến.",
          ],
        },
        {
          id: "card5",
          title: "Technology",
          description: "Technology",
          details: [
            "Ở 2G Group, chúng tôi tận dụng công nghệ để rút ngắn khoảng cách tri thức, kết nối con người và lan toả giá trị bằng cách số hoá trải nghiệm học tập, xây dựng không gian kết nối linh hoạt, và mở rộng quy mô để tạo ra nhiều cơ hội tiếp cận giáo dục và phát triển bản thân cho tất cả mọi người.",
          ],
        },
      ],
    },
  ];
  const people = [
    {
      name: "Alex Nguyen",
      age: 28,
      occupation: "Software Developer",
      location: "Ho Chi Minh City, Vietnam",
      hobbies: "Coding, hiking, playing the guitar, and photography",
      skills: "Python, Django, React, SQL, Docker",
      quote: "Code is like humor. When you have to explain it, it’s bad.",
      image: "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
    },
    {
      name: "Lisa Tran",
      age: 25,
      occupation: "Graphic Designer",
      location: "Da Nang, Vietnam",
      hobbies: "Drawing, designing logos, and traveling",
      skills: "Adobe Photoshop, Illustrator, Figma, Sketch",
      quote: "Design is intelligence made visible.",
      image: "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",    },
    {
      name: "Minh Le",
      age: 32,
      occupation: "Data Scientist",
      location: "Hanoi, Vietnam",
      hobbies: "Analyzing data, reading sci-fi novels, and chess",
      skills: "Python, R, TensorFlow, Machine Learning",
      quote: "Data is the new oil.",
      image: "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",    },
    {
      name: "Quang Bui",
      age: 29,
      occupation: "Digital Marketer",
      location: "Hue, Vietnam",
      hobbies: "Social media strategy, blogging, and cooking",
      skills: "SEO, SEM, Google Ads, Content Strategy",
      quote:
        "Marketing is no longer about the stuff you make, but the stories you tell.",
        image: "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",    },
    {
      name: "An Vo",
      age: 30,
      occupation: "Product Manager",
      location: "Can Tho, Vietnam",
      hobbies: "Product planning, cycling, and gardening",
      skills: "Product Roadmapping, User Research, Agile, Jira",
      quote: "A good product manager is a mini-CEO.",
      image: "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",    },
  ];

  return (
    <Scroll html className="scroll-html-wrapper">
      <Section opacity={opacity1} sectionName="intro">
        <h3 className="company_name">2G Education</h3>
        <h1 className="main_name">GLOCAL</h1>
        <h1 className="main_name">TREE</h1>
        <p className="journey-quote">The journey 2G Education</p>
        <p className="bounce">↓</p>
      </Section>
      <Section opacity={opacity2} sectionName="feedback">
        <h1>Customer </h1>
        <h1> Feedback</h1>
        {/* <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cLNyF1Zw5tg?si=jJi9zINBoqG6QSHI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div> */}
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
                      src="https://i.pravatar.cc/100?img=1"
                      alt="Profile"
                      className="chat-avatar-large"
                    />
                    <p>2G Education</p>
                  </div>
                  <div className="chat-container">
                    <ChatBubble
                      message="Hello, What are they saying?"
                      isSender={false}
                    />
                    <ChatBubble message={bubble.content} isSender={true} />
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
                {`Bubble ${bubble.id.replace("bubble", "")}`}
              </div>
            ))}
          </div>
        </div>
        <p className="bounce">↓</p>
      </Section>

      <Section opacity={opacity3} sectionName="achievement">
        <h1>Our </h1>
        <h1> Achievements</h1>
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
        <p className="bounce">↓</p>
      </Section>

      <Section opacity={opacity4} sectionName="service">
        <h1>Our </h1>
        <h1> Service</h1>
        <div className="product-container">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <h5>{product.subtitle}</h5>
              <p className="service-intro">{product.intro}</p>
              {product.details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </div>
          ))}
        </div>
        <p className="bounce ">↓</p>
      </Section>

      <Section opacity={opacity5} sectionName="purpose">
        <div className="purpose-container">
          <div className="book">
            <input type="checkbox" name="page1" id="page1" />
            <input type="checkbox" name="page2" id="page2" />
            <input type="checkbox" name="page3" id="page3" />
            <input type="checkbox" name="page4" id="page4" />
            <input type="checkbox" name="page5" id="page5" />
            <div className="pages">
              <div className="page1">
                <label for="page1"></label>
                <div className="page1-text">
                  <h3>Connect</h3>
                  <h3>the</h3>
                  <h2>"Đốt"</h2>
                </div>
                <span class="material-symbols-outlined">left_click</span>
              </div>
              <div className="page2">
                <label for="page2"></label>
                <div className="page2-text">
                  <p>
                    Tại 2G Education, chúng tôi không ngừng nỗ lực để thúc đẩy
                    những hành trình học hỏi của các bạn trẻ Việt.
                  </p>
                  <p>Hành trình tuy khó khăn, nhưng sẽ tràn đầy hứng khởi</p>
                  <p>
                    Khi bạn luôn được trang bị sẵn sàng để tiến vào mọi “cuộc
                    chơi”
                  </p>
                </div>
                <span class="material-symbols-outlined">left_click</span>
              </div>
              <div className="page3">
                <label for="page3"></label>
                <div className="page3-text">
                  <p>Đủ tư duy</p>
                  <p>Giỏi kĩ năng</p>
                  <p>Vững ngôn ngữ</p>
                  <p>Như tre không kén chọn đất trồng</p>
                  <p>Người trẻ không ngại ngần hoàn cảnh.</p>
                  <p>Luôn kiên trì tiến lên phía trước,</p>
                  <p>Uyển chuyển khi cần, vững vàng khi khó</p>
                  <p>Tạo nên một thế hệ “luỹ thành” của đất nước.</p>
                </div>
                <span class="material-symbols-outlined">left_click</span>
              </div>
              <div className="page4">
                <label for="page4"></label>
                <div className="page4-text">
                  <p>
                    Bằng sự tận tâm trong giáo dục và cam kết đồng hành xuyên
                    suốt
                  </p>
                  <p>
                    2G Education tự hào là đòn bẩy để các bạn trẻ tự tin ra
                    ngoài thế giới, sống và làm việc như một công dân toàn cầu.
                  </p>
                  <p>
                    Bởi dù cho xuất phát điểm và mục đích hướng tới khác nhau
                  </p>
                  <p>
                    2G Education tin rằng mọi hành trình hội nhập đều bắt đầu từ
                    một điểm kết nối (the dots).
                  </p>
                </div>
                <span class="material-symbols-outlined">left_click</span>
              </div>
              <div className="page5">
                <label for="page5"></label>
                <div className="page5-text">
                  <p>
                    Và chúng tôi sẽ không ngừng tìm kiếm các cơ hội trong và
                    ngoài nước
                  </p>
                  <p>
                    Không ngừng truyền cảm hứng, truyền nghề, truyền lửa cho các
                    thế hệ mới
                  </p>
                  <p>Tạo ra một vòng tròn giá trị nối kết.</p>
                  <div className="ending-tag">
                    <p>2G Education - Hệ thống đào tạo giáo dục toàn diện.</p>
                    <p>2G Education - Connect the “đốt”.</p>
                  </div>
                </div>
                <span className="material-symbols-outlined">left_click</span>
              </div>
            </div>
          </div>
        </div>
        <p className="bounce mt-6">↓</p>
      </Section>

      <Section opacity={opacity6} sectionName="founder">
        <h1>Founder's Story</h1>
        <div className="founder_card">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"
            alt=""
          />
          <div className="founder_info">
            <div className="founder_name">
              <h2>Lê Văn Hải</h2>
            </div>
            <div className="founder_history">
              <p>
                - Là doanh nhân trẻ tuổi nhất trong lĩnh vực giáo dục tại Việt
                Nam, sở hữu song tịch thông qua chương trình đầu tư định cư.
              </p>
              <p>
                - Tốt nghiệp chương trình đào tạo quản lý trường Anh ngữ tại Mỹ
                do Hiệp hội TESOL cấp bằng.
              </p>
              <p>
                - Tốt nghiệp chương trình Khởi nghiệp Lean Startup tại Hà Lan.
              </p>
              <p>
                - Đại diện Việt Nam tham dự hội nghị toàn cầu “World Young
                Congress” tại Mỹ.
              </p>
              <p>
                - Là người sáng lập các chương trình trại hè quốc tế tại
                Singapore, New Zealand và Australia.
              </p>
              <p>
                - Đã từng tham gia các chương trình Famtrip, gặp gỡ và hợp tác
                với các trường cũng như đối tác giáo dục tại Mỹ, Châu Âu, Úc,
                New Zealand, Singapore và Philippines.
              </p>
              <p>
                - Có hơn 10 năm kinh nghiệm làm việc trong lĩnh vực giáo dục,
                trong đó hơn 8 năm giữ vai trò Chairman & CEO.
              </p>
              <p>
                - Cố vấn chuyên môn các cuộc thi: Phó BTC cuộc thi English
                Challenge do Đài truyền hình NTV và Sở Giáo Dục Nghệ An tổ chức;
                Trưởng BTC cuộc thi hùng biện tiếng Anh Let Your Voice Be Heard.
              </p>
              <p>
                - Cử nhân Luật, đạt IELTS 7.5, sở hữu chứng chỉ giảng dạy quốc
                tế TESOL (Úc).
              </p>
              <p>
                Cựu HS Chuyên Anh, trường THPT Chuyên Phan Bội Châu, tỉnh Nghệ
                An.
              </p>
            </div>
            <div
              className="founder_button"
              onClick={() => navigate("/founder_story")}
            >
              <img src="../../assets/images/bamboo_frame.png" alt="" />
              <p>Thư ngỏ</p>
            </div>
          </div>
        </div>

        <p className="bounce">↓</p>
      </Section>

      <Section opacity={opacity7} sectionName="story">
        <h1>2G Story</h1>
        <div className="tab-container">
          <div className="tab-buttons">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

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
        <p className="bounce ">↓</p>
      </Section>

      <Section opacity={opacity8} sectionName="human">
        <h1>2G Humans</h1>
        <div className="human-card-container">
          {people.map((person, index) => (
            <div className="human-card" key={index}>
              <div className="human-card-avatar">
                <img src={person.image} alt={`${person.name} avatar`} />
              </div>
              <div className="human-card-info">
                <h2>{person.name}</h2>
                <p>
                  <strong>Age:</strong> {person.age}
                </p>
                <p>
                  <strong>Occupation:</strong> {person.occupation}
                </p>
                <p>
                  <strong>Location:</strong> {person.location}
                </p>
                <p>
                  <strong>Hobbies:</strong> {person.hobbies}
                </p>
                <p>
                  <strong>Skills:</strong> {person.skills}
                </p>
                <p className="quote">{person.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section opacity={opacity9} sectionName="footer">
        <h3 className="company_name">2G Education</h3>
        <h1 className="main_name">GLOCAL</h1>
        <h1 className="main_name">TREE</h1>
        <p>
          &copy; {new Date().getFullYear()} 2G Education. All rights reserved.
        </p>
      </Section>
    </Scroll>
  );
};
