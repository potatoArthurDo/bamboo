import ChatBubble from "../ChatBubbles/ChatBubble";
import Footer from "../Footer/Footer";
import "./mobileOverlay.css";

const MobileOverlay = () => {
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
              <ChatBubble message="Not yet! What are you thinking?" isSender={false} />
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
       
        <p className="mobile_bounce ">↓</p>
      </section>

      <Footer />
    </>
  );
};

export default MobileOverlay;
