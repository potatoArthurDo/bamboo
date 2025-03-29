import ChatBubble from "../ChatBubbles/ChatBubble";
import Footer from "../Footer/Footer";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import "./mobileOverlay.css";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const MobileOverlay = () => {
  const [openTab, setOpenTab] = useState(null);

  const toggleTab = (index) => {
    setOpenTab(openTab === index ? null : index);
  };
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
      title: "3 tinh thần hướng tới: Resilience, Reimagine, Responsibility",
      sectionTitle: "3 Tinh thần hướng tới",
      content: [
        {
          title: "Resilience",
          description: [
            "Sức mạnh của sự bền bỉ và nội lực.",
            "Luôn đặt chất lượng trên lợi ích ngắn hạn.",
            "Kiên trì theo đuổi giá trị cốt lõi, tin vào nội lực bên trong của mỗi người.",
          ],
        },
        {
          title: "Reimagine",
          description: [
            "Không ngại thử nghiệm, đổi mới trong các phương pháp đào tạo và mô hình kinh doanh.",
            "Luôn cập nhật xu hướng giáo dục toàn cầu, ứng dụng công nghệ để tối ưu trải nghiệm học tập.",
            "Khuyến khích tư duy sáng tạo, chủ động, linh hoạt trong mọi khía cạnh từ giảng dạy đến quản trị.",
          ],
        },
        {
          title: "Responsibility",
          description: [
            "Cam kết đồng hành cùng học viên, đối tác và đội ngũ nhân sự.",
            "Xây dựng môi trường làm việc đề cao sự gắn kết và phát triển cá nhân.",
            "Tạo ra tác động tích cực, không chỉ trong giáo dục mà còn trong cộng đồng.",
          ],
        },
      ],
    },
    {
      title: "3 giá trị cốt lõi: Care, Credibility, Contribution",
      sectionTitle: "3 Giá trị cốt lõi",
      content: [
        {
          title: "Sống tử tế (Care)",
          description: [
            " - Sự tử tế không chỉ là một phẩm chất cá nhân mà còn là cách 2G vận hành mọi hoạt động. Tử tế trong cách giáo dục – luôn lắng nghe, thấu hiểu và hỗ trợ học viên, phụ huynh. Tử tế trong cách làm việc – tôn trọng, hợp tác chân thành với đồng đội và đối tác. Và tử tế với cộng đồng – lan tỏa những giá trị tốt đẹp, tạo nên môi trường học tập và làm việc đầy cảm hứng, nhân văn.",
          ],
        },
        {
          title: "Sống liêm chính (Credibility)",
          description: [
            " - Chúng tôi tin rằng thành công bền vững phải dựa trên sự tin tưởng và cam kết lâu dài với học viên, đối tác và cộng đồng. Từ việc chú tâm xây dựng chương trình học, phương pháp đào tạo và giá trị thực sự để đảm bảo học viên nhận được đúng những gì họ cần, đến việc công khai mọi thông tin với đối tác và đội ngũ và luôn ưu tiên giữ vững đạo đức nghề nghiệp, chúng tôi luôn cố gắng hướng tới sự minh bạch và tạo ra môi trường học tập công bằng, hiệu quả.",
          ],
        },
        {
          title: "Sống cống hiến (Contribution)",
          description: [
            " - Chúng tôi tin rằng giáo dục có sức mạnh thay đổi cuộc sống và tạo ra những tác động tích cực lâu dài. Mỗi bước đi của 2G đều có sự tính toán đến ảnh hưởng đối với cộng đồng, hướng tới việc hỗ trợ học tập cho đa dạng các đối tượng, đặc biệt là các bạn trẻ có hoàn cảnh khó khăn. Vì vậy, 2G Group đã lập ra quỹ giáo dục Glocal Villagers, liên tục tổ chức các hoạt động xã hội hàng năm, và không ngừng xây dựng những chương trình mang lại giá trị thực cho cộng đồng.",
          ],
        },
      ],
    },
    {
      title: "3 câu chuyện biểu tượng",
      sectionTitle: "3 Câu chuyện biểu tượng",
      content: [
        {
          title: "Câu chuyện cây tre",
          description: [
            "- Tre không vội vã. Tre cắm rễ sâu, tích tụ sức mạnh, rồi vươn thẳng lên trời – mạnh mẽ nhưng vô cùng linh hoạt. Đó cũng là lí do 2G Group lấy hình ảnh cây tre làm hình ảnh biểu tượng chủ đạo.",
            "- Founder của 2G Group - anh Lê Văn Hải đã từng chia sẻ, càng trưởng thành, anh càng cảm nhận sâu sắc gốc rễ – gia đình, cộng đồng, và di sản Việt Nam đã định hình anh. Với anh, cây tre không chỉ là một loại cây, mà là biểu tượng của bản sắc.",
            "- Sẽ mất hàng năm để rễ tre đan xen cắm chặt dưới lòng sâu trước khi vươn thẳng lên trời, mạnh mẽ và nhanh chóng. Anh học từ đó: muốn vươn cao, phải xây nền móng vững – trong công việc, trong đời sống. Tre phát triển theo từng cụm và lớn lên theo từng đốt, luôn hướng tới mây xanh. Đó cũng là hình ảnh mà anh muốn mọi người liên tưởng tới khi biết đến 2G Group.",
            "- 2G Group kiên nhẫn xây dựng nền tảng – từ chất lượng đào tạo, chất lượng con người đến sự minh bạch trong vận hành – để tạo nên một hệ thống giáo dục bền vững, nơi mọi cá nhân cùng vươn lên từ gốc rễ mạnh mẽ của chính mình.",
          ],
        },
        {
          title: "Câu chuyện The Dots",
          description: [
            "- Lấy cảm hứng từ câu chuyện của Steve Jobs, người từng kể về những “dấu chấm” trong đời mình: bỏ đại học, học thư pháp, làm việc không mục đích rõ ràng, dường như trong thời điểm đó, mọi thứ Steve Jobs làm đều chưa có ý nghĩa rõ ràng.",
            "- Nhưng khi nhìn lại, anh nhận ra chính những dấu chấm ấy – sự tò mò, những bước đi lệch hướng – đã nối lại để tạo nên những viên gạch vững chắc cho Apple - một thương hiệu đã thay đổi cả thế giới công nghệ.",
            "- Ở 2G Group, chúng tôi sống với tinh thần ấy. Mỗi ý tưởng mới, mỗi ứng dụng công nghệ, mỗi thay đổi trong cách dạy và học, mỗi cá nhân thành công trong việc bước ra thế giới là một dấu chấm nhỏ. Chúng tôi tin vào việc nối những dấu chấm nhỏ đó, biến sự ngẫu nhiên thành sáng tạo, biến câu chuyện cá nhân thành cảm hứng cộng đồng, từ đó tạo ra một mạng lưới những cá nhân xuất sắc, dám sống và dám mơ.",
          ],
        },
        {
          title: "Câu chuyện Connect the 'Đốt'",
          description: [
            "Tre cắm rễ, vươn từng đốt.",
            "- Dấu “dots” nhỏ, ý tưởng lớn.",
            "2G Group biến Connect the dots thành Connect the “đốt” với tham vọng phá bỏ rào cản giáo dục toàn cầu, xây dựng một hệ sinh thái giáo dục, gắn thế hệ trẻ với tri thức, vững gốc mà vươn xa.",
          ],
        },
      ],
    },
  ];
  return (
    <>
      <section className="mobile_section">
        <div className="mobile_intro">
          <div className="main_name">
            <h3 className="company_name">2G Group</h3>
            <h1 className="connect">Connect</h1>
            <h1 className="the">the</h1>
            <h1 className="dots">"Đốt"</h1>
          </div>
        </div>

        <div className="mobile-intro-second-group">
          <div className="english">ANH NGỮ</div>
          <div className="english-second">TOÀN DIỆN</div>
          <div className="camping">TRẠI HÈ</div>
          <div className="aboard">DU HỌC </div>
        </div>

        <div className="explaination">
          <div className="company-explain">
            <p>
              {" "}
              2G Group là một hệ thống giáo dục toàn diện, giúp thế hệ trẻ Việt
              hội nhập toàn cầu thông qua việc đào tạo và du học.
            </p>
          </div>
          <div className="theme-explain">
            <p>
              Với thông điệp Connect the “Đốt”, 2G Group mong muốn mở rộng sự
              kết nối, góp phần phát triển một thế hệ giới trẻ mới, dám học, dám
              làm, dám đi ra thế giới để thay đổi và cống hiến.
            </p>
          </div>
        </div>
      </section>
      <section className="mobile_section">
        <div className="mobile_feedback">
          <h1>Họ đang nói gì về 2G ? </h1>
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
                message="Hello, What are they saying?"
                isSender={false}
              />
              <ChatBubble message="No" isSender={true} />
              <ChatBubble
                message="Not yet! What are you thinking?"
                isSender={false}
              />
              <ChatBubble message="I'm thinking about it" isSender={true} />
            </div>
          </div>
        </div>
      </section>

      <section className="mobile_section">
        <div className="mobile_achievement">
          <h1>Thành tựu</h1>
          <h1>2G Education</h1>
          <div className="mobile_timeline">
            <div className="mobile_timeline-item">
              <div className="mobile_content">
                <h3>2018</h3>
                <p>Tiên Phong Tổ Chức Trại Hè Quốc Tế</p>
              </div>
            </div>

            <div className="mobile_timeline-item">
              <div className="mobile_content">
                <h3>2018</h3>
                <p> Đối Tác Chiến Lược Với AIT TESOL Úc</p>
              </div>
            </div>

            <div className="mobile_timeline-item">
              <div className="mobile_content">
                <h3>2019</h3>
                <p>
                  Đơn Vị Tổ Chức Cuộc Thi Hùng Biện Lớn Nhất Nghệ An & Hà Tĩnh
                </p>
              </div>
            </div>

            <div className="mobile_timeline-item">
              <div className="mobile_content">
                <h3>2020</h3>
                <p>IỨng Dụng Công Nghệ & Hợp Tác Quốc Tế Trong Giảng Dạy</p>
              </div>
            </div>
            <div className="mobile_timeline-item">
              <div className="mobile_content">
                <h3>2021</h3>
                <p>Đồng Hành Cùng Chuyên Gia Quốc Tế – Peter Wright</p>
              </div>
            </div>
            <div className="mobile_timeline-item">
              <div className="mobile_content">
                <h3>2022</h3>
                <p>
                  Đối Tác Cùng Đài Truyền Hình & Sở Giáo Dục Nghệ An Tổ Chức
                  Cuộc Thi “English Challenge”
                </p>
              </div>
            </div>
            <div className="mobile_timeline-item">
              <div className="mobile_content">
                <h3>2023</h3>
                <p>
                  World Scholar’s Cup. 100% Ội Tuyển Vượt Qua Vòng Khu Vực Tại
                  Bangkok, Thái Lan
                </p>
              </div>
            </div>
            <div className="mobile_timeline-item">
              <div className="mobile_content">
                <h3>2024</h3>
                <p>Đạt Chuẩn Trung Tâm Du Học Quốc Tế ICEF</p>
              </div>
            </div>
            <div className="mobile_timeline-item">
              <div className="mobile_content">
                <h3>2023 – 2024</h3>
                <p> Dẫn Đầu Trong Luyện Thi IELTS – Kỷ Lục Học Sinh Đạt 6.5+</p>
              </div>
            </div>
          </div>
          <p className="mobile_bounce">↓</p>
        </div>
      </section>

      <section className="mobile_section">
        <div className="mobile-services">
          <h1>Hệ sinh thái giáo dục của 2G</h1>
          <div className="product-carousel">
            <div className="product-carousel-inner">
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
          </div>
        </div>
        <p className="mobile_bounce ">↓</p>
      </section>

      <section className="mobile_section">
        <div className="mobile-purpose">
          <h1>Mục đích của 2G</h1>
          <div className="mobile-purpose-intro">
            <p>
              Ở 2G Group, chúng tôi tin rằng giáo dục là câu chuyện về sự kiên
              trì, sáng tạo và trách nhiệm – những giá trị cốt lõi để tạo nên
              một hệ sinh thái bền vững, nơi mỗi cá nhân đều có cơ hội vươn tới
              phiên bản tốt nhất của chính mình, bước ra thế giới, trở thành một
              công dân toàn cầu có bản sắc.{" "}
              <b style={{ color: "var(--green-intro)" }}>MÔ HÌNH 3R3C</b>
            </p>
          </div>
          <div className="mobile-purpose-content">
            {tabs.map((tab, index) => (
              <div key={index} className="purpose-content-name">
                {/* Tab Header */}
                <div
                  className={`tab ${openTab === index ? "active" : ""}`}
                  onClick={() => toggleTab(index)}
                >
                  <div className="tab-opener-text">{tab.title}</div>
                  <div className="tab-opener">
                    <span
                      className={`tab-bar ${openTab === index ? "active" : ""}`}
                    ></span>
                    <span
                      className={`tab-bar ${openTab === index ? "active" : ""}`}
                    ></span>
                  </div>
                </div>

                {/* Tab Content */}
                <div
                  className={`purpose-inner-content ${
                    openTab === index ? "active" : ""
                  }`}
                >
                  <h2>{tab.sectionTitle}</h2>
                  <div>
                    {tab.content.map((item, idx) => (
                      <div key={idx} className={`purpose-item ${item.color}`}>
                        <h3>{item.title}</h3>
                        <ul>
                          {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MobileOverlay;
